import { motion } from "framer-motion";

export function MymindAI() {
  return (
    <section
      className="w-full overflow-x-hidden py-20 md:py-28 lg:py-36"
      style={{ background: "#f2efe9" }}
      id="how"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">

        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-xs font-semibold uppercase tracking-[0.22em]"
          style={{ color: "#FF5924" }}
        >
          GET FOUND EVERYWHERE
        </motion.p>

        {/* Main heading */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8 leading-tight"
          style={{
            fontFamily: "'Louize', Georgia, serif",
            fontSize: "clamp(2rem, 6vw, 5rem)",
            letterSpacing: "-0.03em",
            color: "#111418",
            fontWeight: 400,
          }}
        >
          Just launch it.{" "}
          <span style={{ whiteSpace: "nowrap" }}>
            Artificial Intelligence{" "}
            <motion.span
              className="inline-flex items-center gap-1 rounded-full border-2 px-3 py-1 align-middle"
              style={{
                borderColor: "#FF5924",
                color: "#FF5924",
                fontSize: "0.55em",
                fontFamily: "'Inter', sans-serif",
                fontWeight: 700,
                letterSpacing: "0.05em",
                verticalAlign: "middle",
                display: "inline-flex",
                willChange: "transform",
              }}
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            >
              AI
            </motion.span>
          </span>{" "}
          gets you discovered.
        </motion.h2>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mb-14 max-w-lg text-center"
          style={{
            color: "#748297",
            fontFamily: "'Inter', sans-serif",
            fontSize: "clamp(0.95rem, 2vw, 1.1rem)",
            lineHeight: 1.75,
          }}
        >
          Your site is built for Google AND ChatGPT from day one. theopenai manages your SEO monthly — proper meta tags, schema markup, local signals, and AI search discovery.
        </motion.p>

        {/* AI discovery visual */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mx-auto w-full overflow-hidden rounded-2xl shadow-xl"
          style={{ maxWidth: 680, background: "#fff", border: "1px solid #E2E6EE" }}
        >
          {/* Search bar mockup */}
          <div className="px-6 py-5 border-b" style={{ borderColor: "#E2E6EE" }}>
            <div
              className="flex items-center gap-3 rounded-full px-4 py-3 text-sm"
              style={{ background: "#f9fafb", border: "1px solid #E2E6EE" }}
            >
              <svg className="h-4 w-4 shrink-0" style={{ color: "#748297" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <circle cx="11" cy="11" r="8" strokeWidth="2" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m21 21-4.35-4.35" />
              </svg>
              <span style={{ color: "#748297", fontFamily: "'Inter', sans-serif" }}>
                best notary near me
              </span>
              <span className="h-4 w-0.5 animate-pulse ml-0.5" style={{ background: "#FF5924" }} />
            </div>
          </div>
          {/* Results */}
          <div className="p-5 flex flex-col gap-3 text-left">
            {[
              { rank: "1", title: "Maria's Notary Services — Miami, FL", sub: "theopenai.org/marias-notary · ★★★★★ 4.9 (147 reviews)", highlight: true },
              { rank: "2", title: "QuickSign Notary — Miami", sub: "quicksign.com · ★★★★ 4.1 (23 reviews)", highlight: false },
              { rank: "3", title: "Notary Public Miami | ABC Notary", sub: "abcnotary.net · ★★★ 3.8 (9 reviews)", highlight: false },
            ].map((r) => (
              <motion.div
                key={r.rank}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
                className="flex items-start gap-3 rounded-xl p-3"
                style={{ background: r.highlight ? "#fff5f2" : "transparent", border: r.highlight ? "1px solid #FFD0C0" : "1px solid transparent" }}
              >
                <span
                  className="shrink-0 h-6 w-6 rounded-full flex items-center justify-center text-xs font-bold"
                  style={{ background: r.highlight ? "#FF5924" : "#E2E6EE", color: r.highlight ? "#fff" : "#748297" }}
                >
                  {r.rank}
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-medium break-words" style={{ color: r.highlight ? "#FF5924" : "#24272D", fontFamily: "'Inter', sans-serif" }}>{r.title}</p>
                  <p className="text-xs mt-0.5" style={{ color: "#748297", fontFamily: "'Inter', sans-serif" }}>{r.sub}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-10 flex justify-center"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest transition-opacity hover:opacity-70"
            style={{ color: "#FF5924", minHeight: 44 }}
          >
            <span
              className="flex items-center justify-center rounded-full"
              style={{ background: "#FF5924", width: 28, height: 28 }}
            >
              <svg viewBox="0 0 24 24" fill="white" className="h-3 w-3" aria-hidden="true">
                <polygon points="5,3 19,12 5,21" />
              </svg>
            </span>
            HOW AI SEARCH DISCOVERY WORKS
          </a>
        </motion.div>
      </div>
    </section>
  );
}
