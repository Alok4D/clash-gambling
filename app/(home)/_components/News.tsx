"use client";

import { useState } from "react";
import { Calendar, ChevronLeft, ChevronRight } from "lucide-react";

interface NewsArticle {
  id: number;
  title: string;
  category: string;
  date: string;
  image: string;
}

function LatestNews() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const articles: NewsArticle[] = [
    {
      id: 1,
      title: "5 Ways to Increase Your Home's Value",
      category: "Home Improvement",
      date: "May 10, 2022",
      image:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    },
    {
      id: 2,
      title: "How to Plan Your Dream Home",
      category: "Planning",
      date: "Jan 15, 2023",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    },
    {
      id: 3,
      title: "Sustainable Building Practices for 2024",
      category: "Sustainability",
      date: "Mar 22, 2024",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    },
    {
      id: 4,
      title: "Modern Kitchen Design Trends",
      category: "Interior Design",
      date: "Apr 8, 2024",
      image:
        "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?w=800&q=80",
    },
    {
      id: 5,
      title: "Smart Home Technology Integration",
      category: "Technology",
      date: "May 12, 2024",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    },
    {
      id: 6,
      title: "Landscaping Ideas for Every Season",
      category: "Outdoor Living",
      date: "Jun 3, 2024",
      image:
        "https://images.unsplash.com/photo-1598228723793-52759bba239c?w=800&q=80",
    },
  ];

  const itemsPerPage = 2;
  const totalPages = Math.ceil(articles.length / itemsPerPage);

  const nextSlide = (): void => {
    setCurrentIndex((prev) => Math.min(prev + 1, totalPages - 1));
  };

  const prevSlide = (): void => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const getVisibleArticles = (): NewsArticle[] => {
    const start = currentIndex * itemsPerPage;
    return articles.slice(start, start + itemsPerPage);
  };

  return (
    <div className="min-h-screen bg-black text-white px-4 py-12 sm:px-6 sm:py-16 lg:px-16 lg:py-20">
      <div className="max-w-[1400px] mx-auto">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-start mb-8 sm:mb-12 gap-6">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 flex items-center gap-3">
              <span className="text-[#f59e0b] text-4xl sm:text-5xl">🏵️</span>
              <span>Latest News</span>
            </h1>
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
              We've built a reputation for delivering exceptional results and
              exceeding our clients' expectations. From luxurious residential
              homes to state-of-the-art commercial properties, our team of
              experts is dedicated to bringing your vision to life.
            </p>
          </div>
          <button className="w-full sm:w-auto px-6 py-3 bg-[#1a1a1a] hover:bg-[#252525] text-white rounded-lg transition-colors whitespace-nowrap border border-gray-800 text-sm sm:text-base">
            View all blog post
          </button>
        </div>

        {/* News Grid - Desktop (2 columns) */}
        <div className="hidden md:grid md:grid-cols-2 gap-6 mb-8">
          {getVisibleArticles().map((article) => (
            <div
              key={article.id}
              className="bg-[#0a0a0a] rounded-2xl overflow-hidden border border-gray-900 hover:border-gray-700 transition-all duration-300 group"
            >
              <div className="relative h-64 lg:h-80 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-1.5 bg-black/70 backdrop-blur-sm text-white text-sm rounded-full border border-gray-700">
                    {article.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4 group-hover:text-[#f59e0b] transition-colors">
                  {article.title}
                </h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <Calendar size={16} />
                    <span>{article.date}</span>
                  </div>
                  <button className="text-[#f59e0b] hover:text-[#d97706] font-medium transition-colors text-sm group/btn flex items-center gap-2">
                    Read More
                    <span className="group-hover/btn:translate-x-1 transition-transform">
                      →
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* News Carousel - Mobile (1 column) */}
        <div className="md:hidden mb-8">
          <div className="space-y-6">
            {getVisibleArticles().map((article) => (
              <div
                key={article.id}
                className="bg-[#0a0a0a] rounded-2xl overflow-hidden border border-gray-900"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-1.5 bg-black/70 backdrop-blur-sm text-white text-sm rounded-full border border-gray-700">
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold mb-4">{article.title}</h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                      <Calendar size={16} />
                      <span>{article.date}</span>
                    </div>
                    <button className="text-[#f59e0b] hover:text-[#d97706] font-medium transition-colors text-sm">
                      Read More →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between">
          <div className="text-gray-400 text-sm sm:text-base">
            <span className="text-white font-semibold text-base sm:text-lg">
              {String(currentIndex + 1).padStart(2, "0")}
            </span>
            <span className="text-gray-600 mx-1">/</span>
            <span className="text-gray-600">
              {String(totalPages).padStart(2, "0")}
            </span>
          </div>
          <div className="flex gap-2 sm:gap-3">
            <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className={`p-2 sm:p-3 rounded-lg transition-colors border border-gray-800 ${
                currentIndex === 0
                  ? "bg-[#0a0a0a] text-gray-700 cursor-not-allowed"
                  : "bg-[#1a1a1a] hover:bg-[#252525] text-white"
              }`}
              aria-label="Previous articles"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextSlide}
              disabled={currentIndex === totalPages - 1}
              className={`p-2 sm:p-3 rounded-lg transition-colors border border-gray-800 ${
                currentIndex === totalPages - 1
                  ? "bg-[#0a0a0a] text-gray-700 cursor-not-allowed"
                  : "bg-[#1a1a1a] hover:bg-[#252525] text-white"
              }`}
              aria-label="Next articles"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LatestNews;
