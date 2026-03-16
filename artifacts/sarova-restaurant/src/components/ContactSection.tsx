import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    gsap.fromTo(
      sectionRef.current.querySelectorAll(".contact-animate"),
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
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
    <section id="contact" className="py-24 lg:py-32 relative overflow-hidden" ref={sectionRef}>
      <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, #111111, #0a0a0a)" }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="contact-animate flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-16 bg-amber-500/40" />
            <span className="badge-gold">Find Us</span>
            <span className="h-px w-16 bg-amber-500/40" />
          </div>
          <h2
            className="contact-animate text-4xl sm:text-5xl lg:text-6xl font-bold mb-4"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            Contact <span className="gold-text">Us</span>
          </h2>
          <div className="contact-animate gold-divider" />
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Info */}
          <div className="space-y-6">
            {/* Address */}
            <div className="contact-animate menu-card p-6 rounded-sm flex items-start gap-5">
              <div className="text-3xl">📍</div>
              <div>
                <h4 className="text-amber-400 font-semibold tracking-widest uppercase text-xs mb-2">Address</h4>
                <p className="text-amber-100/80 leading-relaxed">
                  Western Urban Rd,<br />
                  Next to Mahindra and Mahindra Ltd,<br />
                  Narsi Pada, Kandivali East,<br />
                  Mumbai, Maharashtra 400101
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="contact-animate menu-card p-6 rounded-sm flex items-center gap-5">
              <div className="text-3xl">📞</div>
              <div>
                <h4 className="text-amber-400 font-semibold tracking-widest uppercase text-xs mb-2">Phone</h4>
                <a
                  href="tel:+919821157133"
                  className="text-amber-100/80 text-lg hover:text-amber-400 transition-colors"
                >
                  +91 98211 57133
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="contact-animate menu-card p-6 rounded-sm flex items-center gap-5">
              <div className="text-3xl">🕐</div>
              <div>
                <h4 className="text-amber-400 font-semibold tracking-widest uppercase text-xs mb-2">Opening Hours</h4>
                <p className="text-amber-100/80">Monday – Sunday</p>
                <p className="text-2xl font-semibold text-amber-100" style={{ fontFamily: "serif" }}>
                  11:00 AM – 12:30 AM
                </p>
              </div>
            </div>

            {/* Services */}
            <div className="contact-animate menu-card p-6 rounded-sm">
              <h4 className="text-amber-400 font-semibold tracking-widest uppercase text-xs mb-4">Our Services</h4>
              <div className="flex flex-wrap gap-3">
                {["🍽 Dine-in", "🚗 Drive-through", "📦 Delivery"].map((s) => (
                  <span key={s} className="badge-gold">{s}</span>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="contact-animate flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+919821157133"
                className="flex-1 py-4 text-sm tracking-widest uppercase font-medium text-center transition-all duration-300"
                style={{
                  background: "linear-gradient(135deg, #8B0000, #a00000)",
                  color: "#f0d060",
                  letterSpacing: "0.15em",
                  borderRadius: "2px",
                  boxShadow: "0 0 20px rgba(139,0,0,0.4)",
                }}
              >
                📞 Call Now
              </a>
              <a
                href="https://maps.google.com/?q=Sarova+Bar+Restaurant+Kandivali+East+Mumbai"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-4 text-sm tracking-widest uppercase font-medium text-center border border-amber-500/40 text-amber-400 hover:bg-amber-400 hover:text-black transition-all duration-300"
                style={{ letterSpacing: "0.15em", borderRadius: "2px" }}
              >
                📍 Get Directions
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="contact-animate">
            <div className="luxury-border rounded-sm overflow-hidden" style={{ height: "420px" }}>
              <iframe
                title="Sarova Bar & Restaurant Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.7!2d72.8742!3d19.2074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7d5c2d7a1b5%3A0x1234567890abcdef!2sKandivali+East%2C+Mumbai%2C+Maharashtra+400101!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin&style=element:geometry%7Ccolor:0x242f3e&style=element:labels.text.fill%7Ccolor:0x746855&style=element:labels.text.stroke%7Ccolor:0x242f3e&style=feature:road%7Celement:geometry%7Ccolor:0x38414e&style=feature:water%7Ccolor:0x17263c"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) brightness(0.9)" }}
                allowFullScreen
                loading="lazy"
              />
            </div>
            <p className="text-amber-100/40 text-xs text-center mt-3 tracking-wide">
              Western Urban Rd, Next to Mahindra & Mahindra Ltd, Narsi Pada, Kandivali East, Mumbai
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
