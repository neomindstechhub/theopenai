import { n as MymindNav, t as MymindFooter } from "./MymindFooter-DZ3FXdTJ.js";
import { useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
//#region src/routes/contact.tsx?tsr-split=component
function ContactPage() {
	const [formSubmitted, setFormSubmitted] = useState(false);
	const handleSubmit = (e) => {
		e.preventDefault();
		setFormSubmitted(true);
	};
	return /* @__PURE__ */ jsxs("div", {
		className: "min-h-screen bg-white text-gray-900 flex flex-col justify-between",
		children: [/* @__PURE__ */ jsxs("div", { children: [
			/* @__PURE__ */ jsx(MymindNav, {}),
			/* @__PURE__ */ jsx("section", {
				className: "pt-32 pb-16 bg-gray-50 border-b border-gray-200",
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
							children: "CONTACT US"
						}),
						/* @__PURE__ */ jsx(motion.h1, {
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
							children: "We're here. Reach out anytime."
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
							transition: { delay: .15 },
							className: "mx-auto max-w-xl text-gray-500 leading-relaxed text-sm sm:text-base",
							style: { fontFamily: "'Inter', sans-serif" },
							children: "Whether you have a question, a feature request, or want to explore an enterprise plan — we respond fast. (We are, after all, a company obsessed with speed.)"
						})
					]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "py-20",
				id: "contact",
				children: /* @__PURE__ */ jsx("div", {
					className: "mx-auto max-w-5xl px-4 sm:px-6 lg:px-8",
					children: /* @__PURE__ */ jsxs("div", {
						className: "grid grid-cols-1 md:grid-cols-12 gap-12 items-start",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "md:col-span-7 bg-white rounded-3xl border border-gray-250 p-8 shadow-sm",
							children: [/* @__PURE__ */ jsx("h2", {
								className: "text-xl font-bold mb-6 text-gray-800",
								style: { fontFamily: "'Inter', sans-serif" },
								children: "Fill Out Contact Form"
							}), formSubmitted ? /* @__PURE__ */ jsxs(motion.div, {
								initial: {
									opacity: 0,
									scale: .95
								},
								animate: {
									opacity: 1,
									scale: 1
								},
								className: "p-6 bg-green-50 rounded-2xl border border-green-200 text-center",
								children: [
									/* @__PURE__ */ jsx("span", {
										className: "text-2xl mb-2 block",
										children: "📩"
									}),
									/* @__PURE__ */ jsx("h3", {
										className: "font-bold text-green-800 mb-1",
										style: { fontFamily: "'Inter', sans-serif" },
										children: "Message Sent!"
									}),
									/* @__PURE__ */ jsx("p", {
										className: "text-xs text-green-600 font-semibold",
										style: { fontFamily: "'Inter', sans-serif" },
										children: "Thank you. We will get back to you shortly."
									})
								]
							}) : /* @__PURE__ */ jsxs("form", {
								onSubmit: handleSubmit,
								className: "flex flex-col gap-5",
								children: [
									/* @__PURE__ */ jsxs("div", {
										className: "flex flex-col sm:flex-row gap-4",
										children: [/* @__PURE__ */ jsxs("div", {
											className: "flex-1 flex flex-col gap-1.5 text-left",
											children: [/* @__PURE__ */ jsx("label", {
												className: "text-xs font-bold text-gray-400 uppercase tracking-wider",
												children: "Full Name"
											}), /* @__PURE__ */ jsx("input", {
												required: true,
												type: "text",
												className: "rounded-xl border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#a3a1f8]"
											})]
										}), /* @__PURE__ */ jsxs("div", {
											className: "flex-1 flex flex-col gap-1.5 text-left",
											children: [/* @__PURE__ */ jsx("label", {
												className: "text-xs font-bold text-gray-400 uppercase tracking-wider",
												children: "Work Email"
											}), /* @__PURE__ */ jsx("input", {
												required: true,
												type: "email",
												className: "rounded-xl border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#a3a1f8]"
											})]
										})]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "flex flex-col gap-1.5 text-left",
										children: [/* @__PURE__ */ jsx("label", {
											className: "text-xs font-bold text-gray-400 uppercase tracking-wider",
											children: "Message Details"
										}), /* @__PURE__ */ jsx("textarea", {
											required: true,
											rows: 4,
											className: "rounded-xl border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#a3a1f8] resize-none"
										})]
									}),
									/* @__PURE__ */ jsx("button", {
										type: "submit",
										className: "rounded-2xl px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:opacity-95",
										style: {
											background: "#111111",
											minHeight: 44
										},
										children: "Send Message"
									})
								]
							})]
						}), /* @__PURE__ */ jsxs("div", {
							className: "md:col-span-5 flex flex-col gap-8 text-left",
							children: [
								/* @__PURE__ */ jsxs("div", { children: [
									/* @__PURE__ */ jsx("h3", {
										className: "text-xs font-bold text-gray-400 uppercase tracking-widest mb-3",
										style: { fontFamily: "'Inter', sans-serif" },
										children: "Office Location"
									}),
									/* @__PURE__ */ jsx("p", {
										className: "text-base font-bold text-gray-800",
										style: { fontFamily: "'Inter', sans-serif" },
										children: "NeoMinds Tech Hub"
									}),
									/* @__PURE__ */ jsx("p", {
										className: "text-sm text-gray-500 leading-relaxed font-medium",
										style: { fontFamily: "'Inter', sans-serif" },
										children: "Hyderabad, India"
									})
								] }),
								/* @__PURE__ */ jsxs("div", {
									className: "flex flex-col gap-4",
									children: [/* @__PURE__ */ jsx("h3", {
										className: "text-xs font-bold text-gray-400 uppercase tracking-widest",
										style: { fontFamily: "'Inter', sans-serif" },
										children: "Direct Support Channels"
									}), [
										{
											title: "General Inquiries",
											value: "hello@openai.com",
											icon: "📧"
										},
										{
											title: "Sales & Enterprise",
											value: "sales@openai.com",
											icon: "💼"
										},
										{
											title: "Support Assistance",
											value: "support@openai.com",
											icon: "🛠️"
										},
										{
											title: "Twitter/X",
											value: "@openai",
											icon: "🐦"
										}
									].map((chan) => /* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-3",
										children: [/* @__PURE__ */ jsx("span", {
											className: "text-lg select-none",
											children: chan.icon
										}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
											className: "text-xs text-gray-400 font-bold uppercase tracking-wider",
											style: { fontFamily: "'Inter', sans-serif" },
											children: chan.title
										}), /* @__PURE__ */ jsx("p", {
											className: "text-sm font-bold text-gray-700 hover:text-[#a3a1f8] transition-colors",
											style: { fontFamily: "'Inter', sans-serif" },
											children: chan.value
										})] })]
									}, chan.title))]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "rounded-2xl border border-dashed border-gray-300 p-5 text-center bg-gray-50",
									children: [
										/* @__PURE__ */ jsx("h4", {
											className: "text-sm font-bold mb-1.5 text-gray-800",
											style: { fontFamily: "'Inter', sans-serif" },
											children: "Need a customized talk?"
										}),
										/* @__PURE__ */ jsx("p", {
											className: "text-xs text-gray-400 font-semibold mb-4 leading-relaxed",
											style: { fontFamily: "'Inter', sans-serif" },
											children: "Book a quick video demo with our solutions engineer."
										}),
										/* @__PURE__ */ jsx("a", {
											href: "#",
											className: "inline-flex justify-center items-center rounded-xl bg-[#111111] text-white px-5 py-2.5 text-xs font-bold w-full hover:opacity-90 transition-opacity",
											style: { minHeight: 38 },
											children: "Book a Demo Call"
										})
									]
								})
							]
						})]
					})
				})
			})
		] }), /* @__PURE__ */ jsx(MymindFooter, {})]
	});
}
//#endregion
export { ContactPage as component };
