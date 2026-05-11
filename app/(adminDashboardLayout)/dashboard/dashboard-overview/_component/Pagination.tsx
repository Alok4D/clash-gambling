// components/Pagination.tsx
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const Pagination = () => {
  return (
    <div className="flex items-center justify-center gap-2 mt-8">
      <button className="p-2 border border-[#374151] rounded-full text-gray-400 hover:bg-[#1F2937]">
        <ChevronLeft size={20} />
      </button>
      
      <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#064E3B] text-[#10B981] font-bold">
        1
      </button>
      
      {[2, 3].map((page) => (
        <button key={page} className="w-10 h-10 flex items-center justify-center rounded-lg text-gray-400 hover:text-white">
          {page}
        </button>
      ))}
      
      <span className="text-gray-600 px-2">...</span>
      
      <button className="w-10 h-10 flex items-center justify-center rounded-lg text-gray-400 hover:text-white">
        32
      </button>
      
      <button className="p-2 border border-[#374151] rounded-full text-gray-400 hover:bg-[#1F2937]">
        <ChevronRight size={20} />
      </button>
    </div>
  );
};