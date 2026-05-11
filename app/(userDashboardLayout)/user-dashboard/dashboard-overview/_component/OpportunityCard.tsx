// components/OpportunityCard.tsx
import React from 'react';

interface OpportunityCardProps {
  title: string;
  tag: string;
  percentage: string;
  description: string;
  confidence: number;
  variant: 'green' | 'blue' | 'red';
}

const variants = {
  green: { text: 'text-[#22C55E]', bg: 'bg-[#064E3B]', bar: 'bg-[#22C55E]', tagBg: 'bg-[#064E3B]', tagText: 'text-[#22C55E]' },
  blue: { text: 'text-[#3B82F6]', bg: 'bg-[#1E3A8A]', bar: 'bg-[#3B82F6]', tagBg: 'bg-[#1E3A8A]', tagText: 'text-[#3B82F6]' },
  red: { text: 'text-[#EF4444]', bg: 'bg-[#450A0A]', bar: 'bg-[#EF4444]', tagBg: 'bg-[#450A0A]', tagText: 'text-[#EF4444]' },
};

export const OpportunityCard = ({ title, tag, percentage, description, confidence, variant }: OpportunityCardProps) => {
  const style = variants[variant];
  return (
    <div className="bg-[#0D1117] border border-[#1F2937] rounded-xl p-6 space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-gray-400 text-lg">{title}</h3>
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${style.tagBg} ${style.tagText}`}>
          ● {tag}
        </span>
      </div>
      <p className={`text-4xl font-bold ${style.text}`}>{percentage}</p>
      <div className="space-y-2">
        <div className="flex justify-between text-xs text-gray-500">
          <span>Confidence</span>
          <span>{confidence}%</span>
        </div>
        <div className="w-full bg-gray-800 h-1.5 rounded-full overflow-hidden">
          <div className={`${style.bar} h-full`} style={{ width: `${confidence}%` }} />
        </div>
      </div>
      <p className="text-gray-500 text-xs leading-relaxed">{description}</p>
    </div>
  );
};