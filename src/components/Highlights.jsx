
import { useEffect, useState } from "react";
import {
  House,
  LockKeyhole,
  Globe,
  ArrowUpRight,
  ArrowRight,
} from "lucide-react";

function Highlights() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setVisible(true);
    });

    return () => cancelAnimationFrame(frame);
  }, []);

  const features = [
    {
      icon: House,
      title: "Anywhere feels like home",
      description:
        "Every home is thoughtfully equipped for immediate comfort, offering a space where no detail is left to chance.",
    },
    {
      icon: LockKeyhole,
      title: "Live securely, without boundaries",
      description:
        "Each residence is crafted to provide unshakeable comfort, where every element is purposefully chosen.",
    },
    {
      icon: Globe,
      title: "Just a click away the world",
      description:
        "Step into a home where comfort greets you instantly and every detail reflects refined living.",
    },
  ];

  return (
    <section
      id="highlights"
      className="overflow-hidden bg-[#eeeeee] px-5 py-16 text-[#292929] sm:px-8 md:px-12 md:py-20 lg:px-16 lg:py-24"
    >
      <div className="mx-auto max-w-375">

        {/* Section Heading */}
        <div
          className={`mb-10 flex flex-wrap items-center justify-between gap-6 transition-all duration-700 ${
            visible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          <h2 className="text-4xl font-medium tracking-tight sm:text-5xl md:text-6xl">
            Outstanding highlights
          </h2>

          <a
            href="#contact"
            className="group flex items-center gap-3 border border-gray-400 px-5 py-3.5 text-xs font-semibold tracking-wider transition-all duration-300 hover:border-[#e65b3b] hover:bg-[#e65b3b] hover:text-white active:border-[#e65b3b] active:bg-[#e65b3b] active:text-white"
          >
            GET STARTED

            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-active:translate-x-1 group-active:-translate-y-1"
            />
          </a>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                style={{ transitionDelay: `${index * 150}ms` }}
                className={`group relative flex min-h-72.5 touch-manipulation flex-col justify-between overflow-hidden border border-white/50 bg-[#e9e4e1] p-7 transition-all duration-700 ease-out hover:-translate-y-2 hover:border-[#e65b3b]/30 hover:bg-[#f0e9e5] hover:shadow-xl active:scale-[0.98] active:border-[#e65b3b]/50 active:bg-[#f0e9e5] active:shadow-lg sm:min-h-77.5 md:p-9 ${
                  visible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-12 opacity-0"
                }`}
              >

                {/* Background Circle Animation */}
                <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-[#e65b3b]/0 transition-all duration-700 group-hover:scale-150 group-hover:bg-[#e65b3b]/10 group-active:scale-150 group-active:bg-[#e65b3b]/10" />

                {/* Icon */}
                <div className="relative z-10 mb-7">
                  <Icon
                    size={36}
                    strokeWidth={1.6}
                    className="text-[#df704f] transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6 group-active:scale-110 group-active:-rotate-6"
                  />
                </div>

                {/* Content */}
                <div className="relative z-10">

                  <h3 className="mb-4 text-2xl font-medium tracking-tight transition-colors duration-300 group-hover:text-[#d85c3b] group-active:text-[#d85c3b]">
                    {feature.title}
                  </h3>

                  <p className="max-w-sm text-sm leading-7 text-gray-600">
                    {feature.description}
                  </p>

                  <a
                    href="#projects"
                    className="mt-7 inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-gray-800 transition-colors duration-300 hover:text-[#df6040] active:text-[#df6040]"
                  >
                    LEARN MORE

                    <ArrowRight
                      size={15}
                      className="transition-transform duration-300 group-hover:translate-x-2 group-active:translate-x-2"
                    />
                  </a>

                </div>
              </div>
            );
          })}

        </div>

        {/* Bottom Indicator */}
        <div className="mt-12 flex justify-center">
          <div className="h-1 w-20 rounded-full bg-gray-300 transition-all duration-500 hover:w-32 hover:bg-[#df704f] active:w-32 active:bg-[#df704f]" />
        </div>

      </div>
    </section>
  );
}

export default Highlights;
