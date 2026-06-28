import { motion } from "framer-motion";

const TESTIMONIALS = [
  {
    text: "Went from 4 bookings a month to nearly two a day. I left Thumbtack after 3 years.",
    name: "Maria R.",
    role: "Miami Notary",
    result: "+47 leads/month",
    avatar: "/images/review-001.png",
    position: "center",
    delay: 0,
  },
  {
    text: "We rank above guys paying agencies $2K/mo. Page 5 to Page 1 in 90 days.",
    name: "Steven B.",
    role: "K&L Roofing, Austin",
    result: "Page 1 in 90 days",
    avatar: "/images/review-002.png",
    position: "left",
    delay: 0.1,
  },
  {
    text: "Review requests go out automatically. It just works. My rating went from 4.2 to 4.8.",
    name: "Priya S.",
    role: "Glow Salon, Bangalore",
    result: "4.2 → 4.8 stars",
    avatar: "/images/review-003.png",
    position: "right",
    delay: 0.15,
  },
  {
    text: "Agency charged me $3,200. I still couldn't edit the phone number. theopenai fixed that on day one.",
    name: "James K.",
    role: "CPA, Chicago",
    result: "Saved $3,200",
    avatar: "/images/review-004.png",
    position: "right",
    delay: 0.25,
  },
  {
    text: "I messaged them at 11am. By noon my promo was live. That's the kind of support I needed.",
    name: "Aisha T.",
    role: "Cleaning Services, Dallas",
    result: "Same-day edits",
    avatar: "/images/review-005.png",
    position: "left",
    delay: 0.3,
  },
];

function getBubbleClass(position: string): string {
  const map: Record<string, string> = {
    left: "mx-auto sm:mr-auto sm:ml-8",
    center: "mx-auto",
    right: "mx-auto sm:ml-auto sm:mr-8",
  };
  return map[position] ?? "mx-auto";
}

