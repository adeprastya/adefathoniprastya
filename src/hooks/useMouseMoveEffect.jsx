import { useEffect, useRef } from "react";

export default function useMouseMoveEffect(styleFn) {
	const elementRef = useRef(null);

	useEffect(() => {
		if (styleFn && typeof styleFn !== "function") {
			console.error("styleFn is not a function");
			return;
		}

		const handleMouseMove = (e) => {
			if (elementRef.current) {
				if (styleFn) {
					Object.assign(elementRef.current.style, styleFn(e));
				} else {
					Object.assign(elementRef.current.style, {
						transform: `translate(${(e.clientX - window.innerWidth / 2) / 10}px, ${
							(e.clientY - window.innerHeight / 2) / 10
						}px)`
					});
				}
			}
		};

		window.addEventListener("mousemove", handleMouseMove);

		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
		};
	}, [styleFn]);

	return elementRef;
}

// USAGE

// const styleFn = (e) => ({
// 	transform: `translate(${e.clientX}px, ${e.clientY}px)`,
// 	opacity: Math.max(0, 1 - e.clientY / window.innerHeight)
// });

// function App() {
// 	const mouseMove = useMouseMoveEffect(styleFn);

// 	return <p ref={mouseMove}>This Paragraph will move with mouse</p>;
// }
