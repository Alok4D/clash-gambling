import { DollarSign, Users } from 'lucide-react';
import { StatsCard } from './dashboard-overview/_component/StatsCard';
import { UserTable } from './dashboard-overview/_component/UserTable';
import { Pagination } from './dashboard-overview/_component/Pagination';

export default function DashboardOverviewPage() {
  return (
    <div className="min-h-screen bg-[#010409] p-8 font-sans">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <StatsCard 
            title="Total revenue" 
            value="$152.22" 
            Icon={DollarSign}
            iconBgColor="bg-[#064E3B]"
            iconColor="text-[#10B981]"
          />
          <StatsCard 
            title="Total users" 
            value="1k" 
            Icon={Users}
            iconBgColor="bg-[#064E3B]/40"
            iconColor="text-[#10B981]"
          />
        </div>

        {/* Table Section */}
        <div className="space-y-4">
          <UserTable />
          <Pagination />
        </div>
        
      </div>
    </div>
  );
}