// components/RecentGames.tsx
import { ChevronDown } from 'lucide-react';

const games = [
  { opponent: "vs Warriors", date: "Apr 10", result: "W 112-108", type: "win" },
  { opponent: "vs Suns", date: "Apr 8", result: "L 98-105", type: "loss" },
  { opponent: "vs Clippers", date: "Apr 3", result: "W 112-108", type: "win" },
  { opponent: "vs Kings", date: "Apr 5", result: "W 112-108", type: "win" },
];

export const RecentGames = () => (
  <div className="bg-[#0D1117] border border-[#1F2937] rounded-xl p-6 h-full">
    <div className="flex justify-between items-center mb-6">
      <h3 className="text-white text-lg font-semibold">Lakers Recent Games</h3>
      <ChevronDown className="text-gray-500" size={18} />
    </div>
    <div className="space-y-2">
      {games.map((game, i) => (
        <div key={i} className={`flex justify-between items-center p-3 rounded-lg ${
          game.type === 'win' ? 'bg-[#064E3B]/30' : 'bg-[#450A0A]/30'
        }`}>
          <div>
            <p className="text-white text-sm font-medium">{game.opponent}</p>
            <p className="text-gray-500 text-xs">{game.date}</p>
          </div>
          <span className={`text-sm font-bold ${game.type === 'win' ? 'text-[#22C55E]' : 'text-[#EF4444]'}`}>
            {game.result}
          </span>
        </div>
      ))}
    </div>
  </div>
);