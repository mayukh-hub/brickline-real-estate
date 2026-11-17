
import { useState, useEffect } from "react";

import {
  ArrowLeft,
  ArrowRight,
  ChevronRight,
  Phone,
  MoveUpRight,
} from "lucide-react";

const slides = [
  {
    category: "Signature home",
    title: "Your high-end Haven awaits",
    tag: "Heat resistance",
    description:
      "Discover lavish interiors, curated design, premium amenities, and personalized services that define an elevated lifestyle.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=90",
  },
  {
    category: "Luxury residence",
    title: "Architecture meets modern living",
    tag: "Modern design",
    description:
      "Experience exceptional architecture, beautiful surroundings, and thoughtfully designed spaces for your family.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=90",
  },
  {
    category: "Premium property",
    title: "Find your perfect living space",
    tag: "Premium living",
    description:
      "Explore extraordinary properties designed to bring comfort, elegance, and inspiration into everyday life.",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=2000&q=90",
  },
];

function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  // Automatic slider
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  // Next slide
  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  // Previous slide
  const prevSlide = () => {
    setActiveSlide(
      (prev) => (prev - 1 + slides.length) % slides.length
    );
  };

  const currentSlide = slides[activeSlide];

  return (
    <section
  id="home"
  className="
    relative
    z-20
    isolate
    mb-0
    overflow-visible
    bg-[#d9d9db]
    text-white
    min-h-180
    md:min-h-195
  "
>

      {/* Background Image Slider */}
      <div className="absolute inset-0 -z-10 overflow-hidden">

        {slides.map((slide, index) => (
          <img
            key={slide.image}
            src={slide.image}
            alt="Luxury real estate property"
            className={`
              absolute inset-0
              h-full w-full
              object-cover
              object-center
              transition-all
              duration-1500
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
          bg-linear-to-r
          from-black/70
          via-black/35
          to-black/10
        " />

        <div className="
          absolute inset-0
          bg-linear-to-t
          from-black/40
          via-transparent
          to-black/20
        " />

      </div>

      {/* Main Hero Content */}
      <div className="
        relative
        mx-auto
        flex
        min-h-180
        max-w-375
        items-center
        px-5
        pb-40
        pt-28

        sm:px-8

        md:min-h-195
        md:px-10
        md:pb-0
        md:pt-0

        lg:px-16
      ">

        <div className="w-full max-w-2xl">

          {/* Category */}
          <div className="mb-6 flex items-center gap-3">

            <span className="h-px w-8 bg-orange-500" />

            <span className="text-xs tracking-wider text-white/90">
              {currentSlide.category}
            </span>

          </div>

          {/* Heading */}
          <h1
            key={currentSlide.title}
            className="
              max-w-2xl
              text-4xl
              font-light
              leading-[1.08]
              tracking-tight
              transition-all
              duration-700

              sm:text-5xl
              md:text-7xl
              lg:text-[82px]
            "
          >
            {currentSlide.title}

            <span className="text-orange-400">.</span>

          </h1>

          {/* Tag */}
          <div className="mt-7">

            <span className="
              border
              border-white/40
              bg-black/20
              px-3
              py-2
              text-[10px]
              tracking-wider
              backdrop-blur-sm
            ">
              {currentSlide.tag}
            </span>

          </div>

          {/* Description */}
          <p className="
            mt-7
            max-w-md
            text-sm
            leading-6
            text-white/85
          ">
            {currentSlide.description}
          </p>

          {/* Hero Buttons */}
          <div className="mt-10 flex flex-wrap items-center gap-5">

            <a
              href="#projects"
              className="
                group
                flex
                items-center
                gap-3
                bg-white
                px-5
                py-3.5
                text-[11px]
                font-semibold
                text-gray-900
                transition-all
                duration-300
                hover:bg-[#e95b3e]
                hover:text-white
              "
            >
              FIND PROPERTY

              <ChevronRight
                size={16}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />

            </a>

            <a
              href="#about"
              className="
                group
                flex
                items-center
                gap-2
                text-xs
                text-white/90
                transition-colors
                hover:text-orange-400
              "
            >
              DISCOVER MORE

              <MoveUpRight
                size={15}
                className="
                  transition-transform
                  duration-300
                  group-hover:-translate-y-1
                  group-hover:translate-x-1
                "
              />

            </a>

          </div>

        </div>

      </div>

      {/* Slider Controls */}
      <div className="
        absolute
        bottom-28
        left-5
        z-20
        flex
        w-[calc(100%-40px)]
        max-w-115
        flex-col
        gap-4

        sm:left-8

        md:bottom-8
        md:left-10

        lg:left-16
      ">

        <div className="flex items-center gap-5">

          {/* Previous Button */}
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous slide"
            className="
              flex
              h-9
              w-9
              shrink-0
              items-center
              justify-center
              rounded-full
              border
              border-white/50
              transition-all
              duration-300
              hover:border-orange-500
              hover:bg-orange-600
            "
          >
            <ArrowLeft size={16} />
          </button>

          {/* Slider Indicators */}
          <div className="flex flex-1 gap-2">

            {slides.map((slide, index) => (
              <button
                key={slide.category}
                type="button"
                onClick={() => setActiveSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={
                  activeSlide === index ? "true" : undefined
                }
                className="
                  h-1
                  flex-1
                  overflow-hidden
                  rounded-full
                  bg-white/30
                "
              >
                <span
                  className={`
                    block
                    h-full
                    transition-all
                    duration-500

                    ${
                      activeSlide === index
                        ? "w-full bg-white"
                        : "w-0"
                    }
                  `}
                />
              </button>
            ))}

          </div>

          {/* Next Button */}
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next slide"
            className="
              flex
              h-9
              w-9
              shrink-0
              items-center
              justify-center
              rounded-full
              border
              border-white/50
              transition-all
              duration-300
              hover:border-orange-500
              hover:bg-orange-600
            "
          >
            <ArrowRight size={16} />
          </button>

        </div>

        {/* Slider Description */}
        <p className="
          max-w-md
          text-center
          text-xs
          leading-5
          text-white/80
        ">
          Unlock the potential of real estate with strategic insights,
          innovative solutions, and exceptional service.
        </p>

      </div>

     
{/* Book a Consultation Card */}

<div
  className="
    absolute
    bottom-6
    left-1/2
    z-30
    flex
    h-16.25
    w-[calc(100%-32px)]
    max-w-105
    -translate-x-1/2
    items-center
    gap-0
    overflow-hidden
    border
    border-white/30
    bg-black/50
    shadow-xl
    backdrop-blur-sm

    md:-bottom-13.75
    md:left-auto
    md:right-[3%]
    md:h-auto
    md:w-37.5
    md:max-w-none
    md:translate-x-0
    md:flex-col
    md:items-start
    md:overflow-visible
    md:border-0
    md:bg-transparent
    md:shadow-none
    md:backdrop-blur-none
  "
>
  {/* Consultant Image */}

  <img
    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=85"
    alt="Real estate consultant"
    className="
      order-1
      my-auto
      h-12.5
      w-12.5
      shrink-0
      object-cover
      object-top

      md:order-2
      md:my-0
      md:h-28.75
      md:w-21.25
      md:self-center
    "
  />

  {/* Consultation Button */}

  <a
    href="#contact"
    className="
      order-2
      mx-0
      my-auto
      flex
      h-10
      min-h-0
      flex-1
      self-center
      items-center
      justify-center
      gap-2
      bg-[#e95b3e]
      px-2
      py-0
      text-center
      text-[10px]
      font-semibold
      tracking-wide
      text-white
      transition-all
      duration-300
      hover:bg-orange-700

      md:order-1
      md:my-0
      md:h-10.5
      md:w-full
      md:flex-none
      md:self-auto
    "
  >
    <Phone size={13} className="shrink-0" />

    <span className="whitespace-nowrap">
      Book a Consultation
    </span>
  </a>

</div>

    </section>
  );
}

export default Hero;
