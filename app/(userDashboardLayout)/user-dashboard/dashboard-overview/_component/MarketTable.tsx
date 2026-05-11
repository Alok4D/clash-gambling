// components/MarketTable.tsx
import { Bookmark, Eye, TrendingUp } from 'lucide-react';

const tableData = [
  { game: "Warriors @ Lakers", league: "NBA", confidence: 89, odds: "-4.5 (-110)", score: 89, ev: "+9.2%", signal: "Sharp Money", movement: "+1.5", type: 'green' },
  { game: "Bills @ Chiefs", league: "NFL", confidence: 90, odds: "-4.5 (-110)", score: 89, ev: "+9.2%", signal: "Market Support", movement: "+1.5", type: 'blue' },
  { game: "Red Sox @ Yankees", league: "MLB", confidence: 40, odds: "-4.5 (-110)", score: 54, ev: "-5.2%", signal: "Market Resistance", movement: "+1.5", type: 'red' },
];

export const MarketTable = () => (
  <div className="bg-[#0D1117] border border-[#064E3B]/30 rounded-xl overflow-hidden mt-8">
    <table className="w-full text-left">
      <thead className="text-gray-500 text-sm border-b border-[#1F2937]">
        <tr>
          <th className="px-6 py-6 font-medium text-center">Game</th>
          <th className="px-4 py-6 font-medium text-center">Confidence</th>
          <th className="px-4 py-6 font-medium text-center">Odds</th>
          <th className="px-4 py-6 font-medium text-center text-xs">SharpMatrix Score</th>
          <th className="px-4 py-6 font-medium text-center">EV %</th>
          <th className="px-4 py-6 font-medium text-center">Market Signal</th>
          <th className="px-4 py-6 font-medium text-center">Line Movement</th>
          <th className="px-4 py-6 font-medium text-center">Action</th>
        </tr>
      </thead>
      <tbody className="text-gray-300">
        {tableData.map((row, i) => (
          <tr key={i} className="border-b border-[#1F2937]/50 hover:bg-[#161B22]">
            <td className="px-6 py-5 text-sm">
              {row.game} <span className="text-gray-600 text-[10px]">({row.league})</span>
            </td>
            <td className="px-4 py-5 text-center">
              <span className={`px-2 py-1 rounded text-xs ${row.confidence > 50 ? 'bg-[#064E3B] text-[#22C55E]' : 'bg-[#450A0A] text-[#EF4444]'}`}>
                {row.confidence}
              </span>
            </td>
            <td className="px-4 py-5 text-center text-sm">{row.odds}</td>
            <td className="px-4 py-5 text-center">
              <span className="px-2 py-1 rounded bg-[#064E3B] text-[#22C55E] text-xs">{row.score}</span>
            </td>
            <td className={`px-4 py-5 text-center font-bold ${row.type === 'red' ? 'text-red-500' : 'text-green-500'}`}>
              ● {row.ev}
            </td>
            <td className="px-4 py-5">
               <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-[10px] w-fit mx-auto ${
                 row.type === 'green' ? 'bg-[#064E3B] text-[#22C55E]' : row.type === 'blue' ? 'bg-[#1E3A8A] text-[#3B82F6]' : 'bg-[#450A0A] text-[#EF4444]'
               }`}>
                 <div className={`w-1.5 h-1.5 rounded-full ${row.type === 'green' ? 'bg-[#22C55E]' : row.type === 'blue' ? 'bg-[#3B82F6]' : 'bg-[#EF4444]'}`} />
                 {row.signal}
               </div>
            </td>
            <td className="px-4 py-5 text-center">
              <div className="flex items-center justify-center gap-1 bg-[#064E3B] text-[#22C55E] px-2 py-1 rounded text-xs">
                <TrendingUp size={12} /> {row.movement}
              </div>
            </td>
            <td className="px-4 py-5">
              <div className="flex justify-center gap-3 text-gray-500">
                <Bookmark size={18} className="cursor-pointer hover:text-white" />
                <Eye size={18} className="cursor-pointer hover:text-white" />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);