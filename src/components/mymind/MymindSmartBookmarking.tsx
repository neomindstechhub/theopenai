import { motion } from "framer-motion";

const INDUSTRIES = [
  { name: "Notaries", icon: "📋" },
  { name: "Real Estate", icon: "🏠" },
  { name: "CPAs", icon: "📊" },
  { name: "Cleaning", icon: "✨" },
  { name: "Restaurants", icon: "🍽️" },
  { name: "Salons", icon: "💇" },
  { name: "Electricians", icon: "⚡" },
  { name: "Insurance", icon: "🛡️" },
  { name: "Banquet Halls", icon: "🎉" },
];

export function MymindSmartBookmarking() {
  return (
    <section className="w-full overflow-x-hidden bg-white" id="smart-bookmarking">

      {/* Industry strip */}
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.22em]"
          style={{ color: "#748297" }}
        >
          You've probably visited a theopenai site. You just didn't know it was us.
        </motion.p>
        <div
          className="overflow-hidden rounded-2xl"
          style={{ border: "1px solid #E2E6EE" }}
        >
          <div className="industry-grid grid grid-cols-3 sm:grid-cols-9" style={{ borderColor: "#E2E6EE" }}>
            {INDUSTRIES.map((ind, i) => (
              <motion.div
                key={ind.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="flex flex-col items-center gap-2 py-6 sm:py-8 transition-colors hover:bg-gray-50"
                style={{ borderColor: "#E2E6EE" }}
              >
                <span className="text-2xl">{ind.icon}</span>
                <p className="text-center font-medium text-xs sm:text-sm" style={{ color: "#24272D" }}>{ind.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Headline + description */}
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pb-8 md:pb-12 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="mb-6 leading-tight"
          style={{
            fontFamily: "'Louize', Georgia, serif",
            fontSize: "clamp(2rem, 6vw, 4.5rem)",
            letterSpacing: "-0.03em",
            color: "#111418",
            fontWeight: 400,
          }}
        >
          The only managed website platform
          <br />
          for real businesses.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mb-10 max-w-xl text-center"
          style={{
            color: "#748297",
            fontFamily: "'Inter', sans-serif",
            fontSize: "clamp(0.95rem, 2vw, 1.1rem)",
            lineHeight: 1.7,
          }}
        >
          One platform for your website, CRM, SEO, and reviews.
          <br />
          No DIY. No agencies. No plugin hell.
          <br />
          Just results — managed by us.
        </motion.p>

        {/* Demo chat mockup */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mx-auto w-full overflow-hidden rounded-2xl shadow-xl"
          style={{ maxWidth: 560, background: "#f9fafb", border: "1px solid #E2E6EE" }}
        >
          <div
            className="px-4 py-3 text-sm font-medium"
            style={{ background: "#fff", borderBottom: "1px solid #E2E6EE", color: "#24272D" }}
          >
            theopenai support
          </div>
          {[
            { from: "client", text: "Can you add a special promo for first time customers?", time: "11:42 AM" },
            { from: "team", text: "Done, live now. Anything else you want updated?", time: "11:48 AM" },
            { from: "client", text: "Also need to update my business hours.", time: "11:52 AM" },
            { from: "team", text: "Done and done. ✓", time: "11:56 AM" },
          ].map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: msg.from === "client" ? -16 : 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`flex ${msg.from === "team" ? "justify-end" : "justify-start"} px-4 py-2`}
            >
              <div
                className="rounded-2xl px-4 py-2.5 text-sm max-w-[80%]"
                style={{
                  background: msg.from === "team" ? "#FF5924" : "#fff",
                  color: msg.from === "team" ? "#fff" : "#24272D",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.07)",
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                <p className="break-words">{msg.text}</p>
                <p className="mt-1 text-xs" style={{ opacity: 0.6 }}>{msg.time}</p>
              </div>
            </motion.div>
          ))}
          <div className="h-4" />
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 flex justify-center"
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
            SEE HOW UNLIMITED EDITS WORK
          </a>
        </motion.div>
      </div>
    </section>
  );
}
