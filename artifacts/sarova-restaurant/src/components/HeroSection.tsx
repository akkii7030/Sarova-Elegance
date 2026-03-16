import { useEffect, useRef } from "react";
import * as THREE from "three";
import { gsap } from "gsap";

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // THREE.JS Particle Effect
    const canvas = canvasRef.current;
    if (!canvas) return;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    } catch {
      return; // WebGL not available (e.g. in screenshot environments)
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(canvas.offsetWidth, canvas.offsetHeight);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, canvas.offsetWidth / canvas.offsetHeight, 0.1, 1000);
    camera.position.z = 5;

    // Particles
    const particleCount = 1800;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;

      // Gold and red particles
      const isGold = Math.random() > 0.4;
      if (isGold) {
        colors[i * 3] = 0.79;     // R (C9A227 = #201 #162 #39)
        colors[i * 3 + 1] = 0.64; // G
        colors[i * 3 + 2] = 0.15; // B
      } else {
        colors[i * 3] = 0.55;
        colors[i * 3 + 1] = 0.0;
        colors[i * 3 + 2] = 0.0;
      }
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 0.04,
      vertexColors: true,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Glow sphere (central orb)
    const glowGeo = new THREE.SphereGeometry(0.6, 32, 32);
    const glowMat = new THREE.MeshBasicMaterial({
      color: 0x8B0000,
      transparent: true,
      opacity: 0.08,
    });
    const glow = new THREE.Mesh(glowGeo, glowMat);
    scene.add(glow);

    let animFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animFrameId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();
      particles.rotation.y = elapsed * 0.04;
      particles.rotation.x = elapsed * 0.015;
      glow.scale.setScalar(1 + Math.sin(elapsed * 1.5) * 0.1);
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", handleResize);

    // Mouse parallax
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 0.3;
      const y = (e.clientY / window.innerHeight - 0.5) * 0.3;
      gsap.to(particles.rotation, { x: -y * 0.5, y: x * 0.5, duration: 2, ease: "power1.out" });
    };
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      cancelAnimationFrame(animFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      renderer.dispose();
    };
  }, []);

  useEffect(() => {
    // GSAP hero text animations
    gsap.from(".hero-badge", { opacity: 0, y: 20, duration: 0.8, delay: 0.4 });
    gsap.from(".hero-title", { opacity: 0, y: 50, duration: 1.2, delay: 0.7, ease: "power3.out" });
    gsap.from(".hero-subtitle", { opacity: 0, y: 30, duration: 1, delay: 1.1 });
    gsap.from(".hero-divider", { scaleX: 0, duration: 1, delay: 1.4, transformOrigin: "center" });
    gsap.from(".hero-desc", { opacity: 0, y: 20, duration: 0.8, delay: 1.5 });
    gsap.from(".hero-btn", { opacity: 0, y: 30, duration: 0.8, stagger: 0.15, delay: 1.7 });
    gsap.from(".hero-info", { opacity: 0, y: 20, duration: 0.8, delay: 2.0 });
  }, []);

  const scrollToMenu = () => {
    document.querySelector("#menu")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0a0a0a 0%, #1a0505 40%, #0d0d0d 100%)" }}
    >
      {/* Three.js Canvas */}
      <canvas ref={canvasRef} id="hero-canvas" style={{ position: "absolute", inset: 0, zIndex: 1 }} />

      {/* Background image overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.15) saturate(0.5)",
        }}
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 z-0" style={{ background: "radial-gradient(ellipse at center, rgba(139,0,0,0.12) 0%, transparent 70%)" }} />
      <div className="absolute bottom-0 left-0 right-0 h-40 z-2" style={{ background: "linear-gradient(to top, #111111, transparent)", zIndex: 2 }} />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">
        {/* Badge */}
        <div className="hero-badge inline-flex items-center gap-3 mb-8">
          <span className="h-px w-12 bg-amber-500/60" />
          <span className="badge-gold">Est. Mumbai · Kandivali East</span>
          <span className="h-px w-12 bg-amber-500/60" />
        </div>

        {/* Hindi name */}
        <p className="text-amber-400/60 text-lg mb-2 tracking-widest" style={{ fontFamily: "serif" }}>
          सरोवा बार & रेस्टोरेंट
        </p>

        {/* Main Title */}
        <h1
          className="hero-title text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight mb-6"
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            background: "linear-gradient(135deg, #f0d060, #C9A227, #e8b830, #C9A227)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            letterSpacing: "-0.01em",
          }}
        >
          Experience<br />
          <span style={{ color: "transparent" }}>Authentic Taste</span><br />
          <span className="text-white/90" style={{ WebkitTextFillColor: "rgba(255,255,255,0.9)", fontSize: "0.7em" }}>
            at Sarova
          </span>
        </h1>

        {/* Divider */}
        <div className="hero-divider gold-divider mx-auto mb-6" />

        {/* Subtitle */}
        <p className="hero-subtitle text-amber-100/70 text-lg sm:text-xl tracking-widest uppercase mb-4" style={{ letterSpacing: "0.2em" }}>
          Premium Bar & Restaurant in Kandivali East
        </p>

        {/* Description */}
        <p className="hero-desc text-amber-100/50 text-sm sm:text-base max-w-xl mx-auto mb-10 leading-relaxed">
          Indian cuisine · Premium Beverages · Vibrant Bar Experience
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <button
            onClick={scrollToMenu}
            className="hero-btn px-8 py-4 text-sm tracking-widest uppercase font-medium transition-all duration-300"
            style={{
              background: "linear-gradient(135deg, #8B0000, #a00000)",
              color: "#f0d060",
              letterSpacing: "0.2em",
              boxShadow: "0 0 30px rgba(139,0,0,0.5)",
              borderRadius: "2px",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 0 50px rgba(139,0,0,0.8)")}
            onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "0 0 30px rgba(139,0,0,0.5)")}
          >
            View Menu
          </button>
          <button
            onClick={scrollToContact}
            className="hero-btn px-8 py-4 text-sm tracking-widest uppercase font-medium border border-amber-500/60 text-amber-400 hover:bg-amber-400 hover:text-black transition-all duration-300"
            style={{ letterSpacing: "0.2em", borderRadius: "2px" }}
          >
            Reserve Table
          </button>
          <a
            href="tel:+919821157133"
            className="hero-btn px-8 py-4 text-sm tracking-widest uppercase font-medium border border-white/20 text-white/70 hover:border-white/50 hover:text-white transition-all duration-300"
            style={{ letterSpacing: "0.2em", borderRadius: "2px" }}
          >
            Call Now
          </a>
        </div>

        {/* Info bar */}
        <div className="hero-info flex flex-wrap items-center justify-center gap-6 text-xs tracking-widest text-amber-100/40 uppercase">
          <span className="flex items-center gap-2">
            <span className="text-amber-500">🍽</span>
            Dine-in
          </span>
          <span className="text-amber-800">|</span>
          <span className="flex items-center gap-2">
            <span className="text-amber-500">🚗</span>
            Drive-through
          </span>
          <span className="text-amber-800">|</span>
          <span className="flex items-center gap-2">
            <span className="text-amber-500">📦</span>
            Delivery
          </span>
          <span className="text-amber-800">|</span>
          <span className="flex items-center gap-2">
            <span className="text-amber-500">🕐</span>
            Open 11 AM – 12:30 AM
          </span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="text-amber-400/40 text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-amber-400/40 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
