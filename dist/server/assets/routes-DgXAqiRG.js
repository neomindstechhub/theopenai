import { n as useLightbox } from "./LightboxContext-DvYjQmtE.js";
import { n as MymindNav, t as MymindFooter } from "./MymindFooter-DZ3FXdTJ.js";
import { useCallback, useEffect, useState } from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Lenis from "lenis";
import useEmblaCarousel from "embla-carousel-react";
//#region src/components/mymind/MymindHero.tsx
var MASONRY_CARDS = [
	{
		bg: "#f3f3f5",
		h: 130,
		type: "img",
		label: ""
	},
	{
		bg: "#f9fafb",
		h: 90,
		type: "quote",
		label: "OpenAI: Creating safe AGI that benefits all of humanity."
	},
	{
		bg: "#edf2f7",
		h: 110,
		type: "img",
		label: ""
	},
	{
		bg: "#f7fafc",
		h: 100,
		type: "img",
		label: ""
	},
	{
		bg: "#f8f9fa",
		h: 80,
		type: "text",
		label: ""
	},
	{
		bg: "#f7fafc",
		h: 120,
		type: "img",
		label: ""
	},
	{
		bg: "#edf2f7",
		h: 90,
		type: "text",
		label: ""
	},
	{
		bg: "#f7fafc",
		h: 105,
		type: "img",
		label: ""
	}
];
function MymindHero() {
	return /* @__PURE__ */ jsxs("section", {
		className: "relative flex min-h-[100svh] w-full flex-col items-center justify-center overflow-hidden pt-20",
		style: { background: `
          radial-gradient(ellipse 60% 60% at 50% 50%, rgba(163, 161, 248, 0.08) 0%, transparent 60%),
          linear-gradient(180deg, #F8F9FA 0%, #FFFFFF 100%)
        ` },
		children: [/* @__PURE__ */ jsxs("div", {
			className: "relative z-10 mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 text-center",
			children: [
				/* @__PURE__ */ jsxs("h1", {
					className: "mb-8 sm:mb-10 leading-[1.05]",
					style: {
						fontFamily: "'Louize', Georgia, serif",
						fontSize: "clamp(2.8rem, 8vw, 6.5rem)",
						letterSpacing: "-0.03em",
						color: "#111111",
						fontWeight: 400
					},
					children: [
						/* @__PURE__ */ jsx("div", {
							style: { overflow: "hidden" },
							children: /* @__PURE__ */ jsx(motion.span, {
								className: "block",
								initial: {
									opacity: 0,
									y: 40
								},
								animate: {
									opacity: 1,
									y: 0
								},
								transition: {
									duration: .7,
									delay: .1
								},
								children: "Store everything."
							})
						}),
						/* @__PURE__ */ jsx("div", {
							style: { overflow: "hidden" },
							children: /* @__PURE__ */ jsx(motion.span, {
								className: "block",
								initial: {
									opacity: 0,
									y: 40
								},
								animate: {
									opacity: 1,
									y: 0
								},
								transition: {
									duration: .7,
									delay: .25
								},
								children: "Find anything."
							})
						}),
						/* @__PURE__ */ jsx("div", {
							style: { overflow: "hidden" },
							children: /* @__PURE__ */ jsx(motion.span, {
								className: "block text-mm-pink",
								initial: {
									opacity: 0,
									y: 40
								},
								animate: {
									opacity: 1,
									y: 0
								},
								transition: {
									duration: .7,
									delay: .4
								},
								style: { color: "#a3a1f8" },
								children: "Instantly."
							})
						})
					]
				}),
				/* @__PURE__ */ jsx(motion.p, {
					initial: {
						opacity: 0,
						y: 20
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: {
						duration: .7,
						delay: .55
					},
					className: "mx-auto mb-8 sm:mb-10 max-w-xl text-center text-gray-500",
					style: {
						fontFamily: "'Inter', sans-serif",
						fontSize: "clamp(1rem, 2vw, 1.15rem)",
						lineHeight: 1.7
					},
					children: "All your files, links, documents, and team knowledge — in one blazing-fast, AI-powered workspace."
				}),
				/* @__PURE__ */ jsxs(motion.div, {
					initial: {
						opacity: 0,
						y: 16
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: {
						duration: .6,
						delay: .65
					},
					className: "flex flex-col sm:flex-row items-center justify-center gap-4 mb-8",
					children: [/* @__PURE__ */ jsx("a", {
						href: "#pricing",
						className: "rounded-full px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl w-full sm:w-auto text-center",
						style: {
							background: "#111111",
							minHeight: 44
						},
						children: "Start Free — No Credit Card"
					}), /* @__PURE__ */ jsx("a", {
						href: "#how-it-works",
						className: "rounded-full px-8 py-3.5 text-sm font-semibold text-[#111111] border border-[#111111] transition-all duration-300 hover:bg-gray-50 w-full sm:w-auto text-center",
						style: { minHeight: 44 },
						children: "See How It Works →"
					})]
				}),
				/* @__PURE__ */ jsxs(motion.p, {
					initial: { opacity: 0 },
					animate: { opacity: 1 },
					transition: {
						duration: .5,
						delay: .75
					},
					className: "text-xs tracking-wider text-gray-400 font-medium",
					children: ["Available on: ", /* @__PURE__ */ jsx("span", {
						className: "text-gray-600 font-semibold",
						children: "iOS · Android · Chrome · Edge · Safari · Web"
					})]
				})
			]
		}), /* @__PURE__ */ jsx(motion.div, {
			initial: {
				opacity: 0,
				y: 40
			},
			animate: {
				opacity: 1,
				y: 0
			},
			transition: {
				duration: .9,
				delay: .85
			},
			className: "relative z-10 mx-auto hidden w-full max-w-5xl px-4 sm:px-6 pb-0 sm:block",
			children: /* @__PURE__ */ jsxs("div", {
				className: "overflow-hidden rounded-t-2xl shadow-2xl",
				style: {
					border: "1px solid rgba(0,0,0,0.08)",
					borderBottom: "none",
					background: "#f5f5f7"
				},
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-2 px-4 py-3",
					style: {
						background: "#e8e8ea",
						borderBottom: "1px solid rgba(0,0,0,0.06)"
					},
					children: [
						/* @__PURE__ */ jsx("span", {
							className: "h-3 w-3 rounded-full",
							style: { background: "#FF5F57" }
						}),
						/* @__PURE__ */ jsx("span", {
							className: "h-3 w-3 rounded-full",
							style: { background: "#FEBC2E" }
						}),
						/* @__PURE__ */ jsx("span", {
							className: "h-3 w-3 rounded-full",
							style: { background: "#28C840" }
						}),
						/* @__PURE__ */ jsx("div", {
							className: "mx-auto flex h-6 items-center rounded-md px-4 text-xs",
							style: {
								background: "#fff",
								color: "#748297",
								minWidth: 200
							},
							children: "workspace.openai.com"
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "ml-auto hidden items-center gap-4 text-xs sm:flex",
							style: { color: "#748297" },
							children: [
								/* @__PURE__ */ jsx("span", {
									className: "font-semibold",
									style: { color: "#24272D" },
									children: "All Assets"
								}),
								/* @__PURE__ */ jsx("span", { children: "Smart Spaces" }),
								/* @__PURE__ */ jsx("span", { children: "Recent Docs" })
							]
						})
					]
				}), /* @__PURE__ */ jsxs("div", {
					className: "relative",
					style: {
						height: 260,
						overflow: "hidden"
					},
					children: [/* @__PURE__ */ jsx("div", {
						className: "grid grid-cols-4 gap-2 p-3",
						style: { opacity: .55 },
						children: MASONRY_CARDS.map((card, i) => /* @__PURE__ */ jsxs("div", {
							className: "rounded-xl",
							style: {
								background: card.bg,
								height: card.h,
								minHeight: card.h
							},
							children: [card.type === "quote" && /* @__PURE__ */ jsx("div", {
								className: "flex h-full items-center justify-center p-3",
								children: /* @__PURE__ */ jsxs("span", {
									className: "text-center text-xs leading-relaxed",
									style: {
										color: "#748297",
										fontFamily: "Georgia, serif",
										fontStyle: "italic"
									},
									children: [
										"“",
										card.label,
										"”"
									]
								})
							}), card.type === "text" && /* @__PURE__ */ jsxs("div", {
								className: "p-3",
								children: [/* @__PURE__ */ jsx("div", {
									className: "mb-1 h-2 rounded",
									style: {
										background: "#ddd",
										width: "70%"
									}
								}), /* @__PURE__ */ jsx("div", {
									className: "h-2 rounded",
									style: {
										background: "#ddd",
										width: "50%"
									}
								})]
							})]
						}, i))
					}), /* @__PURE__ */ jsx("div", {
						className: "absolute inset-x-0 bottom-0",
						style: {
							height: 120,
							background: "linear-gradient(to bottom, transparent, #FFFFFF)"
						}
					})]
				})]
			})
		})]
	});
}
//#endregion
//#region src/components/mymind/StoreboxSocialProof.tsx
function StoreboxSocialProof() {
	return /* @__PURE__ */ jsx("section", {
		className: "w-full overflow-x-hidden bg-[#F8F9FA] py-10 border-b border-[#E5E7EB]",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center",
			children: [/* @__PURE__ */ jsxs(motion.blockquote, {
				initial: {
					opacity: 0,
					y: 20
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: {
					once: true,
					margin: "-40px"
				},
				transition: { duration: .6 },
				className: "mb-4",
				style: {
					fontFamily: "'Louize', Georgia, serif",
					fontSize: "clamp(1.1rem, 2.2vw, 1.4rem)",
					fontStyle: "italic",
					color: "#4B5563",
					lineHeight: 1.6,
					letterSpacing: "-0.01em"
				},
				children: [
					"“Storebox replaced four tools for our team. We just… store it, and it's there.”",
					/* @__PURE__ */ jsx("br", { className: "sm:hidden" }),
					/* @__PURE__ */ jsx("span", {
						className: "not-italic text-sm font-semibold text-gray-500 ml-2",
						children: "— Product Manager, SaaS company"
					})
				]
			}), /* @__PURE__ */ jsx(motion.p, {
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
					margin: "-40px"
				},
				transition: {
					duration: .6,
					delay: .15
				},
				className: "text-xs uppercase tracking-widest font-semibold text-gray-400",
				children: "Trusted by 10,000+ teams across 40+ countries"
			})]
		})
	});
}
//#endregion
//#region src/components/mymind/MymindIntroVideo.tsx
var DESKTOP_VIDEO = "/videos/intro-desktop.mp4";
var IPHONE_VIDEO = "/videos/intro-iphone.mp4";
var IPHONE_MOCKUP = "/images/iphone-video-mockup.webp";
function MymindIntroVideo() {
	const { openLightbox } = useLightbox();
	return /* @__PURE__ */ jsx("section", {
		className: "w-full overflow-x-hidden bg-white py-16 sm:py-20",
		children: /* @__PURE__ */ jsx("div", {
			className: "mx-auto max-w-6xl px-4 sm:px-6 lg:px-8",
			children: /* @__PURE__ */ jsx(motion.div, {
				initial: {
					opacity: 0,
					y: 40
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: {
					once: true,
					margin: "-80px"
				},
				transition: { duration: .7 },
				className: "relative",
				children: /* @__PURE__ */ jsxs("div", {
					onClick: () => openLightbox("pQZKRf1gF9w"),
					className: "relative overflow-hidden rounded-2xl shadow-2xl cursor-pointer group",
					style: { aspectRatio: "2200 / 1560" },
					children: [
						/* @__PURE__ */ jsx("video", {
							src: DESKTOP_VIDEO,
							autoPlay: true,
							muted: true,
							playsInline: true,
							loop: true,
							className: "h-full w-full object-cover",
							style: { display: "block" }
						}),
						/* @__PURE__ */ jsx("div", {
							className: "absolute inset-0 flex items-center justify-center bg-black/5 transition-colors duration-300 group-hover:bg-black/10",
							children: /* @__PURE__ */ jsx("div", {
								className: "flex h-16 w-16 items-center justify-center rounded-full shadow-2xl transition-transform duration-300 group-hover:scale-110",
								style: { background: "linear-gradient(180deg, #FF5924 0%, #FFA86A 100%)" },
								children: /* @__PURE__ */ jsx("svg", {
									viewBox: "0 0 24 24",
									fill: "white",
									className: "ml-1 h-7 w-7",
									"aria-hidden": "true",
									children: /* @__PURE__ */ jsx("path", { d: "M8 5v14l11-7z" })
								})
							})
						}),
						/* @__PURE__ */ jsx(motion.div, {
							className: "absolute bottom-0 left-6 sm:left-8 translate-y-4",
							style: {
								zIndex: 10,
								width: "clamp(7%, 12%, 14%)"
							},
							animate: { y: [
								0,
								-8,
								0
							] },
							transition: {
								duration: 3.5,
								repeat: Infinity,
								ease: "easeInOut"
							},
							onClick: (e) => {
								e.stopPropagation();
								window.open("https://apps.apple.com/us/app/mymind-extend-your-mind/id1520332347", "_blank");
							},
							children: /* @__PURE__ */ jsxs("div", {
								className: "relative overflow-hidden rounded-2xl shadow-2xl",
								children: [/* @__PURE__ */ jsx("img", {
									src: IPHONE_MOCKUP,
									alt: "mymind iPhone app",
									className: "relative z-10 h-auto w-full object-contain"
								}), /* @__PURE__ */ jsx("video", {
									src: IPHONE_VIDEO,
									autoPlay: true,
									loop: true,
									muted: true,
									playsInline: true,
									className: "absolute inset-0 h-full w-full object-cover",
									style: { zIndex: 5 }
								})]
							})
						})
					]
				})
			})
		})
	});
}
//#endregion
//#region src/components/mymind/MymindManifesto.tsx
var NO_LIST = [
	"No data selling",
	"No invasive tracking",
	"No forced complexity",
	"No bloated features",
	"No attention traps",
	"No ads, ever"
];
function MymindManifesto() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("section", {
		className: "w-full overflow-x-hidden py-20 md:py-28 bg-white",
		id: "manifesto",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-4xl px-4 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ jsx(motion.p, {
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
					margin: "-60px"
				},
				transition: { duration: .5 },
				className: "mb-6 text-xs font-semibold uppercase tracking-[0.22em]",
				style: { color: "#a3a1f8" },
				children: "WHY OPENAI"
			}), /* @__PURE__ */ jsxs("div", {
				className: "grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start",
				children: [/* @__PURE__ */ jsx("div", {
					className: "md:col-span-6",
					children: /* @__PURE__ */ jsxs(motion.h2, {
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
						transition: {
							duration: .6,
							delay: .1
						},
						className: "leading-tight text-left",
						style: {
							fontFamily: "'Louize', Georgia, serif",
							fontSize: "clamp(2rem, 5vw, 3.5rem)",
							letterSpacing: "-0.03em",
							color: "#111111",
							fontWeight: 400
						},
						children: [
							"Your team's brain is scattered.",
							/* @__PURE__ */ jsx("br", {}),
							/* @__PURE__ */ jsx("span", {
								className: "text-[#a3a1f8]",
								children: "We fix that."
							})
						]
					})
				}), /* @__PURE__ */ jsxs("div", {
					className: "md:col-span-6",
					children: [/* @__PURE__ */ jsxs(motion.p, {
						initial: {
							opacity: 0,
							y: 20
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: {
							once: true,
							margin: "-60px"
						},
						transition: {
							duration: .6,
							delay: .2
						},
						className: "text-left mb-8 text-gray-500 leading-relaxed",
						style: {
							fontFamily: "'Inter', sans-serif",
							fontSize: "clamp(1rem, 1.8vw, 1.15rem)"
						},
						children: [
							"Files in Drive. Links in Slack. Notes in Notion. References in email. Every tool promising to help — adding more noise instead.",
							/* @__PURE__ */ jsx("br", {}),
							/* @__PURE__ */ jsx("br", {}),
							"OpenAI is the one place where your team saves everything and finds it immediately. No folders to maintain. No tagging rituals. No one asking “where did you put that?”"
						]
					}), /* @__PURE__ */ jsx(motion.div, {
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
							margin: "-40px"
						},
						transition: {
							duration: .5,
							delay: .3
						},
						className: "flex",
						children: /* @__PURE__ */ jsx("a", {
							href: "#how-it-works",
							className: "inline-flex items-center gap-2 text-sm font-bold tracking-wider text-black border-b-2 border-black pb-1 hover:opacity-70 transition-opacity",
							style: { fontFamily: "'Inter', sans-serif" },
							children: "See the Magic →"
						})
					})]
				})]
			})]
		})
	}), /* @__PURE__ */ jsx("section", {
		className: "w-full overflow-x-hidden py-20 md:py-28",
		style: {
			background: "linear-gradient(180deg, #FFFFFF 0%, #F3F4F6 100%)",
			borderTop: "1px solid #E5E7EB",
			borderBottom: "1px solid #E5E7EB"
		},
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center",
			children: [
				/* @__PURE__ */ jsx(motion.p, {
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
						margin: "-60px"
					},
					transition: { duration: .5 },
					className: "mb-6 text-xs font-semibold uppercase tracking-[0.22em]",
					style: { color: "#6B7280" },
					children: "OUR BELIEF"
				}),
				/* @__PURE__ */ jsxs(motion.h2, {
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
					transition: {
						duration: .6,
						delay: .1
					},
					className: "mb-6 leading-tight",
					style: {
						fontFamily: "'Louize', Georgia, serif",
						fontSize: "clamp(2rem, 5vw, 3.5rem)",
						letterSpacing: "-0.03em",
						color: "#111111",
						fontWeight: 400
					},
					children: [
						"Work tools should make you faster.",
						/* @__PURE__ */ jsx("br", {}),
						"Not become another job."
					]
				}),
				/* @__PURE__ */ jsxs(motion.p, {
					initial: {
						opacity: 0,
						y: 20
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: {
						once: true,
						margin: "-60px"
					},
					transition: {
						duration: .6,
						delay: .15
					},
					className: "mx-auto mb-12 max-w-xl text-center text-gray-500 leading-relaxed text-base",
					style: { fontFamily: "'Inter', sans-serif" },
					children: [
						"In a world full of platforms demanding your attention, your clicks, and your data — we built something different.",
						/* @__PURE__ */ jsx("br", {}),
						/* @__PURE__ */ jsx("br", {}),
						"OpenAI was built on a simple belief: ",
						/* @__PURE__ */ jsx("strong", {
							className: "text-gray-900",
							children: "your team's time is too valuable to waste organizing files."
						})
					]
				}),
				/* @__PURE__ */ jsx("div", {
					className: "grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto text-left",
					children: NO_LIST.map((item, i) => /* @__PURE__ */ jsxs(motion.div, {
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
							margin: "-40px"
						},
						transition: {
							duration: .5,
							delay: i * .06
						},
						className: "flex items-center gap-3 rounded-2xl bg-white border border-gray-200 px-6 py-4 shadow-sm hover:shadow-md transition-shadow",
						children: [/* @__PURE__ */ jsx("span", {
							className: "text-red-500 font-bold",
							children: "❌"
						}), /* @__PURE__ */ jsx("span", {
							style: {
								fontFamily: "'Inter', sans-serif",
								fontSize: "1.05rem",
								fontWeight: 500,
								color: "#374151"
							},
							children: item
						})]
					}, item))
				}),
				/* @__PURE__ */ jsx(motion.div, {
					initial: {
						opacity: 0,
						y: 20
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: {
						once: true,
						margin: "-40px"
					},
					transition: {
						duration: .6,
						delay: .5
					},
					className: "mt-16 flex justify-center opacity-30 select-none",
					children: /* @__PURE__ */ jsx("span", {
						className: "text-3xl font-bold tracking-tight text-gray-400",
						style: { fontFamily: "'Space Grotesk', sans-serif" },
						children: "openai"
					})
				})
			]
		})
	})] });
}
//#endregion
//#region src/components/mymind/MymindSmartBookmarking.tsx
function MymindSmartBookmarking() {
	return /* @__PURE__ */ jsxs("section", {
		className: "w-full overflow-x-hidden bg-white",
		id: "smart-storage",
		children: [/* @__PURE__ */ jsx("div", {
			className: "mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12 md:py-16",
			children: /* @__PURE__ */ jsx(motion.div, {
				initial: {
					opacity: 0,
					y: 20
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
				className: "overflow-hidden rounded-2xl bg-gray-50 border border-gray-150",
				children: /* @__PURE__ */ jsx("div", {
					className: "grid grid-cols-5",
					children: [
						{
							name: "iOS",
							action: "GET APP",
							icon: "/images/Astore.svg"
						},
						{
							name: "Android",
							action: "GET APP",
							icon: "/images/PStore.svg"
						},
						{
							name: "Chrome",
							action: "INSTALL",
							icon: "/images/Google-Chrome.svg"
						},
						{
							name: "Edge",
							action: "INSTALL",
							icon: "/images/Explorer.svg"
						},
						{
							name: "Safari",
							action: "INSTALL",
							icon: "/images/Safari.svg"
						}
					].map((p, i) => /* @__PURE__ */ jsxs("a", {
						href: "#",
						className: "flex flex-col items-center gap-2 py-6 sm:py-8 transition-colors hover:bg-gray-100",
						style: { borderRight: i < 4 ? "1px solid #E5E7EB" : "none" },
						children: [/* @__PURE__ */ jsx("img", {
							src: p.icon,
							alt: p.name,
							className: "h-8 w-8 sm:h-10 sm:w-10 object-contain animate-pulse",
							onError: (e) => {
								e.currentTarget.style.display = "none";
							}
						}), /* @__PURE__ */ jsxs("div", {
							className: "text-center",
							children: [/* @__PURE__ */ jsx("p", {
								className: "font-medium text-sm text-gray-800",
								children: p.name
							}), /* @__PURE__ */ jsx("p", {
								className: "text-xs font-bold tracking-wide mt-0.5",
								style: { color: "#a3a1f8" },
								children: p.action
							})]
						})]
					}, p.name))
				})
			})
		}), /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pb-8 md:pb-12 text-center",
			children: [
				/* @__PURE__ */ jsx(motion.h2, {
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
					transition: { duration: .7 },
					className: "mb-6 leading-tight",
					style: {
						fontFamily: "'Louize', Georgia, serif",
						fontSize: "clamp(2rem, 6vw, 4.5rem)",
						letterSpacing: "-0.03em",
						color: "#111111",
						fontWeight: 400
					},
					children: "⚡ Save anything in one click."
				}),
				/* @__PURE__ */ jsx(motion.p, {
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
						margin: "-60px"
					},
					transition: {
						duration: .6,
						delay: .1
					},
					className: "mx-auto mb-10 max-w-xl text-center text-gray-500",
					style: {
						fontFamily: "'Inter', sans-serif",
						fontSize: "clamp(0.95rem, 2vw, 1.1rem)",
						lineHeight: 1.7
					},
					children: "Drop a file, paste a link, write a note — OpenAI instantly understands what it is and stores it beautifully. No manual sorting. No folder decisions. Just save it and stay in the flow."
				}),
				/* @__PURE__ */ jsx(motion.div, {
					initial: {
						opacity: 0,
						y: 32
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: {
						once: true,
						margin: "-40px"
					},
					transition: {
						duration: .8,
						delay: .15
					},
					className: "mx-auto overflow-hidden rounded-2xl shadow-xl border border-gray-200",
					style: { maxWidth: 860 },
					children: /* @__PURE__ */ jsx("video", {
						className: "w-full block",
						style: { aspectRatio: "2600/1806" },
						autoPlay: true,
						muted: true,
						loop: true,
						playsInline: true,
						children: /* @__PURE__ */ jsx("source", {
							src: "/videos/smart-bookmarking.webm",
							type: "video/webm"
						})
					})
				}),
				/* @__PURE__ */ jsx(motion.div, {
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
						margin: "-40px"
					},
					transition: {
						duration: .5,
						delay: .3
					},
					className: "mt-8 flex justify-center",
					children: /* @__PURE__ */ jsxs("a", {
						href: "#how-it-works",
						className: "inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:opacity-75 transition-opacity",
						style: {
							color: "#a3a1f8",
							minHeight: 44
						},
						children: [/* @__PURE__ */ jsx("span", {
							className: "flex items-center justify-center rounded-full",
							style: {
								background: "#a3a1f8",
								width: 28,
								height: 28
							},
							children: /* @__PURE__ */ jsx("svg", {
								viewBox: "0 0 24 24",
								fill: "white",
								className: "h-3 w-3",
								"aria-hidden": "true",
								children: /* @__PURE__ */ jsx("polygon", { points: "5,3 19,12 5,21" })
							})
						}), "SEE THE MAGIC OF SMART STORAGE"]
					})
				})
			]
		})]
	});
}
//#endregion
//#region src/components/mymind/MymindAI.tsx
var STEPS = [
	{
		num: "01",
		title: "Save",
		desc: "Click the OpenAI extension or app and save anything — a link, file, image, note, or screenshot. Done.",
		color: "#a3a1f8"
	},
	{
		num: "02",
		title: "AI Takes Over",
		desc: "OpenAI reads, summarizes, and organizes what you saved. No tags. No folders. No decisions.",
		color: "#10B981"
	},
	{
		num: "03",
		title: "Find It Fast",
		desc: "Search naturally — like asking a colleague. Your result is there before you finish the sentence.",
		color: "#0EA5E9"
	}
];
function MymindAI() {
	return /* @__PURE__ */ jsx("section", {
		className: "w-full overflow-x-hidden py-20 md:py-28 lg:py-36 bg-[#F9FAFB]",
		id: "how-it-works",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center",
			children: [
				/* @__PURE__ */ jsx(motion.p, {
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
						margin: "-60px"
					},
					transition: { duration: .5 },
					className: "mb-6 text-xs font-semibold uppercase tracking-[0.22em]",
					style: { color: "#6B7280" },
					children: "HOW IT WORKS"
				}),
				/* @__PURE__ */ jsx(motion.h2, {
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
					transition: {
						duration: .6,
						delay: .1
					},
					className: "mb-8 leading-tight",
					style: {
						fontFamily: "'Louize', Georgia, serif",
						fontSize: "clamp(2rem, 5vw, 3.5rem)",
						letterSpacing: "-0.03em",
						color: "#111111",
						fontWeight: 400
					},
					children: "Up and running in 60 seconds."
				}),
				/* @__PURE__ */ jsx(motion.div, {
					initial: {
						opacity: 0,
						y: 32
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: {
						once: true,
						margin: "-40px"
					},
					transition: {
						duration: .8,
						delay: .2
					},
					className: "mx-auto overflow-hidden rounded-2xl shadow-xl border border-gray-200 mb-16",
					style: { maxWidth: 860 },
					children: /* @__PURE__ */ jsx("video", {
						className: "w-full block",
						style: { aspectRatio: "2600/2206" },
						autoPlay: true,
						muted: true,
						loop: true,
						playsInline: true,
						children: /* @__PURE__ */ jsx("source", {
							src: "/videos/ai-adding.webm",
							type: "video/webm"
						})
					})
				}),
				/* @__PURE__ */ jsx("div", {
					className: "grid grid-cols-1 md:grid-cols-3 gap-8 text-left max-w-4xl mx-auto",
					children: STEPS.map((step, i) => /* @__PURE__ */ jsxs(motion.div, {
						initial: {
							opacity: 0,
							y: 20
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: {
							once: true,
							margin: "-45px"
						},
						transition: {
							duration: .5,
							delay: i * .1
						},
						className: "relative p-6 rounded-2xl bg-white border border-gray-150 shadow-sm",
						children: [
							/* @__PURE__ */ jsx("div", {
								className: "absolute top-4 right-4 text-3xl font-extrabold select-none opacity-20",
								style: {
									color: step.color,
									fontFamily: "'Space Grotesk', sans-serif"
								},
								children: step.num
							}),
							/* @__PURE__ */ jsx("h3", {
								className: "text-lg font-bold mb-2 text-gray-800",
								style: { fontFamily: "'Inter', sans-serif" },
								children: step.title
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-sm leading-relaxed text-gray-500 font-medium",
								style: { fontFamily: "'Inter', sans-serif" },
								children: step.desc
							})
						]
					}, step.num))
				}),
				/* @__PURE__ */ jsx(motion.div, {
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
						margin: "-40px"
					},
					transition: {
						duration: .5,
						delay: .35
					},
					className: "mt-14 flex justify-center",
					children: /* @__PURE__ */ jsx("a", {
						href: "#pricing",
						className: "inline-flex items-center justify-center rounded-full px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl text-center",
						style: {
							background: "#111111",
							minHeight: 44
						},
						children: "Try It Free — No Setup Required"
					})
				})
			]
		})
	});
}
//#endregion
//#region src/components/mymind/MymindSearch.tsx
var SEARCH_STATES = [{
	tags: ["ChatGPT", "Marketing copy"],
	type: "marketing"
}, {
	tags: ["#research", "AGI"],
	type: "research"
}];
var MARKETING_RESULTS = [
	"Introducing Storebox.ai: The blazing-fast workspace for teams who hate organizing.",
	"Stop wasting hours searching. Storebox remembers what you save so you can stay in the flow.",
	"One click to save. Zero tags required. Powered by OpenAI's advanced model suite."
];
function MymindSearch() {
	const [stateIdx, setStateIdx] = useState(0);
	useEffect(() => {
		const timer = setInterval(() => {
			setStateIdx((i) => (i + 1) % SEARCH_STATES.length);
		}, 4500);
		return () => clearInterval(timer);
	}, []);
	const current = SEARCH_STATES[stateIdx];
	return /* @__PURE__ */ jsx("section", {
		className: "w-full overflow-x-hidden py-20 md:py-28 lg:py-36 bg-[#111111]",
		id: "search",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center",
			children: [
				/* @__PURE__ */ jsx(motion.p, {
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
						margin: "-60px"
					},
					transition: { duration: .5 },
					className: "mb-6 text-xs font-semibold uppercase tracking-[0.22em]",
					style: { color: "rgba(255,255,255,0.4)" },
					children: "NO WASTED TIME OR ENERGY"
				}),
				/* @__PURE__ */ jsxs(motion.h2, {
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
					transition: {
						duration: .7,
						delay: .05
					},
					className: "mb-8 leading-tight text-white",
					style: {
						fontFamily: "'Louize', Georgia, serif",
						fontSize: "clamp(2rem, 7vw, 4.5rem)",
						letterSpacing: "-0.03em",
						fontWeight: 400
					},
					children: [
						"Folders are dead.",
						/* @__PURE__ */ jsx("br", {}),
						"This is your team's second brain."
					]
				}),
				/* @__PURE__ */ jsx(motion.p, {
					initial: {
						opacity: 0,
						y: 20
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: {
						once: true,
						margin: "-60px"
					},
					transition: {
						duration: .6,
						delay: .15
					},
					className: "mx-auto mb-8 max-w-lg text-center",
					style: {
						color: "rgba(255,255,255,0.6)",
						fontFamily: "'Inter', sans-serif",
						fontSize: "clamp(0.95rem, 2vw, 1.1rem)",
						lineHeight: 1.7
					},
					children: "Search by keyword, color, file type, date, project, or just what you remember. Our AI connects the dots so you get the right result on the first try — every time."
				}),
				/* @__PURE__ */ jsx(motion.div, {
					initial: {
						opacity: 0,
						y: 12
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: {
						once: true,
						margin: "-60px"
					},
					transition: {
						duration: .5,
						delay: .25
					},
					className: "mb-12 flex justify-center",
					children: /* @__PURE__ */ jsxs("a", {
						href: "https://mymind.com/videos#instantly-find-folders",
						target: "_blank",
						rel: "noopener noreferrer",
						className: "inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/80 hover:text-white transition-colors",
						style: { minHeight: 44 },
						children: [/* @__PURE__ */ jsx("span", {
							className: "flex items-center justify-center rounded-full border-2 border-white/50",
							style: {
								width: 28,
								height: 28
							},
							children: /* @__PURE__ */ jsx("svg", {
								viewBox: "0 0 24 24",
								fill: "currentColor",
								className: "h-3 w-3 ml-0.5",
								"aria-hidden": "true",
								children: /* @__PURE__ */ jsx("polygon", { points: "5,3 19,12 5,21" })
							})
						}), "WATCH THE AI SEARCH IN ACTION"]
					})
				}),
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
						margin: "-40px"
					},
					transition: {
						duration: .7,
						delay: .2
					},
					className: "mx-auto",
					style: { maxWidth: 720 },
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-3 px-5 py-3.5",
						style: { borderBottom: "1.5px solid rgba(255,255,255,0.2)" },
						children: [
							/* @__PURE__ */ jsx(AnimatePresence, {
								mode: "popLayout",
								children: current.tags.map((tag, i) => /* @__PURE__ */ jsx(motion.span, {
									initial: {
										opacity: 0,
										scale: .85
									},
									animate: {
										opacity: 1,
										scale: 1
									},
									exit: {
										opacity: 0,
										scale: .85
									},
									transition: {
										duration: .25,
										delay: i * .06
									},
									className: "rounded-full px-4 py-1.5 text-sm font-medium",
									style: {
										background: "white",
										color: "#111111",
										fontStyle: tag.startsWith("#") ? "italic" : "normal",
										fontFamily: tag.startsWith("#") ? "'Louize', Georgia, serif" : "'Inter', sans-serif"
									},
									children: tag
								}, tag))
							}),
							/* @__PURE__ */ jsx("span", { className: "h-5 w-0.5 animate-pulse bg-white/50" }),
							/* @__PURE__ */ jsx("div", {
								className: "ml-auto",
								children: /* @__PURE__ */ jsxs("svg", {
									className: "h-5 w-5 text-white/50",
									fill: "none",
									viewBox: "0 0 24 24",
									stroke: "currentColor",
									children: [/* @__PURE__ */ jsx("circle", {
										cx: "11",
										cy: "11",
										r: "8",
										strokeWidth: "2"
									}), /* @__PURE__ */ jsx("path", {
										strokeLinecap: "round",
										strokeLinejoin: "round",
										strokeWidth: "2",
										d: "m21 21-4.35-4.35"
									})]
								})
							})
						]
					}), /* @__PURE__ */ jsxs(AnimatePresence, {
						mode: "wait",
						children: [current.type === "research" && /* @__PURE__ */ jsx(motion.div, {
							initial: {
								opacity: 0,
								y: 12
							},
							animate: {
								opacity: 1,
								y: 0
							},
							exit: {
								opacity: 0,
								y: -8
							},
							transition: { duration: .4 },
							className: "flex items-end justify-center gap-3 sm:gap-4 pt-8 pb-2",
							children: [
								{
									scale: .72,
									opacity: .45,
									bg: "rgba(255,255,255,0.08)"
								},
								{
									scale: .86,
									opacity: .6,
									bg: "rgba(255,255,255,0.12)"
								},
								{
									scale: 1,
									opacity: 1,
									bg: "rgba(255,255,255,0.18)",
									active: true
								},
								{
									scale: .86,
									opacity: .6,
									bg: "rgba(255,255,255,0.12)"
								},
								{
									scale: .72,
									opacity: .45,
									bg: "rgba(255,255,255,0.08)"
								}
							].map((item, i) => /* @__PURE__ */ jsx("div", {
								className: "rounded-2xl overflow-hidden transition-all flex-shrink-0",
								style: {
									width: `${item.scale * 180}px`,
									height: `${item.scale * 260}px`,
									background: item.bg,
									opacity: item.opacity,
									boxShadow: item.active ? "0 20px 60px rgba(0,0,0,0.5)" : "none",
									position: "relative"
								},
								children: item.active && /* @__PURE__ */ jsxs("div", {
									className: "absolute bottom-0 inset-x-0 p-4 text-left",
									children: [/* @__PURE__ */ jsx("span", {
										className: "text-xs font-semibold text-white/90",
										children: "AGI Safety Paper"
									}), /* @__PURE__ */ jsx("div", { className: "h-1.5 w-12 rounded mt-1.5 bg-[#a3a1f8]" })]
								})
							}, i))
						}, "research"), current.type === "marketing" && /* @__PURE__ */ jsx(motion.div, {
							initial: {
								opacity: 0,
								y: 12
							},
							animate: {
								opacity: 1,
								y: 0
							},
							exit: {
								opacity: 0,
								y: -8
							},
							transition: { duration: .4 },
							className: "flex flex-col gap-2.5 pt-5 text-left",
							children: MARKETING_RESULTS.map((res, i) => /* @__PURE__ */ jsx(motion.div, {
								initial: {
									opacity: 0,
									x: -8
								},
								animate: {
									opacity: 1,
									x: 0
								},
								transition: {
									duration: .3,
									delay: i * .08
								},
								className: "rounded-xl px-5 py-4 border border-white/10",
								style: { background: "rgba(255,255,255,0.06)" },
								children: /* @__PURE__ */ jsx("p", {
									className: "text-sm sm:text-base text-white/80",
									style: { fontFamily: "'Inter', sans-serif" },
									children: res
								})
							}, i))
						}, "marketing")]
					})]
				})
			]
		})
	});
}
//#endregion
//#region src/components/mymind/MymindFeatures.tsx
var ROWS_TOP = [[{
	icon: "⚡",
	title: "Save anything in one click",
	body: "Drop a file, paste a link, write a note — OpenAI instantly understands what it is and stores it beautifully. No manual sorting. No folder decisions. Just save it and stay in the flow.",
	narrow: true
}, {
	icon: "🔍",
	title: "Find it before you finish typing",
	body: "Search by keyword, color, file type, date, project, or just what you remember. Our AI connects the dots so you get the right result on the first try — every time."
}], [{
	icon: "📁",
	title: "Auto-organized workspaces",
	body: "Create Smart Spaces that auto-sort what your team saves. Whether it's brand assets, client decks, or research — OpenAI knows where it belongs."
}, {
	icon: "📝",
	title: "Frictionless team notes",
	body: "Capture ideas on the fly. Expand them later in Focus Mode. Clean, fast, distraction-free. No formatting rabbit holes.",
	narrow: true
}]];
var ROWS_BOTTOM = [
	[{
		icon: "🤖",
		title: "Every file, pre-summarized",
		body: "OpenAI reads your documents, articles, and links — and gives your team a quick summary so you can decide what matters without opening everything.",
		narrow: true
	}, {
		icon: "🔗",
		title: "Connect your team's knowledge",
		body: "Link notes, files, and references to each other. Build a living knowledge system as your team works — no extra effort required."
	}],
	[{
		icon: "📖",
		title: "Clean reading for your team",
		body: "Save any article and read it without ads, pop-ups, or noise. Pure content. Perfect focus."
	}, {
		icon: "📌",
		title: "Pin what matters most today",
		body: "A dedicated space to surface shifting priorities and key references. Every team member sees what's important the moment they open OpenAI.",
		narrow: true
	}],
	[{
		icon: "👁️",
		title: "Search inside your images (OCR)",
		body: "Upload a photo of a whiteboard, a handwritten note, or a screenshot — OpenAI reads the text inside and makes it instantly searchable."
	}, {
		icon: "🚀",
		title: "Built for execution speed",
		body: "Designed for high-performance teams who value focus over organizational chore. OpenAI works invisibly in the background.",
		narrow: true
	}]
];
function FeatureCard({ icon, title, body, narrow, delay = 0 }) {
	return /* @__PURE__ */ jsx(motion.div, {
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
			margin: "-40px"
		},
		transition: {
			duration: .55,
			delay
		},
		className: `overflow-hidden rounded-2xl p-6 sm:p-8 flex flex-col justify-between ${narrow ? "flex-[5]" : "flex-[7]"}`,
		style: {
			background: "#F3F4F6",
			minWidth: 0,
			border: "1px solid #E5E7EB"
		},
		children: /* @__PURE__ */ jsxs("div", { children: [
			/* @__PURE__ */ jsx("div", {
				className: "text-3xl sm:text-4xl mb-4 select-none",
				children: icon
			}),
			/* @__PURE__ */ jsx("h3", {
				className: "mb-2 leading-snug",
				style: {
					fontFamily: "'Inter', sans-serif",
					fontWeight: 600,
					fontSize: "clamp(1.15rem, 2.2vw, 1.45rem)",
					letterSpacing: "-0.02em",
					color: "#111111"
				},
				children: title
			}),
			/* @__PURE__ */ jsx("p", {
				className: "text-sm sm:text-base leading-relaxed text-gray-500 font-medium",
				style: { fontFamily: "'Inter', sans-serif" },
				children: body
			})
		] })
	});
}
function MymindFeatures() {
	return /* @__PURE__ */ jsx("section", {
		className: "w-full overflow-x-hidden py-20 md:py-28 bg-white",
		id: "features",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-6xl px-4 sm:px-6 lg:px-8",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "mb-12 sm:mb-16 text-center",
					children: [/* @__PURE__ */ jsx(motion.p, {
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
							margin: "-60px"
						},
						transition: { duration: .5 },
						className: "mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-gray-400",
						children: "FEATURES"
					}), /* @__PURE__ */ jsx(motion.h2, {
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
						transition: {
							duration: .6,
							delay: .1
						},
						className: "mx-auto max-w-3xl leading-tight",
						style: {
							fontFamily: "'Louize', Georgia, serif",
							fontSize: "clamp(2rem, 5vw, 4.2rem)",
							letterSpacing: "-0.03em",
							color: "#111111",
							fontWeight: 400
						},
						children: "Built for speed. Designed for teams who hate wasted time."
					})]
				}),
				/* @__PURE__ */ jsx("div", {
					className: "flex flex-col gap-5 mb-5",
					children: ROWS_TOP.map((row, ri) => /* @__PURE__ */ jsxs("div", {
						className: "flex flex-col sm:flex-row gap-5",
						children: [/* @__PURE__ */ jsx(FeatureCard, {
							...row[0],
							delay: 0
						}), /* @__PURE__ */ jsx(FeatureCard, {
							...row[1],
							delay: .07
						})]
					}, ri))
				}),
				/* @__PURE__ */ jsx(motion.div, {
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
						margin: "-40px"
					},
					transition: { duration: .6 },
					className: "mb-5 overflow-hidden rounded-2xl border border-gray-900",
					style: { background: "#111111" },
					children: /* @__PURE__ */ jsxs("div", {
						className: "relative overflow-hidden flex flex-col md:flex-row justify-between items-center min-h-[260px] p-8 sm:p-10",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "z-10 flex flex-col justify-center max-w-xl text-left",
							children: [
								/* @__PURE__ */ jsx("div", {
									className: "text-3xl sm:text-4xl mb-4 select-none",
									children: "🔄"
								}),
								/* @__PURE__ */ jsx("h3", {
									className: "mb-3 leading-tight",
									style: {
										fontFamily: "'Inter', sans-serif",
										fontWeight: 600,
										fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)",
										letterSpacing: "-0.03em",
										color: "#ffffff"
									},
									children: "Always with you. Always in sync."
								}),
								/* @__PURE__ */ jsx("p", {
									className: "text-sm sm:text-base leading-relaxed text-gray-400 font-medium",
									style: { fontFamily: "'Inter', sans-serif" },
									children: "Every file, note, and bookmark syncs instantly across iOS, Android, desktop, and browser. Your team's workspace follows them everywhere."
								})
							]
						}), /* @__PURE__ */ jsxs("div", {
							className: "mt-6 md:mt-0 flex items-center justify-center shrink-0 w-32 h-32 rounded-full border border-white/10 bg-white/5 relative",
							children: [/* @__PURE__ */ jsx("span", {
								className: "text-sm font-bold text-[#a3a1f8]",
								style: { fontFamily: "'Space Grotesk', sans-serif" },
								children: "SYNCED"
							}), /* @__PURE__ */ jsx("div", { className: "absolute inset-0 rounded-full border border-[#a3a1f8]/20 animate-ping" })]
						})]
					})
				}),
				/* @__PURE__ */ jsx("div", {
					className: "flex flex-col gap-5",
					children: ROWS_BOTTOM.map((row, ri) => /* @__PURE__ */ jsxs("div", {
						className: "flex flex-col sm:flex-row gap-5",
						children: [/* @__PURE__ */ jsx(FeatureCard, {
							...row[0],
							delay: 0
						}), /* @__PURE__ */ jsx(FeatureCard, {
							...row[1],
							delay: .07
						})]
					}, ri))
				})
			]
		})
	});
}
//#endregion
//#region src/components/mymind/MymindTestimonials.tsx
var TESTIMONIALS_TOP = [
	{
		text: "We cut our file-hunting time by 70%. OpenAI finds things before I remember what I named them.",
		author: "SA",
		role: "Head of Design, Agency",
		position: "left",
		delay: 0
	},
	{
		text: "The AI summaries alone saved us hours every week. We no longer need to read every document to know what's in it.",
		author: "JK",
		role: "Operations Lead, Tech Startup",
		position: "center",
		delay: .1
	},
	{
		text: "I've tried Notion, Drive, and everything in between. OpenAI is the first tool that actually feels fast.",
		author: "AT",
		role: "Product Lead, E-commerce Brand",
		position: "right",
		delay: .15
	}
];
var TESTIMONIALS_BOTTOM = [
	{
		text: "Our team went from 5 tools to 1. The ROI was immediate.",
		author: "RB",
		role: "Founder, Creative Studio",
		position: "left",
		delay: .2
	},
	{
		text: "It just works. That's honestly the best thing I can say about software.",
		author: "MV",
		role: "Marketing Director, SaaS",
		position: "center",
		delay: .25
	},
	{
		text: "OpenAI changed how our whole team thinks about storing information. It's like giving everyone a second brain.",
		author: "LP",
		role: "CTO, B2B Platform",
		position: "right",
		delay: .3
	}
];
function getBubbleClass(position) {
	return {
		left: "mx-auto sm:mr-auto sm:ml-8",
		center: "mx-auto",
		right: "mx-auto sm:ml-auto sm:mr-8"
	}[position] ?? "mx-auto";
}
function TestimonialCard({ t, idx }) {
	return /* @__PURE__ */ jsxs(motion.div, {
		initial: {
			opacity: 0,
			y: 30
		},
		whileInView: {
			opacity: 1,
			y: 0
		},
		viewport: {
			once: true,
			margin: "-40px"
		},
		transition: {
			duration: .6,
			delay: t.delay
		},
		className: `relative ${getBubbleClass(t.position)}`,
		style: { maxWidth: "min(400px, 90vw)" },
		children: [/* @__PURE__ */ jsxs("div", {
			className: "relative rounded-[2rem] bg-white px-6 py-5 border border-gray-150",
			style: { boxShadow: "0 8px 40px rgba(0,0,0,0.03)" },
			children: [/* @__PURE__ */ jsxs("p", {
				className: "text-sm sm:text-base leading-relaxed text-gray-700",
				style: { fontFamily: "'Inter', sans-serif" },
				children: [
					"“",
					t.text,
					"”"
				]
			}), /* @__PURE__ */ jsx("div", {
				className: "absolute -bottom-2 left-7",
				style: {
					width: 12,
					height: 12,
					background: "white",
					borderRight: "1px solid #E5E7EB",
					borderBottom: "1px solid #E5E7EB",
					borderRadius: "0 0 12px 0",
					clipPath: "polygon(0 0, 100% 0, 100% 100%)"
				}
			})]
		}), /* @__PURE__ */ jsxs("div", {
			className: "mt-3 flex items-center gap-3 pl-6",
			children: [/* @__PURE__ */ jsx("div", {
				className: "h-9 w-9 rounded-full flex items-center justify-center text-xs font-bold text-gray-700 border border-gray-200 bg-gray-50 select-none shadow-sm",
				children: t.author
			}), /* @__PURE__ */ jsxs("div", {
				className: "text-left",
				children: [/* @__PURE__ */ jsx("p", {
					className: "text-xs font-bold text-gray-800",
					style: { fontFamily: "'Inter', sans-serif" },
					children: t.author
				}), /* @__PURE__ */ jsx("p", {
					className: "text-[10px] text-gray-400 font-semibold",
					style: { fontFamily: "'Inter', sans-serif" },
					children: t.role
				})]
			})]
		})]
	});
}
function MymindTestimonials() {
	return /* @__PURE__ */ jsx("section", {
		className: "w-full overflow-x-hidden py-20 md:py-28 bg-[#FAFAFA]",
		style: {
			borderTop: "1px solid #E5E7EB",
			borderBottom: "1px solid #E5E7EB"
		},
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-4xl px-4 sm:px-6 lg:px-8",
			children: [
				/* @__PURE__ */ jsx("div", {
					className: "flex flex-col gap-8 sm:gap-10 mb-14 sm:mb-20",
					children: TESTIMONIALS_TOP.map((t, i) => /* @__PURE__ */ jsx(TestimonialCard, {
						t,
						idx: i
					}, i))
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mb-14 sm:mb-20 text-center",
					children: [/* @__PURE__ */ jsx(motion.p, {
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
							margin: "-60px"
						},
						transition: { duration: .5 },
						className: "mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-gray-400",
						children: "TRUSTED BY TEAMS EVERYWHERE"
					}), /* @__PURE__ */ jsxs(motion.h2, {
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
						transition: { duration: .7 },
						className: "leading-tight",
						style: {
							fontFamily: "'Louize', Georgia, serif",
							fontSize: "clamp(2rem, 6vw, 4rem)",
							letterSpacing: "-0.03em",
							color: "#111111",
							fontWeight: 400
						},
						children: [
							"Why teams switch to OpenAI",
							/* @__PURE__ */ jsx("br", {}),
							"and never go back."
						]
					})]
				}),
				/* @__PURE__ */ jsx("div", {
					className: "flex flex-col gap-8 sm:gap-10",
					children: TESTIMONIALS_BOTTOM.map((t, i) => /* @__PURE__ */ jsx(TestimonialCard, {
						t,
						idx: i + 3
					}, i + 3))
				})
			]
		})
	});
}
//#endregion
//#region src/components/mymind/MymindUseCases.tsx
var USE_CASES = [
	{
		label: "Marketing",
		category: "Marketing Teams",
		headline: "Store brand assets, campaign references, competitor research, and content inspiration — all in one searchable place your whole team can access instantly.",
		image: "/images/Designers.webp",
		color: "#a3a1f8"
	},
	{
		label: "Product",
		category: "Product Teams",
		headline: "Save user research, feature docs, wireframes, and stakeholder feedback. Let AI surface the right context when you need it most.",
		image: "/images/READ.webp",
		color: "#10B981"
	},
	{
		label: "Designers",
		category: "Designers",
		headline: "Build instant moodboards. Store references by color, style, or vibe. Find visual inspiration without scrolling through folders for twenty minutes.",
		image: "/images/BKMRK.webp",
		color: "#0EA5E9"
	},
	{
		label: "Operations",
		category: "Operations Teams",
		headline: "Keep SOPs, vendor contacts, process docs, and meeting notes organized automatically. Your team always knows where to look.",
		image: "/images/COL.webp",
		color: "#6B7280"
	},
	{
		label: "Sales",
		category: "Sales Teams",
		headline: "Store pitch decks, case studies, objection notes, and client research. Pull up exactly what you need — mid-call, mid-meeting, mid-anything.",
		image: "/images/SEREN.webp",
		color: "#F5BF65"
	},
	{
		label: "Agencies",
		category: "Agencies",
		headline: "Manage client assets, project references, and creative briefs across multiple accounts without losing your mind or your time.",
		image: "/images/NOTE.png",
		color: "#EF4444"
	}
];
function MymindUseCases() {
	const [active, setActive] = useState(0);
	const [emblaRef, emblaApi] = useEmblaCarousel({
		loop: false,
		align: "start"
	});
	const scrollPrev = useCallback(() => {
		emblaApi?.scrollPrev();
		setActive((i) => Math.max(0, i - 1));
	}, [emblaApi]);
	const scrollNext = useCallback(() => {
		emblaApi?.scrollNext();
		setActive((i) => Math.min(USE_CASES.length - 1, i + 1));
	}, [emblaApi]);
	return /* @__PURE__ */ jsx("section", {
		className: "w-full overflow-x-hidden bg-white py-20 md:py-28",
		id: "use-cases",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-6xl px-4 sm:px-6 lg:px-8",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "mb-10 sm:mb-12 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4",
					children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(motion.p, {
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
							margin: "-60px"
						},
						transition: { duration: .5 },
						className: "mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gray-400",
						children: "USE CASES"
					}), /* @__PURE__ */ jsx(motion.h2, {
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
						transition: {
							duration: .6,
							delay: .1
						},
						className: "leading-tight animate-fade-in",
						style: {
							fontFamily: "'Louize', Georgia, serif",
							fontSize: "clamp(1.7rem, 3.5vw, 3rem)",
							letterSpacing: "-0.03em",
							color: "#111111",
							fontWeight: 400
						},
						children: "Built for every kind of team."
					})] }), /* @__PURE__ */ jsxs("div", {
						className: "hidden items-center gap-2 md:flex select-none",
						children: [/* @__PURE__ */ jsx("button", {
							onClick: scrollPrev,
							disabled: active === 0,
							className: "flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 transition-all duration-200 hover:bg-gray-50 disabled:opacity-30 cursor-pointer",
							"aria-label": "Previous",
							children: /* @__PURE__ */ jsx(ChevronLeft, { size: 18 })
						}), /* @__PURE__ */ jsx("button", {
							onClick: scrollNext,
							disabled: active === USE_CASES.length - 1,
							className: "flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 transition-all duration-200 hover:bg-gray-50 disabled:opacity-30 cursor-pointer",
							"aria-label": "Next",
							children: /* @__PURE__ */ jsx(ChevronRight, { size: 18 })
						})]
					})]
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mb-8 sm:mb-10 overflow-x-auto scrollbar-none border-b border-gray-100",
					ref: emblaRef,
					children: /* @__PURE__ */ jsx("div", {
						className: "flex gap-6 sm:gap-8 pb-px select-none",
						style: { minWidth: "max-content" },
						children: USE_CASES.map((uc, i) => /* @__PURE__ */ jsxs("button", {
							onClick: () => setActive(i),
							className: "shrink-0 relative pb-4 text-base sm:text-lg font-semibold transition-colors duration-300 cursor-pointer",
							style: {
								color: active === i ? "#111111" : "#9CA3AF",
								fontFamily: "'Inter', sans-serif",
								minHeight: 44
							},
							children: [uc.label, /* @__PURE__ */ jsx("span", {
								className: "absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-black transition-all duration-300",
								style: { width: active === i ? "30px" : "0px" }
							})]
						}, uc.label))
					})
				}),
				/* @__PURE__ */ jsx(AnimatePresence, {
					mode: "wait",
					children: /* @__PURE__ */ jsxs(motion.div, {
						initial: {
							opacity: 0,
							y: 20
						},
						animate: {
							opacity: 1,
							y: 0
						},
						exit: {
							opacity: 0,
							y: -10
						},
						transition: { duration: .4 },
						className: "overflow-hidden rounded-2xl border border-gray-150 shadow-lg relative flex items-center justify-center bg-[#F9FAFB]",
						style: { minHeight: 320 },
						children: [/* @__PURE__ */ jsxs("div", {
							className: "absolute inset-0 z-10 flex flex-col justify-end p-6 sm:p-8 md:p-12 bg-gradient-to-t from-white/95 via-white/80 to-transparent text-left",
							children: [/* @__PURE__ */ jsxs("p", {
								className: "text-xs font-semibold uppercase tracking-widest mb-2 sm:mb-3",
								style: { color: USE_CASES[active].color },
								children: ["For ", USE_CASES[active].category]
							}), /* @__PURE__ */ jsx("h3", {
								className: "max-w-2xl leading-relaxed text-gray-700 font-medium",
								style: {
									fontFamily: "'Inter', sans-serif",
									fontSize: "clamp(1.1rem, 2.2vw, 1.45rem)"
								},
								children: USE_CASES[active].headline
							})]
						}), /* @__PURE__ */ jsx("img", {
							src: USE_CASES[active].image,
							alt: USE_CASES[active].label,
							className: "h-auto w-full object-cover opacity-20",
							style: { minHeight: 320 }
						})]
					}, active)
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-6 flex items-center justify-between md:hidden select-none",
					children: [
						/* @__PURE__ */ jsx("button", {
							onClick: scrollPrev,
							disabled: active === 0,
							className: "flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 disabled:opacity-30 cursor-pointer",
							"aria-label": "Previous",
							children: /* @__PURE__ */ jsx(ChevronLeft, { size: 18 })
						}),
						/* @__PURE__ */ jsx("div", {
							className: "flex gap-1.5",
							children: USE_CASES.map((_, i) => /* @__PURE__ */ jsx("button", {
								onClick: () => setActive(i),
								className: "h-2 rounded-full transition-all duration-200 cursor-pointer",
								style: {
									width: active === i ? 20 : 8,
									background: active === i ? "#111111" : "#E5E7EB"
								},
								"aria-label": `Use case ${i + 1}`
							}, i))
						}),
						/* @__PURE__ */ jsx("button", {
							onClick: scrollNext,
							disabled: active === USE_CASES.length - 1,
							className: "flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 disabled:opacity-30 cursor-pointer",
							"aria-label": "Next",
							children: /* @__PURE__ */ jsx(ChevronRight, { size: 18 })
						})
					]
				})
			]
		})
	});
}
//#endregion
//#region src/components/mymind/StoreboxPricing.tsx
var PLANS = [
	{
		name: "Basic Plan",
		subhead: "Essential assets to kickstart your business presence.",
		monthlyPrice: 30,
		annualPrice: 24,
		features: [
			"Website (Template)",
			"3 Posts + 1 Reel per month",
			"AI Chatbot + Voice support",
			"Basic SEO optimization",
			"Google Business Profile setup"
		],
		cta: "Get started",
		highlight: false
	},
	{
		name: "Plus Plan",
		subhead: "Designed for expanding businesses seeking growth.",
		monthlyPrice: 60,
		annualPrice: 48,
		badge: "MOST POPULAR",
		features: [
			"Website (Customized layout)",
			"5 Posts + 2 Reels per month",
			"AI Voicebot integration",
			"Advanced SEO optimization",
			"Email marketing campaigns",
			"Includes all Basic features"
		],
		cta: "Get started",
		highlight: true
	},
	{
		name: "Pro Plan",
		subhead: "Ultimate features for scaling market leaders.",
		monthlyPrice: 89,
		annualPrice: 71,
		features: [
			"Modern 3D Website design",
			"7 Posts + 3 Reels per month",
			"AI Voice + Chatbot agents",
			"Deep performance analytics",
			"Paid Ads (Google & Meta)",
			"All Social Media Optimization",
			"SEO + GEO + AEO optimization",
			"Includes all Plus features"
		],
		cta: "Get started",
		highlight: false
	}
];
function StoreboxPricing() {
	const [isAnnual, setIsAnnual] = useState(false);
	return /* @__PURE__ */ jsx("section", {
		className: "w-full overflow-x-hidden bg-[#FDFBF7] py-20 md:py-28",
		id: "pricing",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "mb-8 text-center",
					children: [/* @__PURE__ */ jsx(motion.h2, {
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
						className: "leading-tight mb-3",
						style: {
							fontFamily: "'Inter', sans-serif",
							fontSize: "clamp(2rem, 5vw, 3.5rem)",
							letterSpacing: "-0.03em",
							color: "#111111",
							fontWeight: 800
						},
						children: "Plans for all sizes"
					}), /* @__PURE__ */ jsx(motion.p, {
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
							margin: "-60px"
						},
						transition: {
							duration: .5,
							delay: .1
						},
						className: "text-gray-500 font-medium text-sm sm:text-base mb-8",
						style: { fontFamily: "'Inter', sans-serif" },
						children: "Simple, transparent pricing that grows with you."
					})]
				}),
				/* @__PURE__ */ jsxs(motion.div, {
					initial: { opacity: 0 },
					whileInView: { opacity: 1 },
					viewport: { once: true },
					transition: {
						duration: .5,
						delay: .2
					},
					className: "flex items-center justify-center gap-3 mb-16 select-none",
					children: [
						/* @__PURE__ */ jsx("span", {
							className: `text-sm font-semibold transition-colors duration-200 ${!isAnnual ? "text-gray-900" : "text-gray-400"}`,
							style: { fontFamily: "'Inter', sans-serif" },
							children: "Monthly"
						}),
						/* @__PURE__ */ jsx("button", {
							onClick: () => setIsAnnual(!isAnnual),
							className: "relative h-6 w-11 rounded-full p-0.5 transition-colors duration-200 cursor-pointer focus:outline-none",
							style: { background: isAnnual ? "#F5BF65" : "#E5E7EB" },
							"aria-label": "Toggle pricing period",
							children: /* @__PURE__ */ jsx("div", { className: `h-5 w-5 rounded-full bg-white shadow-sm transition-transform duration-200 ${isAnnual ? "translate-x-5" : "translate-x-0"}` })
						}),
						/* @__PURE__ */ jsx("span", {
							className: `text-sm font-semibold transition-colors duration-200 ${isAnnual ? "text-gray-900" : "text-gray-400"}`,
							style: { fontFamily: "'Inter', sans-serif" },
							children: "Annual pricing"
						}),
						/* @__PURE__ */ jsx("span", {
							className: "rounded-md bg-[#FEF3C7] px-2 py-0.5 text-[10px] font-bold text-[#D97706]",
							style: { fontFamily: "'Inter', sans-serif" },
							children: "SAVE 20%"
						})
					]
				}),
				/* @__PURE__ */ jsx("div", {
					className: "grid grid-cols-1 gap-8 md:grid-cols-3 max-w-5xl mx-auto items-stretch",
					children: PLANS.map((plan, i) => /* @__PURE__ */ jsxs(motion.div, {
						initial: {
							opacity: 0,
							y: 28
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: {
							once: true,
							margin: "-40px"
						},
						transition: {
							duration: .5,
							delay: i * .08
						},
						className: `relative flex flex-col rounded-[2.5rem] bg-white p-8 sm:p-10 border transition-all duration-300 text-left ${plan.highlight ? "border-[#F5BF65] shadow-xl md:-translate-y-2 z-10" : "border-gray-200 shadow-sm hover:shadow-md"}`,
						children: [
							plan.badge && /* @__PURE__ */ jsx("div", {
								className: "absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 text-[10px] font-extrabold uppercase tracking-widest text-[#B45309]",
								style: { background: "#FEF3C7" },
								children: plan.badge
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "mb-6",
								children: [/* @__PURE__ */ jsx("h3", {
									className: "text-xl font-bold text-gray-900 mb-2",
									style: { fontFamily: "'Inter', sans-serif" },
									children: plan.name
								}), /* @__PURE__ */ jsx("p", {
									className: "text-xs text-gray-400 font-semibold leading-relaxed",
									style: { fontFamily: "'Inter', sans-serif" },
									children: plan.subhead
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "mb-6 flex flex-col items-start border-b border-gray-100 pb-6",
								children: [/* @__PURE__ */ jsxs("div", {
									className: "flex items-baseline",
									children: [/* @__PURE__ */ jsxs("span", {
										className: "text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight",
										style: { fontFamily: "'Inter', sans-serif" },
										children: ["$", isAnnual ? plan.annualPrice : plan.monthlyPrice]
									}), /* @__PURE__ */ jsx("span", {
										className: "ml-1 text-sm font-semibold text-gray-400",
										style: { fontFamily: "'Inter', sans-serif" },
										children: "/mth"
									})]
								}), /* @__PURE__ */ jsx("span", {
									className: "text-[10px] uppercase font-bold text-gray-400 tracking-wide mt-1.5",
									style: { fontFamily: "'Inter', sans-serif" },
									children: isAnnual ? "Billed Annually" : "Billed Monthly"
								})]
							}),
							/* @__PURE__ */ jsx("ul", {
								className: "mb-10 flex flex-col gap-4 flex-1",
								children: plan.features.map((feat) => /* @__PURE__ */ jsxs("li", {
									className: "flex items-start gap-3 text-sm text-gray-600 font-medium",
									style: { fontFamily: "'Inter', sans-serif" },
									children: [/* @__PURE__ */ jsx("span", {
										className: "mt-0.5 shrink-0 text-sm font-extrabold",
										style: { color: "#F5BF65" },
										children: "✓"
									}), /* @__PURE__ */ jsx("span", { children: feat })]
								}, feat))
							}),
							/* @__PURE__ */ jsx("a", {
								href: "#",
								className: "flex items-center justify-center rounded-2xl px-5 py-4 text-sm font-bold tracking-wide transition-all duration-300 hover:scale-[1.03]",
								style: plan.highlight ? {
									background: "#F5BF65",
									color: "#111111",
									minHeight: 44,
									boxShadow: "0 4px 14px rgba(245, 191, 101, 0.4)"
								} : {
									background: "transparent",
									color: "#111111",
									border: "1.5px solid #E5E7EB",
									minHeight: 44
								},
								children: plan.cta
							})
						]
					}, plan.name))
				})
			]
		})
	});
}
//#endregion
//#region src/components/mymind/StoreboxFAQ.tsx
var FAQ_ITEMS = [
	{
		question: "What can I store in OpenAI?",
		answer: "Anything — files, links, images, PDFs, videos, notes, screenshots, articles, and more. If it matters to your team, OpenAI can hold it."
	},
	{
		question: "Do I need to organize anything manually?",
		answer: "No. That's the whole point. OpenAI's AI reads what you save and organizes it automatically. You just save, and it handles the rest."
	},
	{
		question: "Is my team's data private?",
		answer: "Absolutely. We do not sell your data, share it with third parties, or use it for advertising. Your files are yours — always."
	},
	{
		question: "How is this different from Google Drive or Notion?",
		answer: "Google Drive requires folders. Notion requires structure. OpenAI requires neither. It's built for speed — save anything in one click, find it in seconds."
	},
	{
		question: "Can I use it on my phone?",
		answer: "Yes. OpenAI has native iOS and Android apps, plus browser extensions for Chrome, Edge, and Safari. Everything syncs in real time."
	},
	{
		question: "What happens when I hit my storage limit?",
		answer: "You'll get a clear notification and the option to upgrade — no surprises, no data loss, no files deleted without your permission."
	},
	{
		question: "Is there a free trial for paid plans?",
		answer: "Yes — all paid plans come with a 14-day free trial, no credit card required."
	},
	{
		question: "Can I migrate from Google Drive or Notion?",
		answer: "Yes. We have one-click import tools for Google Drive, Notion, and Dropbox. Your team can be fully set up in under 15 minutes."
	}
];
function StoreboxFAQ() {
	const [openIndex, setOpenIndex] = useState(null);
	const toggle = (i) => {
		setOpenIndex((prev) => prev === i ? null : i);
	};
	return /* @__PURE__ */ jsx("section", {
		className: "w-full overflow-x-hidden py-20 md:py-28 bg-[#F3F4F6]",
		id: "faq",
		style: { borderTop: "1px solid #E5E7EB" },
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-3xl px-4 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "mb-12 text-center",
				children: [/* @__PURE__ */ jsx(motion.p, {
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
						margin: "-60px"
					},
					transition: { duration: .5 },
					className: "mb-4 text-xs font-semibold uppercase tracking-[0.22em]",
					style: { color: "#6B7280" },
					children: "FAQs"
				}), /* @__PURE__ */ jsx(motion.h2, {
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
					transition: {
						duration: .6,
						delay: .1
					},
					className: "leading-tight",
					style: {
						fontFamily: "'Louize', Georgia, serif",
						fontSize: "clamp(1.8rem, 4vw, 3rem)",
						letterSpacing: "-0.03em",
						color: "#111111",
						fontWeight: 400
					},
					children: "Got questions? We've got answers."
				})]
			}), /* @__PURE__ */ jsx("div", {
				className: "flex flex-col gap-3",
				children: FAQ_ITEMS.map((item, i) => /* @__PURE__ */ jsxs(motion.div, {
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
						delay: i * .04
					},
					className: "overflow-hidden rounded-2xl border border-gray-200",
					style: { background: "white" },
					children: [/* @__PURE__ */ jsxs("button", {
						onClick: () => toggle(i),
						className: "flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors duration-200 hover:bg-gray-50 cursor-pointer",
						style: { minHeight: 44 },
						"aria-expanded": openIndex === i,
						children: [/* @__PURE__ */ jsx("span", {
							className: "font-semibold text-sm sm:text-base leading-snug text-gray-800",
							style: { fontFamily: "'Inter', sans-serif" },
							children: item.question
						}), /* @__PURE__ */ jsx("span", {
							className: "shrink-0 text-xl font-light transition-transform duration-200",
							style: {
								color: "#a3a1f8",
								transform: openIndex === i ? "rotate(45deg)" : "rotate(0deg)"
							},
							children: "+"
						})]
					}), /* @__PURE__ */ jsx(AnimatePresence, {
						initial: false,
						children: openIndex === i && /* @__PURE__ */ jsx(motion.div, {
							initial: {
								height: 0,
								opacity: 0
							},
							animate: {
								height: "auto",
								opacity: 1
							},
							exit: {
								height: 0,
								opacity: 0
							},
							transition: {
								duration: .28,
								ease: "easeInOut"
							},
							style: { overflow: "hidden" },
							children: /* @__PURE__ */ jsx("p", {
								className: "px-6 pb-5 text-sm leading-relaxed sm:text-base",
								style: {
									color: "#6B7280",
									fontFamily: "'Inter', sans-serif"
								},
								children: item.answer
							})
						}, "answer")
					})]
				}, i))
			})]
		})
	});
}
//#endregion
//#region src/components/mymind/StoreboxFinalCTA.tsx
function StoreboxFinalCTA() {
	return /* @__PURE__ */ jsx("section", {
		className: "w-full overflow-x-hidden py-20 sm:py-28 text-center",
		style: { background: "#111111" },
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-3xl px-4 sm:px-6 lg:px-8",
			children: [
				/* @__PURE__ */ jsxs(motion.h2, {
					initial: {
						opacity: 0,
						y: 28
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: {
						once: true,
						margin: "-80px"
					},
					transition: { duration: .8 },
					className: "mb-5 leading-tight",
					style: {
						fontFamily: "'Louize', Georgia, serif",
						fontSize: "clamp(2rem, 5vw, 4rem)",
						letterSpacing: "-0.03em",
						color: "white",
						fontWeight: 400
					},
					children: [
						"Your team deserves a tool",
						/* @__PURE__ */ jsx("br", {}),
						"that works as fast as they do."
					]
				}),
				/* @__PURE__ */ jsx(motion.p, {
					initial: {
						opacity: 0,
						y: 20
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: {
						once: true,
						margin: "-60px"
					},
					transition: {
						duration: .6,
						delay: .15
					},
					className: "mb-10 text-base sm:text-lg",
					style: {
						color: "rgba(255,255,255,0.6)",
						fontFamily: "'Inter', sans-serif"
					},
					children: "Start free. No setup. No credit card. Cancel anytime."
				}),
				/* @__PURE__ */ jsxs(motion.div, {
					initial: {
						opacity: 0,
						y: 20
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: {
						once: true,
						margin: "-60px"
					},
					transition: {
						duration: .6,
						delay: .25
					},
					className: "flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4",
					children: [/* @__PURE__ */ jsx("a", {
						href: "#pricing",
						className: "flex w-full sm:w-auto items-center justify-center rounded-full px-8 py-3.5 text-sm font-semibold text-gray-900 transition-all duration-200 hover:opacity-90 hover:shadow-lg",
						style: {
							background: "#F5BF65",
							minHeight: 44
						},
						children: "Start Free Today"
					}), /* @__PURE__ */ jsx("a", {
						href: "#contact",
						className: "flex w-full sm:w-auto items-center justify-center rounded-full border px-8 py-3.5 text-sm font-medium transition-all duration-200 hover:bg-white/10",
						style: {
							borderColor: "rgba(255,255,255,0.25)",
							color: "white",
							minHeight: 44
						},
						children: "Book a 15-Min Demo"
					})]
				})
			]
		})
	});
}
//#endregion
//#region src/routes/index.tsx?tsr-split=component
function MymindPage() {
	useEffect(() => {
		const lenis = new Lenis({
			duration: 1.2,
			easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
		});
		let rafId;
		function raf(time) {
			lenis.raf(time);
			rafId = requestAnimationFrame(raf);
		}
		rafId = requestAnimationFrame(raf);
		return () => {
			cancelAnimationFrame(rafId);
			lenis.destroy();
		};
	}, []);
	return /* @__PURE__ */ jsxs("div", {
		className: "min-h-screen bg-white text-[#24272D]",
		children: [
			/* @__PURE__ */ jsx(MymindNav, {}),
			/* @__PURE__ */ jsx(MymindHero, {}),
			/* @__PURE__ */ jsx(StoreboxSocialProof, {}),
			/* @__PURE__ */ jsx(MymindIntroVideo, {}),
			/* @__PURE__ */ jsx(MymindManifesto, {}),
			/* @__PURE__ */ jsx(MymindSmartBookmarking, {}),
			/* @__PURE__ */ jsx(MymindAI, {}),
			/* @__PURE__ */ jsx(MymindSearch, {}),
			/* @__PURE__ */ jsx(MymindFeatures, {}),
			/* @__PURE__ */ jsx(MymindTestimonials, {}),
			/* @__PURE__ */ jsx(MymindUseCases, {}),
			/* @__PURE__ */ jsx(StoreboxPricing, {}),
			/* @__PURE__ */ jsx(StoreboxFAQ, {}),
			/* @__PURE__ */ jsx(StoreboxFinalCTA, {}),
			/* @__PURE__ */ jsx(MymindFooter, {})
		]
	});
}
//#endregion
export { MymindPage as component };
