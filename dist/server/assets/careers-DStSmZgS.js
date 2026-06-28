import { n as MymindNav, t as MymindFooter } from "./MymindFooter-DZ3FXdTJ.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
//#region src/routes/careers.tsx?tsr-split=component
var OPEN_ROLES = [
	{
		title: "Senior AI/ML Engineer",
		type: "Full-time",
		loc: "Remote-first",
		dept: "Engineering"
	},
	{
		title: "Full-Stack Developer (React + Node)",
		type: "Full-time",
		loc: "Hyderabad / Hybrid",
		dept: "Engineering"
	},
	{
		title: "Product Designer (UX/UI)",
		type: "Full-time",
		loc: "Remote-first",
		dept: "Design"
	},
	{
		title: "Customer Success Lead",
		type: "Full-time",
		loc: "Remote-first",
		dept: "Operations"
	},
	{
		title: "Sales Development Representative (SDR)",
		type: "Full-time",
		loc: "Remote-first",
		dept: "Sales"
	}
];
function CareersPage() {
	return /* @__PURE__ */ jsxs("div", {
		className: "min-h-screen bg-white text-gray-900 flex flex-col justify-between",
		children: [/* @__PURE__ */ jsxs("div", { children: [
			/* @__PURE__ */ jsx(MymindNav, {}),
			/* @__PURE__ */ jsx("section", {
				className: "pt-32 pb-20 bg-gray-50 border-b border-gray-200",
				children: /* @__PURE__ */ jsxs("div", {
					className: "mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center",
					children: [
						/* @__PURE__ */ jsx(motion.p, {
							initial: {
								opacity: 0,
								y: 16
							},
							animate: {
								opacity: 1,
								y: 0
							},
							className: "text-xs font-semibold uppercase tracking-[0.22em] text-[#a3a1f8] mb-4",
							children: "JOIN US"
						}),
						/* @__PURE__ */ jsxs(motion.h1, {
							initial: {
								opacity: 0,
								y: 24
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: { delay: .1 },
							className: "leading-tight mb-8",
							style: {
								fontFamily: "'Louize', Georgia, serif",
								fontSize: "clamp(2.25rem, 6vw, 4rem)",
								letterSpacing: "-0.03em",
								color: "#111111",
								fontWeight: 400
							},
							children: [
								"Help us build the tool",
								/* @__PURE__ */ jsx("br", {}),
								"that every team deserves."
							]
						}),
						/* @__PURE__ */ jsxs(motion.p, {
							initial: {
								opacity: 0,
								y: 20
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: { delay: .15 },
							className: "mx-auto max-w-2xl text-gray-500 leading-relaxed text-base",
							style: { fontFamily: "'Inter', sans-serif" },
							children: [
								"We're a small, fast-moving team that believes great tools change how people work. We're looking for people who care deeply about speed, simplicity, and craft.",
								/* @__PURE__ */ jsx("br", {}),
								/* @__PURE__ */ jsx("br", {}),
								"We offer remote-first roles, competitive pay, and the chance to build something that thousands of teams use every single day."
							]
						})
					]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "py-20",
				children: /* @__PURE__ */ jsxs("div", {
					className: "mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-left",
					children: [
						/* @__PURE__ */ jsx("h2", {
							className: "text-2xl font-bold tracking-tight text-gray-900 mb-8",
							style: { fontFamily: "'Inter', sans-serif" },
							children: "Open Roles"
						}),
						/* @__PURE__ */ jsx("div", {
							className: "flex flex-col gap-4",
							children: OPEN_ROLES.map((role, i) => /* @__PURE__ */ jsxs(motion.div, {
								initial: {
									opacity: 0,
									y: 16
								},
								whileInView: {
									opacity: 1,
									y: 0
								},
								viewport: {
									once: true,
									margin: "-20px"
								},
								transition: {
									duration: .4,
									delay: i * .05
								},
								className: "rounded-2xl border border-gray-200 bg-white p-6 shadow-sm flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 hover:border-gray-300 transition-colors",
								children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
									className: "font-bold text-gray-900 text-base sm:text-lg mb-1",
									style: { fontFamily: "'Inter', sans-serif" },
									children: role.title
								}), /* @__PURE__ */ jsxs("div", {
									className: "flex gap-2.5 items-center flex-wrap select-none text-[10px] font-bold text-gray-400",
									children: [
										/* @__PURE__ */ jsx("span", {
											className: "uppercase tracking-wider rounded-md border border-gray-150 px-2 py-0.5",
											children: role.dept
										}),
										/* @__PURE__ */ jsx("span", { children: "·" }),
										/* @__PURE__ */ jsx("span", { children: role.loc }),
										/* @__PURE__ */ jsx("span", { children: "·" }),
										/* @__PURE__ */ jsx("span", { children: role.type })
									]
								})] }), /* @__PURE__ */ jsx("a", {
									href: "/contact",
									className: "rounded-xl px-5 py-2.5 text-xs font-bold bg-[#111111] text-white hover:opacity-90 transition-opacity text-center shrink-0",
									style: { minHeight: 38 },
									children: "Apply Now"
								})]
							}, role.title))
						}),
						/* @__PURE__ */ jsxs(motion.div, {
							initial: { opacity: 0 },
							whileInView: { opacity: 1 },
							viewport: { once: true },
							className: "mt-12 text-center rounded-2xl bg-gray-50 border border-dashed border-gray-200 p-6",
							children: [
								/* @__PURE__ */ jsx("h3", {
									className: "font-bold text-gray-800 text-base mb-1",
									style: { fontFamily: "'Inter', sans-serif" },
									children: "Don't see your role?"
								}),
								/* @__PURE__ */ jsx("p", {
									className: "text-xs text-gray-500 font-medium mb-4 leading-relaxed",
									style: { fontFamily: "'Inter', sans-serif" },
									children: "Send us your resume anyway. We are always looking for exceptional builders and designers."
								}),
								/* @__PURE__ */ jsx("a", {
									href: "/contact",
									className: "inline-flex justify-center items-center rounded-xl bg-white border border-gray-200 text-gray-800 px-5 py-2.5 text-xs font-bold hover:bg-gray-100 transition-colors",
									style: { minHeight: 38 },
									children: "Send Us Your Resume"
								})
							]
						})
					]
				})
			})
		] }), /* @__PURE__ */ jsx(MymindFooter, {})]
	});
}
//#endregion
export { CareersPage as component };
