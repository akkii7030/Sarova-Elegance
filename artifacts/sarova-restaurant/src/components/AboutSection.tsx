import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    gsap.fromTo(
      sectionRef.current.querySelectorAll(".about-animate"),
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        stagger: 0.18,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  const features = [
    { icon: "🍛", title: "Authentic Indian Cuisine", desc: "Traditional recipes with bold, rich flavors" },
    { icon: "🍺", title: "Premium Bar", desc: "Curated beverages, cocktails & mocktails" },
    { icon: "✨", title: "Vibrant Atmosphere", desc: "Perfect for family dinners & evening gatherings" },
    { icon: "🚗", title: "Multiple Services", desc: "Dine-in, Drive-through & Home Delivery" },
  ];

  return (
    <section id="about" className="py-24 lg:py-32 relative overflow-hidden" ref={sectionRef}>
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(180deg, #111111 0%, #0d0d0d 50%, #111111 100%)" }}
      />
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 80% 50%, rgba(139,0,0,0.06) 0%, transparent 60%)" }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — Text */}
          <div>
            <div className="about-animate flex items-center gap-3 mb-4">
              <span className="h-px w-10 bg-amber-500/60" />
              <span className="badge-gold">Our Story</span>
            </div>
            <h2
              className="about-animate text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              About{" "}
              <span className="gold-text">Sarova</span>
              <br />
              Bar & Restaurant
            </h2>
            <div className="about-animate gold-divider mb-8" style={{ margin: "0 0 2rem 0" }} />

            <p className="about-animate text-amber-100/70 text-lg leading-relaxed mb-6">
              Sarova Bar & Restaurant is a popular dining destination in Kandivali East offering
              delicious Indian cuisine, premium beverages and a vibrant bar experience.
            </p>
            <p className="about-animate text-amber-100/60 leading-relaxed mb-8">
              Guests can enjoy flavorful dishes, refreshing drinks and a lively atmosphere
              perfect for family dinners and evening gatherings. Located conveniently at
              Western Urban Rd, next to Mahindra & Mahindra Ltd, we welcome you every day
              from 11:00 AM to 12:30 AM.
            </p>

            {/* Rating badge */}
            <div className="about-animate inline-flex items-center gap-3 px-6 py-3 luxury-border rounded-sm mb-8">
              <div className="flex gap-1">
                {"★★★★☆".split("").map((s, i) => (
                  <span key={i} className={s === "★" ? "text-amber-400 text-xl" : "text-amber-900 text-xl"}>{s}</span>
                ))}
              </div>
              <span className="text-amber-100/80 font-semibold text-xl">4.3</span>
              <span className="text-amber-100/40 text-sm">Google Rating</span>
            </div>

            <div className="about-animate flex gap-4">
              <a
                href="tel:+919821157133"
                className="px-8 py-3 text-sm tracking-widest uppercase font-medium transition-all duration-300"
                style={{
                  background: "linear-gradient(135deg, #8B0000, #a00000)",
                  color: "#f0d060",
                  letterSpacing: "0.15em",
                  borderRadius: "2px",
                }}
              >
                Call Us
              </a>
              <button
                onClick={() => document.querySelector("#menu")?.scrollIntoView({ behavior: "smooth" })}
                className="px-8 py-3 text-sm tracking-widest uppercase font-medium border border-amber-500/40 text-amber-400 hover:bg-amber-400 hover:text-black transition-all duration-300"
                style={{ letterSpacing: "0.15em", borderRadius: "2px" }}
              >
                View Menu
              </button>
            </div>
          </div>

          {/* Right — Feature Cards */}
          <div className="grid grid-cols-2 gap-4">
            {features.map((f, i) => (
              <div
                key={i}
                className="about-animate menu-card p-6 rounded-sm flex flex-col gap-3"
              >
                <span className="text-3xl">{f.icon}</span>
                <h4 className="text-amber-300 font-semibold text-sm tracking-wide">{f.title}</h4>
                <p className="text-amber-100/50 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}

            {/* Hours card */}
            <div className="about-animate menu-card col-span-2 p-6 rounded-sm">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-amber-400 font-semibold tracking-widest uppercase text-xs mb-2">Opening Hours</h4>
                  <p className="text-2xl font-semibold text-amber-100" style={{ fontFamily: "serif" }}>
                    11:00 AM – 12:30 AM
                  </p>
                  <p className="text-amber-100/50 text-sm mt-1">Monday – Sunday · All Days</p>
                </div>
                <div className="text-5xl opacity-20">🕐</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
