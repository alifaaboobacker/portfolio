'use client';
import { useState, useRef, useEffect } from 'react';

interface ChatbotDialogProps {
  onClose: () => void;
}

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function ChatbotDialog({ onClose }: ChatbotDialogProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: 'Hi! I can answer questions about the Alifa. What would you like to know?'
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { role: 'user' as const, content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const res = await fetch(process.env.NEXT_PUBLIC_CHAT_API_URL!, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ question: input })
      });

      if (!res.ok) throw new Error('Failed to fetch response');

      const data = await res.json();
      const assistantMessage = { role: 'assistant' as const, content: data.answer };
      setMessages(prev => [...prev, assistantMessage]);
    } catch (err) {
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: 'Sorry, something went wrong. Please try again later.'
      }]);
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  // Auto-scroll to the latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="bg-white rounded-lg shadow-xl flex flex-col w-80 h-96">
      <div className="bg-gray-800 text-white p-4 rounded-t-lg flex justify-between items-center">
        <h3 className="font-medium">Alifa&apos;s AI Assistant</h3>
        <button onClick={onClose} className="text-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4">
        {messages.map((msg, index) => (
          <div key={index} className={`mb-3 ${msg.role === 'user' ? 'text-right' : ''}`}>
            <div className={`inline-block p-2 rounded-lg ${
              msg.role === 'user' 
                ? 'bg-gray-200 text-gray-800' 
                : 'bg-gray-100 text-gray-800'
            }`}>
              {msg.content}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="mb-3">
            <div className="inline-block p-2 rounded-lg bg-gray-100 text-gray-800">
              Thinking...
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      
      <form onSubmit={handleSubmit} className="border-t p-2 flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask a question..."
          className="flex-1 p-2 border rounded-l-lg focus:outline-none focus:ring-1 focus:ring-gray-500"
          disabled={isLoading}
        />
        <button 
          type="submit" 
          className="bg-gray-800 text-white px-4 rounded-r-lg hover:bg-gray-900 disabled:bg-gray-300"
          disabled={isLoading}
        >
          Send
        </button>
      </form>
    </div>
  );
}