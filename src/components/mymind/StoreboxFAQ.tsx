import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "What can I store in Storebox.ai?",
    answer:
      "Anything — files, links, images, PDFs, videos, notes, screenshots, articles, and more. If it matters to your team, Storebox can hold it.",
  },
  {
    question: "Do I need to organize anything manually?",
    answer:
      "No. That's the whole point. Storebox.ai's AI reads what you save and organizes it automatically. You just save, and it handles the rest.",
  },
  {
    question: "Is my team's data private?",
    answer:
      "Absolutely. We do not sell your data, share it with third parties, or use it for advertising. Your files are yours — always.",
  },
  {
    question: "How is this different from Google Drive or Notion?",
    answer:
      "Google Drive requires folders. Notion requires structure. Storebox requires neither. It's built for speed — save anything in one click, find it in seconds.",
  },
  {
    question: "Can I use it on my phone?",
    answer:
      "Yes. Storebox.ai has native iOS and Android apps, plus browser extensions for Chrome, Edge, and Safari. Everything syncs in real time.",
  },
  {
    question: "What happens when I hit my storage limit?",
    answer:
      "You'll get a clear notification and the option to upgrade — no surprises, no data loss, no files deleted without your permission.",
  },
  {
    question: "Is there a free trial for paid plans?",
    answer:
      "Yes — all paid plans come with a 14-day free trial, no credit card required.",
  },
  {
    question: "Can I migrate from Google Drive or Notion?",
    answer:
      "Yes. We have one-click import tools for Google Drive, Notion, and Dropbox. Your team can be fully set up in under 15 minutes.",
  },
];

export function StoreboxFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  return (
    <section
      className="w-full overflow-x-hidden py-20 md:py-28"
      style={{ background: "#F0F2F5" }}
      id="faq"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-12 text-center">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="mb-4 text-xs font-semibold uppercase tracking-[0.22em]"
            style={{ color: "#FF5924" }}
          >
            FAQs
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="leading-tight"
            style={{
              fontFamily: "'Louize', Georgia, serif",
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
              letterSpacing: "-0.03em",
              color: "#111418",
              fontWeight: 400,
            }}
          >
            Got questions? We&apos;ve got answers.
          </motion.h2>
        </div>

        {/* Accordion */}
        <div className="flex flex-col gap-3">
          {FAQ_ITEMS.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="overflow-hidden rounded-2xl"
              style={{
                background: "white",
                border: "1px solid #E2E6EE",
              }}
            >
              <button
                onClick={() => toggle(i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors duration-200 hover:bg-gray-50"
                style={{ minHeight: 44 }}
                aria-expanded={openIndex === i}
              >
                <span
                  className="font-semibold text-sm sm:text-base leading-snug"
                  style={{ color: "#24272D" }}
                >
                  {item.question}
                </span>
                <span
                  className="shrink-0 text-xl font-light transition-transform duration-200"
                  style={{
                    color: "#FF5924",
                    transform: openIndex === i ? "rotate(45deg)" : "rotate(0deg)",
                  }}
                >
                  +
                </span>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    key="answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: "easeInOut" }}
                    style={{ overflow: "hidden" }}
                  >
                    <p
                      className="px-6 pb-5 text-sm leading-relaxed sm:text-base"
                      style={{ color: "#748297", fontFamily: "'Inter', sans-serif" }}
                    >
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
