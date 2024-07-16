import projectMovcult from "@/assets/image/projectMovcult.png";
import projectPoof from "@/assets/image/projectPoof.png";
import projectLogic from "@/assets/image/projectLogic.png";

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
	container: "overflow-hidden relative w-full min-h-screen",
	heading:
		"absolute w-screen h-screen flex flex-col justify-evenly font-bebas font-bold tracking-widest leading-none text-[22rem] *:text-transparent *:bg-clip-text *:bg-gradient-to-b *:from-slate-700 *:to-slate-950",
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
	return <p className={sty.text}>{children}</p>;
}

export default function Portfolio({ hovers }) {
	return (
		<section className={sty.container}>
			<h1 className={sty.heading}>
				<span>SOME</span> <span>WORKS</span>
			</h1>

			<div className="py-32 sm:py-36 lg:py-40 flex flex-col justify-evenly items-center gap-32 sm:gap-36 lg:gap-40">
				{data.map((data, i) => (
					<a
						href={data.link}
						target="_blank"
						key={i}
						ref={(node) => hovers.current.push([node, <Text>{data.title}</Text>])}
						className={sty.wrapper}
					>
						<div>
							<h2 className={sty.title}>{data.title}</h2>
							<p className={sty.overview}>{data.overview}</p>
						</div>

						<div className="relative">
							<div className={sty.imageOverlay}></div>
							<img src={data.image} alt={data.title} className={sty.image} />
						</div>
					</a>
				))}
			</div>
		</section>
	);
}
