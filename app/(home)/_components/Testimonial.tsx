"use client";

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  id: number;
  text: string;
  author: string;
  role: string;
  rating: number;
  avatar: string;
}

function ClientTestimonials() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      text: "Honestly, this tool has saved me hours of editing. The AI enhancement makes my low-light photos look crisp and printready. Highly recommend it!",
      author: "Emily R.",
      role: "Photographer",
      rating: 4,
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80",
    },
    {
      id: 2,
      text: "Honestly, this tool has saved me hours of editing. The AI enhancement makes my low-light photos look crisp and printready. Highly recommend it!",
      author: "Emily R.",
      role: "Photographer",
      rating: 4,
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80",
    },
    {
      id: 3,
      text: "Honestly, this tool has saved me hours of editing. The AI enhancement makes my low-light photos look crisp and printready. Highly recommend it!",
      author: "Emily R.",
      role: "Photographer",
      rating: 4,
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80",
    },
    {
      id: 4,
      text: "The quality of work exceeded our expectations. From start to finish, the team was professional and attentive to every detail.",
      author: "Michael S.",
      role: "Business Owner",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&q=80",
    },
    {
      id: 5,
      text: "Outstanding service and exceptional craftsmanship. They transformed our vision into reality and delivered on time.",
      author: "Sarah J.",
      role: "Property Developer",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&q=80",
    },
    {
      id: 6,
      text: "Working with this team was an absolute pleasure. Their expertise and dedication made our project a complete success.",
      author: "David L.",
      role: "Architect",
      rating: 4,
      avatar:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&q=80",
    },
  ];

  const itemsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  const nextSlide = (): void => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = (): void => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const goToSlide = (index: number): void => {
    setCurrentIndex(index);
  };

  const getVisibleTestimonials = (): Testimonial[] => {
    const start = currentIndex * itemsPerPage;
    return testimonials.slice(start, start + itemsPerPage);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={
          i < rating
            ? "fill-[#f59e0b] text-[#f59e0b]"
            : "fill-gray-700 text-gray-700"
        }
      />
    ));
  };

  return (
    <div className="min-h-screen bg-black text-white px-4 py-12 sm:px-6 sm:py-16 lg:px-16 lg:py-20">
      <div className="max-w-[1400px] mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            What Our Clients Say <span className="text-[#f59e0b]">💎</span>
          </h1>
          <p className="text-gray-400 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed mb-6 sm:mb-8">
            At Pinnacle, we're not just building structures - we're building
            relationships. Here's what some of our satisfied clients have to say
            about their experience with us.
          </p>

          {/* Rating Summary */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {testimonials.slice(0, 4).map((testimonial) => (
                  <img
                    key={testimonial.id}
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="w-10 h-10 rounded-full border-2 border-black object-cover"
                  />
                ))}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5">{renderStars(4.5)}</div>
              <span className="text-gray-400 text-sm sm:text-base">
                4.3/5 Rated by 300+ Professionals
              </span>
            </div>
          </div>
        </div>

        {/* Testimonials Grid - Desktop */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-6 mb-8">
          {getVisibleTestimonials().map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-[#1a1a1a] rounded-2xl p-6 lg:p-7 border border-gray-800 hover:border-gray-700 transition-all duration-300"
            >
              <div className="text-[#f59e0b] text-5xl mb-4 font-serif leading-none">
                "
              </div>
              <p className="text-gray-300 text-base mb-6 leading-relaxed min-h-[120px]">
                {testimonial.text}
              </p>
              <div className="flex items-center justify-between pt-6 border-t border-gray-800">
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-white">
                      {testimonial.author}
                    </h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-white font-semibold">
                    {testimonial.rating}/5
                  </span>
                  <Star size={18} className="fill-[#f59e0b] text-[#f59e0b]" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Carousel - Mobile/Tablet */}
        <div className="lg:hidden mb-8">
          <div className="space-y-6">
            {getVisibleTestimonials().map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-[#1a1a1a] rounded-2xl p-6 border border-gray-800"
              >
                <div className="text-[#f59e0b] text-5xl mb-4 font-serif leading-none">
                  "
                </div>
                <p className="text-gray-300 text-base mb-6 leading-relaxed">
                  {testimonial.text}
                </p>
                <div className="flex items-center justify-between pt-6 border-t border-gray-800">
                  <div className="flex items-center gap-3">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-white">
                        {testimonial.author}
                      </h4>
                      <p className="text-sm text-gray-500">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-white font-semibold">
                      {testimonial.rating}/5
                    </span>
                    <Star size={18} className="fill-[#f59e0b] text-[#f59e0b]" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-3">
          <button
            onClick={prevSlide}
            className="p-3 bg-[#1a1a1a] hover:bg-[#252525] rounded-lg transition-colors border border-gray-800"
            aria-label="Previous testimonials"
          >
            <ChevronLeft size={20} />
          </button>

          <div className="flex gap-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? "w-8 bg-[#f59e0b]"
                    : "w-2 bg-gray-700 hover:bg-gray-600"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="p-3 bg-[#1a1a1a] hover:bg-[#252525] rounded-lg transition-colors border border-gray-800"
            aria-label="Next testimonials"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ClientTestimonials;
