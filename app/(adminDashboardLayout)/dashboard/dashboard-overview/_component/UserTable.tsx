// components/UserTable.tsx
import React from 'react';

interface UserEntry {
  name: string;
  email: string;
  access: string;
  status: string;
  date: string;
}

interface UserTableProps {
  entries: UserEntry[];
}

export const UserTable = ({ entries }: UserTableProps) => {
  return (
    <div className="bg-[#0D1117] border border-[#1F2937] rounded-xl overflow-hidden">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="text-gray-400 font-medium text-sm border-b border-[#1F2937]">
            <th className="px-6 py-5 font-normal">User name</th>
            <th className="px-6 py-5 font-normal">Email</th>
            <th className="px-6 py-5 font-normal">Access Type</th>
            <th className="px-6 py-5 font-normal">Status</th>
            <th className="px-6 py-5 font-normal">Valid Until</th>
          </tr>
        </thead>
        <tbody className="text-gray-300">
          {entries.map((user, index) => (
            <tr key={index} className="hover:bg-[#161B22] transition-colors">
              <td className="px-6 py-5">{user.name}</td>
              <td className="px-6 py-5 text-gray-400">{user.email}</td>
              <td className="px-6 py-5">
                <span className={
                  user.access === "Monthly" || user.access === "Annual" 
                  ? "text-[#22C55E]" 
                  : "text-[#4640DE]"
                }>
                  {user.access}
                </span>
              </td>
              <td className="px-6 py-5">
                <span className={`px-4 py-1 rounded-full text-xs font-medium ${
                  user.status === "Active" 
                  ? "bg-[#064E3B] text-[#10B981]" 
                  : "bg-[#450A0A] text-[#EF4444]"
                }`}>
                  {user.status}
                </span>
              </td>
              <td className="px-6 py-5">{user.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};