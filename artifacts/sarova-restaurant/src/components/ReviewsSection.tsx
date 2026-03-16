import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const reviews = [
  {
    name: "Rajesh Sharma",
    rating: 5,
    date: "March 2025",
    text: "Excellent food and ambiance! The Butter Chicken and Garlic Naan were absolutely divine. The bar section is well-stocked with great cocktails. Definitely coming back!",
    avatar: "R",
  },
  {
    name: "Priya Nair",
    rating: 4,
    date: "February 2025",
    text: "Loved the Paneer Tikka and the Chicken Biryani. The interiors are beautiful with a great nightlife vibe. Service was prompt and courteous.",
    avatar: "P",
  },
  {
    name: "Mohammed Ansari",
    rating: 5,
    date: "January 2025",
    text: "Best restaurant in Kandivali East! Mutton Biryani is a must-try. Great atmosphere for family dinners and the bar is perfect for evening outings.",
    avatar: "M",
  },
  {
    name: "Sunita Mehta",
    rating: 4,
    date: "December 2024",
    text: "Wonderful dining experience. The Chicken Lollipop and Chicken 65 were crispy and full of flavor. Great value for money!",
    avatar: "S",
  },
  {
    name: "Vikram Joshi",
    rating: 5,
    date: "November 2024",
    text: "Sarova never disappoints! The Tandoori Chicken is charcoal-grilled to perfection. The cocktails here are top-notch. Highly recommended.",
    avatar: "V",
  },
  {
    name: "Ananya Gupta",
    rating: 4,
    date: "October 2024",
    text: "Beautiful restaurant with great food. The Veg Kolhapuri was spicy and delicious. Perfect spot for celebrations and get-togethers.",
    avatar: "A",
  },
];

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <span key={s} className={`text-lg ${s <= rating ? "text-amber-400" : "text-amber-900"}`}>★</span>
      ))}
    </div>
  );
}

export default function ReviewsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    gsap.fromTo(
      sectionRef.current.querySelectorAll(".review-animate"),
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
    <section id="reviews" className="py-24 lg:py-32 relative overflow-hidden" ref={sectionRef}>
      <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, #0d0d0d, #111111)" }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="review-animate flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-16 bg-amber-500/40" />
            <span className="badge-gold">Guest Reviews</span>
            <span className="h-px w-16 bg-amber-500/40" />
          </div>
          <h2
            className="review-animate text-4xl sm:text-5xl lg:text-6xl font-bold mb-4"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            What Our <span className="gold-text">Guests Say</span>
          </h2>
          <div className="review-animate gold-divider mb-8" />

          {/* Overall rating */}
          <div className="review-animate inline-flex flex-col items-center gap-3 px-10 py-6 luxury-border rounded-sm mb-4">
            <div className="text-6xl font-bold gold-text" style={{ fontFamily: "serif" }}>4.3</div>
            <div className="flex gap-1">
              {[1, 2, 3, 4].map((s) => (
                <span key={s} className="text-2xl text-amber-400">★</span>
              ))}
              <span className="text-2xl text-amber-700">★</span>
            </div>
            <p className="text-amber-100/50 text-sm tracking-widest uppercase">Google Rating</p>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <div key={i} className="review-animate review-card p-6 rounded-sm">
              <div className="flex items-start gap-4 mb-4">
                {/* Avatar */}
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold text-black flex-shrink-0"
                  style={{ background: "linear-gradient(135deg, #C9A227, #f0d060)" }}
                >
                  {review.avatar}
                </div>
                <div>
                  <h4 className="text-amber-200 font-semibold">{review.name}</h4>
                  <Stars rating={review.rating} />
                  <p className="text-amber-100/30 text-xs mt-0.5">{review.date}</p>
                </div>
              </div>
              <p className="text-amber-100/60 text-sm leading-relaxed italic">"{review.text}"</p>
              <div className="mt-4 flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" className="flex-shrink-0">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span className="text-xs text-amber-100/30">Verified Google Review</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
