
import { useState } from "react";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";

function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: "Gregg Bergstrom",
      email: "bergstrom@gmail.com",
      review:
        "Working with Brickline was a fantastic experience from start to finish. They listened to exactly what I wanted, and within a few short weeks, I found my dream home.",
      secondReview:
        "They went above and beyond to ensure everything went smoothly. Communication was always clear and timely.",
      propertyImage:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=600",
      clientImage:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150",
    },
    {
      name: "Daniel Anderson",
      email: "daniel@gmail.com",
      review:
        "Brickline made finding our new home simple and enjoyable. Their team understood our needs and helped us discover the perfect property.",
      secondReview:
        "The entire process was professional, transparent and stress-free. I would happily recommend their services.",
      propertyImage:
        "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=600",
      clientImage:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150",
    },
    {
      name: "Sophia Williams",
      email: "sophia@gmail.com",
      review:
        "From the first consultation to receiving our keys, the Brickline team was incredibly helpful. They made every step easy to understand.",
      secondReview:
        "Their attention to detail and commitment to clients really made the difference. An excellent experience overall.",
      propertyImage:
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=600",
      clientImage:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150",
    },
  ];

  const current = testimonials[activeIndex];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const previousTestimonial = () => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="bg-white px-5 py-10 md:px-8 lg:px-10">

      {/* Heading */}
      <div className="mb-8 flex items-center justify-between gap-3">
        <h2 className="text-xl font-medium tracking-tight text-neutral-900 md:text-2xl">
          Our client testimonial
        </h2>

        <a
          href="#clients"
          className="flex shrink-0 items-center gap-2 border border-neutral-300 px-3 py-2 text-[10px] font-medium transition hover:bg-orange-500 hover:text-white"
        >
          OUR CLIENTS
          <ArrowUpRight size={13} />
        </a>
      </div>

      {/* Testimonial layout */}
      <div className="grid grid-cols-[minmax(100px,0.35fr)_minmax(0,1fr)] items-start gap-5 md:gap-8">

        {/* Left side: Property image + client */}
        <div>
          <img
            src={current.propertyImage}
            alt="Client property"
            className="h-24 w-full object-cover md:h-28"
          />

          <div className="mt-3 flex items-center gap-2">
            <img
              src={current.clientImage}
              alt={current.name}
              className="h-8 w-8 shrink-0 rounded-full object-cover"
            />

            <div className="min-w-0">
              <h3 className="truncate text-[10px] font-semibold text-neutral-900 md:text-xs">
                {current.name}
              </h3>
              <p className="truncate text-[9px] text-neutral-500 md:text-[10px]">
                {current.email}
              </p>
            </div>
          </div>
        </div>

        {/* Right side: Review + navigation */}
        <div>
          <p className="text-xs leading-6 text-neutral-700 md:text-sm md:leading-7">
            {current.review}
          </p>

          <p className="mt-3 text-xs leading-6 text-neutral-700 md:text-sm md:leading-7">
            {current.secondReview}
          </p>

          {/* Slider controls */}
          <div className="mt-6 flex items-center gap-3">
            <button
              onClick={previousTestimonial}
              aria-label="Previous testimonial"
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-neutral-300 transition hover:bg-orange-500 hover:text-white"
            >
              <ChevronLeft size={15} />
            </button>

            <div className="h-px flex-1 bg-neutral-200">
              <div
                className="h-[2px] bg-neutral-800 transition-all duration-300"
                style={{
                  width: `${((activeIndex + 1) / testimonials.length) * 100}%`,
                }}
              />
            </div>

            <button
              onClick={nextTestimonial}
              aria-label="Next testimonial"
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-neutral-300 transition hover:bg-orange-500 hover:text-white"
            >
              <ChevronRight size={15} />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom-right decorative property image */}
      <div className="mt-8 flex justify-end">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=500"
          alt="Modern property"
          className="h-24 w-44 object-cover md:h-28 md:w-56"
        />
      </div>
    </section>
  );
}

export default Testimonials;