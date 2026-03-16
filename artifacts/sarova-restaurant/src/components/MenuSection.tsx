import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type MenuItem = { name: string; veg?: boolean };
type MenuCategory = { id: string; label: string; emoji: string; items: MenuItem[] };

const menuCategories: MenuCategory[] = [
  {
    id: "soups",
    label: "Soups",
    emoji: "🍲",
    items: [
      { name: "Tomato Soup", veg: true },
      { name: "Sweet Corn Soup", veg: true },
      { name: "Hot & Sour Soup", veg: true },
      { name: "Chicken Soup", veg: false },
    ],
  },
  {
    id: "veg-starters",
    label: "Veg Starters",
    emoji: "🥗",
    items: [
      { name: "Paneer Tikka", veg: true },
      { name: "Paneer Chilli", veg: true },
      { name: "Veg Manchurian", veg: true },
      { name: "Veg Crispy", veg: true },
      { name: "Veg Spring Roll", veg: true },
    ],
  },
  {
    id: "nonveg-starters",
    label: "Non-Veg Starters",
    emoji: "🍗",
    items: [
      { name: "Chicken Tikka", veg: false },
      { name: "Chicken Lollipop", veg: false },
      { name: "Chicken Chilli", veg: false },
      { name: "Chicken 65", veg: false },
      { name: "Chicken Manchurian", veg: false },
    ],
  },
  {
    id: "tandoor",
    label: "Tandoor",
    emoji: "🔥",
    items: [
      { name: "Tandoori Chicken", veg: false },
      { name: "Chicken Tangdi", veg: false },
      { name: "Chicken Malai Tikka", veg: false },
      { name: "Paneer Tikka", veg: true },
      { name: "Fish Tikka", veg: false },
    ],
  },
  {
    id: "main-veg",
    label: "Main Course (Veg)",
    emoji: "🍛",
    items: [
      { name: "Paneer Butter Masala", veg: true },
      { name: "Paneer Tikka Masala", veg: true },
      { name: "Kadai Paneer", veg: true },
      { name: "Veg Kolhapuri", veg: true },
      { name: "Dal Fry", veg: true },
    ],
  },
  {
    id: "main-nonveg",
    label: "Main Course (Non-Veg)",
    emoji: "🍖",
    items: [
      { name: "Butter Chicken", veg: false },
      { name: "Chicken Handi", veg: false },
      { name: "Chicken Kolhapuri", veg: false },
      { name: "Mutton Curry", veg: false },
      { name: "Mutton Masala", veg: false },
    ],
  },
  {
    id: "biryani",
    label: "Biryani",
    emoji: "🍚",
    items: [
      { name: "Veg Biryani", veg: true },
      { name: "Chicken Biryani", veg: false },
      { name: "Mutton Biryani", veg: false },
      { name: "Egg Biryani", veg: false },
    ],
  },
  {
    id: "rice",
    label: "Rice",
    emoji: "🌾",
    items: [
      { name: "Jeera Rice", veg: true },
      { name: "Steam Rice", veg: true },
      { name: "Veg Fried Rice", veg: true },
      { name: "Chicken Fried Rice", veg: false },
    ],
  },
  {
    id: "bread",
    label: "Bread",
    emoji: "🫓",
    items: [
      { name: "Butter Roti", veg: true },
      { name: "Naan", veg: true },
      { name: "Butter Naan", veg: true },
      { name: "Garlic Naan", veg: true },
      { name: "Cheese Naan", veg: true },
    ],
  },
  {
    id: "bar",
    label: "Bar Menu",
    emoji: "🍸",
    items: [
      { name: "Beer" },
      { name: "Whiskey" },
      { name: "Vodka" },
      { name: "Rum" },
      { name: "Cocktails" },
      { name: "Mocktails" },
    ],
  },
  {
    id: "desserts",
    label: "Desserts",
    emoji: "🍮",
    items: [
      { name: "Gulab Jamun", veg: true },
      { name: "Ice Cream", veg: true },
      { name: "Brownie with Ice Cream", veg: true },
    ],
  },
];

