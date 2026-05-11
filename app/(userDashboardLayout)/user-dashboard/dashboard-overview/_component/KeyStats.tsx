// components/KeyStats.tsx
interface StatBarProps {
  label: string;
  record: string;
  percentage: number;
}

const StatBar = ({ label, record, percentage }: StatBarProps) => (
  <div className="space-y-2">
    <div className="flex justify-between items-center text-sm">
      <span className="text-gray-400">{label}</span>
      <span className="text-white font-medium">{record}</span>
    </div>
    <div className="w-full bg-[#161B22] h-2 rounded-full overflow-hidden">
      <div 
        className="bg-[#00FF85] h-full transition-all duration-500" 
        style={{ width: `${percentage}%` }}
      />
    </div>
  </div>
);

export const KeyStats = () => {
  return (
    <div className="bg-[#0D1117] border border-[#1F2937] rounded-xl p-8 space-y-8">
      <h3 className="text-white text-lg font-semibold">Key Stats</h3>
      <div className="space-y-6">
        <StatBar label="Lakers ATS" record="W 12 - L 8" percentage={60} />
        <StatBar label="Warriors ATS" record="W 14 - L 6" percentage={70} />
      </div>
    </div>
  );
};