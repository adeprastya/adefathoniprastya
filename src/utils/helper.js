export function isMobile() {
	return "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.userAgent.includes("Mobi");
}

export function wrap(min, max) {
	const range = max - min;

	return (value) => {
		return ((((value - min) % range) + range) % range) + min;
	};
}

export function slicer(arr, numResult) {
	if ((!Array.isArray(arr) && typeof arr !== "string") || numResult > arr.length) {
		return arr;
	}

	const result = [];

	for (let i = 0; i < numResult; i++) {
		result.push(arr.slice(Math.ceil((arr.length / numResult) * i), Math.ceil((arr.length / numResult) * (i + 1))));
	}

	return result;
}
