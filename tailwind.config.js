/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
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
	plugins: []
};
