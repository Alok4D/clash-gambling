// components/ModalInput.tsx
import React from 'react';
import { ChevronDown } from 'lucide-react';

interface ModalInputProps {
  label: string;
  value?: string;
  placeholder?: string;
  type?: 'text' | 'select';
}

export const ModalInput = ({ label, value, placeholder, type = 'text' }: ModalInputProps) => {
  return (
    <div className="space-y-2 w-full text-left">
      <label className="text-gray-400 text-xs font-medium">{label}</label>
      <div className="relative">
        {type === 'select' ? (
          <>
            <select className="w-full bg-[#1C1C1C] border border-gray-800 rounded-lg py-3 px-4 text-gray-300 appearance-none focus:outline-none focus:border-gray-600 cursor-pointer">
              <option>{placeholder}</option>
              <option>30 days</option>
              <option>365 days</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" size={18} />
          </>
        ) : (
          <input
            type="text"
            defaultValue={value}
            placeholder={placeholder}
            className="w-full bg-[#1C1C1C] border border-gray-800 rounded-lg py-3 px-4 text-gray-300 focus:outline-none focus:border-gray-600 transition-colors"
          />
        )}
      </div>
    </div>
  );
};