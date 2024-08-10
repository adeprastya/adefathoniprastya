import Carousel from "@/components/molecules/Carousel";
import photo1 from "@/assets/images/photo1.png";
import photo2 from "@/assets/images/photo2.jpg";
import photo3 from "@/assets/images/photo3.jpg";
import { useState, useRef } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { isMobile } from "@/utils/commonHelper";

const imageSources = [photo1, photo2, photo3];

function SocialMediaIcons({ className }) {
	return (
		<div className={className}>
			{/* Instagram */}
			<a href="https://instagram.com/a_d_e_f_g_h_i_j_k_l_m_n_o_p_q_" target="_blank">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
					<path d="M194.4 211.7a53.3 53.3 0 1 0 59.3 88.7 53.3 53.3 0 1 0 -59.3-88.7zm142.3-68.4c-5.2-5.2-11.5-9.3-18.4-12c-18.1-7.1-57.6-6.8-83.1-6.5c-4.1 0-7.9 .1-11.2 .1c-3.3 0-7.2 0-11.4-.1c-25.5-.3-64.8-.7-82.9 6.5c-6.9 2.7-13.1 6.8-18.4 12s-9.3 11.5-12 18.4c-7.1 18.1-6.7 57.7-6.5 83.2c0 4.1 .1 7.9 .1 11.1s0 7-.1 11.1c-.2 25.5-.6 65.1 6.5 83.2c2.7 6.9 6.8 13.1 12 18.4s11.5 9.3 18.4 12c18.1 7.1 57.6 6.8 83.1 6.5c4.1 0 7.9-.1 11.2-.1c3.3 0 7.2 0 11.4 .1c25.5 .3 64.8 .7 82.9-6.5c6.9-2.7 13.1-6.8 18.4-12s9.3-11.5 12-18.4c7.2-18 6.8-57.4 6.5-83c0-4.2-.1-8.1-.1-11.4s0-7.1 .1-11.4c.3-25.5 .7-64.9-6.5-83l0 0c-2.7-6.9-6.8-13.1-12-18.4zm-67.1 44.5A82 82 0 1 1 178.4 324.2a82 82 0 1 1 91.1-136.4zm29.2-1.3c-3.1-2.1-5.6-5.1-7.1-8.6s-1.8-7.3-1.1-11.1s2.6-7.1 5.2-9.8s6.1-4.5 9.8-5.2s7.6-.4 11.1 1.1s6.5 3.9 8.6 7s3.2 6.8 3.2 10.6c0 2.5-.5 5-1.4 7.3s-2.4 4.4-4.1 6.2s-3.9 3.2-6.2 4.2s-4.8 1.5-7.3 1.5l0 0c-3.8 0-7.5-1.1-10.6-3.2zM448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM357 389c-18.7 18.7-41.4 24.6-67 25.9c-26.4 1.5-105.6 1.5-132 0c-25.6-1.3-48.3-7.2-67-25.9s-24.6-41.4-25.8-67c-1.5-26.4-1.5-105.6 0-132c1.3-25.6 7.1-48.3 25.8-67s41.5-24.6 67-25.8c26.4-1.5 105.6-1.5 132 0c25.6 1.3 48.3 7.1 67 25.8s24.6 41.4 25.8 67c1.5 26.3 1.5 105.4 0 131.9c-1.3 25.6-7.1 48.3-25.8 67z" />
				</svg>
			</a>

			{/* Spotify */}
			<a href="https://open.spotify.com/user/31e6g7pw254oxp2sdigi3nwyvgca?si=b41716a54e6c4a51" target="_blank">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
					<path d="M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3z" />
				</svg>
			</a>

			{/* Github */}
			<a href="https://github.com/adeprastya" target="_blank">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
					<path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
				</svg>
			</a>
		</div>
	);
}

function Introduction() {
	return (
		<p className="block p-10 border border-slate-500 rounded-lg backdrop-blur-sm backdrop-brightness-75 font-fira text-xl md:text-2xl lg:text-3xl text-slate-300">
			"Hi, my name is{" "}
			<span className="text-transparent bg-clip-text bg-gradient-to-bl from-amber-500 to-yellow-300">
				Ade Fathoni Prastya
			</span>{" "}
			and interested in web development and design"
		</p>
	);
}

