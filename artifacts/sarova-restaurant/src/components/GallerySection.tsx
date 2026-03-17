import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// ── Custom SVG Emoji Icons ──────────────────────────────────────────────────
const SvgFork = () => (
  <svg viewBox="0 0 32 32" fill="none" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 3v8a4 4 0 0 0 4 4v13" stroke="#C9A227" strokeWidth="2" strokeLinecap="round"/>
    <path d="M14 3v26" stroke="#C9A227" strokeWidth="2" strokeLinecap="round"/>
    <path d="M18 3v8a4 4 0 0 1-4 4" stroke="#C9A227" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const SvgStar = () => (
  <svg viewBox="0 0 32 32" fill="none" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 3l3.09 6.26L26 10.27l-5 4.87 1.18 6.88L16 18.77l-6.18 3.25L11 15.14 6 10.27l6.91-1.01L16 3z"
      fill="#C9A227" stroke="#C9A227" strokeWidth="1" strokeLinejoin="round"/>
  </svg>
);

const SvgFlame = () => (
  <svg viewBox="0 0 32 32" fill="none" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 29c-5.523 0-10-4.03-10-9 0-3.5 2-6.5 5-8-0.5 2 0.5 4 2 5 0-4 3-7 5-10 1 3 3 5 3 8 1.5-1 2-3 1.5-5 2.5 2 3.5 5 3.5 8 0 5.523-4.477 11-10 11z"
      fill="url(#flameGrad)" stroke="#C9A227" strokeWidth="0.5"/>
    <defs>
      <linearGradient id="flameGrad" x1="16" y1="29" x2="16" y2="7" gradientUnits="userSpaceOnUse">
        <stop stopColor="#C9A227"/>
        <stop offset="1" stopColor="#ef4444"/>
      </linearGradient>
    </defs>
  </svg>
);

const SvgWine = () => (
  <svg viewBox="0 0 32 32" fill="none" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 3h12l-2 10a6 6 0 0 1-8 0L10 3z" stroke="#C9A227" strokeWidth="1.8" strokeLinejoin="round"/>
    <path d="M16 13v13M12 26h8" stroke="#C9A227" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
);

const SvgCamera = () => (
  <svg viewBox="0 0 32 32" fill="none" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="9" width="26" height="18" rx="3" stroke="#C9A227" strokeWidth="1.8"/>
    <circle cx="16" cy="18" r="5" stroke="#C9A227" strokeWidth="1.8"/>
    <path d="M11 9l2-4h6l2 4" stroke="#C9A227" strokeWidth="1.8" strokeLinejoin="round"/>
    <circle cx="25" cy="13" r="1.5" fill="#C9A227"/>
  </svg>
);

const SvgSparkle = () => (
  <svg viewBox="0 0 32 32" fill="none" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 3v5M16 24v5M3 16h5M24 16h5M7.05 7.05l3.54 3.54M21.41 21.41l3.54 3.54M7.05 24.95l3.54-3.54M21.41 10.59l3.54-3.54"
      stroke="#C9A227" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="16" cy="16" r="4" fill="#C9A227" fillOpacity="0.3" stroke="#C9A227" strokeWidth="1.5"/>
  </svg>
);

const SvgLeaf = () => (
  <svg viewBox="0 0 32 32" fill="none" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 26c0 0 4-14 14-16 4-1 8 0 8 0s-1 4-4 7c-4 4-10 5-10 5l-8 4z"
      fill="#22c55e" fillOpacity="0.25" stroke="#22c55e" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M6 26l10-10" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const SvgChef = () => (
  <svg viewBox="0 0 32 32" fill="none" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="16" cy="11" rx="8" ry="6" stroke="#C9A227" strokeWidth="1.8"/>
    <path d="M8 14h16v4a8 8 0 0 1-16 0v-4z" stroke="#C9A227" strokeWidth="1.8"/>
    <path d="M13 14v4M16 14v4M19 14v4" stroke="#C9A227" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M10 8a4 4 0 0 1 4-4M22 8a4 4 0 0 0-4-4" stroke="#C9A227" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const SvgMoon = () => (
  <svg viewBox="0 0 32 32" fill="none" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
    <path d="M27 17A11 11 0 1 1 15 5a9 9 0 0 0 12 12z"
      fill="#C9A227" fillOpacity="0.2" stroke="#C9A227" strokeWidth="1.8" strokeLinejoin="round"/>
  </svg>
);

// ── Gallery Data ────────────────────────────────────────────────────────────
const galleryImages = [
  // Row 1 — wide hero
  {
    url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=90",
    alt: "Elegant Restaurant Interior",
    label: "Dining Hall",
    emoji: <SvgSparkle />,
    tag: "Ambiance",
    size: "col-span-2 row-span-2",
  },
  {
    url: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=90",
    alt: "Candlelit Fine Dining",
    label: "Fine Dining",
    emoji: <SvgMoon />,
    tag: "Evening",
    size: "",
  },
  {
    url: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=90",
    alt: "Cocktails and Drinks",
    label: "Bar Menu",
    emoji: <SvgWine />,
    tag: "Beverages",
    size: "",
  },
  // Row 2
  {
    url: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=90",
    alt: "Gourmet Pizza",
    label: "Signature Dishes",
    emoji: <SvgFlame />,
    tag: "Chef's Pick",
    size: "",
  },
  {
    url: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=800&q=90",
    alt: "Chicken Tikka",
    label: "Tandoor Specialties",
    emoji: <SvgFork />,
    tag: "Tandoor",
    size: "",
  },
  // Row 3
  {
    url: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&q=90",
    alt: "Indian Biryani",
    label: "Biryani",
    emoji: <SvgLeaf />,
    tag: "Signature",
    size: "",
  },
  {
    url: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&q=90",
    alt: "Premium Bar Counter",
    label: "Bar Lounge",
    emoji: <SvgWine />,
    tag: "Lounge",
    size: "",
  },
  {
    url: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=90",
    alt: "Restaurant Kitchen",
    label: "Our Kitchen",
    emoji: <SvgChef />,
    tag: "Behind Scenes",
    size: "col-span-2",
  },
  // Row 4
  {
    url: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=90",
    alt: "Gourmet Plating",
    label: "Gourmet Plating",
    emoji: <SvgStar />,
    tag: "Presentation",
    size: "",
  },
  {
    url: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&q=90",
    alt: "Fresh Salad Bowl",
    label: "Fresh & Healthy",
    emoji: <SvgLeaf />,
    tag: "Healthy",
    size: "",
  },
  {
    url: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&q=90",
    alt: "Pancakes Breakfast",
    label: "Breakfast Menu",
    emoji: <SvgFlame />,
    tag: "Morning",
    size: "",
  },
  {
    url: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800&q=90",
    alt: "Dessert Platter",
    label: "Desserts",
    emoji: <SvgSparkle />,
    tag: "Sweet Endings",
    size: "",
  },
  // Row 5 — wide footer
  {
    url: "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=1200&q=90",
    alt: "Outdoor Terrace Dining",
    label: "Terrace Dining",
    emoji: <SvgCamera />,
    tag: "Al Fresco",
    size: "col-span-2",
  },
  {
    url: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=800&q=90",
    alt: "Craft Cocktails",
    label: "Craft Cocktails",
    emoji: <SvgWine />,
    tag: "Mixology",
    size: "",
  },
  {
    url: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=800&q=90",
    alt: "Avocado Toast",
    label: "Brunch Specials",
    emoji: <SvgLeaf />,
    tag: "Brunch",
    size: "",
  },
];

// ── Filter categories ───────────────────────────────────────────────────────
const FILTERS = [
  { label: "All", emoji: <SvgSparkle />, value: "all" },
  { label: "Ambiance", emoji: <SvgCamera />, value: "Ambiance" },
  { label: "Dishes", emoji: <SvgFork />, value: "dishes" },
  { label: "Bar", emoji: <SvgWine />, value: "bar" },
  { label: "Chef's Pick", emoji: <SvgChef />, value: "Chef's Pick" },
];

const DISH_TAGS = ["Signature", "Tandoor", "Biryani", "Gourmet Plating", "Healthy", "Morning", "Sweet Endings", "Brunch", "Chef's Pick", "Presentation"];
const BAR_TAGS  = ["Beverages", "Lounge", "Mixology"];

function matchFilter(tag: string, filter: string) {
  if (filter === "all") return true;
  if (filter === "Ambiance") return ["Ambiance", "Evening", "Al Fresco", "Behind Scenes"].includes(tag);
  if (filter === "dishes")   return DISH_TAGS.includes(tag);
  if (filter === "bar")      return BAR_TAGS.includes(tag);
  return tag === filter;
}

// ── Component ───────────────────────────────────────────────────────────────
export default function GallerySection() {
  const sectionRef  = useRef<HTMLDivElement>(null);
  const gridRef     = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState("all");
  const [lightbox, setLightbox] = useState<null | typeof galleryImages[0]>(null);

  const filtered = galleryImages.filter((img) => matchFilter(img.tag, active));

  // entrance animation
  useEffect(() => {
    if (!sectionRef.current) return;
    gsap.fromTo(
      sectionRef.current.querySelectorAll(".gallery-animate"),
      { opacity: 0, y: 40 },
      {
        opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
      }
    );
  }, []);

  // re-animate on filter change
  useEffect(() => {
    if (!gridRef.current) return;
    gsap.fromTo(
      gridRef.current.querySelectorAll(".gallery-item"),
      { opacity: 0, scale: 0.92 },
      { opacity: 1, scale: 1, duration: 0.45, stagger: 0.06, ease: "power2.out" }
    );
  }, [active]);

  return (
    <section id="gallery" className="py-24 lg:py-32 relative overflow-hidden" ref={sectionRef}>
      {/* Background */}
      <div className="absolute inset-0" style={{ background: "#0e0e0e" }} />
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 15% 40%, rgba(139,0,0,0.07) 0%, transparent 55%), radial-gradient(ellipse at 85% 60%, rgba(201,162,39,0.05) 0%, transparent 55%)" }} />

      {/* Decorative corner SVGs */}
      <svg className="absolute top-8 left-8 opacity-20" width="80" height="80" viewBox="0 0 80 80" fill="none">
        <path d="M4 4 L4 30 M4 4 L30 4" stroke="#C9A227" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="4" cy="4" r="3" fill="#C9A227"/>
      </svg>
      <svg className="absolute top-8 right-8 opacity-20" width="80" height="80" viewBox="0 0 80 80" fill="none">
        <path d="M76 4 L76 30 M76 4 L50 4" stroke="#C9A227" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="76" cy="4" r="3" fill="#C9A227"/>
      </svg>
      <svg className="absolute bottom-8 left-8 opacity-20" width="80" height="80" viewBox="0 0 80 80" fill="none">
        <path d="M4 76 L4 50 M4 76 L30 76" stroke="#C9A227" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="4" cy="76" r="3" fill="#C9A227"/>
      </svg>
      <svg className="absolute bottom-8 right-8 opacity-20" width="80" height="80" viewBox="0 0 80 80" fill="none">
        <path d="M76 76 L76 50 M76 76 L50 76" stroke="#C9A227" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="76" cy="76" r="3" fill="#C9A227"/>
      </svg>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ── */}
        <div className="text-center mb-14">
          <div className="gallery-animate flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-16 bg-amber-500/40" />
            <span className="badge-gold flex items-center gap-1.5">
              <SvgCamera /> Visual Journey
            </span>
            <span className="h-px w-16 bg-amber-500/40" />
          </div>
          <h2
            className="gallery-animate text-4xl sm:text-5xl lg:text-6xl font-bold mb-4"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            Our <span className="gold-text">Gallery</span>
          </h2>
          <div className="gallery-animate gold-divider mb-6" />
          <p className="gallery-animate text-amber-100/50 max-w-xl mx-auto text-base leading-relaxed">
            A curated glimpse into the ambiance, cuisine, and experiences that define Sarova Elegance
          </p>

          {/* Stats row */}
          <div className="gallery-animate flex items-center justify-center gap-8 mt-8 flex-wrap">
            {[
              { icon: <SvgStar />, val: "4.9", label: "Rating" },
              { icon: <SvgFork />, val: "120+", label: "Dishes" },
              { icon: <SvgWine />, val: "60+", label: "Cocktails" },
              { icon: <SvgChef />, val: "15+", label: "Chefs" },
            ].map((s, i) => (
              <div key={i} className="flex flex-col items-center gap-1">
                <div className="flex items-center gap-1.5">
                  {s.icon}
                  <span className="gold-text text-xl font-bold" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>{s.val}</span>
                </div>
                <span className="text-amber-100/40 text-xs tracking-widest uppercase">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Filter Tabs ── */}
        <div className="gallery-animate flex items-center justify-center gap-2 flex-wrap mb-10">
          {FILTERS.map((f) => (
            <button
              key={f.value}
              onClick={() => setActive(f.value)}
              className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs tracking-widest uppercase transition-all duration-300 border ${
                active === f.value
                  ? "bg-amber-500/20 border-amber-500/60 text-amber-400"
                  : "border-amber-500/20 text-amber-100/40 hover:border-amber-500/40 hover:text-amber-300"
              }`}
            >
              {f.emoji} {f.label}
            </button>
          ))}
        </div>

        {/* ── Gallery Grid ── */}
        <div
          ref={gridRef}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 auto-rows-[220px]"
        >
          {filtered.map((img, i) => (
            <div
              key={`${active}-${i}`}
              onClick={() => setLightbox(img)}
              className={`gallery-item gallery-animate relative group cursor-pointer ${img.size}`}
            >
              <img
                src={img.url}
                alt={img.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />

              {/* Gradient overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-between p-4"
                style={{ background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)" }}
              >
                {/* Top badge */}
                <div className="flex justify-end">
                  <span className="badge-gold text-[10px] flex items-center gap-1">
                    {img.emoji} {img.tag}
                  </span>
                </div>
                {/* Bottom label */}
                <div>
                  <p className="text-amber-400 font-semibold text-sm tracking-widest uppercase flex items-center gap-1.5">
                    {img.emoji} {img.label}
                  </p>
                  <div className="h-px w-8 bg-amber-400/60 mt-1.5" />
                  <p className="text-amber-100/50 text-xs mt-1 flex items-center gap-1">
                    <SvgCamera /> Click to enlarge
                  </p>
                </div>
              </div>

              {/* Gold border on hover */}
              <div className="absolute inset-0 border border-transparent group-hover:border-amber-500/50 transition-all duration-400 rounded-lg pointer-events-none" />

              {/* Corner sparkle */}
              <div className="absolute top-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <SvgSparkle />
              </div>
            </div>
          ))}
        </div>

        {/* ── Bottom tagline ── */}
        <div className="gallery-animate text-center mt-14 flex flex-col items-center gap-3">
          <div className="flex items-center gap-3">
            <span className="h-px w-12 bg-amber-500/30" />
            <SvgFlame />
            <span className="text-amber-100/40 text-sm tracking-widest uppercase">Every dish tells a story</span>
            <SvgFlame />
            <span className="h-px w-12 bg-amber-500/30" />
          </div>
          <div className="flex items-center gap-2 mt-1">
            {[<SvgStar />, <SvgStar />, <SvgStar />, <SvgStar />, <SvgStar />].map((s, i) => (
              <span key={i}>{s}</span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Lightbox ── */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.92)" }}
          onClick={() => setLightbox(null)}
        >
          {/* Decorative SVG frame */}
          <svg className="absolute top-6 left-6 opacity-30" width="60" height="60" viewBox="0 0 60 60" fill="none">
            <path d="M3 3 L3 22 M3 3 L22 3" stroke="#C9A227" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          <svg className="absolute top-6 right-6 opacity-30" width="60" height="60" viewBox="0 0 60 60" fill="none">
            <path d="M57 3 L57 22 M57 3 L38 3" stroke="#C9A227" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          <svg className="absolute bottom-6 left-6 opacity-30" width="60" height="60" viewBox="0 0 60 60" fill="none">
            <path d="M3 57 L3 38 M3 57 L22 57" stroke="#C9A227" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          <svg className="absolute bottom-6 right-6 opacity-30" width="60" height="60" viewBox="0 0 60 60" fill="none">
            <path d="M57 57 L57 38 M57 57 L38 57" stroke="#C9A227" strokeWidth="2" strokeLinecap="round"/>
          </svg>

          <div
            className="relative max-w-4xl w-full rounded-xl overflow-hidden"
            style={{ border: "1px solid rgba(201,162,39,0.4)", boxShadow: "0 0 60px rgba(201,162,39,0.2)" }}
            onClick={(e) => e.stopPropagation()}
          >
            <img src={lightbox.url.replace("w=800", "w=1400")} alt={lightbox.alt} className="w-full max-h-[75vh] object-cover" />
            <div className="absolute bottom-0 left-0 right-0 p-5" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.9), transparent)" }}>
              <p className="text-amber-400 font-bold text-lg flex items-center gap-2" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                {lightbox.emoji} {lightbox.label}
              </p>
              <span className="badge-gold text-[10px] mt-1 inline-flex items-center gap-1">
                <SvgSparkle /> {lightbox.tag}
              </span>
            </div>
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center text-amber-400 hover:text-white transition-colors"
              style={{ background: "rgba(0,0,0,0.7)", border: "1px solid rgba(201,162,39,0.4)" }}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
