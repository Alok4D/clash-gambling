'use client';
import { TrendingUp, Target, Users, ShieldCheck, ChevronLeft, MessageSquare } from 'lucide-react';
import { GameStatsCard } from '../_component/GameStatsCard';
import { OddsTable } from '../_component/OddsTable';
import { RecentGames } from '../_component/RecentGames';
import { LineMovementChart } from '../_component/LineMovementChart';
import Betting from '../_component/Betting';
import { KeyStats } from '../_component/KeyStats';
import { useRouter } from 'next/navigation';

export default function GameAnalysis() {

    const router = useRouter();
  return (
    <div className="min-h-screen text-gray-300">
      <div className="w-full mx-auto space-y-6">
        
        {/* Header Section */}
        <div className="flex justify-between items-start">
          <div className="space-y-2">
            <button onClick={() => router.back()} className="text-gray-500 hover:text-white mb-2"><ChevronLeft size={20} /></button>
            <div className="flex items-center gap-2">
              <span className="bg-[#064E3B] text-[#22C55E] text-[10px] font-bold px-2 py-0.5 rounded">NBA</span>
              <span className="text-xs text-gray-500">Basketball • Today, 7:30 PM ET</span>
            </div>
            <h1 className="text-white text-3xl font-bold">LA Lakers <span className="text-[#22C55E]">vs</span> Golden State Warriors</h1>
            <p className="text-xs text-gray-500">Chase Center, San Francisco</p>
          </div>
          <div className="flex gap-3">
            <button className="bg-[#00FF85] text-black font-bold px-6 py-2.5 rounded-lg text-sm">Ask SharpBot</button>
            <button className="bg-[#161B22] border border-gray-800 text-white font-bold px-6 py-2.5 rounded-lg text-sm">Save Game</button>
          </div>
        </div>

        {/* Top Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <GameStatsCard label="Expected Value" value="+4.2%" Icon={TrendingUp} variant="green" />
          <GameStatsCard label="Sharp Score" value="87" Icon={Target} />
          <GameStatsCard label="Public vs Sharp" value="35% / 78%" Icon={Users} />
          <div className="bg-[#0D1117] border border-[#1F2937] rounded-xl p-5 flex flex-col justify-between h-32">
             <span className="text-gray-400 text-sm font-medium">Signal</span>
             <span className="bg-[#064E3B] text-[#22C55E] text-[10px] px-3 py-1 rounded-full w-fit">▲ Sharp Money</span>
          </div>
        </div>


        {/* Key Stats Section */}
        <Betting />




        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <OddsTable />
          <RecentGames />
        </div>

                {/* Line Movement Chart */}
        <LineMovementChart />

        {/* AI Summary Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#0D1117] border border-[#1F2937] rounded-xl p-6">
            <div className="flex items-center gap-2 mb-4 text-[#22C55E]">
              <MessageSquare size={18} /> <h3 className="font-bold">AI Summary</h3>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              The Lakers spread has moved from -3.5 to -2.5 over the past week, indicating sharp money on the Warriors...
            </p>
          </div>
          <div className="bg-[#0D1117] border border-[#1F2937] rounded-xl p-6">
            <div className="flex items-center gap-2 mb-4 text-[#22C55E]">
              <ShieldCheck size={18} /> <h3 className="font-bold">Ask SharpBot</h3>
            </div>
            <div className="space-y-2">
              {['What\'s driving the line movement?', 'How have these teams performed?'].map((q, i) => (
                <button key={i} className="w-full text-left p-3 border border-gray-800 rounded-lg text-xs hover:border-gray-600 transition-colors">
                  {q}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* key metrics */}
        <KeyStats />
      </div>
    </div>
  );
}