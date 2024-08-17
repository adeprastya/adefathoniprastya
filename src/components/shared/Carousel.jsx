import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import { wrap } from "@/utils/helper";

const sty = {
	container: "relative overflow-hidden w-full h-full",
	img: "w-full h-full object-cover object-center transform-gpu",
	navigation: "cursor-none z-10 absolute top-1/2 left-[5%] -translate-y-1/2 flex flex-col gap-4",
	navItem: "cursor-pointer w-3 h-3 rounded-full backdrop-invert"
};

const vars = {
	enter: (direction) => ({
		opacity: 0,
		y: direction > 0 ? "100%" : "-100%"
	}),
	center: {
		opacity: 1,
		y: 0
	},
	exit: (direction) => ({
		opacity: 0,
		y: direction < 0 ? "100%" : "-100%"
	}),
	transition: {
		ease: "easeInOut",
		duration: 1
	}
};

const SWIPE_CONFIDENCE_THRESHOLD = 10000;
const swipePower = (offset, velocity) => Math.abs(offset) * velocity;

export default function Carousel({ children, sources = [] }) {
	const [[page, direction], setPage] = useState([0, 0]);
	const pageWrapper = wrap(0, sources.length);
	const intervalRef = useRef();
	const isDragging = useMotionValue(false);
	const cursor = useTransform(isDragging, (dragging) => (dragging ? "grabbing" : "grab"));

	const paginate = useCallback(
		(value) => {
			setPage((prev) => [pageWrapper(prev[0] + value), value]);
		},
		[pageWrapper]
	);

	const autoPaginate = useCallback(() => paginate(1), [paginate]);

	const resetAutoPaginate = useCallback(() => {
		clearInterval(intervalRef.current);

		intervalRef.current = setInterval(autoPaginate, 5000);
	}, [autoPaginate]);

	const handleDragStart = () => {
		isDragging.set(true);
		clearInterval(intervalRef.current);
	};

	const handleDragEnd = useCallback(
		(offset, velocity) => {
			const swipe = swipePower(offset.y, velocity.y);
			if (Math.abs(swipe) > SWIPE_CONFIDENCE_THRESHOLD) {
				const direction = swipe < 0 ? 1 : -1;
				paginate(direction);
			}

			isDragging.set(false);
			resetAutoPaginate();
		},
		[paginate, resetAutoPaginate]
	);

	const handleClick = useCallback(
		(i) => {
			setPage([i, 1]);
			resetAutoPaginate();
		},
		[resetAutoPaginate]
	);

	// Run auto pagination
	useEffect(() => {
		resetAutoPaginate();

		return () => {
			clearInterval(intervalRef.current);
		};
	}, [resetAutoPaginate]);

	return (
		<div className={sty.container}>
			<AnimatePresence initial={false} custom={direction} mode="popLayout">
				<motion.img
					key={page}
					src={sources[page]}
					alt={sources[page]}
					custom={direction}
					variants={vars}
					initial="enter"
					animate="center"
					exit="exit"
					transition={vars.transition}
					drag="y"
					dragConstraints={{ top: 0, bottom: 0 }}
					dragElastic={0.5}
					onDragStart={handleDragStart}
					onDragEnd={(e, { offset, velocity }) => handleDragEnd(offset, velocity)}
					className={sty.img}
					style={{ cursor }}
				/>
			</AnimatePresence>

			{/* Navigation */}
			<div className={sty.navigation}>
				{sources.map((src, i) => (
					<div key={i} onClick={() => handleClick(i)} className={`${sty.navItem} ${i == page ? "" : "opacity-25"}`} />
				))}
			</div>

			{children}
		</div>
	);
}
