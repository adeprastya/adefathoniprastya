const sty = {
	container: "relative w-full min-h-screen border grid grid-cols-12",
	title:
		"font-cormorant font-bold tracking-tighter text-3xl sm:text-4xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-yellow-300",
	wrapper: "w-full flex justify-evenly items-center",
	text: "border block w-32 sm:w-56 lg:w-96 font-cormorant font-bold text-slate-300 text-3xl sm:text-4xl md:text-5xl lg:text-6xl",
	image: "border w-44 sm:w-52 md:w-64 lg:w-80 aspect-[9/12]"
};

export default function Portfolio() {
	return (
		<section className={sty.container}>
			<div className="col-span-1 flex justify-center items-center">
				<h1 style={{ writingMode: "vertical-lr", textOrientation: "upright" }} className={sty.title}>
					Creations
				</h1>
			</div>

			<div className="col-span-11 py-32 sm:py-36 lg:py-40 flex flex-col justify-evenly items-center gap-32 sm:gap-36 lg:gap-40">
				<div className={sty.wrapper}>
					<h2 className={sty.text}>Project</h2>
					<img src="" alt="" className={sty.image} />
				</div>

				<div className={sty.wrapper}>
					<h2 className={sty.text}>Project</h2>
					<img src="" alt="" className={sty.image} />
				</div>

				<div className={sty.wrapper}>
					<h2 className={sty.text}>Project</h2>
					<img src="" alt="" className={sty.image} />
				</div>
			</div>
		</section>
	);
}
