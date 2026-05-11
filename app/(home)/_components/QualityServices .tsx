"use client";

import React, { useState } from "react";

type TabName =
  | "Residential"
  | "Property Management"
  | "Commercial"
  | "Development";

interface Service {
  title: string;
  description: string;
  image: string;
}

type ServicesData = {
  [K in TabName]: Service[];
};

const QualityServices: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabName>("Residential");

  const tabs: readonly TabName[] = [
    "Residential",
    "Property Management",
    "Commercial",
    "Development",
  ] as const;

  const services: ServicesData = {
    Residential: [
      {
        title: "Custom Homes",
        description:
          "We design and build custom homes that reflect your personal style and meet your specific needs.",
        image:
          "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
      },
      {
        title: "Community Dev",
        description:
          "We develop and manage community projects, including single-family homes, townhomes, and condos.",
        image:
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
      },
      {
        title: "Renovations",
        description:
          "We specialize in residential renovations, from minor updates to major overhauls.",
        image:
          "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
      },
    ],
    "Property Management": [
      {
        title: "Property Care",
        description:
          "Comprehensive property management services to keep your investments running smoothly.",
        image:
          "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
      },
      {
        title: "Tenant Relations",
        description:
          "Professional tenant screening, placement, and ongoing relationship management.",
        image:
          "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&q=80",
      },
      {
        title: "Maintenance",
        description:
          "Regular maintenance and emergency repair services for all property types.",
        image:
          "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80",
      },
    ],
    Commercial: [
      {
        title: "Office Spaces",
        description:
          "Modern office developments designed for productivity and collaboration.",
        image:
          "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
      },
      {
        title: "Retail Centers",
        description:
          "Strategic retail space development in high-traffic locations.",
        image:
          "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
      },
      {
        title: "Mixed-Use",
        description:
          "Integrated developments combining commercial and residential spaces.",
        image:
          "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
      },
    ],
    Development: [
      {
        title: "Land Acquisition",
        description:
          "Strategic property sourcing and development planning services.",
        image:
          "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
      },
      {
        title: "Master Planning",
        description:
          "Comprehensive community and commercial development master plans.",
        image:
          "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80",
      },
      {
        title: "Infrastructure",
        description:
          "Full infrastructure development and utility coordination.",
        image:
          "https://images.unsplash.com/photo-1590247813693-5541d1c609fd?w=800&q=80",
      },
    ],
  };

  const handleTabClick = (tab: TabName): void => {
    setActiveTab(tab);
  };

  return (
    <div className="min-h-screen bg-black text-white px-4 py-12 sm:px-6 sm:py-16 lg:px-16 lg:py-20">
      <div className="max-w-[1400px] mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            Quality service you get <span className="text-[#f59e0b]">✱</span>
          </h1>
          <p className="text-gray-400 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
            At Pinnacle, we offer a wide range of services to cater to your
            unique needs. From residential construction to commercial
            development, we've got you covered.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10 sm:mb-12 lg:mb-16">
          {tabs.map((tab: TabName) => (
            <button
              key={tab}
              onClick={() => handleTabClick(tab)}
              className={`px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-medium transition-all duration-300 text-sm sm:text-base whitespace-nowrap ${
                activeTab === tab
                  ? "bg-white text-black"
                  : "bg-transparent text-gray-400 hover:text-white border border-gray-800 hover:border-gray-600"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {services[activeTab].map((service: Service, index: number) => (
            <div
              key={index}
              className="bg-[#0a0a0a] rounded-2xl overflow-hidden border border-gray-900 hover:border-gray-700 transition-all duration-300 group"
            >
              <div className="relative h-56 sm:h-64 lg:h-72 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </div>
              <div className="p-5 sm:p-6 lg:p-7">
                <h3 className="text-xl sm:text-2xl font-bold mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm sm:text-base mb-5 sm:mb-6 leading-relaxed">
                  {service.description}
                </p>
                <button className="text-[#f59e0b] hover:text-[#d97706] font-medium transition-colors flex items-center gap-2 text-sm sm:text-base group/btn">
                  Learn more
                  <span className="group-hover/btn:translate-x-1 transition-transform">
                    →
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QualityServices;
