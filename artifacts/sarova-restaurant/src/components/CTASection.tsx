import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CTASection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    gsap.fromTo(
      sectionRef.current.querySelectorAll(".cta-animate"),
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section className="py-24 relative overflow-hidden" ref={sectionRef}>
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, #4a0000 0%, #8B0000 35%, #6b0000 65%, #2a0000 100%)",
        }}
      />
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, rgba(201,162,39,0.08) 0%, transparent 70%)" }} />
      {/* Pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, rgba(201,162,39,0.5) 0px, rgba(201,162,39,0.5) 1px, transparent 1px, transparent 40px),
            repeating-linear-gradient(-45deg, rgba(201,162,39,0.5) 0px, rgba(201,162,39,0.5) 1px, transparent 1px, transparent 40px)`,
        }}
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div className="cta-animate flex items-center justify-center gap-3 mb-6">
          <span className="h-px w-16 bg-amber-400/40" />
          <span className="badge-gold">Make a Reservation</span>
          <span className="h-px w-16 bg-amber-400/40" />
        </div>
        <h2
          className="cta-animate text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-amber-50"
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
        >
          Reserve Your Table
          <br />
          <span className="gold-text">Today</span>
        </h2>
        <div className="cta-animate gold-divider mb-8" />
        <p className="cta-animate text-amber-100/70 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
          Join us for an unforgettable dining experience at Sarova Bar & Restaurant.
          Open 7 days a week, 11:00 AM – 12:30 AM.
        </p>
        <div className="cta-animate flex flex-wrap gap-4 justify-center">
          <a
            href="tel:+919821157133"
            className="px-10 py-4 text-sm tracking-widest uppercase font-semibold transition-all duration-300"
            style={{
              background: "linear-gradient(135deg, #C9A227, #f0d060)",
              color: "#1a0000",
              letterSpacing: "0.2em",
              borderRadius: "2px",
              boxShadow: "0 0 30px rgba(201,162,39,0.4)",
            }}
          >
            📞 Call Now
          </a>
          <a
            href="https://wa.me/919821157133"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 text-sm tracking-widest uppercase font-semibold border-2 border-amber-400/60 text-amber-300 hover:bg-amber-400 hover:text-black transition-all duration-300"
            style={{ letterSpacing: "0.2em", borderRadius: "2px" }}
          >
            Reserve Table
          </a>
        </div>
        <p className="cta-animate mt-8 text-amber-100/40 text-sm">
          +91 98211 57133 · Kandivali East, Mumbai
        </p>
      </div>
    </section>
  );
}
