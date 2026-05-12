"use client";

import { Database, TrendingUp, Bot } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      title: "Market Intelligence",
      description:
        "Real-time odds comparison, expected value calculations, and sharp money tracking across all major markets.",
      icon: <Database className="text-[#00FFA3]" size={28} />,
    },
    {
      title: "Historical Edge",
      description:
        "Deep historical data analysis, trend identification, and pattern recognition to uncover systematic advantages.",
      icon: <TrendingUp className="text-[#00FFA3]" size={28} />,
    },
    {
      title: "SharpBot AI",
      description:
        "AI-powered assistant that explains complex data patterns in plain language, structured around facts.",
      icon: <Bot className="text-[#00FFA3]" size={28} />,
    },
  ];

  return (
    <section className="bg-[#0B0E11] py-20 px-6">
      <div className="mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="relative mb-16 text-center">
          <h2 className="absolute inset-0 flex items-center justify-center font-inter text-[40px] font-bold text-[#FFFFFF14] md:text-[100px] whitespace-nowrap">
            Data-First Intelligence
          </h2>
          <h3 className="relative pt-6 text-3xl font-bold text-white md:pt-10 md:text-4xl">
            How it work
          </h3>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-white/5 bg-[#14181D] p-8 transition-all hover:border-[#00FFA3]/30"
            >
              {/* Icon Container */}
              <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#00FFA3]/10">
                {feature.icon}
              </div>

              {/* Content */}
              <h4 className="mb-4 text-2xl font-bold text-white">
                {feature.title}
              </h4>
              <p className="leading-relaxed text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;