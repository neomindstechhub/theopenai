import { t as LightboxProvider } from "./LightboxContext-DvYjQmtE.js";
import { HeadContent, Outlet, Scripts, createFileRoute, createRootRouteWithContext, createRouter, lazyRouteComponent } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
//#region src/styles.css?url
var styles_default = "/assets/styles-BOh12wU3.css";
//#endregion
//#region src/routes/__root.tsx
var Route$7 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "mymind — Remember everything. Organize nothing." },
			{
				name: "description",
				content: "A private place to save your most precious notes, images, quotes and highlights. Enhanced with AI."
			},
			{
				name: "theme-color",
				content: "#ffffff"
			}
		],
		links: [{
			rel: "stylesheet",
			href: styles_default
		}, {
			rel: "icon",
			href: "/favicon.svg",
			type: "image/svg+xml"
		}]
	}),
	shellComponent: RootShell,
	component: RootComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ jsxs("html", {
		lang: "en",
		children: [/* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }), /* @__PURE__ */ jsxs("body", { children: [children, /* @__PURE__ */ jsx(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$7.useRouteContext();
	return /* @__PURE__ */ jsx(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ jsx(LightboxProvider, { children: /* @__PURE__ */ jsx(Outlet, {}) })
	});
}
//#endregion
//#region src/routes/terms.tsx
var $$splitComponentImporter$6 = () => import("./terms-97cnLS5y.js");
var Route$6 = createFileRoute("/terms")({
	head: () => ({ meta: [{ title: "Terms & Conditions — OpenAI Workspace" }] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
//#endregion
//#region src/routes/privacy.tsx
var $$splitComponentImporter$5 = () => import("./privacy-C5BMJ35l.js");
var Route$5 = createFileRoute("/privacy")({
	head: () => ({ meta: [{ title: "Privacy Policy — OpenAI Workspace" }] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
//#endregion
//#region src/routes/contact.tsx
var $$splitComponentImporter$4 = () => import("./contact-Dn7EZfQ5.js");
var Route$4 = createFileRoute("/contact")({
	head: () => ({ meta: [{ title: "Contact Us — OpenAI Workspace" }] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
//#endregion
//#region src/routes/careers.tsx
var $$splitComponentImporter$3 = () => import("./careers-DStSmZgS.js");
var Route$3 = createFileRoute("/careers")({
	head: () => ({ meta: [{ title: "Careers — OpenAI Workspace" }] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
//#endregion
//#region src/routes/blog.tsx
var $$splitComponentImporter$2 = () => import("./blog-DIOECKpR.js");
var Route$2 = createFileRoute("/blog")({
	head: () => ({ meta: [{ title: "Blog — OpenAI Workspace" }] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
//#endregion
//#region src/routes/about.tsx
var $$splitComponentImporter$1 = () => import("./about-CpL1c-E1.js");
var Route$1 = createFileRoute("/about")({
	head: () => ({ meta: [{ title: "About Us — OpenAI Workspace by NeoMinds Tech Hub" }] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
//#endregion
//#region src/routes/index.tsx
var $$splitComponentImporter = () => import("./routes-DgXAqiRG.js");
var Route = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "OpenAI Workspace — Store Everything. Find Anything. Instantly." },
		{
			name: "description",
			content: "OpenAI Workspace is the AI-powered workspace for teams. Save files, links, notes, and images in one click. Find anything instantly with AI search."
		},
		{
			property: "og:title",
			content: "OpenAI Workspace — Store Everything. Find Anything. Instantly."
		},
		{
			property: "og:description",
			content: "Stop losing time hunting for files. OpenAI Workspace stores everything your team cares about and finds it in seconds."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
//#region src/routeTree.gen.ts
var TermsRoute = Route$6.update({
	id: "/terms",
	path: "/terms",
	getParentRoute: () => Route$7
});
var PrivacyRoute = Route$5.update({
	id: "/privacy",
	path: "/privacy",
	getParentRoute: () => Route$7
});
var ContactRoute = Route$4.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$7
});
var CareersRoute = Route$3.update({
	id: "/careers",
	path: "/careers",
	getParentRoute: () => Route$7
});
var BlogRoute = Route$2.update({
	id: "/blog",
	path: "/blog",
	getParentRoute: () => Route$7
});
var AboutRoute = Route$1.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$7
});
var rootRouteChildren = {
	IndexRoute: Route.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$7
	}),
	AboutRoute,
	BlogRoute,
	CareersRoute,
	ContactRoute,
	PrivacyRoute,
	TermsRoute
};
var routeTree = Route$7._addFileChildren(rootRouteChildren)._addFileTypes();
//#endregion
//#region src/router.tsx
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
