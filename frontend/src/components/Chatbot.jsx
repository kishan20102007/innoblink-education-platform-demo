import { AnimatePresence, motion } from 'framer-motion';
import { Bot, Send, X } from 'lucide-react';
import { useState } from 'react';
import { chatbotFaq } from '../data/chatbotFaq.js';

const welcome = {
  from: 'bot',
  text: 'Hello, I am the EduEnrich assistant. Ask about Cambridge, IB, demos, tutor careers or contact details.'
};

export default function Chatbot({ onDemo }) {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState([welcome]);

  const findReply = (value) => {
    const lower = value.toLowerCase();
    const match = chatbotFaq.find((item) => item.keywords.some((keyword) => lower.includes(keyword)));
    return match?.reply || 'I can help with courses, demo booking, fees, careers and contact support. For a tailored answer, please book a demo consultation.';
  };

  const submit = (event) => {
    event.preventDefault();
    if (!input.trim()) return;
    const current = input;
    setMessages((prev) => [...prev, { from: 'user', text: current }]);
    setInput('');
    setTyping(true);
    setTimeout(() => {
      setMessages((prev) => [...prev, { from: 'bot', text: findReply(current) }]);
      setTyping(false);
    }, 700);
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-40 grid h-16 w-16 place-items-center rounded-full bg-brand-gradient text-white shadow-premium transition-transform hover:-translate-y-1"
        aria-label="Open EduEnrich chatbot"
      >
        <Bot />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            className="fixed bottom-24 right-4 z-50 flex h-[560px] max-h-[78vh] w-[calc(100vw-32px)] max-w-sm flex-col overflow-hidden rounded-[28px] bg-white shadow-2xl"
          >
            <div className="flex items-center justify-between bg-brand-gradient p-5 text-white">
              <div>
                <p className="font-bold">EduEnrich AI Assistant</p>
                <p className="text-xs text-white/80">FAQ based guidance</p>
              </div>
              <button onClick={() => setOpen(false)} aria-label="Close chatbot"><X /></button>
            </div>
            <div className="flex-1 space-y-3 overflow-auto bg-slate-50 p-4">
              {messages.map((message, index) => (
                <div key={`${message.from}-${index}`} className={`flex ${message.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <p className={`max-w-[82%] rounded-2xl px-4 py-3 text-sm leading-6 ${message.from === 'user' ? 'bg-brand-blue text-white' : 'bg-white text-slate-700 shadow-sm'}`}>
                    {message.text}
                  </p>
                </div>
              ))}
              {typing && <p className="text-sm font-semibold text-brand-teal">EduEnrich is typing...</p>}
            </div>
            <div className="grid grid-cols-2 gap-2 border-t p-3">
              <button onClick={onDemo} className="rounded-full bg-brand-orange px-3 py-2 text-sm font-bold text-white">Book Demo</button>
              <a href="/contact" className="rounded-full bg-slate-100 px-3 py-2 text-center text-sm font-bold text-brand-blue">Contact</a>
            </div>
            <form onSubmit={submit} className="flex gap-2 border-t p-3">
              <input value={input} onChange={(event) => setInput(event.target.value)} placeholder="Ask a question..." className="focus-ring min-w-0 flex-1 rounded-full border border-slate-200 px-4 py-2 text-sm" />
              <button className="grid h-10 w-10 place-items-center rounded-full bg-brand-blue text-white" aria-label="Send message"><Send size={17} /></button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
