
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

  const currentSlide = slides[activeSlide];

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

  return (
    <section
      id="home"
      className="
        relative isolate z-20
        w-full
        min-h-190
        sm:min-h-185
        lg:min-h-155
        xl:min-h-165
        overflow-visible
        bg-[#21130f]
        text-white
      "
    >
      {/* BACKGROUND IMAGE SLIDER */}

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
              object-[62%_center]
              md:object-center
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
          from-black/75
          via-black/40
          to-black/15
        " />

        <div className="
          absolute inset-0
          bg-linear-to-t
          from-black/55
          via-transparent
          to-black/25
        " />

      </div>

      {/* MAIN HERO CONTENT */}

      <div className="
        relative
        mx-auto
        flex
        min-h-190
        max-w-[1600px]
        items-center
        px-5
        pt-24
        pb-52

        sm:min-h-85
        sm:px-8
        sm:pt-28
        sm:pb-48

        lg:min-h-155
        lg:px-12
        lg:py-24
        lg:pb-28

        xl:min-h-165
        xl:px-16
      ">

        <div className="w-full max-w-170">

          {/* CATEGORY */}

          <div className="mb-5 flex items-center gap-3 sm:mb-6">

            <span className="h-px w-8 bg-orange-500" />

            <span className="
              text-[11px]
              tracking-[0.15em]
              text-white/90
              sm:text-xs
            ">
              {currentSlide.category}
            </span>

          </div>

          {/* HEADING */}

          <h1
            key={currentSlide.title}
            className="
              max-w-162.5
              text-[42px]
              font-light
              leading-[1.08]
              tracking-tight
              transition-all
              duration-700

              min-[400px]:text-5xl
              sm:text-6xl
              md:text-7xl
              lg:text-[68px]
              xl:text-[78px]
              2xl:text-[84px]
            "
          >
            {currentSlide.title}
            <span className="text-orange-400">.</span>
          </h1>

          {/* TAG */}

          <div className="mt-5 sm:mt-7">

            <span className="
              inline-block
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

          {/* DESCRIPTION */}

          <p className="
            mt-5
            max-w-105
            text-[13px]
            leading-6
            text-white/85

            sm:mt-7
            sm:text-sm
            sm:leading-7
          ">
            {currentSlide.description}
          </p>

          {/* HERO BUTTONS */}

          <div className="
            mt-7
            flex
            flex-wrap
            items-center
            gap-4

            sm:mt-9
            sm:gap-6
          ">

            <a
              href="#projects"
              className="
                group
                inline-flex
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
                sm:px-6
                sm:py-4
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
                inline-flex
                items-center
                gap-2
                text-[11px]
                text-white/90
                transition-colors
                hover:text-orange-400
                sm:text-xs
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

      {/* SLIDER CONTROLS */}

      <div className="
        absolute
        bottom-30
        left-5
        z-20
        flex
        w-[calc(100%-40px)]
        max-w-115
        flex-col
        gap-3

        sm:left-8
        sm:bottom-30

        lg:bottom-8
        lg:left-12

        xl:left-16
      ">

        <div className="flex items-center gap-4 sm:gap-5">

          {/* PREVIOUS */}

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

          {/* INDICATORS */}

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

          {/* NEXT */}

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

        {/* SLIDER DESCRIPTION */}

        <p className="
          hidden
          max-w-105
          text-center
          text-xs
          leading-5
          text-white/80
          sm:block
        ">
          Unlock the potential of real estate with strategic insights,
          innovative solutions, and exceptional service.
        </p>

      </div>

      {/* DESKTOP CONSULTATION CARD */}

      <div className="
        absolute
        -bottom-18
        right-[4%]
        z-30
        hidden
        w-45
        flex-col
        overflow-hidden
        bg-white
        shadow-xl

        md:flex
        lg:right-[5%]
        lg:w-47.5
        xl:w-50
      ">

        {/* ORANGE BUTTON */}

        <a
          href="#contact"
          className="
            flex
            h-13.5
            w-full
            items-center
            justify-center
            gap-2
            bg-[#e95b3e]
            px-2
            text-[11px]
            font-semibold
            text-white
            transition-all
            duration-300
            hover:bg-orange-700
            lg:text-xs
          "
        >
          <Phone size={15} />
          <span>Book a Consultation</span>
        </a>

        {/* CONSULTANT IMAGE */}

        <img
          src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=85"
          alt="Real estate consultant"
          className="
            h-36.25
            w-full
            object-cover
            object-top
            lg:h-38.75
          "
        />

      </div>

      {/* MOBILE CONSULTATION CARD */}

      <div className="
        absolute
        bottom-4
        left-1/2
        z-30
        flex
        w-[calc(100%-32px)]
        max-w-100
        -translate-x-1/2
        items-center
        gap-3
        border
        border-white/20
        bg-white/95
        p-2.5
        shadow-xl
        backdrop-blur-md

        md:hidden
      ">

        {/* CONSULTANT IMAGE */}

        <img
          src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=85"
          alt="Real estate consultant"
          className="
            h-16.25
            w-16.25
            shrink-0
            object-cover
            object-top
            min-[400px]:h-18
            min-[400px]:w-18
          "
        />

        {/* CONSULTATION CONTENT */}

        <div className="min-w-0 flex-1">

          <p className="text-[10px] text-gray-500 sm:text-xs">
            Need help finding a property?
          </p>

          <h3 className="
            mt-1
            text-xs
            font-semibold
            text-gray-900
            sm:text-sm
          ">
            Talk to our expert
          </h3>

          <a
            href="#contact"
            className="
              mt-2
              inline-flex
              items-center
              justify-center
              gap-2
              bg-[#e95b3e]
              px-3
              py-2
              text-[10px]
              font-semibold
              text-white
              transition
              hover:bg-orange-700
            "
          >
            <Phone size={12} />
            Book a Consultation
            <ArrowRight size={12} />
          </a>

        </div>

      </div>

    </section>
  );
}

export default Hero;
