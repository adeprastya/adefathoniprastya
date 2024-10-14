import { motion } from "framer-motion";

const sty = {
	modal:
		"z-50 fixed top-0 left-0 w-full h-screen pt-28 sm:pt-12 py-10 px-14 sm:px-10 lg:px-16 text-zinc-300 bg-zinc-950 font-sans text-base sm:text-lg lg:text-xl flex flex-col justify-evenly sm:justify-between gap-4",

	close:
		"cursor-pointer absolute top-4 right-4 px-3 py-1 rounded-full border border-red-500 tracking-widest text-xs sm:text-sm lg:text-base text-red-400 hover:bg-red-500 hover:text-zinc-950 transition-all duration-1000",

	title: "text-center text-6xl sm:text-7xl lg:text-8xl font-decor text-zinc-200",
	desc: "text-justify",
	smallText: "text-xs sm:text-sm lg:text-base text-zinc-400",
	techList: "px-3 py-1 rounded-full bg-zinc-300/20 text-xs sm:text-sm lg:text-base",
	link: "px-4 py-1 border border-yellow-400/50 tracking-wider text-yellow-400 hover:bg-yellow-400 hover:text-zinc-950 transition-all duration-1000",
	img: "hidden sm:block w-5/12 h-5/6 object-cover object-center border border-yellow-400/50"
};

export default function ProjectDetailModal({ data, setModal }) {
	return (
		<>
			<motion.div
				initial={{
					y: "100%"
				}}
				animate={{
					y: 0,
					transition: { duration: 0.3, ease: "easeInOut" }
				}}
				exit={{
					y: "100%",
					transition: { duration: 1, ease: "easeInOut" }
				}}
				className="w-full h-screen fixed top-0 left-0 bg-yellow-400"
			></motion.div>

			<motion.div
				initial={{
					y: "100%"
				}}
				animate={{
					y: 0,
					transition: { duration: 0.6, ease: "easeInOut" }
				}}
				exit={{
					y: "100%",
					transition: { duration: 0.7, ease: "easeInOut" }
				}}
				className="w-full h-screen fixed top-0 left-0 bg-amber-600"
			></motion.div>

			<motion.div
				initial={{
					y: "100%"
				}}
				animate={{
					y: 0,
					transition: { duration: 0.9, ease: "easeInOut" }
				}}
				exit={{
					y: "100%",
					transition: { duration: 0.4, ease: "easeInOut" }
				}}
				className={sty.modal}
			>
				{/* Close Button */}
				<span onClick={() => setModal(false)} className={sty.close}>
					close
				</span>

				{/* Title */}
				<h3 className={sty.title}>{data.title}</h3>

				<div className="flex items-center gap-4 lg:gap-16">
					<div className="sm:w-1/2 flex flex-col justify-center gap-2 sm:gap-6 lg:gap-10">
						{/* Description */}
						<p className={sty.desc}>{data.description}</p>

						{/* Features */}
						<div>
							<p className={sty.smallText}>Main Feature</p>

							<p>{data.features}</p>
						</div>

						{/* Technologies */}
						<div>
							<p className={sty.smallText}>Technologies</p>

							<ul className="flex flex-wrap gap-2">
								{data.technologies.length > 0 &&
									data.technologies.map((tech, i) => (
										<li key={i} className={sty.techList}>
											{tech}
										</li>
									))}
							</ul>
						</div>
					</div>

					{/* Image */}
					<img src={data.image} alt={data.title} className={sty.img} />
				</div>

				{/* Links */}
				<div className="flex flex-wrap justify-between gap-4">
					{data.siteUrl && (
						<a href={data.siteUrl} target="_blank" className={sty.link}>
							{"// Visit Site //"}
						</a>
					)}

					{data.codeUrl && (
						<a href={data.codeUrl} target="_blank" className={sty.link}>
							{"// Source Code //"}
						</a>
					)}
				</div>
			</motion.div>
		</>
	);
}
