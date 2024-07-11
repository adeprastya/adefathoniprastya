import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";

const swipeConfidenceThreshold = 7000;
const swipePower = (offset, velocity) => {
	return Math.abs(offset) * velocity;
};

export default function Carousel({ sources }) {
	const [[page, direction], setPage] = useState([0, 0]);
	const sourcesIndex = wrap(0, sources.length, page);
	const containerRef = useRef(null);
	const [height, setHeight] = useState(0);
	const [isDragging, setIsDragging] = useState(false);

	const paginate = (newDirection) => {
		setPage([page + newDirection, newDirection]);
	};

	// Auto paginate with interval pause logic
	useEffect(() => {
		const autoPaginate = setInterval(() => {
			if (!isDragging) {
				// Check if dragging before paginating
				setPage((prev) => [prev[0] + 1, 1]);
			}
		}, 5000);

		return () => clearInterval(autoPaginate);
	}, [isDragging]);

	// Set container height on mount
	useEffect(() => {
		if (containerRef.current) {
			setHeight(containerRef.current.offsetHeight);
		}
	}, [page]);

	const variants = {
		enter: (direction) => ({
			opacity: 0,
			y: direction > 0 ? height : -height,
			zIndex: 0
		}),
		center: {
			opacity: 1,
			y: 0,
			zIndex: 1
		},
		exit: (direction) => ({
			opacity: 0,
			y: direction < 0 ? height / 2 : -height / 2,
			zIndex: 0
		})
	};

	return (
		<div ref={containerRef} className="relative overflow-hidden w-full h-full cursor-grab">
			<AnimatePresence initial={false} custom={direction} mode="popLayout">
				<motion.img
					key={page}
					src={sources[sourcesIndex]}
					custom={direction}
					variants={variants}
					initial="enter"
					animate="center"
					exit="exit"
					transition={{ duration: 1.5, zIndex: { duration: 0 } }}
					drag="y"
					dragConstraints={{ top: 0, bottom: 0 }}
					dragElastic={0.5}
					onDragStart={() => setIsDragging(true)}
					onDragEnd={(e, { offset, velocity }) => {
						setIsDragging(false);
						const swipe = swipePower(offset.y, velocity.y);

						if (swipe < -swipeConfidenceThreshold) {
							paginate(1);
						} else if (swipe > swipeConfidenceThreshold) {
							paginate(-1);
						}
					}}
					className="relative w-full h-full object-cover object-center"
				/>
			</AnimatePresence>
		</div>
	);
}