export function MymindTestimonials() {
  return (
    <section
      className="w-full overflow-x-hidden py-20 md:py-28 lg:py-36"
      style={{
        background: `
          radial-gradient(ellipse 80% 60% at 20% 30%, rgba(255, 180, 200, 0.6) 0%, transparent 55%),
          radial-gradient(ellipse 70% 60% at 80% 70%, rgba(255, 200, 210, 0.5) 0%, transparent 55%),
          radial-gradient(ellipse 60% 50% at 50% 50%, rgba(255, 210, 220, 0.4) 0%, transparent 60%),
          linear-gradient(145deg, #ffc8d0 0%, #ffd0c8 25%, #ffc8d8 55%, #f8d0e8 100%)
        `,
      }}
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">

        {/* Floating testimonial bubbles — top 3 */}
        <div className="flex flex-col gap-8 sm:gap-10 mb-14 sm:mb-20">
          {TESTIMONIALS.slice(0, 3).map((t, i) => {
            const floatConfigs = [
              { y: [0, -10, 0] as number[], duration: 4, delay: 0 },
              { y: [0, -7, 0] as number[], duration: 3.2, delay: 0.5 },
              { y: [0, -12, 0] as number[], duration: 4.8, delay: 1 },
            ];
            const fc = floatConfigs[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: t.delay }}
                className={`relative ${getBubbleClass(t.position)}`}
                style={{ maxWidth: "min(460px, 90vw)" }}
              >
                <motion.div
                  animate={{ y: fc.y }}
                  transition={{ duration: fc.duration, repeat: Infinity, ease: "easeInOut", delay: fc.delay }}
                  style={{ willChange: "transform" }}
                >
                  <div
                    className="relative rounded-[2rem] bg-white px-5 sm:px-6 py-4 sm:py-5"
                    style={{ boxShadow: "0 8px 40px rgba(0,0,0,0.08)" }}
                  >
                    <div className="mb-1 text-sm" style={{ color: "#FF5924" }}>★★★★★</div>
                    <p
                      className="text-sm leading-relaxed md:text-base"
                      style={{ color: "#24272D", fontFamily: "'Inter', sans-serif" }}
                    >
                      &ldquo;{t.text}&rdquo;
                    </p>
                    <div
                      className="absolute -bottom-2 left-7"
                      style={{
                        width: 12,
                        height: 12,
                        background: "white",
                        borderRadius: "0 0 12px 0",
                        clipPath: "polygon(0 0, 100% 0, 100% 100%)",
                      }}
                    />
                  </div>
                  <div className="mt-3 flex flex-wrap items-center gap-2 pl-4">
                    <div
                      className="h-9 w-9 rounded-full overflow-hidden shadow-md shrink-0"
                      style={{ background: "#e8e8ea", minWidth: 36, minHeight: 36 }}
                    >
                      <img
                        src={t.avatar}
                        alt={t.name}
                        loading="lazy"
                        className="h-full w-full object-cover"
                        onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
                      />
                    </div>
                    <div>
                      <p className="text-xs font-semibold" style={{ color: "#24272D", fontFamily: "'Inter', sans-serif" }}>{t.name}</p>
                      <p className="text-xs" style={{ color: "#748297", fontFamily: "'Inter', sans-serif" }}>{t.role}</p>
                    </div>
                    <span
                      className="ml-auto shrink-0 max-w-[120px] text-center rounded-full px-3 py-1 text-xs font-bold"
                      style={{ background: "#fff0ec", color: "#FF5924" }}
                    >
                      {t.result}
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Section heading */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="mb-14 sm:mb-20 text-center leading-tight"
          style={{
            fontFamily: "'Louize', Georgia, serif",
            fontSize: "clamp(2.5rem, 7vw, 6rem)",
            letterSpacing: "-0.03em",
            color: "white",
            fontWeight: 400,
          }}
        >
          Real results.
          <br />
          Real businesses.
        </motion.h2>

        {/* More bubbles below heading */}
        <div className="flex flex-col gap-8 sm:gap-10">
          {TESTIMONIALS.slice(3).map((t, i) => {
            const floatConfigs = [
              { y: [0, -8, 0] as number[], duration: 3.6, delay: 0.8 },
              { y: [0, -11, 0] as number[], duration: 5, delay: 0.3 },
            ];
            const fc = floatConfigs[i];
            return (
              <motion.div
                key={i + 3}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: t.delay }}
                className={`relative ${getBubbleClass(t.position)}`}
                style={{ maxWidth: "min(460px, 90vw)" }}
              >
                <motion.div
                  animate={{ y: fc.y }}
                  transition={{ duration: fc.duration, repeat: Infinity, ease: "easeInOut", delay: fc.delay }}
                  style={{ willChange: "transform" }}
                >
                  <div
                    className="relative rounded-[2rem] bg-white px-5 sm:px-6 py-4 sm:py-5"
                    style={{ boxShadow: "0 8px 40px rgba(0,0,0,0.08)" }}
                  >
                    <div className="mb-1 text-sm" style={{ color: "#FF5924" }}>★★★★★</div>
                    <p
                      className="text-sm leading-relaxed md:text-base"
                      style={{ color: "#24272D", fontFamily: "'Inter', sans-serif" }}
                    >
                      &ldquo;{t.text}&rdquo;
                    </p>
                    <div
                      className="absolute -bottom-2 left-7"
                      style={{
                        width: 12,
                        height: 12,
                        background: "white",
                        borderRadius: "0 0 12px 0",
                        clipPath: "polygon(0 0, 100% 0, 100% 100%)",
                      }}
                    />
                  </div>
                  <div className="mt-3 flex flex-wrap items-center gap-2 pl-4">
                    <div
                      className="h-9 w-9 rounded-full overflow-hidden shadow-md shrink-0"
                      style={{ background: "#e8e8ea", minWidth: 36, minHeight: 36 }}
                    >
                      <img
                        src={t.avatar}
                        alt={t.name}
                        loading="lazy"
                        className="h-full w-full object-cover"
                        onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
                      />
                    </div>
                    <div>
                      <p className="text-xs font-semibold" style={{ color: "#24272D", fontFamily: "'Inter', sans-serif" }}>{t.name}</p>
                      <p className="text-xs" style={{ color: "#748297", fontFamily: "'Inter', sans-serif" }}>{t.role}</p>
                    </div>
                    <span
                      className="ml-auto shrink-0 max-w-[120px] text-center rounded-full px-3 py-1 text-xs font-bold"
                      style={{ background: "#fff0ec", color: "#FF5924" }}
                    >
                      {t.result}
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
