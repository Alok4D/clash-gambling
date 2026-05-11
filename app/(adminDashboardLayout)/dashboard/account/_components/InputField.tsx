// components/InputField.tsx
import React from 'react';
import { LucideIcon, EyeOff } from 'lucide-react';

interface InputFieldProps {
  label: string;
  placeholder: string;
  type?: string;
  Icon: LucideIcon;
  showPasswordToggle?: boolean;
}

export const InputField = ({ label, placeholder, type = "text", Icon, showPasswordToggle }: InputFieldProps) => {
  return (
    <div className="space-y-2 w-full">
      <label className="text-gray-400 text-sm font-medium">{label}</label>
      <div className="relative flex items-center">
        <div className="absolute left-4 text-gray-500">
          <Icon size={18} />
        </div>
        <input
          type={type}
          placeholder={placeholder}
          className="w-full bg-transparent border border-gray-800 rounded-lg py-3 pl-12 pr-12 text-gray-300 focus:outline-none focus:border-gray-600 transition-colors"
        />
        {showPasswordToggle && (
          <button className="absolute right-4 text-gray-500 hover:text-gray-300">
            <EyeOff size={18} />
          </button>
        )}
      </div>
    </div>
  );
};