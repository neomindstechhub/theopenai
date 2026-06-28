import { createContext, useContext, useEffect, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { AnimatePresence, motion } from "framer-motion";
//#region src/components/mymind/LightboxContext.tsx
var LightboxContext = createContext(void 0);
function useLightbox() {
	const context = useContext(LightboxContext);
	if (!context) throw new Error("useLightbox must be used within a LightboxProvider");
	return context;
}
function LightboxProvider({ children }) {
	const [activeVideoId, setActiveVideoId] = useState(null);
	const openLightbox = (videoId) => {
		setActiveVideoId(videoId);
		document.body.style.overflow = "hidden";
	};
	const closeLightbox = () => {
		setActiveVideoId(null);
		document.body.style.overflow = "";
	};
	useEffect(() => {
		const handleKeyDown = (e) => {
			if (e.key === "Escape") closeLightbox();
		};
		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, []);
	return /* @__PURE__ */ jsxs(LightboxContext.Provider, {
		value: {
			openLightbox,
			closeLightbox
		},
		children: [children, /* @__PURE__ */ jsx(AnimatePresence, { children: activeVideoId && /* @__PURE__ */ jsxs(motion.div, {
			initial: { opacity: 0 },
			animate: { opacity: 1 },
			exit: { opacity: 0 },
			onClick: closeLightbox,
			className: "video-lightbox",
			children: [/* @__PURE__ */ jsx("button", {
				onClick: closeLightbox,
				className: "close-video bg-transparent border-0",
				"aria-label": "Close video",
				children: /* @__PURE__ */ jsx("svg", {
					width: "24",
					height: "24",
					viewBox: "0 0 20 20",
					fill: "currentColor",
					children: /* @__PURE__ */ jsx("path", { d: "M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" })
				})
			}), /* @__PURE__ */ jsx(motion.div, {
				initial: {
					scale: .9,
					opacity: 0
				},
				animate: {
					scale: 1,
					opacity: 1
				},
				exit: {
					scale: .9,
					opacity: 0
				},
				transition: {
					type: "spring",
					damping: 25,
					stiffness: 200
				},
				onClick: (e) => e.stopPropagation(),
				className: "yt-video-container",
				children: /* @__PURE__ */ jsx("div", {
					className: "responsive-video",
					children: /* @__PURE__ */ jsx("iframe", {
						src: `https://www.youtube.com/embed/${activeVideoId}?autoplay=1`,
						title: "YouTube video player",
						frameBorder: "0",
						allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
						allowFullScreen: true
					})
				})
			})]
		}) })]
	});
}
//#endregion
export { useLightbox as n, LightboxProvider as t };
