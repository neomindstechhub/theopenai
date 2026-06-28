import { n as MymindNav, t as MymindFooter } from "./MymindFooter-DZ3FXdTJ.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
//#region src/routes/about.tsx?tsr-split=component
var LEADERS = [
	{
		name: "Shaik Asgar",
		role: "Founder",
		desc: "Visionary builder with a passion for making complex things beautifully simple.",
		initials: "SA"
	},
	{
		name: "Mohd Abdul Khadar",
		role: "Co-Founder",
		desc: "The engineering mind behind Storebox's blazing-fast AI infrastructure.",
		initials: "MK"
	},
	{
		name: "Syeda Sidra Fatima",
		role: "Chief Executive Officer",
		desc: "Leading OpenAI Workspace's growth strategy with a sharp focus on team productivity and enterprise adoption.",
		initials: "SF"
	},
	{
		name: "Safura Siddiqa",
		role: "Chief Operating Officer",
		desc: "Ensuring every team that joins OpenAI Workspace has a world-class experience from day one.",
		initials: "SS"
	}
];
var VALUES = [
	{
		title: "Speed above complexity.",
		desc: "We obsess over making things faster, not fuller. Every feature earns its place."
	},
	{
		title: "Privacy without compromise.",
		desc: "Your data belongs to your team. We will never sell, share, or exploit it."
	},
	{
		title: "Simplicity as a feature.",
		desc: "The best tool is the one your team actually uses. We design for adoption, not demos."
	},
	{
		title: "Built for humans.",
		desc: "Technology should fit how people think — not force people to think differently."
	}
];
function AboutPage() {
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
							children: "OUR STORY"
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
								"We were tired of slow tools.",
								/* @__PURE__ */ jsx("br", {}),
								"So we built a faster one."
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
							transition: { delay: .2 },
							className: "mx-auto max-w-2xl text-gray-500 leading-relaxed text-base sm:text-lg",
							style: { fontFamily: "'Inter', sans-serif" },
							children: [
								"NeoMinds Tech Hub was founded by a team that spent years watching businesses waste hours every week hunting for files, re-explaining context, and managing folders that no one wanted to maintain.",
								/* @__PURE__ */ jsx("br", {}),
								/* @__PURE__ */ jsx("br", {}),
								"We believed there was a better way — and we built it.",
								/* @__PURE__ */ jsx("br", {}),
								/* @__PURE__ */ jsx("br", {}),
								/* @__PURE__ */ jsx("strong", { children: "OpenAI Workspace" }),
								" started as an internal tool for our own team. When we realized it had cut our own file-hunting time by over 60%, we knew it deserved to exist in the world.",
								/* @__PURE__ */ jsx("br", {}),
								/* @__PURE__ */ jsx("br", {}),
								"Today, OpenAI Workspace helps thousands of teams across the globe store everything they care about and find it instantly — without a second of wasted time."
							]
						})
					]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "py-20",
				children: /* @__PURE__ */ jsxs("div", {
					className: "mx-auto max-w-5xl px-4 sm:px-6 lg:px-8",
					children: [/* @__PURE__ */ jsx("h2", {
						className: "text-3xl font-bold tracking-tight text-center text-gray-900 mb-12",
						style: { fontFamily: "'Inter', sans-serif" },
						children: "Leadership Team"
					}), /* @__PURE__ */ jsx("div", {
						className: "grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4",
						children: LEADERS.map((leader, i) => /* @__PURE__ */ jsxs(motion.div, {
							initial: {
								opacity: 0,
								y: 20
							},
							whileInView: {
								opacity: 1,
								y: 0
							},
							viewport: { once: true },
							transition: {
								duration: .5,
								delay: i * .1
							},
							className: "rounded-2xl border border-gray-200 bg-white p-6 shadow-sm flex flex-col items-center text-center",
							children: [
								/* @__PURE__ */ jsx("div", {
									className: "h-16 w-16 rounded-full flex items-center justify-center bg-gray-50 border border-gray-200 text-lg font-bold text-gray-700 mb-4 select-none",
									children: leader.initials
								}),
								/* @__PURE__ */ jsx("h3", {
									className: "font-bold text-gray-900 text-base",
									style: { fontFamily: "'Inter', sans-serif" },
									children: leader.name
								}),
								/* @__PURE__ */ jsx("p", {
									className: "text-xs font-bold text-[#a3a1f8] mb-3 uppercase tracking-wider",
									style: { fontFamily: "'Inter', sans-serif" },
									children: leader.role
								}),
								/* @__PURE__ */ jsx("p", {
									className: "text-xs text-gray-500 leading-relaxed font-medium",
									style: { fontFamily: "'Inter', sans-serif" },
									children: leader.desc
								})
							]
						}, leader.name))
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "py-20 bg-gray-50 border-t border-b border-gray-200",
				children: /* @__PURE__ */ jsxs("div", {
					className: "mx-auto max-w-4xl px-4 sm:px-6 lg:px-8",
					children: [/* @__PURE__ */ jsx("h2", {
						className: "text-3xl font-bold tracking-tight text-center text-gray-900 mb-12",
						style: { fontFamily: "'Inter', sans-serif" },
						children: "Our Values"
					}), /* @__PURE__ */ jsx("div", {
						className: "grid grid-cols-1 gap-6 sm:grid-cols-2",
						children: VALUES.map((val, i) => /* @__PURE__ */ jsxs(motion.div, {
							initial: {
								opacity: 0,
								y: 16
							},
							whileInView: {
								opacity: 1,
								y: 0
							},
							viewport: { once: true },
							transition: {
								duration: .5,
								delay: i * .08
							},
							className: "rounded-2xl bg-white border border-gray-200 p-6 shadow-sm",
							children: [/* @__PURE__ */ jsx("h3", {
								className: "font-bold text-gray-900 text-lg mb-2",
								style: { fontFamily: "'Inter', sans-serif" },
								children: val.title
							}), /* @__PURE__ */ jsx("p", {
								className: "text-sm text-gray-500 leading-relaxed font-medium",
								style: { fontFamily: "'Inter', sans-serif" },
								children: val.desc
							})]
						}, val.title))
					})]
				})
			})
		] }), /* @__PURE__ */ jsx(MymindFooter, {})]
	});
}
//#endregion
export { AboutPage as component };
