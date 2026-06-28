import { motion } from "framer-motion";

interface BrowserExtension {
  name: string;
  color: string;
  href: string;
  icon: React.ReactNode;
}

const EXTENSIONS: BrowserExtension[] = [
  {
    name: "Chrome",
    color: "#4285F4",
    href: "https://chrome.google.com/webstore/detail/mymind/kknibbkdpiicfdcomcoadbipidijkbme",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
        <circle cx="12" cy="12" r="4" fill="#4285F4" />
        <path
          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 2c2.12 0 4.04.76 5.54 2H12C9.24 6 6.9 7.64 5.7 10H2.19C3.56 5.42 7.4 4 12 4zm-7.81 8C4.07 11.34 4 11.18 4 11c0-.35.04-.69.09-1.03.03-.21.07-.42.12-.62.09-.37.2-.72.34-1.06C5.54 7.52 6.66 6.64 8 6.26V12c0 .69.06 1.37.17 2.03A7.96 7.96 0 0 1 4.19 12zm7.81 8c-2.12 0-4.04-.76-5.54-2H12c2.76 0 5.1-1.64 6.3-4h3.51C20.44 18.58 16.6 20 12 20zm7.81-8c.12-.66.19-1.33.19-2 0-.35-.04-.69-.09-1.03-.03-.21-.07-.42-.12-.62-.09-.37-.2-.72-.34-1.06C18.46 7.52 17.34 6.64 16 6.26V12c0 .69-.06 1.37-.17 2.03A7.96 7.96 0 0 0 19.81 12z"
          fill="#EA4335"
        />
      </svg>
    ),
  },
  {
    name: "Firefox",
    color: "#FF7139",
    href: "https://addons.mozilla.org/en-US/firefox/addon/mymind/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
        <path
          d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.236 14.235a7.026 7.026 0 0 1-2.754 1.537 7.019 7.019 0 0 1-4.956-.482c-1.56-.78-2.784-2.113-3.456-3.75-.67-1.636-.616-3.493.147-5.088a6.986 6.986 0 0 1 3.283-3.17c1.3-.633 2.737-.852 4.143-.629-.897.306-1.706.83-2.35 1.522-.81.873-1.292 1.998-1.378 3.182-.086 1.184.225 2.37.878 3.352.652.981 1.605 1.707 2.699 2.067 1.094.36 2.278.34 3.36-.056z"
          fill="#FF7139"
        />
      </svg>
    ),
  },
  {
    name: "Edge",
    color: "#0078D7",
    href: "https://microsoftedge.microsoft.com/addons/detail/mymind/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
        <path
          d="M21.86 17.86a9.5 9.5 0 0 1-1.476 1.237c-.53.354-1.1.627-1.697.812a7.5 7.5 0 0 1-1.99.258c-.91 0-1.81-.193-2.64-.563a6.29 6.29 0 0 1-2.14-1.564 7.37 7.37 0 0 1-1.393-2.344 8.24 8.24 0 0 1-.5-2.882c0-1.079.23-2.087.684-2.969A7.2 7.2 0 0 1 12.6 7.55a7.86 7.86 0 0 1 2.69-1.353A9.83 9.83 0 0 1 18.32 5.8a9.11 9.11 0 0 1 2.12.253c.678.17 1.324.42 1.924.744C20.76 4.13 17.63 2 12 2 6.477 2 2 6.477 2 12s4.477 10 10 10a9.7 9.7 0 0 0 4.88-1.302c1.726-.996 3.1-2.515 3.87-4.35-.295.172-.593.345-.89.512z"
          fill="#0078D7"
        />
      </svg>
    ),
  },
  {
    name: "Safari",
    color: "#006CFF",
    href: "https://apps.apple.com/us/app/mymind-safari-extension/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
        <path
          d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm.707 14.293-1.414-1.414 3.535-7.071-7.07 3.535 1.413 1.415-3.535 7.07 7.07-3.535z"
          fill="#006CFF"
        />
      </svg>
    ),
  },
];

export function MymindExtensions() {
  return (
    <section
      className="w-full py-24"
      style={{ background: "#F0F2F5" }}
      id="whats-new"
    >
      <div className="mx-auto max-w-4xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mb-4 font-bold leading-tight tracking-tight"
          style={{
            fontFamily: "'Louize', 'Space Grotesk', serif",
            fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
            color: "#24272D",
          }}
        >
          Save from anywhere
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12 text-lg"
          style={{ color: "#748297" }}
        >
          One click to save. Zero effort to organize.
        </motion.p>

        {/* Browser extension buttons */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          {EXTENSIONS.map((ext) => (
            <a
              key={ext.name}
              href={ext.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 rounded-full border bg-white px-6 py-3 text-sm font-medium shadow-sm transition-all duration-200 hover:scale-105 hover:shadow-md"
              style={{ borderColor: "#E2E6EE", color: "#24272D" }}
            >
              {ext.icon}
              <span>{ext.name}</span>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
