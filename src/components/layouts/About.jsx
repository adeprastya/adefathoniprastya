import photo1 from "@/assets/images/photo1.png";
import photo2 from "@/assets/images/photo2.jpg";
import photo3 from "@/assets/images/photo3.jpg";
import Carousel from "@/components/shared/Carousel";
import BlurAnimationText from "@/components/shared/BlurAnimationText";
import RevealAnimationText from "@/components/shared/RevealAnimationText";
import { Fragment } from "react";

const imageSources = [photo1, photo2, photo3];

const skills = ["HTML", "CSS", "JavaScript", "PHP", "React", "Tailwind", "MySQL", "Git"];

const histories = [
	{ year: "2021 - 2021", content: "SMA Negeri 3 Tuban" },
	{ year: "2022 - 2026", content: "Universitas Pembangunan Nasional Veteran Jawa Timur" }
];

const sty = {
	container: "w-full min-h-screen flex flex-col md:flex-row",

	carouselWrap:
		"z-10 sticky top-0 w-full h-[35vh] sm:h-[40vh] md:h-screen md:w-[70vw] lg:w-[45vw] px-12 pt-6 md:p-0 md:py-14 md:ps-6 bg-zinc-950 shadow-xl shadow-zinc-950",
	socmedIcons:
		"z-10 absolute bottom-[4%] left-1/2 -translate-x-1/2 flex gap-2 rounded-md backdrop-blur-lg backdrop-brightness-50 px-2 py-1     *:w-5 *:h-5 *:fill-zinc-300 *:cursor-pointer",

	contentWrap: "w-full py-[40vh] flex flex-col items-center gap-[40vh]",

	heading:
		"w-10/12 lg:w-8/12 text-center font-cormorant text-7xl lg:text-8xl text-transparent bg-clip-text bg-gradient-to-bl from-amber-500 to-yellow-300",

	introduction: "font-cormorant font-bold text-4xl md:text-5xl lg:text-6xl text-zinc-300",

	historyWrap: "w-10/12 lg:w-8/12 grid grid-cols-12 gap-2 gap-y-8",
	historyYear: "font-spectral text-base sm:text-lg lg:text-xl text-zinc-400",
	historyText: "font-spectral font-bold text-2xl sm:text-3xl lg:text-4xl text-zinc-300",

	skills: "overflow-hidden rounded-sm grid grid-cols-2 hover:*:*:text-zinc-950 hover:*:bg-zinc-200",
	skillsItem: "transition-all duration-500 text-center text-zinc-200 bg-zinc-800",
	skillsText: "px-8 py-4 font-spectral font-bold text-xl sm:text-2xl lg:text-3xl"
};

function SocmedIcons() {
	return (
		<div className={sty.socmedIcons}>
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

export default function About({ hovers }) {
	return (
		<section id="about" className={sty.container}>
			{/* Carousel */}
			<div ref={(node) => hovers.current.push([node, "HIDDEN"])} className={sty.carouselWrap}>
				<Carousel sources={imageSources}>
					<SocmedIcons />
				</Carousel>
			</div>

			<div className={sty.contentWrap}>
				{/* Heading */}
				<h1>
					<BlurAnimationText className={sty.heading}>Who Am I ?</BlurAnimationText>
				</h1>

				{/* Introduction */}
				<p className="w-10/12 lg:w-8/12 text-center">
					<RevealAnimationText className={sty.introduction}>
						My name is Ade Fathoni Prastya , I am always eager to learn the latest technologies and always combine
						visual with functionality
					</RevealAnimationText>
				</p>

				{/* History */}
				<div className={sty.historyWrap}>
					{histories.map((history, i) => (
						<Fragment key={i}>
							<p className="col-span-3">
								<RevealAnimationText className={sty.historyYear}>{history.year}</RevealAnimationText>
							</p>

							<p className="col-span-9">
								<RevealAnimationText className={sty.historyText}>{history.content}</RevealAnimationText>
							</p>
						</Fragment>
					))}
				</div>

				{/* Skills */}
				<div className={sty.skills}>
					{skills.map((skill, i) => (
						<p key={i} className={sty.skillsItem}>
							<RevealAnimationText className={sty.skillsText}>{skill}</RevealAnimationText>
						</p>
					))}
				</div>
			</div>
		</section>
	);
}
