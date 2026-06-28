import { n as MymindNav, t as MymindFooter } from "./MymindFooter-DZ3FXdTJ.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
//#region src/routes/terms.tsx?tsr-split=component
function TermsPage() {
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
						children: "Straight talk about how OpenAI Workspace works."
					}), /* @__PURE__ */ jsx(motion.p, {
						initial: { opacity: 0 },
						animate: { opacity: 1 },
						transition: { delay: .15 },
						className: "text-gray-400 text-xs uppercase tracking-widest font-semibold",
						style: { fontFamily: "'Inter', sans-serif" },
						children: "Effective Date: 2025"
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
							/* @__PURE__ */ jsx("p", { children: "By using OpenAI Workspace, you agree to use it lawfully and respectfully. You own your content. We don't claim any rights to your files, notes, or saved items." }),
							/* @__PURE__ */ jsx("p", { children: "We reserve the right to suspend accounts that violate our terms (spam, illegal content, abuse). We offer a free tier and paid plans — billing terms are clearly stated at checkout with no hidden fees." }),
							/* @__PURE__ */ jsx("p", { children: "We may update these terms and will notify you by email when we do. Continued use after notification means you accept the update." }),
							/* @__PURE__ */ jsx("div", { className: "border-t border-gray-150 pt-6" }),
							/* @__PURE__ */ jsx("h2", {
								className: "text-xl font-bold text-gray-800",
								style: { fontFamily: "'Inter', sans-serif" },
								children: "1. Acceptance of Terms"
							}),
							/* @__PURE__ */ jsx("p", { children: "By registering for an account or using the extension, you enter into a legally binding contract with NeoMinds Tech Hub. If you do not agree to these terms, do not access our software services." }),
							/* @__PURE__ */ jsx("h2", {
								className: "text-xl font-bold text-gray-800",
								style: { fontFamily: "'Inter', sans-serif" },
								children: "2. User Conduct guidelines"
							}),
							/* @__PURE__ */ jsx("p", { children: "You must not upload viruses, malware, or coordinate illicit campaigns using team smart workspaces. OpenAI Workspace is optimized for productive team research and asset storage. Accounts found violating legal regulations will be terminated immediately." }),
							/* @__PURE__ */ jsx("h2", {
								className: "text-xl font-bold text-gray-800",
								style: { fontFamily: "'Inter', sans-serif" },
								children: "3. Fee Disclosures & Billing"
							}),
							/* @__PURE__ */ jsx("p", { children: "Payments for Team and Business tiers are handled securely. Annual billing reserves a 20% discount on the rates specified. Subscriptions renew automatically until cancelled in the admin control dashboard." })
						]
					})
				})
			})
		] }), /* @__PURE__ */ jsx(MymindFooter, {})]
	});
}
//#endregion
export { TermsPage as component };
