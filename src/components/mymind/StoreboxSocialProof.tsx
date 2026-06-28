import { motion } from "framer-motion";

export function StoreboxSocialProof() {
  return (
    <section className="w-full overflow-x-hidden bg-white py-8 sm:py-10">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="mb-4"
          style={{
            fontFamily: "'Louize', Georgia, serif",
            fontSize: "clamp(1rem, 2.2vw, 1.25rem)",
            fontStyle: "italic",
            color: "#748297",
            lineHeight: 1.6,
            letterSpacing: "-0.01em",
          }}
        >
          &ldquo;Storebox replaced four tools for our team. We just&hellip; store it, and it&apos;s there.&rdquo;
          <span className="not-italic"> — Product Manager, SaaS company</span>
        </motion.blockquote>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-sm font-bold"
          style={{ color: "#24272D", letterSpacing: "0.01em" }}
        >
          Trusted by 10,000+ teams across 40+ countries
        </motion.p>
      </div>
    </section>
  );
}
