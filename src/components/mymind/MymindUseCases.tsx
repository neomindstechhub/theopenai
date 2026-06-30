import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface UseCase {
  label: string;
  headline: string;
  headlineItalic?: string;
  image: string;
  color: string;
}

const USE_CASES: UseCase[] = [
  {
    label: "Healthcare",
    headline: "Helping healthcare providers attract more patients,",
    headlineItalic: " and build a trusted digital presence.",
    image: "/images/healthcare.jpeg",
    color: "#FF5924",
  },
  {
    label: "Education",
    headline: "Helping schools, Montessori institutions, and learning centers increase admissions,",
    headlineItalic: " and grow with AI-powered digital solutions",
    image: "/images/education.png",
    color: "#FF7DD3",
  },
  {
    label: "Hospitality",
    headline: "Hospitality brands increase reservations,",
    headlineItalic: " strengthen their online reputation",
    image: "/images/hospitality.jpeg",
    color: "#85D3FF",
  },
  {
    label: "Food Industry",
    headline: "Empowering food businesses , food manufacturers, cloud kitchens,",
    headlineItalic: " and gourmet food companies",
    image: "/images/kunafa.jpeg",
    color: "#5CB13E",
  },
  {
    label: "Restaurants",
    headline: "Helping restaurants, cafés, hotels,",
    headlineItalic: " automate guest engagement.",
    image: "/images/food.png",
    color: "#FFE926",
  },
  {
    label: "Finance & Investments",
    headline: "Helping financial advisors, investment firms ",
    headlineItalic: "generate qualified leads, strengthen client relationships",
    image: "/images/client_work.jpeg",
    color: "#FF6866",
  },
];

export function MymindUseCases() {
  const [active, setActive] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: "start" });

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
    setActive((i) => Math.max(0, i - 1));
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
    setActive((i) => Math.min(USE_CASES.length - 1, i + 1));
  }, [emblaApi]);

  return (
    <section className="w-full overflow-x-hidden bg-white py-20 md:py-28" id="use-cases">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-10 sm:mb-12 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5 }}
              className="mb-4 text-xs font-semibold uppercase tracking-[0.2em]"
              style={{ color: "#FF5924" }}
            >
              USE CASES
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="leading-tight"
              style={{
                fontFamily: "'Louize', Georgia, serif",
                fontSize: "clamp(1.7rem, 3.5vw, 3rem)",
                letterSpacing: "-0.03em",
                color: "#000",
                fontWeight: 400,
              }}
            >
              For every kind of business.
            </motion.h2>
          </div>

          {/* Arrow nav — desktop only */}
          <div className="hidden items-center gap-2 md:flex">
            <motion.button
              onClick={scrollPrev}
              disabled={active === 0}
              whileHover={{ scale: 1.1, backgroundColor: "#f0f0f2" }}
              className="flex h-11 w-11 items-center justify-center rounded-full border transition-colors duration-200 disabled:opacity-30 cursor-pointer"
              style={{ borderColor: "#E2E6EE" }}
              aria-label="Previous"
            >
              <ChevronLeft size={18} />
            </motion.button>
            <motion.button
              onClick={scrollNext}
              disabled={active === USE_CASES.length - 1}
              whileHover={{ scale: 1.1, backgroundColor: "#f0f0f2" }}
              className="flex h-11 w-11 items-center justify-center rounded-full border transition-colors duration-200 disabled:opacity-30 cursor-pointer"
              style={{ borderColor: "#E2E6EE" }}
              aria-label="Next"
            >
              <ChevronRight size={18} />
            </motion.button>
          </div>
        </div>

        {/* Tab selector */}
        <div
          className="mb-8 sm:mb-10 overflow-x-auto scrollbar-none border-b"
          style={{ borderColor: "#F0F0F0" }}
          ref={emblaRef}
        >
          <div className="flex gap-6 sm:gap-8 pb-px select-none" style={{ minWidth: "max-content" }}>
            {USE_CASES.map((uc, i) => (
              <motion.button
                key={uc.label}
                onClick={() => setActive(i)}
                whileHover={{ backgroundColor: "rgba(0,0,0,0.04)" }}
                className="shrink-0 relative pb-4 text-base sm:text-lg font-semibold transition-colors duration-300 cursor-pointer rounded-sm"
                style={{
                  color: active === i ? "#FF5924" : "#748297",
                  fontFamily: "'Inter', sans-serif",
                  minHeight: 44,
                }}
              >
                {uc.label}
                <span
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-[#FF5924] transition-all duration-300"
                  style={{ width: active === i ? "30px" : "0px" }}
                />
              </motion.button>
            ))}
          </div>
        </div>

        {/* Active use case display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            whileHover={{ scale: 1.008 }}
            className="overflow-hidden rounded-2xl shadow-xl relative flex items-center justify-center"
            style={{
              border: "1px solid #E2E6EE",
              minHeight: 280,
              background: USE_CASES[active].color + "18",
            }}
          >
            {/* Headline overlay */}
            <div className="absolute inset-0 z-10 flex flex-col justify-end p-6 sm:p-8 md:p-12 bg-gradient-to-t from-white/90 via-white/40 to-transparent">
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-2 sm:mb-3"
                style={{ color: USE_CASES[active].color }}
              >
                Built for {USE_CASES[active].label}
              </p>
              <h3
                className="max-w-lg leading-tight"
                style={{
                  fontFamily: "'Louize', Georgia, serif",
                  fontSize: "clamp(1.3rem, 3vw, 2.25rem)",
                  letterSpacing: "-0.02em",
                  color: "#000",
                  fontWeight: 400,
                }}
              >
                {USE_CASES[active].headline}
                {USE_CASES[active].headlineItalic && (
                  <em style={{ fontStyle: "italic" }}>{USE_CASES[active].headlineItalic}</em>
                )}
              </h3>
            </div>

            <img
              src={USE_CASES[active].image}
              alt={USE_CASES[active].label}
              loading="lazy"
              className="h-auto w-full max-w-full overflow-hidden object-cover opacity-90 transition-transform duration-500"
              style={{ minHeight: 280 }}
            />
          </motion.div>
        </AnimatePresence>

        {/* Mobile arrows + dots */}
        <div className="mt-6 flex items-center justify-between md:hidden">
          <motion.button
            onClick={scrollPrev}
            disabled={active === 0}
            whileHover={{ scale: 1.1, backgroundColor: "#f0f0f2" }}
            className="flex h-11 w-11 items-center justify-center rounded-full border disabled:opacity-30 cursor-pointer"
            style={{ borderColor: "#E2E6EE" }}
            aria-label="Previous"
          >
            <ChevronLeft size={18} />
          </motion.button>
          <div className="flex gap-1.5">
            {USE_CASES.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className="h-2 rounded-full transition-all duration-200 cursor-pointer"
                style={{
                  width: active === i ? 20 : 8,
                  background: active === i ? "#FF5924" : "#E2E6EE",
                }}
                aria-label={`Use case ${i + 1}`}
              />
            ))}
          </div>
          <motion.button
            onClick={scrollNext}
            disabled={active === USE_CASES.length - 1}
            whileHover={{ scale: 1.1, backgroundColor: "#f0f0f2" }}
            className="flex h-11 w-11 items-center justify-center rounded-full border disabled:opacity-30 cursor-pointer"
            style={{ borderColor: "#E2E6EE" }}
            aria-label="Next"
          >
            <ChevronRight size={18} />
          </motion.button>
        </div>
      </div>
    </section>
  );
}
