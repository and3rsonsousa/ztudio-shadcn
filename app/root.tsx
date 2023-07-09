import { json, LoaderArgs, type LinksFunction } from "@remix-run/cloudflare";
import {
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
	useLoaderData,
} from "@remix-run/react";
import styles from "~/globals.css";
import {
	ThemeBody,
	ThemeHead,
	ThemeProvider,
	useTheme,
} from "./lib/theme-provider";
import clsx from "clsx";
import { getThemeSession } from "./lib/theme.server";

export const links: LinksFunction = () => [
	{ rel: "stylesheet", href: styles },
	{
		rel: "icon",
		href: "/ico.png",
	},
	{
		rel: "apple-touch-icon",
		sizes: "180x180",
		href: "/apple-touch-icon.png",
	},
	{
		rel: "icon",
		type: "image/png",
		sizes: "32x32",
		href: "/favicon-32x32.png",
	},
	{
		rel: "icon",
		type: "image/png",
		sizes: "16x16",
		href: "/favicon-16x16.png",
	},
	{ rel: "manifest", href: "/site.webmanifest" },
];

export const loader = async ({ request }: LoaderArgs) => {
	const themeSession = await getThemeSession(request);

	return json({
		theme: themeSession.getTheme(),
	});
};

function App() {
	const data = useLoaderData<typeof loader>();

	const [theme] = useTheme();
	return (
		<html lang="pt-br" className={clsx(theme)}>
			<head>
				<meta charSet="utf-8" />
				<meta
					name="viewport"
					content="width=device-width,initial-scale=1"
				/>
				<Meta />
				<Links />
				<ThemeHead ssrTheme={Boolean(data.theme)} />
			</head>
			<body>
				<Outlet />
				<ThemeBody ssrTheme={Boolean(data.theme)} />
				<ScrollRestoration />
				<Scripts />
				<LiveReload />
			</body>
		</html>
	);
}

export default function AppWithProviders() {
	const data = useLoaderData<typeof loader>();
	return (
		<ThemeProvider specifiedTheme={data.theme}>
			<App />
		</ThemeProvider>
	);
}
