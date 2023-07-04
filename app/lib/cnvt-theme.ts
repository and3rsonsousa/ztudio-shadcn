import type { Config } from "tailwindcss";
import { cnvtPlugin } from "./cnvt-plugin";
const animatePlugin = require("tailwindcss-animate");

export const cnvtTheme = {
	content: [],
	darkMode: ["class"],
	plugins: [animatePlugin, cnvtPlugin],
} satisfies Config;
