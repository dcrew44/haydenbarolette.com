/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,jsx}"],
	mode: "jit",
	theme: {
		extend: {
			colors: {
				background: "#0a0619",
				primary: "#f98449",
				secondary: "#00f6ff",
				auxilary: "#943494",
				dimWhite: "rgba(255, 255, 255, 0.7)",
				dimBlue: "rgba(9, 151, 124, 0.1)",
			},
			fontFamily: {
				hyperion: ["Hyperion", "sans-serif"],
			},
		},
		screens: {
			xs: "480px",
			ss: "620px",
			sm: "768px",
			md: "1060px",
			lg: "1200px",
			xl: "1700px",
		},
		keyframes: {
			bounce: {
				"0%,100%": {
					transform: "translateX(0) scale(70%)",
					animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
				},
				"50%": {
					transform: "translateX(-25%) scale(70%)",
					animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
				},
			},
			"bounce-reverse": {
				"0%,100%": {
					transform: "translateX(0) scale(70%)",
					animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
				},
				"50%": {
					transform: "translateX(25%) scale(70%)",
					animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
				},
			},
		},
		animation: {
			bounce: "bounce 1s ease-in-out infinite",
			"bounce-reverse": "bounce-reverse 1s ease-in-out infinite",
		},
	},
	plugins: [],
};