export default function MenuSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState("soups");

  useEffect(() => {
    if (!sectionRef.current) return;
    gsap.fromTo(
      sectionRef.current.querySelectorAll(".menu-animate"),
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      }
    );
  }, []);

  useEffect(() => {
    gsap.fromTo(
      ".menu-item-card",
      { opacity: 0, scale: 0.95 },
      { opacity: 1, scale: 1, duration: 0.4, stagger: 0.05, ease: "power2.out" }
    );
  }, [activeTab]);

  const active = menuCategories.find((c) => c.id === activeTab)!;

  return (
    <section id="menu" className="py-24 lg:py-32 relative overflow-hidden" ref={sectionRef}>
      <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, #0d0d0d, #121212 50%, #0d0d0d)" }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="menu-animate flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-16 bg-amber-500/40" />
            <span className="badge-gold">Culinary Excellence</span>
            <span className="h-px w-16 bg-amber-500/40" />
          </div>
          <h2
            className="menu-animate text-4xl sm:text-5xl lg:text-6xl font-bold mb-4"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            Our <span className="gold-text">Menu</span>
          </h2>
          <div className="menu-animate gold-divider mb-6" />
          <p className="menu-animate text-amber-100/50 max-w-xl mx-auto">
            Explore our carefully crafted selection of authentic Indian dishes, tandoor specialties, and premium beverages
          </p>
        </div>

        {/* Category Tabs — Horizontal Scroll */}
        <div className="menu-animate mb-10 overflow-x-auto pb-2">
          <div className="flex gap-2 min-w-max mx-auto px-2">
            {menuCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-2 px-4 py-2.5 text-xs tracking-widest uppercase transition-all duration-200 whitespace-nowrap rounded-sm ${
                  activeTab === cat.id
                    ? "bg-red-900 text-amber-400 border border-amber-500/40"
                    : "border border-white/10 text-amber-100/50 hover:border-amber-500/30 hover:text-amber-300"
                }`}
              >
                <span>{cat.emoji}</span>
                <span>{cat.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Active Category Display */}
        <div className="menu-animate">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-4xl">{active.emoji}</span>
            <div>
              <h3
                className="text-2xl sm:text-3xl font-bold gold-text"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
              >
                {active.label}
              </h3>
              <p className="text-amber-100/40 text-sm">{active.items.length} items</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {active.items.map((item, i) => (
              <div
                key={i}
                className="menu-item-card menu-card p-5 rounded-sm flex items-center gap-3"
              >
                {item.veg !== undefined && (
                  <span
                    className={item.veg ? "veg-dot" : "nonveg-dot"}
                    title={item.veg ? "Vegetarian" : "Non-Vegetarian"}
                  />
                )}
                {item.veg === undefined && (
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500 flex-shrink-0" />
                )}
                <span className="text-amber-100/90 text-sm font-medium">{item.name}</span>
              </div>
            ))}
          </div>

          {/* Veg indicator legend */}
          {active.id !== "bar" && (
            <div className="flex gap-6 mt-6 text-xs text-amber-100/40">
              <span className="flex items-center gap-2"><span className="veg-dot" /> Vegetarian</span>
              <span className="flex items-center gap-2"><span className="nonveg-dot" /> Non-Vegetarian</span>
            </div>
          )}
        </div>

        {/* All Categories Grid (full overview) */}
        <div className="mt-20">
          <div className="text-center mb-10">
            <p className="badge-gold inline-block">All Categories</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {menuCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveTab(cat.id);
                  document.querySelector("#menu")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="menu-animate menu-card p-5 rounded-sm text-left group"
              >
                <span className="text-3xl block mb-3">{cat.emoji}</span>
                <span className="text-sm font-semibold text-amber-300 group-hover:text-amber-400 transition-colors tracking-wide block">
                  {cat.label}
                </span>
                <span className="text-xs text-amber-100/40 mt-1 block">{cat.items.length} items</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
