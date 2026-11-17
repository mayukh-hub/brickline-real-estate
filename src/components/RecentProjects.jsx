import { useEffect, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  SlidersHorizontal,
} from "lucide-react";

function RecentProjects() {
  const [visible, setVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setVisible(true);
    });

    return () => cancelAnimationFrame(frame);
  }, []);

  const filters = ["All", "Residential", "Business", "Luxury"];

  const projects = [
    {
      name: "Botanik kitchen & restaurant",
      category: "Residential",
      location: "New York",
      description:
        "Eco-friendly space fueled by the sun and enriched with nature.",
      image:
        "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Prime edge business park",
      category: "Business",
      location: "Downtown",
      description:
        "It's an innovative business center created with a focus on sustainable development.",
      image:
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85",
    },
    {
      name: "Renewashpere district",
      category: "Luxury",
      location: "California",
      description:
        "A circular economy in action — fully recycled, fully renewable.",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=85",
    },
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter(
          (project) => project.category === activeFilter
        );

  return (
    <section
      id="recent-projects"
      className="overflow-hidden bg-[#eeeeee] px-5 py-16 text-[#292929] sm:px-8 md:px-12 md:py-20 lg:px-16"
    >
      <div className="mx-auto max-w-[1500px]">

        {/* Section Heading */}
        <div
          className={`mb-9 text-center transition-all duration-700 ${
            visible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          <span className="inline-block rounded-full border border-gray-300 px-4 py-1.5 text-[9px] font-medium tracking-wide text-gray-600">
            Recent Projects
          </span>

          <h2 className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl md:text-5xl">
            <span className="text-gray-400">-</span>{" "}
            Redefining urban living{" "}
            <span className="text-gray-400">-</span>
          </h2>
        </div>

        {/* Filter Buttons */}
        <div
          className={`mb-6 flex flex-wrap items-center justify-center gap-2 transition-all delay-100 duration-700 ${
            visible
              ? "translate-y-0 opacity-100"
              : "translate-y-5 opacity-0"
          }`}
        >
          <SlidersHorizontal
            size={15}
            className="mr-1 text-gray-500"
          />

          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full border px-4 py-2 text-[10px] font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? "border-[#df6948] bg-[#df6948] text-white"
                  : "border-gray-300 bg-white/50 text-gray-600 hover:border-[#df6948] hover:text-[#df6948]"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {filteredProjects.map((project, index) => (
            <article
              key={project.name}
              style={{ transitionDelay: `${index * 150}ms` }}
              className={`group flex min-w-0 flex-col overflow-hidden border border-gray-200 bg-[#e9e6e4] transition-all duration-700 hover:-translate-y-2 hover:shadow-xl ${
                visible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              } ${
                filteredProjects.length === 3 && index === 1
                  ? "sm:col-span-2 lg:col-span-2"
                  : "lg:col-span-1"
              }`}
            >

              {/* Image */}
              <div className="group/image relative h-[190px] overflow-hidden bg-gray-300 sm:h-[210px] lg:h-[230px]">

                <img
                  src={project.image}
                  alt={project.name}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover/image:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/10 opacity-70 transition-opacity duration-500 group-hover/image:opacity-100" />

                {/* Featured Project Filters */}
                {project.category === "Business" && (
                  <div className="absolute left-3 top-3 flex max-w-[90%] flex-wrap gap-1.5">
                    {["Business", "Office", "Prime", "Modern"].map(
                      (tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/50 bg-black/30 px-2.5 py-1 text-[9px] text-white backdrop-blur-sm"
                        >
                          {tag}
                        </span>
                      )
                    )}
                  </div>
                )}

                {/* Project Category */}
                <span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-[9px] font-semibold tracking-wide text-gray-800">
                  {project.category}
                </span>

              </div>

              {/* Project Information */}
              <div className="flex flex-1 flex-col p-4 sm:p-5">

                <h3 className="text-lg font-medium leading-snug tracking-tight transition-colors duration-300 group-hover:text-[#df6948] sm:text-xl">
                  {project.name}
                </h3>

                <p className="mt-1 text-[10px] text-gray-500">
                  {project.location}
                </p>

                <p className="mt-3 flex-1 text-xs leading-5 text-gray-600">
                  {project.description}
                </p>

                {/* View Details */}
                <a
                  href="#contact"
                  className="group/link mt-5 flex items-center justify-between border border-gray-300 px-3 py-2.5 text-[9px] font-semibold tracking-wide text-gray-800 transition-all duration-300 hover:border-[#df6948] hover:bg-[#df6948] hover:text-white"
                >
                  VIEW DETAILS

                  <ArrowRight
                    size={14}
                    className="transition-transform duration-300 group-hover/link:translate-x-1"
                  />
                </a>

              </div>
            </article>
          ))}

        </div>

        {/* Explore More */}
        <div className="mt-10 flex justify-center">
          <a
            href="#projects"
            className="group inline-flex items-center gap-3 border-b border-gray-400 pb-2 text-xs font-semibold tracking-wide transition-colors duration-300 hover:border-[#df6948] hover:text-[#df6948]"
          >
            EXPLORE ALL PROJECTS

            <ArrowUpRight
              size={15}
              className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </a>
        </div>

      </div>
    </section>
  );
}

export default RecentProjects;