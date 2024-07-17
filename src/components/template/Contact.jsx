import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const data = [
	{
		title: "Email",
		link: "mailto:KwCZs@example.com"
	},
	{
		title: "Linkedin",
		link: "www.linkedin.com/in/adefathoniprastya"
	},
	{
		title: "Telegram",
		link: "https://t.me/adefathoniprastya"
	}
];

const sty = {
	container: "overflow-hidden w-full min-h-screen bg-slate-950 grid gap-6 grid-flow-row xl:grid-flow-col",
	heading:
		"font-cormorant font-bold tracking-wide text-[4rem] sm:text-[5rem] md:text-[6rem] xl:text-[6rem] text-transparent bg-clip-text bg-gradient-to-bl from-amber-500 to-yellow-300     flex flex-col w-fit",
	item: "block font-cormorant font-bold tracking-wide text-[5rem] sm:text-[6rem] md:text-[7rem] xl:text-[8rem] text-slate-200"
};

export default function Contact() {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({ target: ref, offset: ["-100%", "-50%"] });
	const radius = useTransform(scrollYProgress, [0, 1], ["50%", "0%"]);

	return (
		<motion.section
			ref={ref}
			style={{ borderTopLeftRadius: radius, borderTopRightRadius: radius }}
			className={sty.container}
		>
			<div className="w-full h-full flex justify-center items-center">
				<h1 className={sty.heading}>
					<span>Get In Touch</span>
					<span>With Me</span>
				</h1>
			</div>

			<div className="grid grid-flow-row justify-items-center">
				{data.map((data, i) => (
					<a key={i} href={data.link} className={sty.item}>
						{data.title}
					</a>
				))}
			</div>
		</motion.section>
	);
}
