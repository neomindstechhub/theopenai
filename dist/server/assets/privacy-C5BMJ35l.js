import { n as MymindNav, t as MymindFooter } from "./MymindFooter-DZ3FXdTJ.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
//#region src/routes/privacy.tsx?tsr-split=component
function PrivacyPage() {
	return /* @__PURE__ */ jsxs("div", {
		className: "min-h-screen bg-white text-gray-900 flex flex-col justify-between",
		children: [/* @__PURE__ */ jsxs("div", { children: [
			/* @__PURE__ */ jsx(MymindNav, {}),
			/* @__PURE__ */ jsx("section", {
				className: "pt-32 pb-16 bg-gray-50 border-b border-gray-200",
				children: /* @__PURE__ */ jsxs("div", {
					className: "mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center",
					children: [/* @__PURE__ */ jsx(motion.h1, {
						initial: {
							opacity: 0,
							y: 20
						},
						animate: {
							opacity: 1,
							y: 0
						},
						className: "leading-tight mb-4",
						style: {
							fontFamily: "'Louize', Georgia, serif",
							fontSize: "clamp(2rem, 5vw, 3.5rem)",
							letterSpacing: "-0.02em",
							color: "#111111",
							fontWeight: 400
						},
						children: "Your data. Your rules. Full stop."
					}), /* @__PURE__ */ jsx(motion.p, {
						initial: { opacity: 0 },
						animate: { opacity: 1 },
						transition: { delay: .15 },
						className: "text-gray-400 text-xs uppercase tracking-widest font-semibold",
						style: { fontFamily: "'Inter', sans-serif" },
						children: "Last Updated: 2025"
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "py-16",
				children: /* @__PURE__ */ jsx("div", {
					className: "mx-auto max-w-3xl px-4 sm:px-6 lg:px-8",
					children: /* @__PURE__ */ jsxs("div", {
						className: "prose prose-gray max-w-none text-gray-500 leading-relaxed font-medium space-y-6",
						style: {
							fontFamily: "'Inter', sans-serif",
							fontSize: "1rem"
						},
						children: [
							/* @__PURE__ */ jsx("p", { children: "OpenAI Workspace was built with privacy at its core — not bolted on as an afterthought." }),
							/* @__PURE__ */ jsx("p", { children: "We collect only what we need to make the product work. We never sell your data. We never use your files to train AI models without your explicit consent. We never show you ads." }),
							/* @__PURE__ */ jsxs("p", { children: [/* @__PURE__ */ jsx("strong", { children: "What we collect:" }), " account information (email, name), usage data (to improve performance), and the content you choose to save (stored securely and accessible only by you and your team)."] }),
							/* @__PURE__ */ jsx("p", { children: "Your data is encrypted in transit and at rest. You can export or delete your data at any time, no questions asked." }),
							/* @__PURE__ */ jsx("div", { className: "border-t border-gray-150 pt-6" }),
							/* @__PURE__ */ jsx("h2", {
								className: "text-xl font-bold text-gray-800",
								style: { fontFamily: "'Inter', sans-serif" },
								children: "1. Data Storage & Encryption"
							}),
							/* @__PURE__ */ jsx("p", { children: "All workspace files, notes, links, and documents are stored on highly secure servers. Data is encrypted using standard protocols: AES-256 at rest, and HTTPS/TLS in transit." }),
							/* @__PURE__ */ jsx("h2", {
								className: "text-xl font-bold text-gray-800",
								style: { fontFamily: "'Inter', sans-serif" },
								children: "2. AI Processing Boundaries"
							}),
							/* @__PURE__ */ jsx("p", { children: "When our AI reads and indexes your content, it does so through private endpoints. Your proprietary files, search queries, and team documents are strictly private. They will never be shared into public large language models or used for advertising pipelines." }),
							/* @__PURE__ */ jsx("h2", {
								className: "text-xl font-bold text-gray-800",
								style: { fontFamily: "'Inter', sans-serif" },
								children: "3. Your Ownership"
							}),
							/* @__PURE__ */ jsx("p", { children: "You retain complete intellectual property ownership over all content saved. We claim no ownership over your assets. If you choose to delete your account, all associated content is permanently purged from our primary directories within 30 days." })
						]
					})
				})
			})
		] }), /* @__PURE__ */ jsx(MymindFooter, {})]
	});
}
//#endregion
export { PrivacyPage as component };
