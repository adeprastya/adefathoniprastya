import projectMovcult from "@/assets/images/projectMovcult.png";
import projectPoof from "@/assets/images/projectPoof.png";
import projectLogic from "@/assets/images/projectLogic.png";
import { useScroll, useTransform, motion, useMotionTemplate } from "framer-motion";
import { useRef } from "react";
import useMouseMotion from "@/contexts/useMouseMotion";
import { isMobile } from "@/utils/helper";

const data = [
	{
		title: "Movcult",
		overview: "a movie search app created using React and API from TMDB",
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
	container: "relative overflow-clip max-w-screen h-[500vh]",

	itemCont: "sticky top-0 grid gap-[20vw] grid-flow-col transform-gpu",
	itemWrap: "relative w-screen h-screen flex justify-evenly items-center cursor-none",

	textWrap: "absolute h-[60vh] w-[80vw] sm:w-[70vw] lg:w-[60vw]",
	title:
		"absolute top-1/4 -translate-y-1/2 w-1/2 font-cinzel text-5xl sm:text-6xl lg:text-7xl text-zinc-200 text-shadow-sm text-shadow-black",
	overview:
		"absolute top-3/4 -translate-y-1/2 w-1/2 font-cormorant font-bold text-xl sm:text-2xl lg:text-3xl text-zinc-200 text-shadow-sm text-shadow-black",

	image: "h-[60vh] w-[80vw] sm:w-[70vw] lg:w-[60vw] object-cover transform-gpu",

	customHover: "block font-cormorant font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-yellow-400"
};

function CustomHover({ children }) {
	return <p className={sty.customHover}>{children}</p>;
}

function Item({ data, hovers }) {
	const { mouseX, mouseY } = useMouseMotion();
	const rotateX = useTransform(mouseY, [0, window.innerHeight], [20, -20]);
	const rotateY = useTransform(mouseX, [0, window.innerWidth], [-20, 20]);
	const transform = useMotionTemplate`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

	const brightness = useTransform(
		[mouseX, mouseY],
		([x, y]) => {
			const distanceFromCenter = Math.hypot(x - window.innerWidth / 2, y - window.innerHeight / 2);
			return 80 - (distanceFromCenter / Math.hypot(window.innerWidth / 2, window.innerHeight / 2)) * 50;
		},
		[25, 80]
	);
	const filter = useMotionTemplate`brightness(${brightness}%)`;

	return (
		<a
			href={data.link}
			target="_blank"
			ref={(node) => hovers.current.push([node, <CustomHover>{data.title}</CustomHover>])}
			className={sty.itemWrap}
		>
			<div style={{ transformStyle: "preserve-3d" }}>
				<motion.img
					style={isMobile() ? {} : { transform, filter }}
					src={data.image}
					alt={data.title}
					className={sty.image}
				/>
			</div>

			<div className={sty.textWrap}>
				<h2 className={sty.title}>{data.title}</h2>

				<p className={sty.overview}>{data.overview}</p>
			</div>
		</a>
	);
}

export default function Portfolio({ hovers }) {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
	const y = useTransform(scrollYProgress, [0, 1], ["0vw", "-240vw"]);

	return (
		<section ref={ref} id="portfolio" className={sty.container}>
			<motion.div style={{ x: y }} className={sty.itemCont}>
				{data.map((data, i) => (
					<Item key={i} data={data} hovers={hovers} />
				))}
			</motion.div>
		</section>
	);
}
