
import { useState, useEffect } from "react";
import {
  ChevronRight,
  Phone,
} from "lucide-react";

const slides = [
  {
    category: "Signature home",
    title: "Your high-end Haven awaits",
    description:
      "Discover lavish interiors, curated design, and exceptional properties created for modern living.",
    tag: "Heat resistance",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=90",
  },
  {
    category: "Luxury residence",
    title: "Architecture meets modern living",
    description:
      "Experience exceptional architecture, beautiful surroundings, and thoughtfully designed spaces for your family.",
    tag: "Modern design",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=90",
  },
  {
    category: "Premium property",
    title: "Find your perfect living space",
    description:
      "Explore extraordinary homes with elegant interiors, premium amenities, and timeless architecture.",
    tag: "Premium living",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=2000&q=90",
  },
];

function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  // Automatic background image slider
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentSlide = slides[activeSlide];

  return (
    <section
      id="home"
      className="
        relative
        z-10
        h-170
        overflow-visible
        bg-[#dedee0]
        text-white
        sm:h-180
        md:h-165
      "
    >
      {/* Background Images */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {slides.map((slide, index) => (
          <img
            key={slide.image}
            src={slide.image}
            alt="Luxury property"
            className={`
              absolute inset-0
              h-full w-full
              object-cover
              object-center
              transition-all
              duration-1000
              ease-in-out
              ${
                activeSlide === index
                  ? "scale-100 opacity-100"
                  : "scale-110 opacity-0"
              }
            `}
          />
        ))}

        {/* Dark Overlay */}
        <div className="
          absolute inset-0
          bg-black/40
        " />

        <div className="
          absolute inset-0
          bg-linear-to-r
          from-black/55
          via-black/20
          to-black/10
        " />

        <div className="
          absolute inset-0
          bg-linear-to-t
          from-black/60
          via-transparent
          to-black/20
        " />
      </div>

      {/* Main Hero Content */}
      <div className="
        relative
        z-10
        mx-auto
        max-w-350
        px-5
        pt-28
        sm:px-8
        sm:pt-32
        md:flex
        md:h-full
        md:items-center
        md:px-10
        md:pt-0
        lg:px-16
      ">
        <div className="max-w-162.5">

          {/* Category */}
          <div className="mb-6 flex items-center gap-3">
            <span className="h-0.5 w-8 bg-[#e9502e]" />

            <span className="text-xs tracking-wide text-white/90">
              {currentSlide.category}
            </span>
          </div>

          {/* Heading */}
          <h1
            key={currentSlide.title}
            className="
              max-w-162.5
              text-[42px]
              font-light
              leading-[1.12]
              tracking-tight
              sm:text-5xl
              md:text-6xl
              lg:text-[68px]
            "
          >
            {currentSlide.title}
            <span className="text-[#e9502e]">.</span>
          </h1>

          {/* Design Tag */}
          <div className="mt-6">
            <span className="
              inline-block
              border border-white/60
              px-3 py-2
              text-[10px]
              tracking-wider
            ">
              {currentSlide.tag}
            </span>
          </div>

          {/* Description */}
          <p className="
            mt-6
            max-w-115
            text-sm
            leading-6
            text-white/85
            sm:text-base
          ">
            {currentSlide.description}
          </p>

          {/* Find Property Button */}
          <a
            href="#projects"
            className="
              group
              mt-8
              inline-flex
              items-center
              gap-4
              bg-white
              px-5 py-3.5
              text-[11px]
              font-bold
              tracking-wide
              text-gray-900
              transition-all
              duration-300
              hover:bg-[#e9502e]
              hover:text-white
            "
          >
            FIND PROPERTY

            <ChevronRight
              size={16}
              className="
                transition-transform
                group-hover:translate-x-1
              "
            />
          </a>
        </div>
      </div>

      {/* Right Side Feature Label */}
      <div className="
        absolute
        right-[12%]
        top-[43%]
        hidden
        -translate-y-1/2
        items-center
        gap-3
        rounded-full
        bg-black/30
        px-5 py-3
        text-xs
        backdrop-blur-sm
        md:flex
      ">
        <span className="
          h-2 w-2
          rounded-full
          bg-[#e9502e]
        " />

        {currentSlide.tag}
      </div>

     
{/* Book a Consultation Card */}

<div
  className="
    absolute
    -bottom-13
    left-1/2
    z-30
    w-[calc(100%-40px)]
    max-w-81.25
    -translate-x-1/2
    overflow-hidden
    rounded-md
    bg-[#eeeeef]
    shadow-[0_12px_30px_rgba(0,0,0,0.12)]

    md:-bottom-11.25
    md:left-auto
    md:right-[6%]
    md:w-81.25
    md:max-w-none
    md:translate-x-0
  "
>
  {/* Orange Header */}
  <a
    href="#contact"
    className="
      flex
      h-12.5
      w-full
      items-center
      justify-center
      gap-3
      bg-[#d94b30]
      text-sm
      font-semibold
      text-white
      transition-colors
      hover:bg-[#c94128]
    "
  >
    <Phone size={16} />
    <span>Book a Consultation</span>
  </a>

  {/* Consultant Information */}
  <div className="
    flex
    items-center
    gap-4
    bg-[#eeeeef]
    p-4
    sm:p-4
  ">
    {/* Consultant Image */}
    <img
      src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=85"
      alt="David Warner"
      className="
        h-30
        w-25
        shrink-0
        rounded-sm
        object-cover
        object-top
      "
    />

    {/* Consultant Details */}
    <div className="min-w-0 flex-1">
      <h3 className="
        text-base
        font-semibold
        text-[#e9502e]
      ">
        David Warner
      </h3>

      <p className="
        mt-1
        text-sm
        leading-5
        text-gray-600
      ">
        Senior advisor
      </p>

      <p className="
        mt-3
        text-sm
        font-semibold
        text-[#e9502e]
      ">
        Available Today
      </p>
    </div>
  </div>
</div>

    </section>
  );
}

export default Hero;



