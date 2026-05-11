// components/LineMovementChart.tsx
"use client";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Dot } from 'recharts';

const data = [
  { day: 'Mon', value: -3.6 },
  { day: 'Tue', value: -3.0 },
  { day: 'Wed', value: -2.5 },
  { day: 'Thu', value: -3.1, isTarget: true },
  { day: 'Fri', value: -2.5 },
  { day: 'Sat', value: -2.0 },
  { day: 'Now', value: -2.5 },
];

export const LineMovementChart = () => {
  return (
    <div className="bg-[#0D1117] border border-[#1F2937] rounded-xl p-8 w-full h-[400px]">
      <h3 className="text-white text-lg font-semibold mb-8">Line Movement</h3>
      <div className="w-full h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: -20 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1F2937" />
            <XAxis 
              dataKey="day" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#4B5563', fontSize: 12 }} 
              dy={10}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#4B5563', fontSize: 12 }}
              domain={[-3.6, -2]}
            />
            <Tooltip 
              contentStyle={{ backgroundColor: '#111827', border: '1px solid #374151', borderRadius: '8px' }}
              itemStyle={{ color: '#00FF85' }}
            />
            <Line 
              type="monotone" 
              dataKey="value" 
              stroke="#00FF85" 
              strokeWidth={3} 
              dot={{ fill: '#00FF85', strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6, strokeWidth: 0 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};