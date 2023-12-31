import plugin from "tailwindcss/plugin";
import { fontFamily } from "tailwindcss/defaultTheme";

export const cnvtPlugin = plugin(
	//  Add Css variables
	function ({ addBase }) {
		addBase({
			":root": {
				"--background": "0 0% 100%",
				"--foreground": "224 71.4% 4.1%",
				"--muted": "220 14.3% 95.9%",
				"--muted-foreground": "220 8.9% 46.1%",
				"--popover": "0 0% 100%",
				"--popover-foreground": "224 71.4% 4.1%",
				"--card": "0 0% 100%",
				"--card-foreground": "224 71.4% 4.1%",
				"--border": "220 13% 91%",
				"--input": "220 13% 91%",
				"--primary": "260 90% 60%",
				"--primary-foreground": "240 90% 95%",
				"--secondary": "220 14.3% 95.9%",
				"--secondary-foreground": "220.9 39.3% 11%",
				"--accent": "220 14.3% 95.9%",
				"--accent-foreground": "220.9 39.3% 11%",
				"--destructive": "0 84.2% 60.2%",
				"--destructive-foreground": "210 20% 98%",
				"--ring": "217.9 10.6% 64.9%",
				"--radius": "1rem",
			},
			".dark": {
				"--background": "224 71.4% 4.1%",
				"--foreground": "210 20% 98%",
				"--muted": "215 27.9% 16.9%",
				"--muted-foreground": "217.9 10.6% 64.9%",
				"--popover": "224 71.4% 4.1%",
				"--popover-foreground": "210 20% 98%",
				"--card": "224 71.4% 4.1%",
				"--card-foreground": "210 20% 98%",
				"--border": "215 27.9% 16.9%",
				"--input": "215 27.9% 16.9%",
				"--primary": "260 65% 50%",
				"--primary-foreground": "240 90% 92%",
				"--secondary": "215 27.9% 16.9%",
				"--secondary-foreground": "210 20% 98%",
				"--accent": "215 27.9% 16.9%",
				"--accent-foreground": "210 20% 98%",
				"--destructive": "0 62.8% 30.6%",
				"--destructive-foreground": "0 85.7% 97.3%",
				"--ring": "215 27.9% 16.9%",
			},
		});

		addBase({
			"*": {
				"@apply border-border": {},
			},
			body: {
				"@apply bg-background text-foreground antialiased": {},
				"font-feature-settings": '"cv02", "cv03", "cv04", "cv11"',
			},
		});
	},
	{
		theme: {
			fontFamily: {
				sans: ["Inter var", ...fontFamily.sans],
			},

			container: {
				center: true,
				padding: "2rem",
				screens: {
					"2xl": "1400px",
				},
			},
			extend: {
				colors: {
					border: "hsl(var(--border))",
					input: "hsl(var(--input))",
					ring: "hsl(var(--ring))",
					background: "hsl(var(--background))",
					foreground: "hsl(var(--foreground))",
					primary: {
						DEFAULT: "hsl(var(--primary))",
						foreground: "hsl(var(--primary-foreground))",
					},
					secondary: {
						DEFAULT: "hsl(var(--secondary))",
						foreground: "hsl(var(--secondary-foreground))",
					},
					destructive: {
						DEFAULT: "hsl(var(--destructive))",
						foreground: "hsl(var(--destructive-foreground))",
					},
					muted: {
						DEFAULT: "hsl(var(--muted))",
						foreground: "hsl(var(--muted-foreground))",
					},
					accent: {
						DEFAULT: "hsl(var(--accent))",
						foreground: "hsl(var(--accent-foreground))",
					},
					popover: {
						DEFAULT: "hsl(var(--popover))",
						foreground: "hsl(var(--popover-foreground))",
					},
					card: {
						DEFAULT: "hsl(var(--card))",
						foreground: "hsl(var(--card-foreground))",
					},
				},
				borderRadius: {
					sm: "calc(var(--radius) / 4)",
					md: "calc(var(--radius) / 2)",
					lg: "var(--radius)",
				},
				keyframes: {
					"accordion-down": {
						from: { height: "0" },
						to: { height: "var(--radix-accordion-content-height)" },
					},
					"accordion-up": {
						from: {
							height: "var(--radix-accordion-content-height)",
						},
						to: { height: "0" },
					},
				},
				animation: {
					"accordion-down": "accordion-down 0.2s ease-out",
					"accordion-up": "accordion-up 0.2s ease-out",
				},
			},
		},
	}
);
