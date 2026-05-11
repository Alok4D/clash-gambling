// components/FilterOptions.tsx
import { ChevronDown } from 'lucide-react';

const FilterSelect = ({ label, value }: { label: string; value: string }) => (
  <div className="space-y-2 flex-1 min-w-[140px]">
    <label className="text-gray-400 text-sm">{label}</label>
    <div className="relative">
      <select className="w-full bg-[#161B22] border border-[#1F2937] text-gray-300 py-2.5 px-4 rounded-lg appearance-none focus:outline-none">
        <option>{value}</option>
      </select>
      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
    </div>
  </div>
);

export const FilterOptions = () => (
  <div className="bg-transparent space-y-6">
    <div className="flex justify-between items-center">
      <h2 className="text-white text-2xl font-semibold">Filter Options</h2>
      <div className="flex items-center gap-2 text-[#22C55E] text-sm">
        <span className="w-2 h-2 bg-[#22C55E] rounded-full animate-pulse" /> Live Data
      </div>
    </div>
    <div className="flex flex-wrap gap-4 items-end">
      <FilterSelect label="League" value="All Leagues" />
      <FilterSelect label="Sports" value="All Leagues" />
      <FilterSelect label="Signal" value="All Signal" />
      <FilterSelect label="Time" value="All Leagues" />
      <div className="space-y-2 flex-1 min-w-[140px]">
        <label className="text-gray-400 text-sm">Min Confidence</label>
        <input placeholder="Min Confidence" className="w-full bg-[#161B22] border border-[#1F2937] text-gray-300 py-2.5 px-4 rounded-lg focus:outline-none" />
      </div>
      <div className="flex items-center gap-4 min-w-[200px] pb-2">
        <span className="text-gray-400 text-sm whitespace-nowrap">Min EV%</span>
        <input type="range" className="w-full accent-[#22C55E]" />
        <span className="bg-[#064E3B] text-[#22C55E] px-2 py-1 rounded text-xs">3%</span>
      </div>
    </div>
  </div>
);