function History() {
	return (
		<div className="p-10 border border-slate-500 rounded-lg backdrop-blur-sm backdrop-brightness-75 text-xl sm:text-2xl lg:text-3xl text-slate-300 flex flex-col gap-2">
			<p>
				SMA Negeri 3 Tuban <span className="text-base sm:text-lg lg:text-xl text-slate-400">2019 - 2021</span>
			</p>
			<p>
				Universitas Pembangunan Nasional Veteran Jawa Timur{" "}
				<span className="text-base sm:text-lg lg:text-xl text-slate-400">2022 - Now</span>
			</p>
		</div>
	);
}

function Skills() {
	return (
		<div className="overflow-hidden border-slate-500 rounded-md backdrop-blur-sm backdrop-brightness-75 grid grid-cols-2 gap-1 font-fira text-center text-lg sm:text-xl lg:text-2xl text-slate-900 *:bg-slate-300 *:px-4 *:py-2">
			<p>HTML</p>
			<p>CSS</p>
			<p>JavaScript</p>
			<p>PHP</p>
			<p>React</p>
			<p>Tailwind</p>
			<p>MySQL</p>
			<p>Git</p>
		</div>
	);
}

function Achievement() {
	return <p className="text-red-500 font-cormorant italic font-bold text-2xl sm:text:3xl lg:text-4xl">NULL</p>;
}

const data = [
	{ title: "Introduction", el: <Introduction /> },
	{ title: "History", el: <History /> },
	{ title: "Skills", el: <Skills /> },
	{ title: "Achievement", el: <Achievement /> }
];

const sty = {
	container: "snap-start relative w-full h-screen grid grid-cols-6 grid-rows-12",
	iconWrapper:
		"z-10 absolute bottom-[4%] left-[50%] translate-x-[-50%] flex gap-2 rounded-md backdrop-blur-lg backdrop-brightness-50 px-2 py-1     *:w-5 *:h-5 *:fill-slate-300 *:cursor-pointer",
	heading:
		"font-cormorant font-bold text-5xl md:text-6xl lg:text-7xl text-transparent bg-clip-text bg-gradient-to-br from-amber-500 to-yellow-300 mt-10",
	title:
		"font-cormorant italic tracking-wide text-3xl md:text-4xl lg:text-5xl text-slate-300 flex justify-center items-center"
};

const vars = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.5,
			duration: 0.5
		}
	},
	child: {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.3,
				duration: 0.5
			}
		}
	},
	item: {
		hidden: { y: 20, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				staggerChildren: 0.5,
				delayChildren: 0.5,
				duration: 0.5
			}
		}
	}
};

export default function About({ hovers }) {
	const [el, setEl] = useState(null);
	const containerRef = useRef(null);
	const isInView = useInView(containerRef, { amount: 0.3 });

	return (
		<motion.section
			id="about"
			ref={containerRef}
			className={sty.container}
			onClick={() => {
				if (el) setEl(null);
			}}
			variants={vars}
			initial="hidden"
			animate={isInView ? "visible" : "hidden"}
		>
			<motion.div
				ref={(node) => hovers.current.push([node, "HIDDEN"])}
				className="col-span-6 row-span-4 sm:col-span-6 sm:row-span-5 md:col-span-2 md:row-span-12"
				variants={vars.child}
			>
				<Carousel sources={imageSources}>
					<SocialMediaIcons className={sty.iconWrapper} />
				</Carousel>
			</motion.div>

			<motion.div
				className="col-span-6 row-span-1 md:col-span-4 md:row-span-2 flex items-center justify-center"
				variants={vars.child}
			>
				<h1 className={sty.heading}>About Me</h1>
			</motion.div>

			<motion.div
				className="col-span-6 row-span-7 md:col-span-4 md:row-span-10 flex flex-col justify-evenly items-center"
				variants={vars.child}
			>
				{isMobile()
					? data.map((data, i) => (
							<motion.h2 key={i} onClick={() => setEl(data.el)} className={sty.title} variants={vars.item}>
								{data.title}
							</motion.h2>
					  ))
					: data.map((data, i) => (
							<motion.h2
								key={i}
								ref={(node) => hovers.current.push([node, data.el])}
								className={sty.title}
								variants={vars.item}
							>
								{data.title}
							</motion.h2>
					  ))}
			</motion.div>

			<AnimatePresence>
				{el && (
					<motion.div
						initial={{ x: "-50%", y: "-100%", opacity: 0, scale: 0.5 }}
						animate={{ x: "-50%", y: "-50%", opacity: 1, scale: 1 }}
						exit={{ x: "-50%", y: "0%", opacity: 0, scale: 0.5 }}
						className="absolute z-20 top-[50%] left-[50%]"
					>
						{el}
					</motion.div>
				)}
			</AnimatePresence>
		</motion.section>
	);
}
