import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "@/utils/helper";

const sty = {
	container: "relative overflow-hidden w-full h-full",
	img: "w-full h-full object-cover object-center",
	navigation: "cursor-none z-10 absolute top-1/2 left-[4%] -translate-y-1/2 flex flex-col gap-4 transform-gpu",
	navItem: "cursor-pointer w-3 h-3 rounded-full backdrop-invert"
};

const vars = {
	enter: ([direction, height]) => ({
		opacity: 0,
		y: direction > 0 ? height : -height
	}),
	center: {
		opacity: 1,
		y: 0
	},
	exit: ([direction, height]) => ({
		opacity: 0,
		y: direction < 0 ? height : -height
	}),
	transition: {
		ease: "easeInOut",
		duration: 1.5
	}
};

const SWIPE_CONFIDENCE_THRESHOLD = 10000;
const swipePower = (offset, velocity) => Math.abs(offset) * velocity;

export default function Carousel({ children, sources = [] }) {
	const [[page, direction], setPage] = useState([0, 0]);
	const pageWrapper = wrap(0, sources.length);
	const containerRef = useRef();
	const [height, setHeight] = useState(0);
	const intervalRef = useRef();
	const [isDragging, setIsDragging] = useState(false);

	const paginate = useCallback(
		(newDirection) => {
			setPage((prev) => [pageWrapper(prev[0] + newDirection), newDirection]);
		},
		[pageWrapper]
	);

	const autoPaginate = useCallback(() => paginate(1), [paginate]);

	const resetAutoPaginate = useCallback(() => {
		clearInterval(intervalRef.current);
		intervalRef.current = setInterval(autoPaginate, 5000);
	}, [autoPaginate]);

	const handleDragStart = () => {
		clearInterval(intervalRef.current);
		setIsDragging(true);
	};

	const handleDragEnd = useCallback(
		(offset, velocity) => {
			const swipe = swipePower(offset.y, velocity.y);
			if (Math.abs(swipe) > SWIPE_CONFIDENCE_THRESHOLD) {
				const direction = swipe < 0 ? 1 : -1;
				paginate(direction);
			}

			setIsDragging(false);
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

	// Get container height
	useEffect(() => {
		if (containerRef.current) {
			setHeight(containerRef.current.offsetHeight);
		}
	}, [page]);

	return (
		<div ref={containerRef} className={sty.container}>
			<AnimatePresence initial={false} custom={[direction, height]} mode="popLayout">
				<motion.img
					key={`${page}-${direction}`}
					src={sources[page]}
					custom={[direction, height]}
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
					className={`${sty.img} ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
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
