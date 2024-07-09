/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			textShadow: {
				sm: "0 1px 2px var(--tw-shadow-color, rgba(0, 0, 0, 0.05))",
				default: "0 2px 4px var(--tw-shadow-color, rgba(0, 0, 0, 0.1))",
				lg: "0 2px 8px var(--tw-shadow-color, rgba(0, 0, 0, 0.2))",
				border:
					"1px 1px 0 var(--tw-shadow-color, rgba(0, 0, 0, 0.2)), -1px 1px 0 var(--tw-shadow-color, rgba(0, 0, 0, 0.2)), 1px -1px 0 var(--tw-shadow-color, rgba(0, 0, 0, 0.2)), -1px -1px 0 var(--tw-shadow-color, rgba(0, 0, 0, 0.2))"
			},
			fontFamily: {
				aveinatortia: ["aveinatortia", "system-ui", "sans"],
				caesarDressing: ["Caesar Dressing", "system-ui", "sans"],
				cormorant: ["Cormorant", "serif"],
				greatVibes: ["Great Vibes", "cursive"],
				monsieurLaDoulaise: ["Monsieur La Doulaise", "system-ui", "sans"],
				mysteryQuest: ["Mystery Quest", "system-ui", "sans"],
				tiny5: ["Tiny5", "system-ui", "sans"],
				vt323: ["VT323", "system-ui", "sans"]
			},
			keyframes: {
				fade: {
					"0%": {
						transform: "translateY(50px)",
						opacity: "0"
					},
					"100%": {
						transform: "translateY(0)",
						opacity: "1"
					}
				}
			},
			animation: {
				fade: "fade 1s ease both"
			}
		}
	},
	variants: {
		textShadow: ["responsive", "hover"]
	},
	plugins: [
		plugin(function ({ addUtilities, theme, e }) {
			const textShadowSizes = {
				".text-shadow-sm": { textShadow: theme("textShadow.sm") },
				".text-shadow-md": { textShadow: theme("textShadow.default") },
				".text-shadow-lg": { textShadow: theme("textShadow.lg") },
				".text-shadow-border": { textShadow: theme("textShadow.border") },
				".text-shadow-none": { textShadow: "none" }
			};

			const colors = theme("colors");
			const textShadowColors = Object.keys(colors).reduce((acc, color) => {
				const shades = colors[color];
				if (typeof shades === "string") {
					acc[`.text-shadow-${color}`] = { "--tw-shadow-color": shades };
				} else {
					Object.keys(shades).forEach((shade) => {
						acc[`.text-shadow-${color}-${shade}`] = { "--tw-shadow-color": shades[shade] };
					});
				}
				return acc;
			}, {});

			addUtilities(textShadowSizes, ["responsive", "hover"]);
			addUtilities(textShadowColors, ["responsive", "hover"]);
		})
	]
};
