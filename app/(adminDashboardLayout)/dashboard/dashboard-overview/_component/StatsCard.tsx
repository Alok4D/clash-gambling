// components/StatsCard.tsx
import { LucideIcon } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: string;
  Icon: LucideIcon;
  iconBgColor: string;
  iconColor: string;
}

export const StatsCard = ({ title, value, Icon, iconBgColor, iconColor }: StatsCardProps) => {
  return (
    <div className="bg-[#0D1117] border border-[#1F2937] rounded-xl p-6 flex justify-between items-start w-full">
      <div className="space-y-4">
        <h3 className="text-gray-400 text-lg font-medium">{title}</h3>
        <p className="text-[#22C55E] text-4xl font-bold">{value}</p>
      </div>
      <div className={`p-3 rounded-full ${iconBgColor}`}>
        <Icon size={24} className={iconColor} />
      </div>
    </div>
  );
};