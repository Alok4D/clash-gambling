// components/UserTable.tsx
import React from 'react';

const users = [
  { name: "Alex debid", email: "demoyour@gmail.com", access: "Monthly", status: "Active", date: "Dec 30, 2026" },
  { name: "Alex debid", email: "demoyour@gmail.com", access: "Invited", status: "Active", date: "Dec 30, 2026" },
  { name: "Alex debid", email: "demoyour@gmail.com", access: "Annual", status: "Active", date: "Dec 30, 2026" },
  { name: "Alex debid", email: "demoyour@gmail.com", access: "Annual", status: "Canceled", date: "Dec 30, 2026" },
  { name: "Alex debid", email: "demoyour@gmail.com", access: "Invited", status: "Canceled", date: "Dec 30, 2026" },
];

export const UserTable = () => {
  return (
    <div className="bg-[#0D1117] border border-[#1F2937] rounded-xl overflow-hidden">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="text-gray-400 font-medium text-sm border-b border-[#1F2937]">
            <th className="px-6 py-5">User name</th>
            <th className="px-6 py-5">Email</th>
            <th className="px-6 py-5">Access Type</th>
            <th className="px-6 py-5">Status</th>
            <th className="px-6 py-5">Valid Until</th>
          </tr>
        </thead>
        <tbody className="text-gray-300">
          {users.map((user, index) => (
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