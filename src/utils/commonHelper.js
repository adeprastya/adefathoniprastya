export function isMobile() {
	return "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.userAgent.includes("Mobi");
}

export function wrap(min, max) {
	const range = max - min;

	return (value) => {
		return ((((value - min) % range) + range) % range) + min;
	};
}
