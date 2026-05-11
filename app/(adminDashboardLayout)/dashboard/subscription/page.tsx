import { SubscriptionCard } from "./_components/SubscriptionCard";

export default function SubscriptionPage() {
  return (
    <div className="min-h-screen p-10 font-sans">
      <div className="max-w-6xl mx-auto">

        {/* Header Section */}
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-white text-4xl font-bold tracking-tight">
            Subscription plan
          </h1>
          <button className="px-8 py-3 bg-[#00FF85] hover:bg-[#00E676] text-black font-bold rounded-lg transition-colors">
            Invite User
          </button>
        </div>

        {/* Cards Container */}
        <div className="flex flex-wrap gap-8">
          <SubscriptionCard
            title="Annual Plan"
            price="$69.95"
            period="year"
            isBestValue={true}
          />
          
          <SubscriptionCard 
            title="Monthly Plan"
            price="$9.95"
            period="month"
            description="Includes 7-day free trial"
            isBestValue={false}
          />
        </div>

      </div>
    </div>
  );
}