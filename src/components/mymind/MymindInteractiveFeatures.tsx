import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const FEATURES = [
  {
    tab: "SEO",
    title: "Rank on Google & ChatGPT",
    description:
      "SEO built in and managed by us every month. Proper meta tags, schema markup, local signals, and AI search optimization — so you get found everywhere your customers are looking.",
    image: "/images/AI.webp",
  },
  {
    tab: "CRM",
    title: "All leads in one inbox",
    description:
      "Every form submission, booking, and inquiry lands in your CRM automatically. No spreadsheets, no missed leads. Follow up faster and close more business.",
    image: "/images/NOTE.png",
  },
  {
    tab: "Reviews",
    title: "Ratings on autopilot",
    description:
      "Automated review requests go out after every job. Clients consistently go from 4.2 to 4.8 stars within months — without you having to ask a single customer manually.",
    image: "/images/vibe-mobile.webp",
  },
  {
    tab: "Edits",
    title: "Changes in 24 hours",
    description:
      "Just message us — new promo, updated photos, holiday hours, full redesign. We handle every edit within 24 hours. Unlimited updates, no extra charge, no ticket queue.",
    image: "/images/text-mobile.webp",
  },
];

const INTERVAL = 5000;

export function MymindInteractiveFeatures() {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const progressRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = (idx: number) => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (progressRef.current) clearInterval(progressRef.current);

    setProgress(0);
    const startTime = Date.now();

    progressRef.current = setInterval(() => {
      const elapsed = Date.now() - startTime;
      setProgress(Math.min((elapsed / INTERVAL) * 100, 100));
    }, 30);

    timerRef.current = setInterval(() => {
      setActive((prev) => {
        const next = (prev + 1) % FEATURES.length;
        startTimer(next);
        return next;
      });
    }, INTERVAL);
  };

  useEffect(() => {
    startTimer(0);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (progressRef.current) clearInterval(progressRef.current);
    };
  }, []);

  const handleTabClick = (idx: number) => {
    setActive(idx);
    startTimer(idx);
  };

  return (
    <section className="w-full overflow-x-hidden bg-white py-16 md:py-24" id="interactive-features">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">

        {/* Tab navigation */}
        <div className="mb-8 sm:mb-10 overflow-x-auto scrollbar-none">
          <div className="flex gap-0 border-b" style={{ borderColor: "#E8EAED", minWidth: "max-content" }}>
            {FEATURES.map((f, i) => (
              <motion.button
                key={f.tab}
                onClick={() => handleTabClick(i)}
                whileHover={{ backgroundColor: "rgba(0,0,0,0.04)", borderRadius: "4px" }}
                className="relative shrink-0 pb-4 px-5 sm:px-7 text-sm font-medium transition-colors duration-200 cursor-pointer"
                style={{
                  color: active === i ? "#24272D" : "#748297",
                  fontFamily: "'Inter', sans-serif",
                  minHeight: 44,
                }}
              >
                {f.tab}
                {/* Progress bar under active tab */}
                <div
                  className="absolute bottom-0 left-0 h-[2px]"
                  style={{
                    background: "#FF5924",
                    width: active === i ? `${progress}%` : "0%",
                    transition: active === i ? "none" : "width 0.2s ease",
                  }}
                />
                {/* Track */}
                <div
                  className="absolute bottom-0 left-0 h-[2px] w-full"
                  style={{ background: active === i ? "rgba(255,89,36,0.12)" : "transparent" }}
                />
              </motion.button>
            ))}
          </div>
        </div>

        {/* Feature display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col md:flex-row gap-8 md:gap-12 items-center"
          >
            {/* Image / visual */}
            <div className="w-full md:flex-1 order-1 md:order-2">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden rounded-2xl shadow-lg"
                style={{ background: "#F5F7FA" }}
              >
                <img
                  src={FEATURES[active].image}
                  alt={FEATURES[active].title}
                  loading="lazy"
                  className="w-full h-auto block object-cover"
                  style={{ maxHeight: "clamp(220px, 50vw, 440px)" }}
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.opacity = "0.3";
                  }}
                />
              </motion.div>
            </div>

            {/* Text */}
            <div className="w-full md:w-64 shrink-0 order-2 md:order-1">
              <h3
                className="mb-4 leading-tight"
                style={{
                  fontFamily: "'Louize', Georgia, serif",
                  fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                  letterSpacing: "-0.03em",
                  color: "#111418",
                  fontWeight: 400,
                }}
              >
                {FEATURES[active].title}
              </h3>
              <p
                className="leading-relaxed"
                style={{
                  color: "#748297",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "clamp(0.9rem, 1.5vw, 1rem)",
                  lineHeight: 1.7,
                }}
              >
                {FEATURES[active].description}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
