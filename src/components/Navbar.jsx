
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-white/20 bg-black/60 px-6 py-5 text-white shadow-md backdrop-blur-md">

      <div className="mx-auto flex max-w-7xl items-center justify-between">

        {/* Left Navigation */}
        <div className="hidden items-center gap-8 lg:flex">
          <a href="#projects" className="flex items-center gap-1 text-xs uppercase hover:text-orange-300">
            Projects <ChevronDown size={14} />
          </a>

          <a href="#services" className="text-xs uppercase hover:text-orange-300">
            Services
          </a>

          <a href="#about" className="text-xs uppercase hover:text-orange-300">
            About Us
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden"
          aria-label="Toggle navigation"
        >
          {isOpen ? <X size={25} /> : <Menu size={25} />}
        </button>

        {/* Logo */}
        <a
          href="#home"
          className="absolute left-1/2 -translate-x-1/2 text-xl font-bold tracking-wide"
        >
          BRICKLINE.
        </a>

        {/* Right Navigation */}
        <div className="hidden items-center gap-8 lg:flex">
          <a href="#properties" className="flex items-center gap-1 text-xs uppercase hover:text-orange-300">
            Properties <ChevronDown size={14} />
          </a>

          <a href="#loan" className="text-xs uppercase hover:text-orange-300">
            Loan
          </a>

          <a
            href="#contact"
            className="bg-orange-600 px-5 py-3 text-xs font-semibold uppercase transition hover:bg-orange-700"
          >
            Contact Us
          </a>
        </div>

      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="mt-6 flex flex-col gap-5 border-t border-white/30 pt-5 lg:hidden">

          <a href="#projects" onClick={() => setIsOpen(false)}>
            Projects
          </a>

          <a href="#services" onClick={() => setIsOpen(false)}>
            Services
          </a>

          <a href="#about" onClick={() => setIsOpen(false)}>
            About Us
          </a>

          <a href="#properties" onClick={() => setIsOpen(false)}>
            Properties
          </a>

          <a href="#loan" onClick={() => setIsOpen(false)}>
            Loan
          </a>

          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="w-fit bg-orange-600 px-5 py-3 text-xs font-semibold uppercase"
          >
            Contact Us
          </a>

        </div>
      )}

    </nav>
  );
}

export default Navbar;