import { useEffect, useRef, useState } from "react";
import {
	motion,
	useScroll,
	useSpring,
	useTransform,
	useMotionValue,
	useVelocity,
	useAnimationFrame,
	wrap
} from "framer-motion";

export default function ParallaxText({ children, baseVelocity = 10, containerStyle, textStyle }) {
	const { scrollY } = useScroll();
	const scrollVelocity = useVelocity(scrollY);
	const smoothVelocity = useSpring(scrollVelocity, { damping: 100, stiffness: 700 });
	const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], { clamp: false });
	const directionFactor = useRef(1);
	const baseX = useMotionValue(0);

	const containerRef = useRef(null);
	const childRef = useRef(null);
	const [childMultiply, setChildMultiply] = useState(0);
	const childWidth = useMotionValue(0);

	const x = useTransform([baseX, childWidth], ([v, w]) => `${wrap(-w, 0, v)}px`);

	// Calculate number of children to render, resize event
	useEffect(() => {
		const calcChildMultiply = () => {
			if (containerRef.current && childRef.current) {
				const numChildren = Math.ceil(containerRef.current.offsetWidth / childRef.current.offsetWidth);
				setChildMultiply(numChildren);
			}
		};
		calcChildMultiply();

		window.addEventListener("resize", calcChildMultiply);

		return () => window.removeEventListener("resize", calcChildMultiply);
	}, []);

	// Calculate baseX and childWidth motion value
	useAnimationFrame((_, delta) => {
		let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

		if (velocityFactor.get() < 0) {
			directionFactor.current = -1;
		} else if (velocityFactor.get() > 0) {
			directionFactor.current = 1;
		}

		moveBy += directionFactor.current * moveBy * velocityFactor.get();

		baseX.set(baseX.get() + moveBy);

		if (childWidth.get() != childRef.current.offsetWidth) {
			childWidth.set(childRef.current.offsetWidth);
		}
	});

	return (
		<div ref={containerRef} className="w-full overflow-x-clip">
			<motion.div className={`${containerStyle} whitespace-nowrap transform-gpu`} style={{ x }}>
				<span ref={childRef} className={textStyle}>
					{children + " "}
				</span>

				{Array.from({ length: childMultiply }).map((_, i) => (
					<span key={i} className={textStyle}>
						{children + " "}
					</span>
				))}
			</motion.div>
		</div>
	);
}
