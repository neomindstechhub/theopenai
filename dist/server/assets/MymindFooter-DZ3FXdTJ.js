import { useEffect, useRef, useState } from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
//#region src/components/mymind/MymindNav.tsx
var NAV_LINKS = [
	{
		label: "What",
		dot: "#111111",
		href: "#use-cases"
	},
	{
		label: "Why",
		dot: "#F5BF65",
		href: "#manifesto"
	},
	{
		label: "How",
		dot: "#a3a1f8",
		href: "#how-it-works"
	},
	{
		label: "What's New",
		dot: "#10B981",
		href: "#features"
	},
	{
		label: "Pricing",
		dot: "#0EA5E9",
		href: "#pricing"
	}
];
function MymindNav() {
	const lastY = useRef(0);
	const [isHidden, setIsHidden] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);
	useEffect(() => {
		const onScroll = () => {
			if (menuOpen) return;
			const currentY = window.scrollY;
			setScrolled(currentY > 50);
			setIsHidden(currentY > lastY.current && currentY > 100);
			lastY.current = currentY;
		};
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, [menuOpen]);
	useEffect(() => {
		const onResize = () => {
			if (window.innerWidth >= 768) setMenuOpen(false);
		};
		window.addEventListener("resize", onResize);
		return () => window.removeEventListener("resize", onResize);
	}, []);
	useEffect(() => {
		document.body.style.overflow = menuOpen ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [menuOpen]);
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(motion.header, {
		initial: {
			y: -10,
			opacity: 0
		},
		animate: {
			y: isHidden && !menuOpen ? "-110%" : 0,
			opacity: 1
		},
		transition: {
			duration: isHidden ? .25 : .35,
			ease: "easeInOut"
		},
		className: "fixed left-0 right-0 top-0 z-50",
		style: { background: "transparent" },
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto flex items-center justify-between",
			style: scrolled ? {
				maxWidth: 900,
				margin: "12px auto",
				padding: "8px 20px",
				background: "rgba(255,255,255,0.96)",
				backdropFilter: "blur(16px)",
				WebkitBackdropFilter: "blur(16px)",
				borderRadius: 60,
				boxShadow: "0 2px 24px rgba(0,0,0,0.10)",
				border: "1px solid rgba(0,0,0,0.06)",
				transition: "all 0.35s ease"
			} : {
				maxWidth: "100%",
				padding: "20px 24px",
				transition: "all 0.35s ease"
			},
			children: [
				/* @__PURE__ */ jsx("a", {
					href: "/",
					className: "flex items-center gap-2 select-none",
					children: /* @__PURE__ */ jsx("span", {
						className: "text-xl font-bold tracking-tight text-[#111111]",
						style: { fontFamily: "'Space Grotesk', sans-serif" },
						children: "openai"
					})
				}),
				/* @__PURE__ */ jsx("nav", {
					className: "hidden items-center gap-7 md:flex",
					children: NAV_LINKS.map((link) => /* @__PURE__ */ jsxs("a", {
						href: link.href,
						className: "flex items-center gap-1.5 text-sm transition-colors duration-200",
						style: {
							color: "#748297",
							fontFamily: "'Inter', sans-serif"
						},
						onMouseEnter: (e) => e.currentTarget.style.color = "#24272D",
						onMouseLeave: (e) => e.currentTarget.style.color = "#748297",
						children: [/* @__PURE__ */ jsx("span", {
							className: "h-[6px] w-[6px] rounded-full shrink-0",
							style: { background: link.dot }
						}), link.label]
					}, link.label))
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-3",
					children: [
						/* @__PURE__ */ jsx("a", {
							href: "#",
							className: "hidden text-sm transition-colors duration-200 md:block",
							style: { color: "#748297" },
							onMouseEnter: (e) => e.currentTarget.style.color = "#24272D",
							onMouseLeave: (e) => e.currentTarget.style.color = "#748297",
							children: "Log in"
						}),
						/* @__PURE__ */ jsx("a", {
							href: "#pricing",
							className: "rounded-full px-5 py-2 text-sm font-semibold text-white transition-all duration-200 hover:opacity-90",
							style: {
								background: "#111111",
								minHeight: 44,
								display: "flex",
								alignItems: "center"
							},
							children: "Start Free"
						}),
						/* @__PURE__ */ jsx("button", {
							onClick: () => setMenuOpen((v) => !v),
							"aria-label": menuOpen ? "Close menu" : "Open menu",
							className: "flex h-11 w-11 items-center justify-center rounded-lg md:hidden",
							style: { color: "#748297" },
							children: menuOpen ? /* @__PURE__ */ jsx(X, { size: 20 }) : /* @__PURE__ */ jsx(Menu, { size: 20 })
						})
					]
				})
			]
		})
	}), /* @__PURE__ */ jsx(AnimatePresence, { children: menuOpen && /* @__PURE__ */ jsxs(motion.div, {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
		transition: { duration: .2 },
		className: "fixed inset-0 z-40 flex flex-col bg-white md:hidden",
		children: [/* @__PURE__ */ jsx("div", { className: "h-[68px] shrink-0" }), /* @__PURE__ */ jsxs("nav", {
			className: "flex flex-1 flex-col items-start justify-center gap-1 px-6 sm:px-8",
			children: [NAV_LINKS.map((link, i) => /* @__PURE__ */ jsxs(motion.a, {
				href: link.href,
				onClick: () => setMenuOpen(false),
				initial: {
					opacity: 0,
					x: -20
				},
				animate: {
					opacity: 1,
					x: 0
				},
				transition: {
					delay: i * .06,
					duration: .3
				},
				className: "flex w-full items-center gap-3 border-b py-5 text-2xl font-semibold",
				style: {
					color: "#24272D",
					borderColor: "#E2E6EE"
				},
				children: [/* @__PURE__ */ jsx("span", {
					className: "h-2.5 w-2.5 rounded-full shrink-0",
					style: { background: link.dot }
				}), link.label]
			}, link.label)), /* @__PURE__ */ jsxs(motion.div, {
				initial: {
					opacity: 0,
					y: 20
				},
				animate: {
					opacity: 1,
					y: 0
				},
				transition: {
					delay: NAV_LINKS.length * .06 + .05,
					duration: .3
				},
				className: "mt-8 flex w-full flex-col gap-3",
				children: [/* @__PURE__ */ jsx("a", {
					href: "#",
					onClick: () => setMenuOpen(false),
					className: "flex w-full items-center justify-center rounded-full border py-3 text-sm font-medium",
					style: {
						color: "#24272D",
						borderColor: "#E2E6EE",
						minHeight: 44
					},
					children: "Log in"
				}), /* @__PURE__ */ jsx("a", {
					href: "#pricing",
					onClick: () => setMenuOpen(false),
					className: "flex w-full items-center justify-center rounded-full py-3 text-sm font-medium text-white",
					style: {
						background: "#111111",
						minHeight: 44
					},
					children: "Start Free"
				})]
			})]
		})]
	}) })] });
}
//#endregion
//#region src/components/mymind/MymindFooter.tsx
function MymindFooter() {
	return /* @__PURE__ */ jsx("footer", {
		className: "w-full overflow-x-hidden bg-white border-t border-gray-200",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16",
			children: [
				/* @__PURE__ */ jsxs(motion.div, {
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
						margin: "-60px"
					},
					transition: { duration: .6 },
					className: "grid grid-cols-2 gap-8 md:grid-cols-12",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "col-span-2 md:col-span-4 flex flex-col items-start gap-4",
							children: [/* @__PURE__ */ jsx("span", {
								className: "text-xl font-bold tracking-tight text-gray-900 select-none",
								style: { fontFamily: "'Space Grotesk', sans-serif" },
								children: "openai"
							}), /* @__PURE__ */ jsxs("p", {
								className: "text-sm text-gray-500 leading-relaxed font-medium",
								style: { fontFamily: "'Inter', sans-serif" },
								children: [
									"The fastest way for teams to store, find, and use everything they care about.",
									/* @__PURE__ */ jsx("br", {}),
									/* @__PURE__ */ jsx("br", {}),
									"One place. Instant search. Zero clutter."
								]
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "col-span-1 md:col-span-2",
							children: [/* @__PURE__ */ jsx("p", {
								className: "mb-4 text-xs font-semibold uppercase tracking-widest text-gray-400",
								style: { fontFamily: "'Inter', sans-serif" },
								children: "Product"
							}), /* @__PURE__ */ jsx("div", {
								className: "flex flex-col gap-2.5",
								children: [
									{
										label: "Features",
										href: "#features"
									},
									{
										label: "Pricing",
										href: "#pricing"
									},
									{
										label: "What's New",
										href: "#features"
									},
									{
										label: "Changelog",
										href: "#"
									},
									{
										label: "Roadmap",
										href: "#"
									}
								].map((link) => /* @__PURE__ */ jsx("a", {
									href: link.href,
									className: "text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors",
									style: { fontFamily: "'Inter', sans-serif" },
									children: link.label
								}, link.label))
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "col-span-1 md:col-span-2",
							children: [/* @__PURE__ */ jsx("p", {
								className: "mb-4 text-xs font-semibold uppercase tracking-widest text-gray-400",
								style: { fontFamily: "'Inter', sans-serif" },
								children: "Company"
							}), /* @__PURE__ */ jsx("div", {
								className: "flex flex-col gap-2.5",
								children: [
									{
										label: "About Us",
										href: "/about"
									},
									{
										label: "Our Manifesto",
										href: "#manifesto"
									},
									{
										label: "Careers",
										href: "/careers"
									},
									{
										label: "Blog",
										href: "/blog"
									},
									{
										label: "Press Kit",
										href: "#"
									}
								].map((link) => /* @__PURE__ */ jsx("a", {
									href: link.href,
									className: "text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors",
									style: { fontFamily: "'Inter', sans-serif" },
									children: link.label
								}, link.label))
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "col-span-1 md:col-span-2",
							children: [/* @__PURE__ */ jsx("p", {
								className: "mb-4 text-xs font-semibold uppercase tracking-widest text-gray-400",
								style: { fontFamily: "'Inter', sans-serif" },
								children: "Support"
							}), /* @__PURE__ */ jsx("div", {
								className: "flex flex-col gap-2.5",
								children: [
									{
										label: "Help Center",
										href: "#"
									},
									{
										label: "Video Tutorials",
										href: "#how-it-works"
									},
									{
										label: "Contact Us",
										href: "/contact"
									},
									{
										label: "System Status",
										href: "#"
									},
									{
										label: "Twitter/X",
										href: "#"
									}
								].map((link) => /* @__PURE__ */ jsx("a", {
									href: link.href,
									className: "text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors",
									style: { fontFamily: "'Inter', sans-serif" },
									children: link.label
								}, link.label))
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "col-span-1 md:col-span-2",
							children: [/* @__PURE__ */ jsx("p", {
								className: "mb-4 text-xs font-semibold uppercase tracking-widest text-gray-400",
								style: { fontFamily: "'Inter', sans-serif" },
								children: "Get the App"
							}), /* @__PURE__ */ jsx("div", {
								className: "flex flex-col gap-2.5",
								children: [
									{
										label: "iOS App",
										href: "#"
									},
									{
										label: "Android App",
										href: "#"
									},
									{
										label: "Chrome Extension",
										href: "#"
									},
									{
										label: "Edge Extension",
										href: "#"
									},
									{
										label: "Safari Extension",
										href: "#"
									},
									{
										label: "MacOS App",
										href: "#"
									}
								].map((link) => /* @__PURE__ */ jsx("a", {
									href: link.href,
									className: "text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors",
									style: { fontFamily: "'Inter', sans-serif" },
									children: link.label
								}, link.label))
							})]
						})
					]
				}),
				/* @__PURE__ */ jsx("div", { className: "mt-16 border-t border-gray-200" }),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-8 flex flex-col items-center justify-between gap-4 text-xs font-semibold text-gray-400 md:flex-row",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "text-center md:text-left",
						children: [/* @__PURE__ */ jsx("p", { children: "© 2025 OpenAI by NeoMinds Tech Hub. All rights reserved." }), /* @__PURE__ */ jsx("p", {
							className: "mt-1 text-gray-400 font-medium",
							children: "Made with ❤️ from Hyderabad, India."
						})]
					}), /* @__PURE__ */ jsx("div", {
						className: "flex items-center gap-4 flex-wrap justify-center font-medium",
						children: [
							{
								label: "Terms & Conditions",
								href: "/terms"
							},
							{
								label: "Privacy Policy",
								href: "/privacy"
							},
							{
								label: "FAQ",
								href: "#faq"
							},
							{
								label: "Cookie Settings",
								href: "#"
							}
						].map((link) => /* @__PURE__ */ jsx("a", {
							href: link.href,
							className: "hover:text-gray-900 transition-colors",
							style: { fontFamily: "'Inter', sans-serif" },
							children: link.label
						}, link.label))
					})]
				})
			]
		})
	});
}
//#endregion
export { MymindNav as n, MymindFooter as t };
