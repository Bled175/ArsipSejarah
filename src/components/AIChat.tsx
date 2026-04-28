import React, { useState, useRef, useEffect } from "react";
import { Send, Bot, User, Sparkles } from "lucide-react";
import { askHistoryQuestion } from "../services/chatService";

interface Props {
  contextTopic: string;
}

interface Message {
  role: "user" | "ai";
  text: string;
}

export default function AIChat({ contextTopic }: Props) {
  const [messages, setMessages] = useState<Message[]>([
    { role: "ai", text: `Halo! Saya adalah AI Arsiparis. Ada yang ingin Anda telusuri lebih jauh mengenai sejarah "${contextTopic}"?` }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages(prev => [...prev, { role: "user", text: userMessage }]);
    setIsLoading(true);

    const answer = await askHistoryQuestion(contextTopic, userMessage);
    
    setMessages(prev => [...prev, { role: "ai", text: answer }]);
    setIsLoading(false);
  };

  return (
    <div className="bg-white border border-stone-200 shadow-xl rounded-[2.5rem] overflow-hidden flex flex-col h-[500px] font-sans">
      <div className="bg-stone-900 p-6 flex items-center gap-4 text-white">
        <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center shrink-0">
          <Sparkles size={20} />
        </div>
        <div>
          <h3 className="font-serif font-bold text-xl italic leading-none mb-1">Tanya AI Arsiparis</h3>
          <p className="text-[9px] uppercase tracking-[0.2em] text-stone-400 font-bold">Konteks: {contextTopic}</p>
        </div>
      </div>
      
      <div className="flex-1 p-6 overflow-y-auto bg-[#F7F3EF] flex flex-col gap-6">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex gap-4 max-w-[85%] ${msg.role === "user" ? "ml-auto flex-row-reverse" : ""}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 shadow-sm ${msg.role === "user" ? "bg-stone-800 text-white" : "bg-accent text-white"}`}>
              {msg.role === "user" ? <User size={16} /> : <Bot size={16} />}
            </div>
            <div className={`p-4 rounded-2xl text-sm font-medium leading-relaxed shadow-sm ${msg.role === "user" ? "bg-stone-800 text-white rounded-tr-sm" : "bg-white text-stone-800 border border-stone-200 rounded-tl-sm"}`}>
              {msg.text}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex gap-4 max-w-[85%]">
            <div className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center shrink-0 shadow-sm">
              <Bot size={16} />
            </div>
            <div className="p-4 rounded-2xl bg-white border border-stone-200 shadow-sm rounded-tl-sm flex gap-2 items-center h-[52px]">
               <span className="w-2 h-2 bg-stone-300 rounded-full animate-bounce"></span>
               <span className="w-2 h-2 bg-stone-300 rounded-full animate-bounce" style={{animationDelay: "0.2s"}}></span>
               <span className="w-2 h-2 bg-stone-300 rounded-full animate-bounce" style={{animationDelay: "0.4s"}}></span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSubmit} className="p-4 bg-white border-t border-stone-100 flex gap-4">
        <input 
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ketik pertanyaan Anda di sini..."
          className="flex-1 bg-[#F1EDE9] text-sm px-6 py-4 rounded-full font-medium text-stone-800 outline-none focus:ring-2 focus:ring-accent/20 transition-all placeholder:text-stone-400"
          disabled={isLoading}
        />
        <button 
          type="submit"
          disabled={!input.trim() || isLoading}
          className="w-14 h-14 shrink-0 bg-stone-900 text-white rounded-full flex items-center justify-center hover:bg-accent transition-colors disabled:opacity-50 disabled:hover:bg-stone-900 shadow-md"
        >
          <Send size={20} className="ml-1" />
        </button>
      </form>
    </div>
  );
}
