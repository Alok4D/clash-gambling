"use client";

const PricingSection = () => {
  const plans = [
    {
      name: "Annual Plan",
      price: "$69.95",
      period: "/year",
      features: "",
      highlight: true,
      badge: "Best Value",
    },
    {
      name: "Monthly Plan",
      price: "$9.95",
      period: "/month",
      features: "Includes 7-day free trial",
      highlight: false,
    },
  ];

  return (
    <section className="py-24 px-6 md:px-0">
      <div className="mx-auto max-w-[1200px]">
        {/* Background Typography & Heading */}
        <div className="relative mb-20 text-center">
          <h2 className="absolute inset-0 flex items-center justify-center font-inter text-[40px] font-bold text-[#FFFFFF14] md:text-[100px] whitespace-nowrap tracking-wider">
            Subscription plan
          </h2>
          <h3 className="relative pt-8 text-3xl font-bold text-white md:pt-14 md:text-5xl">
            Subscription plan
          </h3>
        </div>

        {/* Pricing Cards Container */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-[32px] border border-white/5 bg-[#14181D] p-10 transition-all hover:border-[#00FFA3]/20 ${
                plan.highlight ? "ring-1 ring-[#00FFA3]/10" : ""
              }`}
            >
              {/* "Best Value" Badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-md bg-white px-4 py-1.5 text-sm font-bold text-black shadow-lg">
                  {plan.badge}
                </div>
              )}

              <div className="flex h-full flex-col items-center text-center">
                <h4 className="mb-4 text-3xl font-bold text-white md:text-4xl">
                  {plan.name}
                </h4>
                
                <div className="mb-8 min-h-[40px]">
                  {plan.features ? (
                    <p className="text-gray-400">{plan.features}</p>
                  ) : (
                    <div className="h-6" /> // Spacer for alignment
                  )}
                </div>

                <div className="mb-12">
                  <span className="text-4xl font-bold text-white md:text-5xl">
                    {plan.price}
                  </span>
                  <span className="text-2xl font-bold text-white opacity-80 md:text-3xl">
                    {plan.period}
                  </span>
                </div>

                <button className="w-full rounded-2xl bg-[#00FFA3] py-4 text-lg font-bold text-black transition-all hover:bg-[#00e692] hover:shadow-[0_0_20px_rgba(0,255,163,0.3)] active:scale-[0.98]">
                  Subscribe
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;