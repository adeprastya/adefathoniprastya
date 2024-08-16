import projectMovcult from "@/assets/images/projectMovcult.png";
import projectPoof from "@/assets/images/projectPoof.png";
import projectLogic from "@/assets/images/projectLogic.png";
import { useScroll, useTransform, motion } from "framer-motion";
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
	container: "relative overflow-clip max-w-screen h-[600vh]",

	itemCont: "sticky top-0 grid grid-flow-col",
	itemWrap: "w-screen h-screen flex justify-evenly items-center",
	title:
		"block w-32 sm:w-56 lg:w-96 font-cormorant font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-slate-300",
	overview:
		"block w-32 sm:w-56 lg:w-96 font-cormorant font-bold italic text-sm sm:text-base md:text-lg lg:text-xl text-slate-400",
	image: "z-10 w-44 sm:w-52 md:w-64 lg:w-80 aspect-[9/12] rounded-md object-cover",
	imageOverlay:
		"absolute top-[10%] left-[10%] w-44 sm:w-52 md:w-64 lg:w-80 aspect-[9/12] rounded-md bg-gradient-to-bl from-amber-600 to-yellow-400",

	text: "block font-cormorant font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-blue-500"
};

function Text({ children }) {
	return <p className={sty.text}>Go to {children}</p>;
}

function Item({ data, hovers }) {
	return (
		<a
			href={data.link}
			target="_blank"
			ref={(node) => hovers.current.push([node, <Text>{data.title}</Text>])}
			className={sty.itemWrap}
		>
			<div className={sty.textWrapper}>
				<h2 className={sty.title}>{data.title}</h2>
				<p className={sty.overview}>{data.overview}</p>
			</div>

			<div>
				<motion.img src={data.image} alt={data.title} className={sty.image} />
			</div>
		</a>
	);
}

export default function Portfolio({ hovers }) {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
	const y = useTransform(scrollYProgress, [0, 1], ["0%", "-203%"]);

	return (
		<section id="portfolio" ref={ref} className={sty.container}>
			<motion.div style={{ x: y }} className={sty.itemCont}>
				{data.map((data, i) => (
					<Item key={i} data={data} hovers={hovers} />
				))}
			</motion.div>
		</section>
	);
}
