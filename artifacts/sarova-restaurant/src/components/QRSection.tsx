import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { QRCodeSVG } from "qrcode.react";

gsap.registerPlugin(ScrollTrigger);

export default function QRSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    gsap.fromTo(
      sectionRef.current.querySelectorAll(".qr-animate"),
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

    // Pulsing glow animation
    gsap.to(".qr-glow-pulse", {
      boxShadow: "0 0 60px rgba(201,162,39,0.5), 0 0 120px rgba(139,0,0,0.3)",
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
  }, []);

  // Use current page URL as QR target (menu section)
  const qrUrl = typeof window !== "undefined"
    ? `${window.location.origin}/#menu`
    : "https://sarova-restaurant.replit.app/#menu";

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden" ref={sectionRef}>
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(180deg, #0a0a0a, #120000 50%, #0a0a0a)" }}
      />
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, rgba(139,0,0,0.12) 0%, transparent 70%)" }} />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Header */}
        <div className="qr-animate flex items-center justify-center gap-3 mb-4">
          <span className="h-px w-16 bg-amber-500/40" />
          <span className="badge-gold">Digital Menu</span>
          <span className="h-px w-16 bg-amber-500/40" />
        </div>
        <h2
          className="qr-animate text-4xl sm:text-5xl lg:text-6xl font-bold mb-4"
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
        >
          Scan Our <span className="gold-text">QR Menu</span>
        </h2>
        <div className="qr-animate gold-divider mb-6" />
        <p className="qr-animate text-amber-100/50 mb-12 max-w-lg mx-auto">
          Scan the QR code below with your smartphone to instantly access our complete digital menu
        </p>

        {/* QR Code */}
        <div className="qr-animate inline-block">
          <div
            className="qr-glow-pulse p-8 rounded-lg inline-block"
            style={{
              background: "rgba(15,15,15,0.95)",
              border: "1px solid rgba(201,162,39,0.4)",
              boxShadow: "0 0 40px rgba(201,162,39,0.3), 0 0 80px rgba(139,0,0,0.2)",
            }}
          >
            {/* QR Code with styled frame */}
            <div
              className="relative p-4 rounded-md"
              style={{ background: "#ffffff" }}
            >
              <QRCodeSVG
                value={qrUrl}
                size={200}
                bgColor="#ffffff"
                fgColor="#1a0000"
                level="H"
                style={{ display: "block" }}
              />
              {/* Corner decorations */}
              <div className="absolute top-1 left-1 w-5 h-5 border-t-2 border-l-2 border-red-800" />
              <div className="absolute top-1 right-1 w-5 h-5 border-t-2 border-r-2 border-red-800" />
              <div className="absolute bottom-1 left-1 w-5 h-5 border-b-2 border-l-2 border-red-800" />
              <div className="absolute bottom-1 right-1 w-5 h-5 border-b-2 border-r-2 border-red-800" />
            </div>

            <div className="mt-4 text-center">
              <p className="text-amber-400 font-semibold tracking-widest uppercase text-xs mb-1">
                Scan to View Full Menu
              </p>
              <p className="text-amber-100/30 text-xs">सरोवा बार & रेस्टोरेंट</p>
            </div>
          </div>
        </div>

        {/* Additional info */}
        <div className="qr-animate mt-10 flex flex-wrap gap-6 justify-center">
          <div className="flex items-center gap-2 text-amber-100/40 text-sm">
            <span className="text-amber-500">✓</span>
            No App Required
          </div>
          <div className="flex items-center gap-2 text-amber-100/40 text-sm">
            <span className="text-amber-500">✓</span>
            Instant Access
          </div>
          <div className="flex items-center gap-2 text-amber-100/40 text-sm">
            <span className="text-amber-500">✓</span>
            Always Updated
          </div>
        </div>
      </div>
    </section>
  );
}
