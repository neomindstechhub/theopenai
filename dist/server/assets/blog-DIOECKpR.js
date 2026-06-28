import { n as MymindNav, t as MymindFooter } from "./MymindFooter-DZ3FXdTJ.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
//#region src/routes/blog.tsx?tsr-split=component
var POSTS = [
	{
		title: "The Hidden Cost of Disorganized Teams (And How to Fix It in a Day)",
		desc: "Every time a team member hunts for a missing asset, details slip. Here is a breakdown of workflow waste and how a unified workspace eliminates it.",
		date: "June 25, 2025",
		author: "Shaik Asgar",
		readTime: "5 min read"
	},
	{
		title: "Why Folders Are Dead — And What Comes Next",
		desc: "Rigid folder systems force hierarchy where thoughts are associative. Read why automatic indexing is replacing manual folder rituals.",
		date: "June 18, 2025",
		author: "Mohd Abdul Khadar",
		readTime: "4 min read"
	},
	{
		title: "How AI Search Is Replacing Manual File Management",
		desc: "Discover how advanced natural language searches locate screenshots, PDFs, and links from vague descriptions without tags.",
		date: "June 10, 2025",
		author: "Syeda Sidra Fatima",
		readTime: "6 min read"
	},
	{
		title: "5 Ways OpenAI Workspace Saves Our Own Team 3+ Hours a Week",
		desc: "A transparent look into our own workflow metrics and how storing assets into a single private workspace cut meeting times.",
		date: "May 28, 2025",
		author: "Safura Siddiqa",
		readTime: "4 min read"
	},
	{
		title: "From 6 Tools to 1: A Case Study in Simplifying Your Team's Stack",
		desc: "How a high-growth creative agency replaced Drive, Slack bookmark bins, visual boards, and Notion logs to speed up execution.",
		date: "May 15, 2025",
		author: "Team OpenAI",
		readTime: "7 min read"
	}
];
function BlogPage() {
	return /* @__PURE__ */ jsxs("div", {
		className: "min-h-screen bg-white text-gray-900 flex flex-col justify-between",
		children: [/* @__PURE__ */ jsxs("div", { children: [
			/* @__PURE__ */ jsx(MymindNav, {}),
			/* @__PURE__ */ jsx("section", {
				className: "pt-32 pb-20 bg-gray-50 border-b border-gray-200",
				children: /* @__PURE__ */ jsxs("div", {
					className: "mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center",
					children: [/* @__PURE__ */ jsx(motion.p, {
						initial: {
							opacity: 0,
							y: 16
						},
						animate: {
							opacity: 1,
							y: 0
						},
						className: "text-xs font-semibold uppercase tracking-[0.22em] text-[#a3a1f8] mb-4",
						children: "THOUGHTS FROM THE TEAM"
					}), /* @__PURE__ */ jsx(motion.h1, {
						initial: {
							opacity: 0,
							y: 24
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: { delay: .1 },
						className: "leading-tight mb-6",
						style: {
							fontFamily: "'Louize', Georgia, serif",
							fontSize: "clamp(2.25rem, 6vw, 3.5rem)",
							letterSpacing: "-0.03em",
							color: "#111111",
							fontWeight: 400
						},
						children: "Ideas on work, speed, and building better teams."
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "py-20",
				children: /* @__PURE__ */ jsx("div", {
					className: "mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-left",
					children: /* @__PURE__ */ jsx("div", {
						className: "flex flex-col gap-10",
						children: POSTS.map((post, i) => /* @__PURE__ */ jsxs(motion.article, {
							initial: {
								opacity: 0,
								y: 24
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
								duration: .5,
								delay: i * .08
							},
							className: "group flex flex-col gap-3 pb-10 border-b border-gray-150",
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: "flex gap-2 items-center text-xs text-gray-400 font-semibold uppercase tracking-wider",
									children: [
										/* @__PURE__ */ jsx("span", { children: post.date }),
										/* @__PURE__ */ jsx("span", { children: "·" }),
										/* @__PURE__ */ jsx("span", { children: post.readTime }),
										/* @__PURE__ */ jsx("span", { children: "·" }),
										/* @__PURE__ */ jsx("span", {
											className: "text-gray-500 font-bold",
											children: post.author
										})
									]
								}),
								/* @__PURE__ */ jsx("h2", {
									className: "text-xl sm:text-2xl font-bold text-gray-900 group-hover:text-[#a3a1f8] transition-colors",
									style: { fontFamily: "'Inter', sans-serif" },
									children: /* @__PURE__ */ jsx("a", {
										href: "#",
										children: post.title
									})
								}),
								/* @__PURE__ */ jsx("p", {
									className: "text-sm sm:text-base text-gray-500 leading-relaxed font-medium",
									style: { fontFamily: "'Inter', sans-serif" },
									children: post.desc
								}),
								/* @__PURE__ */ jsx("div", {
									className: "flex mt-2",
									children: /* @__PURE__ */ jsx("a", {
										href: "#",
										className: "text-xs font-bold uppercase tracking-wider text-black group-hover:text-[#a3a1f8] transition-colors",
										style: { fontFamily: "'Inter', sans-serif" },
										children: "Read Article →"
									})
								})
							]
						}, post.title))
					})
				})
			})
		] }), /* @__PURE__ */ jsx(MymindFooter, {})]
	});
}
//#endregion
export { BlogPage as component };
