import projectMovcult from "@/assets/image/projectMovcult.png";
import projectPoof from "@/assets/image/projectPoof.png";
import projectLogic from "@/assets/image/projectLogic.png";

const projects = [
	{ title: "Movcult", overview: "a movie search app created using React and API from TMDB", image: projectMovcult },
	{ title: "Poof", overview: "a note app created using PHP and mySQL", image: projectPoof },
	{ title: "Logic Prediction", overview: "a simple web based logic prediction", image: projectLogic }
];

const sty = {
	container: "relative w-full min-h-screen grid grid-cols-12",
	heading:
		"font-cormorant font-bold tracking-tighter text-3xl sm:text-4xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-yellow-300",
	wrapper: "w-full flex justify-evenly items-center",
	title:
		"block w-32 sm:w-56 lg:w-96 font-cormorant font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-slate-300",
	overview: "block w-32 sm:w-56 lg:w-96 font-fira font-light text-sm sm:text-base md:text-lg lg:text-xl text-slate-400",
	image: "z-10 relative w-44 sm:w-52 md:w-64 lg:w-80 aspect-[9/12] rounded-md object-cover",
	imageOverlay:
		"absolute top-[10%] left-[10%] w-44 sm:w-52 md:w-64 lg:w-80 aspect-[9/12] rounded-md bg-gradient-to-bl from-amber-600 to-yellow-400"
};

export default function Portfolio() {
	return (
		<section className={sty.container}>
			<div className="col-span-1 flex justify-center items-center">
				<h1 style={{ writingMode: "vertical-lr", textOrientation: "upright" }} className={sty.heading}>
					Creations
				</h1>
			</div>

			<div className="col-span-11 py-32 sm:py-36 lg:py-40 flex flex-col justify-evenly items-center gap-32 sm:gap-36 lg:gap-40">
				{projects.map((project, i) => (
					<div key={i} className={sty.wrapper}>
						<div>
							<h2 className={sty.title}>{project.title}</h2>
							<p className={sty.overview}>{project.overview}</p>
						</div>

						<div className="relative">
							<div className={sty.imageOverlay}></div>
							<img src={project.image} alt={project.title} className={sty.image} />
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
