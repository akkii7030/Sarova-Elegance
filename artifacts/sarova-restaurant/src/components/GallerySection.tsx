import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const galleryImages = [
  {
    url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
    alt: "Elegant Restaurant Interior",
    label: "Dining Hall",
    span: "col-span-2",
  },
  {
    url: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&q=80",
    alt: "Premium Bar Counter",
    label: "Bar Lounge",
    span: "",
  },
  {
    url: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80",
    alt: "Delicious Food Dishes",
    label: "Signature Dishes",
    span: "",
  },
  {
    url: "https://images.unsplash.com/photo-1574936559280-3e2b0e37c50b?w=800&q=80",
    alt: "Chicken Tikka",
    label: "Tandoor Specialties",
    span: "",
  },
  {
    url: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&q=80",
    alt: "Indian Biryani",
    label: "Biryani",
    span: "",
  },
  {
    url: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80",
    alt: "Cocktails and Drinks",
    label: "Bar Menu",
    span: "",
  },
  {
    url: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
    alt: "Ambient Dining Experience",
    label: "Dining Experience",
    span: "col-span-2",
  },
];

export default function GallerySection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    gsap.fromTo(
      sectionRef.current.querySelectorAll(".gallery-animate"),
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section id="gallery" className="py-24 lg:py-32 relative overflow-hidden" ref={sectionRef}>
      <div className="absolute inset-0" style={{ background: "#111111" }} />
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 20% 50%, rgba(139,0,0,0.05) 0%, transparent 60%)" }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="gallery-animate flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-16 bg-amber-500/40" />
            <span className="badge-gold">Visual Journey</span>
            <span className="h-px w-16 bg-amber-500/40" />
          </div>
          <h2
            className="gallery-animate text-4xl sm:text-5xl lg:text-6xl font-bold mb-4"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            Our <span className="gold-text">Gallery</span>
          </h2>
          <div className="gallery-animate gold-divider mb-6" />
          <p className="gallery-animate text-amber-100/50 max-w-xl mx-auto">
            A glimpse into the ambiance, cuisine, and experiences that define Sarova
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-64">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className={`gallery-animate gallery-item relative group cursor-pointer ${img.span} h-64 sm:h-72`}
              style={{ minHeight: "240px" }}
            >
              <img
                src={img.url}
                alt={img.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {/* Overlay */}
              <div
                className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-all duration-400"
                style={{ background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 60%)" }}
              >
                <div>
                  <p className="text-amber-400 font-semibold text-sm tracking-widest uppercase">{img.label}</p>
                  <div className="h-px w-8 bg-amber-400/60 mt-1" />
                </div>
              </div>
              {/* Gold border on hover */}
              <div className="absolute inset-0 border border-transparent group-hover:border-amber-500/40 transition-all duration-400 rounded-sm" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
