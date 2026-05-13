import { Bookmark, Eye, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface MarketRow {
  game: string;
  league: string;
  confidence: number;
  odds: string;
  score: number;
  ev: string;
  signal: string;
  movement: string;
  type: string;
}

export const MarketTable = ({ data }: { data: MarketRow[] }) => (
  <div className="bg-[#0D1117] border border-[#064E3B]/30 rounded-xl overflow-hidden mt-8">
    <Table className="w-full text-left">
      <TableHeader className="bg-transparent border-none">
        <TableRow className="border-b border-[#1F2937] hover:bg-transparent">
          <TableHead className="px-6 py-6 font-medium text-center text-gray-500 text-sm h-auto border-none">Game</TableHead>
          <TableHead className="px-4 py-6 font-medium text-center text-gray-500 text-sm h-auto border-none">Confidence</TableHead>
          <TableHead className="px-4 py-6 font-medium text-center text-gray-500 text-sm h-auto border-none">Odds</TableHead>
          <TableHead className="px-4 py-6 font-medium text-center text-gray-500 text-xs h-auto border-none uppercase tracking-tighter">SharpMatrix Score</TableHead>
          <TableHead className="px-4 py-6 font-medium text-center text-gray-500 text-sm h-auto border-none">EV %</TableHead>
          <TableHead className="px-4 py-6 font-medium text-center text-gray-500 text-sm h-auto border-none">Market Signal</TableHead>
          <TableHead className="px-4 py-6 font-medium text-center text-gray-500 text-sm h-auto border-none">Line Movement</TableHead>
          <TableHead className="px-4 py-6 font-medium text-center text-gray-500 text-sm h-auto border-none">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="text-gray-300">
        {data.map((row, i) => (
          <TableRow key={i} className="border-b border-[#1F2937]/50 last:border-0 hover:bg-[#161B22] transition-colors">
            <TableCell className="px-6 py-5 text-sm h-auto border-none">
              {row.game} <span className="text-gray-600 text-[10px]">({row.league})</span>
            </TableCell>
            <TableCell className="px-4 py-5 text-center h-auto border-none">
              <span className={`px-2 py-1 rounded text-xs ${row.confidence > 50 ? 'bg-[#064E3B] text-[#22C55E]' : 'bg-[#450A0A] text-[#EF4444]'}`}>
                {row.confidence}
              </span>
            </TableCell>
            <TableCell className="px-4 py-5 text-center text-sm h-auto border-none">{row.odds}</TableCell>
            <TableCell className="px-4 py-5 text-center h-auto border-none">
              <span className="px-2 py-1 rounded bg-[#064E3B] text-[#22C55E] text-xs">{row.score}</span>
            </TableCell>
            <TableCell className={`px-4 py-5 text-center font-bold h-auto border-none ${row.type === 'red' ? 'text-red-500' : 'text-green-500'}`}>
              ● {row.ev}
            </TableCell>
            <TableCell className="px-4 py-5 h-auto border-none">
               <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-[10px] w-fit mx-auto ${
                 row.type === 'green' ? 'bg-[#064E3B] text-[#22C55E]' : row.type === 'blue' ? 'bg-[#1E3A8A] text-[#3B82F6]' : 'bg-[#450A0A] text-[#EF4444]'
               }`}>
                 <div className={`w-1.5 h-1.5 rounded-full ${row.type === 'green' ? 'bg-[#22C55E]' : row.type === 'blue' ? 'bg-[#3B82F6]' : 'bg-[#EF4444]'}`} />
                 {row.signal}
               </div>
            </TableCell>
            <TableCell className="px-4 py-5 text-center h-auto border-none">
              <div className="flex items-center justify-center gap-1 bg-[#064E3B] text-[#22C55E] px-2 py-1 rounded text-xs">
                <TrendingUp size={12} /> {row.movement}
              </div>
            </TableCell>
            <TableCell className="px-4 py-5 h-auto border-none">
              <div className="flex justify-center gap-3 text-gray-500">
              <Link href="/user-dashboard/saved">
                <Bookmark size={18} className="cursor-pointer hover:text-white" />
              </Link>
                <Link href="/user-dashboard/dashboard-overview/game-analysis">
                  <Eye size={18} className="cursor-pointer hover:text-white" />
                </Link>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </div>
);

export default MarketTable;