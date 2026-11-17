
import { useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  House,
  MapPin,
  Plus,
} from "lucide-react";

function PropertySpotlight() {
  const properties = [
    {
      name: "Stillwater Retreat",
      location: "Austin, United States",
      category: "Property spotlight",
      title: "Where every home lives in balance with nature",
      image:
        "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=2000&q=90",
    },
    {
      name: "Modern Forest Villa",
      location: "California, United States",
      category: "Featured residence",
      title: "Discover a lifestyle surrounded by nature",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=90",
    },
    {
      name: "Golden Horizon",
      location: "Colorado, United States",
      category: "Luxury property",
      title: "A beautiful space designed for better living",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=90",
    },
  ];

  const [activeSlide, setActiveSlide] = useState(0);
  const [animate, setAnimate] = useState(true);

  const activeProperty = properties[activeSlide];

  const changeSlide = (direction) => {
    setAnimate(false);

    setTimeout(() => {
      setActiveSlide((prev) => {
        return (
          (prev + direction + properties.length) %
          properties.length
        );
      });

      setAnimate(true);
    }, 150);
  };

  // Automatic slider
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % properties.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [properties.length]);

  return (
    <section
      id="property-showcase"
      className="bg-[#eeeeee] px-3 py-10 sm:px-5 md:px-8 lg:px-12 lg:py-14"
    >
      <div className="relative mx-auto h-120 max-w-[1600px] overflow-hidden bg-gray-800 sm:h-137.5 lg:h-155">

        {/* Background Image */}
        {properties.map((property, index) => (
          <img
            key={property.image}
            src={property.image}
            alt={property.name}
            className={`absolute inset-0 h-full w-full object-cover transition-all duration-1500 ease-in-out ${
              activeSlide === index
                ? "scale-100 opacity-100"
                : "scale-110 opacity-0"
            }`}
          />
        ))}

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-black/55 via-black/20 to-black/10" />
        <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-black/10" />

        {/* Top Left Category */}
        <div className="absolute left-5 top-7 z-10 sm:left-8 sm:top-10 lg:left-10">
          <span
            className={`inline-block rounded-full border border-white/30 bg-black/20 px-3 py-1.5 text-[9px] text-white backdrop-blur-sm transition-all duration-700 ${
              animate
                ? "translate-y-0 opacity-100"
                : "translate-y-3 opacity-0"
            }`}
          >
            {activeProperty.category}
          </span>
        </div>

        {/* Top Right Location */}
        <div className="absolute right-5 top-7 z-10 text-right sm:right-8 sm:top-10 lg:right-10">
          <div className="flex items-center justify-end gap-1 text-[9px] text-white/80">
            <MapPin size={11} />
            {activeProperty.location}
          </div>

          <h3 className="mt-1 text-sm font-medium text-white sm:text-base">
            {activeProperty.name}
          </h3>
        </div>

        {/* Main Content */}
        <div className="absolute bottom-24 left-5 z-10 max-w-162.5 sm:bottom-28 sm:left-8 lg:bottom-28 lg:left-10">

          <h1
            key={activeProperty.title}
            className={`max-w-150 text-3xl font-medium leading-[1.12] tracking-tight text-white transition-all duration-700 sm:text-4xl md:text-5xl lg:text-[58px] ${
              animate
                ? "translate-y-0 opacity-100"
                : "translate-y-6 opacity-0"
            }`}
          >
            {activeProperty.title}
          </h1>

        </div>

        {/* Bottom Controls */}
        <div className="absolute bottom-6 left-5 right-5 z-20 flex items-center justify-between sm:bottom-8 sm:left-8 sm:right-8 lg:bottom-10 lg:left-10 lg:right-10">

          {/* Property Buttons */}
          <div className="flex flex-wrap items-center gap-2">

            <a
              href="#projects"
              className="group flex items-center gap-2 border border-white/50 bg-white/10 px-3 py-3 text-[9px] font-semibold tracking-wide text-white backdrop-blur-sm transition-all duration-300 hover:bg-[#df6040]"
            >
              <House size={13} />
              4 BED RENTAL
              <ArrowUpRight
                size={12}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>

            <a
              href="#recent-projects"
              className="group flex items-center gap-3 bg-white px-4 py-3 text-[9px] font-semibold tracking-wide text-gray-800 transition-all duration-300 hover:bg-[#df6040] hover:text-white"
            >
              FIND PROPERTY
              <ArrowRight size={13} />
            </a>

          </div>

          {/* Slider Navigation */}
          <div className="flex items-center gap-2">

            <button
              onClick={() => changeSlide(-1)}
              aria-label="Previous property"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/40 bg-white/10 text-white backdrop-blur-sm transition-all duration-300 hover:-rotate-45 hover:bg-white hover:text-gray-900 sm:h-11 sm:w-11"
            >
              <ArrowLeft size={17} />
            </button>

            <button
              onClick={() => changeSlide(1)}
              aria-label="Next property"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/40 bg-[#df6040] text-white transition-all duration-300 hover:rotate-45 hover:bg-white hover:text-gray-900 sm:h-11 sm:w-11"
            >
              <Plus size={18} />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}

export default PropertySpotlight;