export default function Footer() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden" style={{ background: "#080808", borderTop: "1px solid rgba(201,162,39,0.1)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Logo & description */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <span
                className="gold-text text-4xl font-bold"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", letterSpacing: "0.12em" }}
              >
                SAROVA
              </span>
              <div className="text-xs tracking-[0.3em] text-amber-400/50 uppercase mt-0.5">
                Bar & Restaurant
              </div>
            </div>
            <p className="text-amber-100/40 text-sm leading-relaxed mb-2">
              सरोवा बार & रेस्टोरेंट
            </p>
            <p className="text-amber-100/50 text-sm leading-relaxed mb-6 max-w-xs">
              A premium dining and bar experience in Kandivali East, Mumbai. Authentic Indian cuisine,
              vibrant atmosphere, and unforgettable evenings.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              {[
                { icon: "f", label: "Facebook", href: "#" },
                { icon: "in", label: "Instagram", href: "#" },
                { icon: "yt", label: "YouTube", href: "#" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 border border-amber-500/30 flex items-center justify-center text-xs text-amber-400/60 hover:border-amber-400 hover:text-amber-400 transition-all duration-200 rounded-sm"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-amber-400 font-semibold tracking-widest uppercase text-xs mb-5">Opening Hours</h4>
            <div className="space-y-2 text-sm text-amber-100/60">
              <div className="flex justify-between gap-4">
                <span>Monday – Sunday</span>
              </div>
              <div className="text-amber-300 text-base font-semibold" style={{ fontFamily: "serif" }}>
                11:00 AM – 12:30 AM
              </div>
              <div className="pt-3">
                <span className="badge-gold">Open All Days</span>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-amber-400 font-semibold tracking-widest uppercase text-xs mb-5">Contact</h4>
            <div className="space-y-4 text-sm text-amber-100/60">
              <div>
                <p className="text-xs text-amber-100/30 uppercase tracking-wider mb-1">Address</p>
                <p className="leading-relaxed">
                  Western Urban Rd,<br />
                  Kandivali East,<br />
                  Mumbai 400101
                </p>
              </div>
              <div>
                <p className="text-xs text-amber-100/30 uppercase tracking-wider mb-1">Phone</p>
                <a href="tel:+919821157133" className="hover:text-amber-400 transition-colors">
                  +91 98211 57133
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-amber-900/30 mb-8" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-amber-100/30">
          <p>© {new Date().getFullYear()} Sarova Bar & Restaurant. All rights reserved.</p>
          <div className="flex gap-6">
            <button onClick={() => scrollTo("#home")} className="hover:text-amber-400 transition-colors">Privacy Policy</button>
            <button onClick={() => scrollTo("#home")} className="hover:text-amber-400 transition-colors">Terms & Conditions</button>
          </div>
          <p>Made with ❤️ in Mumbai</p>
        </div>
      </div>
    </footer>
  );
}
