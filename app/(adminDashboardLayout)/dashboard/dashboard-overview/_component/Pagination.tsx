// components/Pagination.tsx
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
  const getPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= Math.min(3, totalPages); i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <div className="flex items-center justify-center gap-2 mt-8">
      <button 
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className="p-2 border border-[#374151] rounded-full text-gray-400 hover:bg-[#1F2937] disabled:opacity-30 disabled:hover:bg-transparent"
      >
        <ChevronLeft size={20} />
      </button>
      
      {getPageNumbers().map((page) => (
        <button 
          key={page}
          onClick={() => onPageChange(page)}
          className={cn(
            "w-10 h-10 flex items-center justify-center rounded-lg transition-all duration-200",
            currentPage === page 
              ? "bg-[#064E3B] text-[#10B981] font-medium" 
              : "text-gray-400 hover:text-white hover:bg-white/5"
          )}
        >
          {page}
        </button>
      ))}
      
      {totalPages > 3 && (
        <>
          <span className="text-gray-600 px-2">...</span>
          <button 
            onClick={() => onPageChange(totalPages)}
            className={cn(
              "w-10 h-10 flex items-center justify-center rounded-lg transition-all duration-200",
              currentPage === totalPages 
                ? "bg-[#064E3B] text-[#10B981] font-medium" 
                : "text-gray-400 hover:text-white hover:bg-white/5"
            )}
          >
            {totalPages}
          </button>
        </>
      )}
      
      <button 
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className="p-2 border border-[#374151] rounded-full text-gray-400 hover:bg-[#1F2937] disabled:opacity-30 disabled:hover:bg-transparent"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
};