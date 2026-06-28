import { motion } from "framer-motion";

const PLANS = [
  {
    name: "Starter",
    price: "$9.99",
    period: "/mo",
    action: "GET STARTED",
    features: ["Custom website", "Hosting & SSL", "SEO built-in", "Unlimited edits", "24hr turnaround"],
    highlight: false,
  },
  {
    name: "Growth",
    price: "$19.99",
    period: "/mo",
    action: "GET STARTED",
    features: ["Everything in Starter", "Automated review requests", "Lead routing & CRM", "Monthly SEO optimization", "Priority support"],
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    action: "CONTACT US",
    features: ["Multi-location sites", "Custom integrations", "Dedicated account manager", "White-glove onboarding", "SLA guarantee"],
    highlight: false,
  },
];

export function MymindDownloads() {
  return (
    <section
      className="w-full overflow-x-hidden py-16 md:py-20"
      style={{ background: "#fff0ec" }}
      id="downloads"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-3 text-center text-xs font-semibold uppercase tracking-[0.22em]"
          style={{ color: "#FF5924" }}
        >
          PRICING
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="mb-10 text-center leading-tight"
          style={{
            fontFamily: "'Louize', Georgia, serif",
            fontSize: "clamp(1.8rem, 4vw, 3rem)",
            letterSpacing: "-0.03em",
            color: "#111418",
            fontWeight: 400,
          }}
        >
          Agency quality. DIY speed.
          <br />
          <em>Cheaper than both.</em>
        </motion.h2>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {PLANS.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ y: -5, scale: 1.03 }}
              className="flex flex-col rounded-2xl overflow-hidden"
              style={{
                background: plan.highlight ? "#FF5924" : "#fff",
                border: plan.highlight ? "none" : "1px solid #E2E6EE",
                boxShadow: plan.highlight ? "0 20px 60px rgba(255,89,36,0.25)" : "none",
              }}
            >
              <div className="p-6 sm:p-7 flex flex-col flex-1">
                <p
                  className="mb-1 text-xs font-bold uppercase tracking-widest"
                  style={{ color: plan.highlight ? "rgba(255,255,255,0.7)" : "#748297" }}
                >
                  {plan.name}
                </p>
                <div className="mb-6 flex items-end gap-1">
                  <span
                    style={{
                      fontFamily: "'Louize', Georgia, serif",
                      fontSize: "clamp(2rem, 5vw, 2.8rem)",
                      fontWeight: 400,
                      letterSpacing: "-0.04em",
                      color: plan.highlight ? "#fff" : "#111418",
                    }}
                  >
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span
                      className="mb-1 text-sm"
                      style={{ color: plan.highlight ? "rgba(255,255,255,0.7)" : "#748297" }}
                    >
                      {plan.period}
                    </span>
                  )}
                </div>
                <ul className="flex flex-col gap-2.5 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2 text-sm"
                      style={{
                        color: plan.highlight ? "rgba(255,255,255,0.9)" : "#748297",
                        fontFamily: "'Inter', sans-serif",
                      }}
                    >
                      <span style={{ color: plan.highlight ? "#fff" : "#FF5924", fontWeight: 700 }}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#"
                  className="flex items-center justify-center rounded-full py-3 text-xs font-bold uppercase tracking-widest transition-all duration-200 hover:opacity-90"
                  style={{
                    background: plan.highlight ? "#fff" : "#FF5924",
                    color: plan.highlight ? "#FF5924" : "#fff",
                    minHeight: 44,
                  }}
                >
                  {plan.action}
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 text-center text-sm"
          style={{ color: "#748297", fontFamily: "'Inter', sans-serif" }}
        >
          No setup fee. No contracts. No surprise renewals.{" "}
          <a href="mailto:hey@theopenai.org" style={{ color: "#FF5924" }}>
            Questions? hey@theopenai.org
          </a>
        </motion.p>
      </div>
    </section>
  );
}
