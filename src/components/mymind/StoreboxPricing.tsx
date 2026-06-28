import { motion } from "framer-motion";

interface PricingPlan {
  name: string;
  price: string;
  billing?: string;
  badge?: string;
  features: string[];
  cta: string;
  ctaFilled: boolean;
  highlight: boolean;
}

const PLANS: PricingPlan[] = [
  {
    name: "Starter",
    price: "Free Forever",
    features: [
      "Up to 3 team members",
      "5 GB storage",
      "AI search",
      "Browser extension",
      "Mobile apps (iOS & Android)",
    ],
    cta: "Get Started Free",
    ctaFilled: false,
    highlight: false,
  },
  {
    name: "Team",
    price: "$12",
    billing: "/user/month, billed annually",
    badge: "MOST POPULAR",
    features: [
      "Unlimited team members",
      "100 GB storage",
      "AI summaries + OCR",
      "Smart Collections",
      "Priority support",
      "Admin controls",
    ],
    cta: "Start 14-Day Free Trial",
    ctaFilled: true,
    highlight: true,
  },
  {
    name: "Business",
    price: "$28",
    billing: "/user/month, billed annually",
    features: [
      "Everything in Team",
      "1 TB storage",
      "Advanced AI features",
      "SSO & security controls",
      "Custom integrations",
      "Dedicated account manager",
    ],
    cta: "Talk to Sales",
    ctaFilled: false,
    highlight: false,
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: [
      "Unlimited storage",
      "Custom AI models",
      "On-premise option",
      "SLA guarantee",
      "White-glove onboarding",
    ],
    cta: "Contact Us",
    ctaFilled: false,
    highlight: false,
  },
];

export function StoreboxPricing() {
  return (
    <section className="w-full overflow-x-hidden bg-white py-20 md:py-28" id="pricing">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-12 sm:mb-16 text-center">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="mb-4 text-xs font-semibold uppercase tracking-[0.22em]"
            style={{ color: "#FF5924" }}
          >
            PRICING
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="leading-tight"
            style={{
              fontFamily: "'Louize', Georgia, serif",
              fontSize: "clamp(1.8rem, 4vw, 3.25rem)",
              letterSpacing: "-0.03em",
              color: "#111418",
              fontWeight: 400,
            }}
          >
            Simple pricing. No surprises.
          </motion.h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PLANS.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative flex flex-col rounded-2xl p-6 sm:p-8"
              style={{
                background: "white",
                border: plan.highlight ? "2px solid #FF5924" : "1px solid #E2E6EE",
              }}
            >
              {/* Badge */}
              {plan.badge && (
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white"
                  style={{ background: "#FF5924" }}
                >
                  {plan.badge}
                </div>
              )}

              {/* Plan name */}
              <p
                className="mb-2 text-xs font-semibold uppercase tracking-widest"
                style={{ color: "#748297" }}
              >
                {plan.name}
              </p>

              {/* Price */}
              <div className="mb-1">
                <span
                  className="font-bold leading-none"
                  style={{
                    color: "#24272D",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: plan.price === "Free Forever" || plan.price === "Custom" ? "1.5rem" : "2.25rem",
                  }}
                >
                  {plan.price}
                </span>
              </div>
              {plan.billing && (
                <p className="mb-6 text-xs" style={{ color: "#748297" }}>
                  {plan.billing}
                </p>
              )}
              {!plan.billing && <div className="mb-6" />}

              {/* Features */}
              <ul className="mb-8 flex flex-col gap-2.5 flex-1">
                {plan.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2 text-sm" style={{ color: "#24272D" }}>
                    <span className="mt-0.5 shrink-0 font-bold" style={{ color: "#FF5924" }}>✓</span>
                    {feat}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#"
                className="flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-all duration-200 hover:opacity-90"
                style={
                  plan.ctaFilled
                    ? { background: "#FF5924", color: "white", minHeight: 44 }
                    : {
                      background: "transparent",
                      color: "#24272D",
                      border: "1.5px solid #E2E6EE",
                      minHeight: 44,
                    }
                }
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
