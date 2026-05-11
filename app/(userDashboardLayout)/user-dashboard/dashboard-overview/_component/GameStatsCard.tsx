// components/GameStatsCard.tsx
import { LucideIcon } from 'lucide-react';

interface GameStatsCardProps {
  label: string;
  value: string;
  Icon: LucideIcon;
  variant?: 'green' | 'default';
}

export const GameStatsCard = ({ label, value, Icon, variant }: GameStatsCardProps) => {
  return (
    <div className="bg-[#0D1117] border border-[#1F2937] rounded-xl p-5 flex flex-col justify-between h-32">
      <div className="flex justify-between items-start">
        <span className="text-gray-400 text-sm font-medium">{label}</span>
        <div className="p-1.5 bg-[#064E3B]/40 rounded-lg">
          <Icon size={18} className="text-[#22C55E]" />
        </div>
      </div>
      <div className={`text-3xl font-bold ${variant === 'green' ? 'text-[#22C55E]' : 'text-white'}`}>
        {value}
      </div>
    </div>
  );
};