import { useEffect, useState } from "react";
import { gsap } from "gsap";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    gsap.from(".nav-logo", { opacity: 0, x: -30, duration: 1, delay: 0.3 });
    gsap.from(".nav-link", { opacity: 0, y: -20, duration: 0.6, stagger: 0.1, delay: 0.5 });

    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "navbar-scrolled" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="nav-logo flex flex-col">
            <span
              className="gold-text text-2xl lg:text-3xl font-bold tracking-widest"
              style={{ fontFamily: "'Cormorant Garamond', serif", letterSpacing: "0.12em" }}
            >
              SAROVA
            </span>
            <span className="text-[10px] tracking-[0.3em] text-amber-400/70 uppercase -mt-1">
              Bar & Restaurant
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="nav-link text-sm tracking-widest uppercase text-amber-100/80 hover:text-amber-400 transition-colors duration-200 relative group"
                style={{ letterSpacing: "0.15em" }}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-amber-400 group-hover:w-full transition-all duration-300" />
              </button>
            ))}
            <a
              href="tel:+919821157133"
              className="ml-2 px-5 py-2 text-xs tracking-widest uppercase border border-amber-500/50 text-amber-400 hover:bg-amber-400 hover:text-black transition-all duration-300 rounded-sm"
            >
              Reserve
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span className={`block w-6 h-0.5 bg-amber-400 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-amber-400 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-amber-400 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{ background: "rgba(8,8,8,0.98)" }}
      >
        <div className="px-6 py-4 flex flex-col gap-4 border-t border-amber-900/30">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-left text-sm tracking-widest uppercase text-amber-100/80 hover:text-amber-400 transition-colors py-1"
            >
              {link.label}
            </button>
          ))}
          <a
            href="tel:+919821157133"
            className="mt-2 px-5 py-2.5 text-xs tracking-widest uppercase border border-amber-500/50 text-amber-400 hover:bg-amber-400 hover:text-black transition-all duration-300 rounded-sm text-center"
          >
            Call Now: +91 98211 57133
          </a>
        </div>
      </div>
    </nav>
  );
}
