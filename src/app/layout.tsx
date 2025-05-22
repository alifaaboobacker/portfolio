import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import ChatbotButton from '@/components/chatbot/ChatButton';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Alifa Aboobacker - Full Stack Developer',
  description: 'Portfolio of Alifa Aboobacker, Full Stack Developer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
        <ChatbotButton />
      </body>
    </html>
  );
}