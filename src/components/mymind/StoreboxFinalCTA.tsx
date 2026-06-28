import { motion } from "framer-motion";

export function StoreboxFinalCTA() {
  return (
    <section
      className="w-full overflow-x-hidden py-20 sm:py-28 text-center"
      style={{ background: "#24272D" }}
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">

        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="mb-5 leading-tight"
          style={{
            fontFamily: "'Louize', Georgia, serif",
            fontSize: "clamp(2rem, 5vw, 4rem)",
            letterSpacing: "-0.03em",
            color: "white",
            fontWeight: 400,
          }}
        >
          Your team deserves a tool that works as fast as they do.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mb-10 text-base sm:text-lg"
          style={{ color: "rgba(255,255,255,0.65)", fontFamily: "'Inter', sans-serif" }}
        >
          Start free. No setup. No credit card. Cancel anytime.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
        >
          <a
            href="#"
            className="flex w-full sm:w-auto items-center justify-center rounded-full px-8 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 hover:shadow-lg"
            style={{ background: "#FF5924", minHeight: 44 }}
          >
            Start Free Today
          </a>
          <a
            href="#"
            className="flex w-full sm:w-auto items-center justify-center rounded-full border px-8 py-3.5 text-sm font-medium transition-all duration-200 hover:bg-white/10"
            style={{ borderColor: "rgba(255,255,255,0.25)", color: "white", minHeight: 44 }}
          >
            Book a 15-Min Demo
          </a>
        </motion.div>
      </div>
    </section>
  );
}
