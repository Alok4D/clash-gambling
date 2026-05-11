import Image from "next/image";

const SharpBotInterface = () => {
  const suggestedQuestions = [
    "Show me the best EV opportunities today",
    "What teams have the best ATS record this season?",
    "Analyze the Lakers vs Warriors game"
  ];

  return (
    <div className="min-h-screen  text-white flex flex-col">
      
      {/* Header Section */}
      <header className="p-8 border-b border-gray-800/50">
        <h1 className="text-4xl font-bold tracking-tight">Ask Sharp-Bot</h1>
        <p className="text-gray-400 mt-2 text-lg">AI-powered sports intelligence assistant</p>
      </header>

      {/* Main Chat Area */}
      <main className="flex-1 max-w-5xl w-full mx-auto p-6 space-y-8">
        
        {/* Bot Message Row */}
        <div className="flex gap-4 items-start">
          {/* Avatar Placeholder */}
            <div className="h-10 w-10 rounded-full bg-green-500">
                <Image src="https://static.vecteezy.com/system/resources/thumbnails/007/225/199/small/robot-chat-bot-concept-illustration-vector.jpg" alt="logo" width={100} height={100}/>
            </div>

          <div className="bg-[#151515] border border-gray-800 p-6 rounded-xl max-w-2xl leading-relaxed text-gray-200">
            Welcome to SharpBot! I can help you analyze sports data, identify opportunities, 
            and answer questions about games, teams, and betting markets. What would you 
            like to know?
          </div>
        </div>

        {/* Suggested Questions Section */}
        <div className="pl-14 space-y-4">
          <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">
            Suggested Questions:
          </p>
          <div className="space-y-3">
            {suggestedQuestions.map((q, idx) => (
              <button 
                key={idx}
                className="block w-full text-left p-4 rounded-lg bg-[#151515] border border-gray-800 hover:border-gray-600 hover:bg-[#1c1c1c] transition-all text-gray-300 text-sm"
              >
                {q}
              </button>
            ))}
          </div>
        </div>
      </main>

      {/* Input Bar Section */}
      <footer className="">
        <div className="max-w-5xl mx-auto flex gap-4">
          <div className="relative flex-1">
            <input 
              type="text" 
              placeholder="Ask SharpBot anything..." 
              className="w-full bg-[#111827]/50 border border-gray-800 rounded-lg py-4 px-6 focus:outline-none focus:border-emerald-500/50 transition-colors text-gray-200"
            />
          </div>
          <button className="bg-[#00ff95] hover:bg-[#00e686] text-black font-bold py-4 px-10 rounded-lg flex items-center justify-center transition-colors shadow-[0_0_20px_rgba(0,255,149,0.2)]">
            <span>Send</span>
          </button>
        </div>
      </footer>

    </div>
  );
};

export default SharpBotInterface;