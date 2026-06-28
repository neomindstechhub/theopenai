import { motion } from "framer-motion";

const BLOG_POSTS = [
  {
    category: "SEO TIPS",
    title: "How small businesses rank on Page 1 without an agency",
    href: "#",
    image: "/images/blog-newquicknote.jpg",
  },
  {
    category: "CASE STUDY",
    title: "From Thumbtack to 2 bookings a day: Maria's story",
    href: "#",
    image: "/images/blog-human-endeavor.jpg",
  },
  {
    category: "PRODUCT",
    title: "How theopenai gets your business found on ChatGPT",
    href: "#",
    image: "/images/blog-on-posters.jpg",
  },
];

export function MymindFooter() {
  return (
    <footer className="w-full overflow-x-hidden" style={{ background: "#fff" }}>

      {/* Blog posts */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-6 pt-12 sm:pt-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mb-10 sm:mb-12"
        >
          <div className="grid grid-cols-1 gap-4 sm:gap-5 sm:grid-cols-3">
            {BLOG_POSTS.map((post) => (
              <motion.a
                key={post.href + post.title}
                href={post.href}
                whileHover={{ y: -6, boxShadow: "0 16px 40px rgba(0,0,0,0.10)" }}
                transition={{ duration: 0.25 }}
                className="group flex flex-col gap-3 overflow-hidden rounded-2xl"
                style={{ background: "#F0F2F5" }}
              >
                <div className="overflow-hidden rounded-2xl" style={{ aspectRatio: "16/10" }}>
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
                  />
                </div>
                <div className="px-1 pb-3">
                  <p className="mb-1 text-[10px] font-semibold uppercase tracking-widest" style={{ color: "#748297" }}>
                    {post.category}
                  </p>
                  <p className="text-sm font-medium leading-snug" style={{ color: "#24272D" }}>
                    {post.title}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Top footer row: logo + tagline | CTA card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-10 sm:mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center"
        >
          {/* Logo + tagline */}
          <div className="flex items-center gap-3.5 flex-wrap">
            <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "1.4rem", color: "#111418", letterSpacing: "-0.04em" }}>
              the<span style={{ color: "#FF5924" }}>openai</span>
            </span>
            <span style={{ color: "#a3a1f8", fontSize: 24, lineHeight: 1 }}>•</span>
            <span style={{ fontFamily: "'Louize', Georgia, serif", fontStyle: "italic", color: "#a3a1f8", fontSize: 22, fontWeight: 400 }}>
              Your website, managed.
            </span>
          </div>

          {/* CTA card */}
          <a
            href="#"
            className="flex flex-col items-center justify-center rounded-[2rem] px-12 py-8 text-center transition-all duration-300 hover:opacity-90 w-full md:w-[48%] lg:w-[44%]"
            style={{ background: "#F0F2F5", minWidth: 280 }}
          >
            <h3
              className="mb-1 text-2xl sm:text-3xl font-medium tracking-tight"
              style={{ fontFamily: "'Louize', Georgia, serif", color: "#24272D" }}
            >
              Get your free draft
            </h3>
            <p className="text-sm font-normal" style={{ color: "#748297", fontFamily: "'Inter', sans-serif" }}>
              Live in 24 hours. No credit card.
            </p>
          </a>
        </motion.div>

        {/* Footer columns */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="grid grid-cols-2 gap-8 sm:gap-10 sm:grid-cols-4"
        >
          {/* Col 1 */}
          <div className="col-span-2 sm:col-span-1">
            <div className="flex flex-col gap-2.5">
              {[
                { label: "Why people choose theopenai", href: "#" },
                { label: "Our pricing", href: "#" },
                { label: "See how it works", href: "#" },
                { label: "Compare alternatives", href: "#" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm transition-opacity hover:opacity-60"
                  style={{ color: "#24272D" }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest" style={{ color: "#748297" }}>
              Services
            </p>
            <div className="flex flex-col gap-2.5">
              {[
                { label: "Web design for small business", href: "#" },
                { label: "Website management", href: "#" },
                { label: "SEO management", href: "#" },
                { label: "CRM & lead routing", href: "#" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm transition-opacity hover:opacity-60"
                  style={{ color: "#748297" }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Col 3 */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest" style={{ color: "#748297" }}>
              Compare
            </p>
            <div className="flex flex-col gap-2.5">
              {[
                { label: "GoDaddy alternative", href: "#" },
                { label: "Wix alternative", href: "#" },
                { label: "Squarespace alternative", href: "#" },
                { label: "Agency alternative", href: "#" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm transition-opacity hover:opacity-60"
                  style={{ color: "#748297" }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Col 4 */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest" style={{ color: "#748297" }}>
              Contact
            </p>
            <div className="flex flex-col gap-2.5">
              {[
                { label: "hey@theopenai.org", href: "mailto:hey@theopenai.org" },
                { label: "Blog", href: "#" },
                { label: "FAQ", href: "#" },
                { label: "Get a free draft", href: "#" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm transition-opacity hover:opacity-60"
                  style={{ color: "#748297" }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <div className="mt-10 sm:mt-12 h-px w-full" style={{ background: "#E2E6EE" }} />
        <div className="mt-5 mb-8 flex flex-col items-center justify-between gap-3 text-xs sm:flex-row">
          <p style={{ color: "#748297" }}>© theopenai 2026</p>
          <p style={{ color: "#748297" }}>Built by Ali Asgar, Mohd Abdul Khadar &amp; Syeda Sidra Fatima</p>
          <div className="flex items-center gap-3 sm:gap-4 flex-wrap justify-center">
            {[
              { label: "Terms & Conditions", href: "#" },
              { label: "Privacy Policy", href: "#" },
              { label: "FAQ", href: "#" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="transition-opacity hover:opacity-60"
                style={{ color: "#748297" }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
