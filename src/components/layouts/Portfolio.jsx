import projectMovcult from "@/assets/images/projectMovcult.png";
import projectPoof from "@/assets/images/projectPoof.png";
import projectLogic from "@/assets/images/projectLogic.png";
import projectBambuPacet from "@/assets/images/projectBambuPacet.png";
import { useScroll, useTransform, motion, useSpring } from "framer-motion";
import { useRef } from "react";
import useMouseMotion from "@/contexts/useMouseMotion";

const data = [
	{
		title: "Bambu Pacet",
		overview:
			"a bamboo furniture company web profile created using React, Framer, Inertia, Laravel and MySQL as a database",
		link: "https://bambu-pacet.com",
		image: projectBambuPacet
	},
	{
		title: "Movcult",
		overview: "a movie search app built using React and API from TMDB",
		link: "https://adeprastya.github.io/movcult/",
		image: projectMovcult
	},
	{ title: "Poof", overview: "a note app created using PHP and mySQL", link: "http://poof.rf.gd", image: projectPoof },
	{
		title: "Logic Prediction",
		overview: "a simple web based logic prediction",
		link: "https://adeprastya.github.io/logic-prediction/",
		image: projectLogic
	}
];

const sty = {
	container: "w-full min-h-screen py-80 flex flex-col items-center gap-80",

	itemWrap: "relative w-fit flex justify-center items-center cursor-none",

	title:
		"absolute left-0 top-1/4 font-decor text-5xl sm:text-6xl lg:text-7xl text-zinc-200 text-shadow-sm text-shadow-black",
	overview:
		"absolute left-0 top-3/4 w-1/2 font-sans text-lg sm:text-xl lg:text-2xl text-zinc-200 text-shadow-sm text-shadow-black",

	image: "h-[60vh] w-[80vw] sm:w-[70vw] lg:w-[60vw] object-cover object-center transform-gpu",

	customHover:
		"w-40 p-4 aspect-square rounded-full backdrop-blur-sm backdrop-brightness-90 font-sans text-center tracking-wider text-base sm:text-lg lg:text-xl text-yellow-500 flex items-center justify-center"
};

function CustomHover({ children }) {
	return (
		<p className={sty.customHover}>
			{"Visit "}
			{children}
		</p>
	);
}

function Item({ data, hovers }) {
	const imgRef = useRef(null);
	const { scrollYProgress } = useScroll({ target: imgRef, offset: ["start end", "end start"] });
	const { mouseX, mouseY } = useMouseMotion();
	const mouseYValue = useTransform(mouseY, [0, window.innerHeight], [0.05, -0.05]);
	const mouseXValue = useTransform(mouseX, [0, window.innerWidth], [1, 0]);
	const totalY = useTransform([scrollYProgress, mouseYValue], ([x, y]) => x + y);
	const smoothY = useSpring(totalY, { mass: 0.5, damping: 20, stiffness: 100 });
	const smoothX = useSpring(mouseXValue, { mass: 0.5, damping: 20, stiffness: 50 });
	const y1 = useTransform(smoothY, [0, 0.5, 1], [100, 0, -100]);
	const y2 = useTransform(smoothY, [0, 0.5, 1], [300, 0, -300]);
	const y3 = useTransform(smoothY, [0, 0.5, 1], [500, 0, -500]);
	const x1 = useTransform(smoothX, [0, 0.5, 1], [15, 0, -15]);
	const x2 = useTransform(smoothX, [0, 0.5, 1], [30, 0, -30]);
	const x3 = useTransform(smoothX, [0, 0.5, 1], [45, 0, -45]);
	const scale = useTransform(scrollYProgress, [0, 0.45, 0.55, 1], [0.9, 1, 1, 0.9]);

	return (
		<motion.a
			href={data.link}
			target="_blank"
			ref={(node) => hovers.current.push([node, <CustomHover>{data.title}</CustomHover>])}
			className={sty.itemWrap}
			style={{ scale }}
		>
			<motion.img src={data.image} alt={data.title} ref={imgRef} style={{ y: y1, x: x1 }} className={sty.image} />

			<motion.h2 style={{ y: y2, x: x2 }} className={sty.title}>
				{data.title}
			</motion.h2>

			<motion.p style={{ y: y3, x: x3 }} className={sty.overview}>
				{data.overview}
			</motion.p>
		</motion.a>
	);
}

export default function Portfolio({ hovers }) {
	return (
		<section id="portfolio" className={sty.container}>
			{data.map((data, i) => (
				<Item key={i} data={data} hovers={hovers} />
			))}
		</section>
	);
}
