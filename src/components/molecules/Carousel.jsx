import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";

const swipeConfidenceThreshold = 7000;
const swipePower = (offset, velocity) => {
	return Math.abs(offset) * velocity;
};

export default function Carousel({ children, sources }) {
	const [[page, direction], setPage] = useState([0, 0]);
	const sourcesIndex = wrap(0, sources.length, page);
	const containerRef = useRef(null);
	const [height, setHeight] = useState(0);
	const [isDelayed, setIsDelayed] = useState(false);
	const intervalRef = useRef(null);

	const paginate = (newDirection) => {
		setPage([page + newDirection, newDirection]);
	};

	// Auto paginate
	useEffect(() => {
		const autoPaginate = () => {
			if (!isDelayed) {
				setPage((prev) => [prev[0] + 1, 1]);
			}
		};

		intervalRef.current = setInterval(autoPaginate, 5000);

		return () => clearInterval(intervalRef.current);
	}, [isDelayed]);

	// Get container height
	useEffect(() => {
		if (containerRef.current) {
			setHeight(containerRef.current.offsetHeight);
		}
	}, [page]);

	const handleClick = (i) => {
		setPage([i, 1]);

		clearInterval(intervalRef.current);

		intervalRef.current = setInterval(() => {
			setPage((prev) => [prev[0] + 1, 1]);
		}, 5000);
	};

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
		<div ref={containerRef} className="relative overflow-hidden w-full h-full cursor-default">
			<AnimatePresence initial={false} custom={direction} mode="popLayout">
				<motion.img
					key={page}
					src={sources[sourcesIndex]}
					custom={direction}
					variants={variants}
					initial="enter"
					animate="center"
					exit="exit"
					transition={{ ease: "easeInOut", duration: 1.5, zIndex: { duration: 0 } }}
					drag="y"
					dragConstraints={{ top: 0, bottom: 0 }}
					dragElastic={0.5}
					onDragStart={() => setIsDelayed(true)}
					onDragEnd={(e, { offset, velocity }) => {
						setIsDelayed(false);
						const swipe = swipePower(offset.y, velocity.y);

						if (swipe < -swipeConfidenceThreshold) {
							paginate(1);
						} else if (swipe > swipeConfidenceThreshold) {
							paginate(-1);
						}
					}}
					className={`relative w-full h-full object-cover object-center ${
						isDelayed ? "cursor-grabbing" : "cursor-grab"
					}`}
				/>
			</AnimatePresence>

			<div className="z-10 absolute top-[50%] left-[2%] translate-y-[-50%] flex flex-col gap-4">
				{sources.map((src, i) => (
					<div
						key={i}
						onClick={() => handleClick(i)}
						className={`w-3 h-3 rounded-full backdrop-invert cursor-pointer ${i === sourcesIndex ? "" : "opacity-25"}`}
					/>
				))}
			</div>

			{children}
		</div>
	);
}
