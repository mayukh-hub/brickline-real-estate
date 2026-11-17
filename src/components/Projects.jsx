
import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

function Projects() {
  // Golden Horizon Villa slideshow images
  const villaImages = [
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1000&q=85",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1000&q=85",
    "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1000&q=85",
    "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1000&q=85",
  ];

  const [activeImage, setActiveImage] = useState(0);

  // Automatically change image every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % villaImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // Previous image
  const prevImage = () => {
    setActiveImage(
      (prev) => (prev - 1 + villaImages.length) % villaImages.length
    );
  };

  // Next image
  const nextImage = () => {
    setActiveImage((prev) => (prev + 1) % villaImages.length);
  };

  return (
    <section
      id="projects"
      className="bg-white px-5 py-16 sm:px-8 md:px-10 md:py-20 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <h2 className="max-w-2xl text-4xl font-medium leading-tight tracking-tight text-neutral-900 sm:text-5xl md:text-6xl">
          Executed & in-progress
          <br />
          projects <span className="text-gray-400">-</span>
        </h2>

        {/* Main Grid */}
        <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-12">

          {/* Left Featured Project */}
          <div>

            {/* Golden Horizon Villa Slideshow */}
            <div className="group relative h-64 w-full overflow-hidden sm:h-80 md:h-105">

              <img
                key={activeImage}
                src={villaImages[activeImage]}
                alt="Golden Horizon Villa"
                onClick={nextImage}
                className="h-full w-full cursor-pointer object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
              />

              {/* Image Counter */}
              <div className="absolute bottom-4 right-4 bg-black/60 px-4 py-2 text-xs text-white">
                0{activeImage + 1} / 0{villaImages.length}
              </div>

            </div>

            {/* Property Details */}
            <div className="mt-4 flex flex-wrap items-center justify-between gap-2">
              <h3 className="text-xl font-medium sm:text-2xl">
                Golden Horizon Villa
              </h3>

              <span className="text-sm text-gray-500">
                South Carolina, 2025
              </span>
            </div>

            <p className="mt-4 max-w-lg text-sm leading-6 text-gray-600">
              Experience elevated living in luxury high-rise
              apartments offering stunning views, modern comforts,
              and convenience.
            </p>
          </div>

          {/* Right Content */}
          <div className="flex flex-col justify-between">

            {/* Description */}
            <div>
              <p className="max-w-lg text-sm leading-6 text-gray-700">
                Designed with innovation, built in prime locations,
                and rooted in sustainability—our projects redefine
                modern living with comfort and elegance.
              </p>

              {/* Slider Controls */}
              <div className="mt-8 flex items-center gap-5">

                <button
                  onClick={prevImage}
                  aria-label="Previous project image"
                  className="rounded-full border border-gray-300 p-3 transition duration-300 hover:bg-black hover:text-white"
                >
                  <ArrowLeft size={18} />
                </button>

                {/* Progress Line */}
                <div className="h-px flex-1 bg-gray-300">
                  <div
                    className="h-px bg-black transition-all duration-500"
                    style={{
                      width: `${((activeImage + 1) / villaImages.length) * 100}%`,
                    }}
                  ></div>
                </div>

                <button
                  onClick={nextImage}
                  aria-label="Next project image"
                  className="rounded-full border border-gray-300 p-3 transition duration-300 hover:bg-black hover:text-white"
                >
                  <ArrowRight size={18} />
                </button>

              </div>

              <a
                href="#more-projects"
                className="mt-6 inline-block text-sm underline underline-offset-4 transition hover:text-orange-600"
              >
                Explore more projects that we have done
              </a>
            </div>

            {/* Original Two Small Project Cards */}
            <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-5">

              {/* Card 1 */}
              <div className="group overflow-hidden">
                <div className="h-36 overflow-hidden sm:h-48 md:h-64">
                  <img
                    src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=700&q=85"
                    alt="Maison Noire"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                <h3 className="mt-3 text-base font-medium sm:text-lg">
                  Maison Noire
                </h3>

                <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                  Oklahoma City, 2024
                </p>
              </div>

              {/* Card 2 */}
              <div className="group overflow-hidden">
                <div className="h-36 overflow-hidden sm:h-48 md:h-64">
                  <img
                    src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=700&q=85"
                    alt="Villa Bellagio"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                <h3 className="mt-3 text-base font-medium sm:text-lg">
                  Villa Bellagio
                </h3>

                <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                  San Francisco, 2024
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
