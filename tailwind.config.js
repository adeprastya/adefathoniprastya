/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				cormorant: ["Cormorant", "serif"],
				epilogue: ["Epilogue", "sans"],
				caesarDressing: ["Caesar Dressing", "system-ui", "sans"],
				monsieurLaDoulaise: ["Monsieur La Doulaise", "system-ui", "sans"],
				jacquard12: ["Jacquard 12", "system-ui", "sans"],
				notoSansJP: ["Noto Sans JP", "system-ui", "sans"],
				reenieBeanie: ["Reenie Beanie", "system-ui", "sans"]
			},
			keyframes: {
				fade: {
					"0%": {
						transform: "translateY(100%)",
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
