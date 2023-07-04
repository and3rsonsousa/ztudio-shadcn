import type { Config } from "tailwindcss";
import { cnvtTheme } from "./app/lib/cnvt-theme";

const config = {
	content: ["./app/**/*.{ts,tsx}"],
	presets: [cnvtTheme],
} satisfies Config;

export default config;
