"use client"
import { useState, useRef, useEffect } from "react";
import Image from "next/image";

const SharpBotInterface = () => {
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "bot",
      content: "Welcome to SharpBot! I can help you analyze sports data, identify opportunities, and answer questions about games, teams, and betting markets. What would you like to know?"
    }
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const suggestedQuestions = [
    "Show me the best EV opportunities today",
    "What teams have the best ATS record this season?",
    "Analyze the Lakers vs Warriors game"
  ];

  const handleSendMessage = () => {
    if (!inputValue.trim() || isTyping) return;

    const userMessage = inputValue;
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setInputValue("");
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          content: `I've analyzed your request: "${userMessage}". \n\nCurrently, I'm seeing significant Sharp Money activity on the Lakers +4.5 spread. Market confidence is at 92% with a projected EV of +8.7%. Would you like to see the full data breakdown?`
        }
      ]);
    }, 1500);
  };

  return (
    <div className="h-[calc(100vh-120px)] text-white flex flex-col">
      {/* Header Section */}
      <header className="p-8 border-b border-gray-800/50 shrink-0">
        <h1 className="text-4xl font-bold tracking-tight">Ask Sharp-Bot</h1>
        <p className="text-gray-400 mt-2 text-lg">AI-powered sports intelligence assistant</p>
      </header>

      {/* Main Chat Area */}
      <main className="flex-1 max-w-5xl w-full mx-auto p-6 space-y-8 overflow-y-auto custom-scrollbar pt-10">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex gap-4 items-start animate-in fade-in slide-in-from-bottom-2 duration-300 ${msg.role === "user" ? "flex-row-reverse" : ""}`}>
            {msg.role === "bot" ? (
              <div className="h-10 w-10 rounded-full bg-green-500 shrink-0 overflow-hidden shadow-[0_0_15px_rgba(34,197,94,0.3)]">
                <Image
                  src="https://static.vecteezy.com/system/resources/thumbnails/007/225/199/small/robot-chat-bot-concept-illustration-vector.jpg"
                  alt="logo"
                  width={40}
                  height={40}
                />
              </div>
            ) : (
              <div className="h-10 w-10 rounded-full bg-blue-600 shrink-0 flex items-center justify-center font-bold shadow-[0_0_15px_rgba(37,99,236,0.3)]">
                U
              </div>
            )}

            <div className={`p-6 rounded-2xl max-w-2xl leading-relaxed text-gray-200 whitespace-pre-line shadow-sm ${
              msg.role === "bot" 
                ? "bg-[#151515] border border-gray-800" 
                : "bg-[#064E3B] border border-[#10B981]/20"
            }`}>
              {msg.content}
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex gap-4 items-start animate-pulse">
            <div className="h-10 w-10 rounded-full bg-green-500/50 shrink-0 flex items-center justify-center">
               <div className="w-2 h-2 bg-white rounded-full animate-bounce [animation-delay:-0.3s]" />
               <div className="w-2 h-2 bg-white rounded-full animate-bounce [animation-delay:-0.15s] mx-1" />
               <div className="w-2 h-2 bg-white rounded-full animate-bounce" />
            </div>
            <div className="bg-[#151515] border border-gray-800 p-4 rounded-xl text-gray-500 text-sm italic">
              SharpBot is thinking...
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />

        {/* Suggested Questions Section */}
        {messages.length === 1 && !isTyping && (
          <div className="pl-14 space-y-4 animate-in fade-in zoom-in-95 duration-500 delay-300 fill-mode-both">
            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">
              Suggested Questions:
            </p>
            <div className="space-y-3">
              {suggestedQuestions.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => setInputValue(q)}
                  className="block w-full text-left p-4 rounded-lg bg-[#151515] border border-gray-800 hover:border-[#00ff95]/50 hover:bg-[#1c1c1c] transition-all text-gray-300 text-sm group"
                >
                  <span className="group-hover:text-[#00ff95] transition-colors">{q}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Input Bar Section */}
      <footer className="p-8 border-t border-gray-800/50 shrink-0">
        <div className="max-w-5xl mx-auto flex gap-4">
          <div className="relative flex-1">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
              disabled={isTyping}
              placeholder={isTyping ? "Please wait..." : "Ask SharpBot anything..."}
              className="w-full bg-[#111827]/50 border border-gray-800 rounded-xl py-4 px-6 focus:outline-none focus:border-[#00ff95]/50 transition-all text-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
            />
          </div>
          <button
            onClick={handleSendMessage}
            disabled={!inputValue.trim() || isTyping}
            className="bg-[#00ff95] hover:bg-[#00e686] disabled:bg-gray-700 disabled:text-gray-400 disabled:shadow-none text-black font-bold py-4 px-10 rounded-xl flex items-center justify-center transition-all shadow-[0_0_20px_rgba(0,255,149,0.2)] active:scale-95"
          >
            <span>{isTyping ? "Analyzing..." : "Send"}</span>
          </button>
        </div>
      </footer>
    </div>
  );
};

export default SharpBotInterface;