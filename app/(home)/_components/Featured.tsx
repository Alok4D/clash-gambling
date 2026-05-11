"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";

function FeaturedProjects() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const projects = [
    {
      id: 1,
      title: "The Grand Estate",
      description:
        "The Grand Estate is a luxurious residential development featuring 12 bespoke homes, each with unique architectural elements and premium finishes.",
      location: "Upper Macungie Township, PA",
      image:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    },
    {
      id: 2,
      title: "The Business Hub",
      description:
        "The Business Hub is a state-of-the-art commercial office space designed to meet the needs of modern businesses with innovative workspace solutions.",
      location: "Upper Macungie Township, PA",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    },
    {
      id: 3,
      title: "The Village",
      description:
        "The Village is a community development featuring a mix of residential and commercial spaces, designed to create a vibrant neighborhood atmosphere.",
      location: "Upper Macungie Township, PA",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    },
    {
      id: 4,
      title: "Modern Loft",
      description:
        "A stunning urban living space featuring contemporary design and premium amenities in the heart of the city.",
      location: "Upper Macungie Township, PA",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    },
    {
      id: 5,
      title: "Skyline Tower",
      description:
        "A prestigious high-rise development offering breathtaking views and luxury living experiences.",
      location: "Upper Macungie Township, PA",
      image:
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
    },
    {
      id: 6,
      title: "Garden Residences",
      description:
        "Eco-friendly residential complex surrounded by lush landscaping and sustainable features.",
      location: "Upper Macungie Township, PA",
      image:
        "https://images.unsplash.com/photo-1605146769289-440113cc3d00?w=800&q=80",
    },
  ];

  const itemsPerPage = 3;
  const totalSlides = Math.ceil(projects.length / itemsPerPage);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const getVisibleProjects = () => {
    const start = currentSlide * itemsPerPage;
    return projects.slice(start, start + itemsPerPage);
  };

  return (
    <div className="min-h-screen bg-black text-white px-4 py-8 sm:px-6 sm:py-12 lg:px-16 lg:py-16">
      <div className="max-w-[1400px] mx-auto">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-start mb-8 sm:mb-12 gap-6">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 flex items-start gap-2 sm:gap-3">
              <span className="text-[#f59e0b] text-4xl sm:text-5xl lg:text-6xl">
                ✏️
              </span>
              <span className="leading-tight">Featured Projects</span>
            </h1>
            <p className="text-gray-400 text-sm sm:text-base lg:text-lg leading-relaxed">
              we've built a reputation for delivering exceptional results and
              exceeding our clients' expectations. From luxurious residential
              homes to state-of-the-art commercial properties, our team of
              experts is dedicated to bringing your vision to life.
            </p>
          </div>
          <button className="w-full sm:w-auto px-6 py-3 bg-[#1a1a1a] hover:bg-[#252525] text-white rounded-lg transition-colors whitespace-nowrap border border-gray-800 text-sm sm:text-base">
            View all Projects
          </button>
        </div>

        {/* Projects Grid - Always 3 columns on desktop, stacks on mobile/tablet */}
        <div className="mb-8">
          {/* Mobile/Tablet: Single column carousel */}
          <div className="block lg:hidden">
            <div className="space-y-6">
              {getVisibleProjects().map((project) => (
                <div
                  key={project.id}
                  className="bg-[#0a0a0a] rounded-2xl overflow-hidden border border-gray-900 hover:border-gray-700 transition-all duration-300 group"
                >
                  <div className="relative h-56 sm:h-64 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5 sm:p-6">
                    <h3 className="text-xl sm:text-2xl font-bold mb-3">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex items-center gap-2 text-gray-500 text-sm mb-6">
                      <MapPin size={16} />
                      <span>{project.location}</span>
                    </div>
                    <button className="w-full py-3 bg-[#f59e0b] hover:bg-[#d97706] text-black font-semibold rounded-lg transition-colors text-sm sm:text-base">
                      View Property
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop: 3 column grid */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-6">
            {getVisibleProjects().map((project) => (
              <div
                key={project.id}
                className="bg-[#0a0a0a] rounded-2xl overflow-hidden border border-gray-900 hover:border-gray-700 transition-all duration-300 group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex items-center gap-2 text-gray-500 text-sm mb-6">
                    <MapPin size={16} />
                    <span>{project.location}</span>
                  </div>
                  <button className="w-full py-3 bg-[#f59e0b] hover:bg-[#d97706] text-black font-semibold rounded-lg transition-colors">
                    View Property
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between">
          <div className="text-gray-400 text-sm sm:text-base">
            <span className="text-white font-semibold text-base sm:text-lg">
              {String(currentSlide + 1).padStart(2, "0")}
            </span>
            <span className="text-gray-600">/</span>
            <span className="text-gray-600">
              {String(totalSlides).padStart(2, "0")}
            </span>
          </div>
          <div className="flex gap-2 sm:gap-3">
            <button
              onClick={prevSlide}
              className="p-2 sm:p-3 bg-[#1a1a1a] hover:bg-[#252525] rounded-lg transition-colors border border-gray-800"
              aria-label="Previous slide"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextSlide}
              className="p-2 sm:p-3 bg-[#1a1a1a] hover:bg-[#252525] rounded-lg transition-colors border border-gray-800"
              aria-label="Next slide"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedProjects;
