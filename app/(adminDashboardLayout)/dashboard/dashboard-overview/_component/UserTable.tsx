// components/UserTable.tsx
import React from 'react';

const users = [
  { name: "Alex debid", email: "demoyour@gmail.com", access: "Monthly", status: "Active", date: "Dec 30, 2026" },
  { name: "Sarah Jenkins", email: "sarah.j@example.com", access: "Invited", status: "Active", date: "Jan 15, 2027" },
  { name: "Michael Chen", email: "m.chen@outlook.com", access: "Annual", status: "Active", date: "Mar 10, 2027" },
  { name: "Emma Wilson", email: "emma.w@gmail.com", access: "Annual", status: "Canceled", date: "Dec 12, 2026" },
  { name: "David Miller", email: "dmiller@company.com", access: "Invited", status: "Canceled", date: "Feb 20, 2027" },
  { name: "Jessica Taylor", email: "jtaylor@yahoo.com", access: "Monthly", status: "Active", date: "Jun 05, 2027" },
  { name: "Kevin Brown", email: "kbrown@tech.io", access: "Annual", status: "Active", date: "Apr 22, 2027" },
  { name: "Lisa Anderson", email: "lisa.a@service.com", access: "Monthly", status: "Active", date: "Jul 18, 2027" },
  { name: "Robert White", email: "rwhite@design.net", access: "Invited", status: "Active", date: "May 12, 2027" },
  { name: "Maria Garcia", email: "mgarcia@global.org", access: "Annual", status: "Active", date: "Aug 30, 2027" },
  { name: "James Wilson", email: "jwilson@mail.com", access: "Monthly", status: "Canceled", date: "Nov 02, 2026" },
  { name: "Patricia Moore", email: "pmoore@agency.com", access: "Annual", status: "Active", date: "Oct 14, 2027" },
  { name: "Christopher Lee", email: "clee@innovate.com", access: "Invited", status: "Active", date: "Sep 25, 2027" },
  { name: "Barbara Harris", email: "bharris@edu.net", access: "Monthly", status: "Active", date: "Jan 08, 2027" },
  { name: "Matthew Clark", email: "mclark@firm.com", access: "Annual", status: "Canceled", date: "Dec 20, 2026" },
  { name: "Susan Lewis", email: "slewis@health.org", access: "Invited", status: "Active", date: "Feb 14, 2027" },
  { name: "Andrew Walker", email: "awalker@dev.io", access: "Monthly", status: "Active", date: "Apr 01, 2027" },
  { name: "Linda Young", email: "lyoung@shop.com", access: "Annual", status: "Active", date: "May 20, 2027" },
  { name: "Steven Hall", email: "shall@news.com", access: "Monthly", status: "Active", date: "Jul 04, 2027" },
  { name: "Margaret Allen", email: "mallen@art.net", access: "Invited", status: "Canceled", date: "Oct 31, 2026" },
  { name: "Thomas King", email: "tking@music.com", access: "Annual", status: "Active", date: "Dec 15, 2027" },
  { name: "Dorothy Wright", email: "dwright@legal.io", access: "Monthly", status: "Active", date: "Mar 22, 2027" },
  { name: "Paul Scott", email: "pscott@build.com", access: "Invited", status: "Active", date: "Nov 11, 2027" },
  { name: "Karen Green", email: "kgreen@green.org", access: "Annual", status: "Active", date: "Aug 05, 2027" },
  { name: "Mark Adams", email: "madams@tech.com", access: "Monthly", status: "Canceled", date: "Jan 30, 2027" },
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