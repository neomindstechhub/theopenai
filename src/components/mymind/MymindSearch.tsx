import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const SEARCH_STATES = [
  { tags: ["CRM", "leads"], type: "crm" as const },
  { tags: ["reviews", "#automation"], type: "reviews" as const },
];

const CRM_LEADS = [
  { name: "Maria Rodriguez", source: "Website form", time: "2 min ago", status: "New" },
  { name: "James Park", source: "Google Maps click", time: "14 min ago", status: "Follow up" },
  { name: "Priya Shah", source: "Booking calendar", time: "1 hr ago", status: "Booked" },
];

export function MymindSearch() {
  const [stateIdx, setStateIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStateIdx((i) => (i + 1) % SEARCH_STATES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const current = SEARCH_STATES[stateIdx];

  return (
    <section
      className="w-full overflow-x-hidden py-20 md:py-28 lg:py-36"
      style={{ background: "#FF5924" }}
      id="search"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mb-6 text-xs font-semibold uppercase tracking-[0.22em]"
          style={{ color: "rgba(0,0,0,0.5)" }}
        >
          EVERY LEAD IN ONE PLACE
        </motion.p>

        {/* Big heading */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="mb-8 leading-tight"
          style={{
            fontFamily: "'Louize', Georgia, serif",
            fontSize: "clamp(2rem, 7vw, 5.5rem)",
            letterSpacing: "-0.03em",
            color: "#111418",
            fontWeight: 400,
          }}
        >
          Spreadsheets are dead.
          This is your command center.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mx-auto mb-8 max-w-lg text-center"
          style={{
            color: "rgba(0,0,0,0.65)",
            fontFamily: "'Inter', sans-serif",
            fontSize: "clamp(0.95rem, 2vw, 1.1rem)",
            lineHeight: 1.7,
          }}
        >
          Every form, call, and booking lands in one inbox.
          No sticky notes. No missed leads. No chaos —
          just your business, running smoothly.
        </motion.p>

        {/* Watch the video link */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mb-12 flex justify-center"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest transition-opacity hover:opacity-70"
            style={{ color: "rgba(0,0,0,0.7)", minHeight: 44 }}
          >
            <span
              className="flex items-center justify-center rounded-full border-2"
              style={{ borderColor: "rgba(0,0,0,0.5)", width: 28, height: 28 }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-3 w-3 ml-0.5" aria-hidden="true">
                <polygon points="5,3 19,12 5,21" />
              </svg>
            </span>
            SEE THE CRM IN ACTION
          </a>
        </motion.div>

        {/* Interactive CRM demo */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto w-full"
          style={{ maxWidth: 720 }}
        >
          {/* Search input row */}
          <div
            className="flex items-center gap-3 px-5 py-3.5"
            style={{ borderBottom: "1.5px solid rgba(0,0,0,0.2)" }}
          >
            <AnimatePresence mode="popLayout">
              {current.tags.map((tag, i) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.85 }}
                  transition={{ duration: 0.25, delay: i * 0.06 }}
                  className="rounded-full px-4 py-1.5 text-sm font-medium"
                  style={{
                    background: "white",
                    color: "#24272D",
                    fontStyle: tag.startsWith("#") ? "italic" : "normal",
                    fontFamily: tag.startsWith("#") ? "'Louize', Georgia, serif" : "'Inter', sans-serif",
                  }}
                >
                  {tag}
                </motion.span>
              ))}
            </AnimatePresence>
            <span className="h-5 w-0.5 animate-pulse" style={{ background: "rgba(0,0,0,0.5)" }} />
            <div className="ml-auto">
              <svg className="h-5 w-5" style={{ color: "rgba(0,0,0,0.5)" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <circle cx="11" cy="11" r="8" strokeWidth="2" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m21 21-4.35-4.35" />
              </svg>
            </div>
          </div>

          {/* Results */}
          <AnimatePresence mode="wait">
            {current.type === "crm" && (
              <motion.div
                key="crm"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col gap-2 pt-5 text-left"
              >
                {CRM_LEADS.map((lead, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.08 }}
                    className="rounded-xl px-5 py-3.5 flex flex-wrap items-center gap-2 justify-between"
                    style={{ background: "rgba(255,255,255,0.18)" }}
                  >
                    <div className="min-w-0">
                      <p className="text-sm font-semibold" style={{ color: "rgba(0,0,0,0.85)", fontFamily: "'Inter', sans-serif" }}>{lead.name}</p>
                      <p className="text-xs mt-0.5" style={{ color: "rgba(0,0,0,0.55)", fontFamily: "'Inter', sans-serif" }}>{lead.source} · {lead.time}</p>
                    </div>
                    <span
                      className="shrink-0 rounded-full px-3 py-1 text-xs font-bold"
                      style={{ background: "rgba(255,255,255,0.3)", color: "rgba(0,0,0,0.7)" }}
                    >
                      {lead.status}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {current.type === "reviews" && (
              <motion.div
                key="reviews"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col gap-2 pt-5 text-left"
              >
                {[
                  { stars: "★★★★★", text: "Best service I've ever had. Highly recommend!", author: "Maria R." },
                  { stars: "★★★★★", text: "Super professional and fast. Will come back!", author: "James P." },
                  { stars: "★★★★★", text: "Went above and beyond. 10/10.", author: "Priya S." },
                ].map((r, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.08 }}
                    className="rounded-xl px-5 py-3.5"
                    style={{ background: "rgba(255,255,255,0.18)" }}
                  >
                    <p className="text-sm" style={{ color: "#FF5924", fontFamily: "'Inter', sans-serif" }}>{r.stars}</p>
                    <p className="text-sm mt-1" style={{ color: "rgba(0,0,0,0.8)", fontFamily: "Georgia, serif", fontStyle: "italic" }}>
                      &ldquo;{r.text}&rdquo;
                    </p>
                    <p className="text-xs mt-1" style={{ color: "rgba(0,0,0,0.5)", fontFamily: "'Inter', sans-serif" }}>— {r.author}</p>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
