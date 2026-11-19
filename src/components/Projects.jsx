
import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";

function Projects() {
  const projects = [
    {
      name: "Golden Horizon Villa",
      location: "South Carolina",
      year: "2025",
      description:
        "Experience elevated living in luxury high-rise apartments offering stunning views, modern comforts, and convenience.",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=90",
    },
    {
      name: "Maison Noire",
      location: "Oklahoma City",
      year: "2024",
      description:
        "A beautiful architectural masterpiece combining contemporary design with natural surroundings and premium comfort.",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=90",
    },
    {
      name: "Villa Bellagio",
      location: "San Francisco",
      year: "2024",
      description:
        "Discover modern luxury with elegant interiors, spacious living areas, and timeless architectural details.",
      image:
        "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1000&q=90",
    },
    {
      name: "Modern Retreat",
      location: "Los Angeles",
      year: "2025",
      description:
        "Thoughtfully designed spaces with exceptional architecture, beautiful finishes, and a relaxed lifestyle.",
      image:
        "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1200&q=90",
    },
  ];

  const [activeProject, setActiveProject] = useState(0);

  const featured = projects[activeProject];

  const secondProject =
    projects[(activeProject + 1) % projects.length];

  const thirdProject =
    projects[(activeProject + 2) % projects.length];

  const nextProject = () => {
    setActiveProject(
      (prev) => (prev + 1) % projects.length
    );
  };

  const previousProject = () => {
    setActiveProject(
      (prev) =>
        (prev - 1 + projects.length) % projects.length
    );
  };

  return (
    <section
      id="projects"
      className="relative z-0 bg-[#eeeeee] px-5 py-14 text-[#252525] sm:px-8 md:px-10 md:py-16 lg:px-16 lg:py-20"
    >
      <div className="mx-auto max-w-375">

        <div className="mb-8 md:mb-10">
          <h2 className="max-w-3xl text-4xl font-medium leading-[1.12] tracking-tight sm:text-5xl md:text-6xl lg:text-[68px]">
            Executed & In-progress
            <br />
            projects
            <span className="text-gray-400"> -</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">

          <div className="lg:col-span-6">

            <div className="group relative aspect-[1.12/1] w-full overflow-hidden bg-gray-300">

              <img
                key={featured.image}
                src={featured.image}
                alt={featured.name}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/25 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            </div>

            <div className="mt-3 flex flex-wrap items-center justify-between gap-2">

              <h3 className="text-xl font-medium tracking-tight sm:text-2xl">
                {featured.name}
              </h3>

              <p className="text-xs text-gray-600 sm:text-sm">
                {featured.location}, {featured.year}
              </p>

            </div>

            <p className="mt-4 max-w-xl text-xs leading-6 text-gray-600 sm:text-sm">
              {featured.description}
            </p>

          </div>

          <div className="flex flex-col lg:col-span-6">

            <div className="mb-7 lg:mb-9 lg:mt-1.25 lg:pl-5">

              <p className="max-w-lg text-xs leading-6 text-gray-700 sm:text-sm">
                Designed with innovation, built in prime locations,
                and rooted in sustainability—our projects redefine
                modern living with comfort and elegance.
              </p>

              <div className="mt-6 flex max-w-56.25 items-center gap-4">

                <button
                  onClick={previousProject}
                  aria-label="Previous projects"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gray-300 text-gray-600 transition-all duration-300 hover:border-orange-600 hover:bg-orange-600 hover:text-white"
                >
                  <ArrowLeft size={16} />
                </button>

                <div className="h-0.5 flex-1 overflow-hidden bg-gray-300">
                  <div
                    className="h-full bg-gray-700 transition-all duration-500"
                    style={{
                      width: `${((activeProject + 1) / projects.length) * 100}%`,
                    }}
                  />
                </div>

                <button
                  onClick={nextProject}
                  aria-label="Next projects"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gray-300 text-gray-600 transition-all duration-300 hover:border-orange-600 hover:bg-orange-600 hover:text-white"
                >
                  <ArrowRight size={16} />
                </button>

              </div>

              <a
                href="#contact"
                className="mt-5 inline-flex items-center gap-1 text-xs text-gray-700 transition-colors hover:text-orange-600"
              >
                <span className="font-semibold underline underline-offset-2">
                  Explore more project
                </span>

                <span>that we have done</span>

                <ArrowUpRight size={13} />
              </a>

            </div>

            <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:mt-auto">

              <div className="group min-w-0">

                <div className="aspect-square overflow-hidden bg-gray-300">
                  <img
                    key={secondProject.image}
                    src={secondProject.image}
                    alt={secondProject.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                <h3 className="mt-3 text-base font-medium sm:text-lg">
                  {secondProject.name}
                </h3>

                <p className="mt-1 text-xs text-gray-600">
                  {secondProject.location}, {secondProject.year}
                </p>

              </div>

              <div className="group min-w-0">

                <div className="aspect-square overflow-hidden bg-gray-300">
                  <img
                    key={thirdProject.image}
                    src={thirdProject.image}
                    alt={thirdProject.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                <h3 className="mt-3 text-base font-medium sm:text-lg">
                  {thirdProject.name}
                </h3>

                <p className="mt-1 text-xs text-gray-600">
                  {thirdProject.location}, {thirdProject.year}
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
