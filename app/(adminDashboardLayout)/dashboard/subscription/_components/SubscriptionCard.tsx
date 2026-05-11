// components/SubscriptionCard.tsx
import React from 'react';

interface SubscriptionCardProps {
  title: string;
  price: string;
  period: string;
  description?: string;
  isBestValue?: boolean;
}

export const SubscriptionCard = ({ 
  title, 
  price, 
  period, 
  description, 
  isBestValue 
}: SubscriptionCardProps) => {
  return (
    <div className="relative pt-4">
      {/* Best Value Badge */}
      {isBestValue && (
        <div className="absolute top-0 left-6 z-10">
          <span className="bg-white text-black text-[10px] font-bold px-3 py-1 rounded-sm shadow-lg">
            Best Value Save 40%
          </span>
        </div>
      )}

      <div className={`w-[260px] h-[340px] bg-[#0D121F] border border-gray-800 rounded-xl p-8 flex flex-col justify-between items-center text-center transition-all hover:border-gray-700`}>
        <div className="space-y-4">
          <h3 className="text-white text-2xl font-semibold tracking-tight">{title}</h3>
          {description && (
            <p className="text-gray-400 text-xs font-medium">{description}</p>
          )}
        </div>

        <div className="flex flex-col items-center">
          <span className="text-white text-3xl font-bold">{price}</span>
          <span className="text-white text-xl font-bold">/{period}</span>
        </div>

        <button className="w-full py-3 bg-[#00FF85] hover:bg-[#00E676] text-black font-bold rounded-lg transition-colors">
          Edit
        </button>
      </div>
    </div>
  );
};