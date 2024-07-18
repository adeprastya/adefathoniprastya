import projectMovcult from "@/assets/image/projectMovcult.png";
import projectPoof from "@/assets/image/projectPoof.png";
import projectLogic from "@/assets/image/projectLogic.png";
import { useScroll, useTransform, useMotionValue, useMotionValueEvent, motion } from "framer-motion";
import { useRef } from "react";

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
	container: "snap-start overflow-hidden relative w-full min-h-screen",
	heading:
		"absolute -z-10 top-0 w-screen h-screen font-bebas font-bold tracking-widest leading-none text-[22rem] *:text-transparent *:bg-clip-text *:bg-gradient-to-b *:from-slate-700 *:to-slate-950 flex flex-col justify-evenly items-center",
	wrapper: "relative z-10 w-full flex justify-evenly items-center",
	title:
		"block w-32 sm:w-56 lg:w-96 font-cormorant font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-slate-300",
	overview:
		"block w-32 sm:w-56 lg:w-96 font-cormorant font-bold italic text-sm sm:text-base md:text-lg lg:text-xl text-slate-400",
	image: "z-10 relative w-44 sm:w-52 md:w-64 lg:w-80 aspect-[9/12] rounded-md object-cover",
	imageOverlay:
		"absolute top-[10%] left-[10%] w-44 sm:w-52 md:w-64 lg:w-80 aspect-[9/12] rounded-md bg-gradient-to-bl from-amber-600 to-yellow-400",
	text: "block font-cormorant font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-blue-500"
};

function Text({ children }) {
	return <p className={sty.text}>Go to {children}</p>;
}

function useParallax(value, distance) {
	return useTransform(value, [0, 1], [-distance, distance]);
}

function Item({ data, hovers }) {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({ target: ref });
	const y = useParallax(scrollYProgress, "5");

	return (
		<a
			href={data.link}
			target="_blank"
			ref={(node) => {
				hovers.current.push([node, <Text>{data.title}</Text>]);
				ref.current = node;
			}}
			className={sty.wrapper}
		>
			<div className={sty.textWrapper}>
				<h2 className={sty.title}>{data.title}</h2>
				<p className={sty.overview}>{data.overview}</p>
			</div>

			<div className="relative">
				<motion.div style={{ rotate: -y }} className={sty.imageOverlay}></motion.div>

				<motion.img src={data.image} alt={data.title} style={{ rotate: y }} className={sty.image} />
			</div>
		</a>
	);
}

export default function Portfolio({ hovers }) {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end start"]
	});
	const position = useMotionValue("absolute");
	useMotionValueEvent(scrollYProgress, "change", (latest) => {
		position.set(latest > 0 && latest < 1 ? "fixed" : "absolute");
	});

	return (
		<section id="portfolio" ref={ref} className={sty.container}>
			<motion.h1 style={{ position: position }} className={sty.heading}>
				<span>SOME</span>
				<span>WORKS</span>
			</motion.h1>

			<div className="py-32 sm:py-36 lg:py-40 flex flex-col justify-evenly items-center gap-32 sm:gap-36 lg:gap-40">
				{data.map((data, i) => (
					<Item key={i} data={data} hovers={hovers} />
				))}
			</div>
		</section>
	);
}
