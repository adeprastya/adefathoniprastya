import Carousel from "@/components/molecules/Carousel";
import SocialMediaIcons from "@/components/molecules/SocialMediaIcons";
import photo1 from "@/assets/image/photo1.png";
import photo2 from "@/assets/image/photo2.png";

const imageSources = [photo1, photo2];

const data = [
	{
		title: "Introduction",
		text: "Hi, my name is Adefa. I am a student at SMK Negeri 1 Cibinong. I am interested in web development and design."
	},
	{ title: "History", text: "lorem ipsum." },
	{ title: "Skills", text: "I am a student at SMK Negeri 1 Cibinong. I am interested in web development and design." },
	{
		title: "Achievement",
		text: "lorem ipsum."
	}
];

const sty = {
	container: "relative w-full h-screen grid grid-cols-6 grid-rows-12",
	iconWrapper:
		"z-10 absolute bottom-[4%] left-[50%] translate-x-[-50%] flex gap-2 rounded-md backdrop-blur-lg backdrop-brightness-50 px-2 py-1     *:w-5 *:h-5 *:fill-slate-300 *:cursor-pointer",
	heading: "font-cormorant font-bold text-5xl md:text-6xl lg:text-7xl text-yellow-400 flex justify-center items-center",
	title:
		"font-cormorant tracking-wide text-3xl md:text-4xl lg:text-5xl text-slate-300 flex justify-center items-center",
	text: "block p-10 border-2 border-slate-500 rounded-lg backdrop-blur-sm backdrop-brightness-75 font-fira text-xl md:text-2xl lg:text-3xl text-slate-300"
};

function Text({ children }) {
	return <p className={sty.text}>{children}</p>;
}

export default function About({ hovers }) {
	return (
		<section className={sty.container}>
			<div
				ref={(node) => hovers.current.push([node, "HIDDEN"])}
				className="col-span-6 row-span-4 sm:col-span-6 sm:row-span-5 md:col-span-2 md:row-span-12"
			>
				<Carousel sources={imageSources}>
					<SocialMediaIcons className={sty.iconWrapper} />
				</Carousel>
			</div>

			<div className="col-span-6 row-span-1 md:col-span-4 md:row-span-2 flex items-center justify-center">
				<h1 className={sty.heading}>About Me</h1>
			</div>

			<div className="col-span-6 row-span-7 md:col-span-4 md:row-span-10 flex flex-col justify-evenly items-center">
				{data.map((data, i) => (
					<h2 key={i} ref={(node) => hovers.current.push([node, <Text>{data.text}</Text>])} className={sty.title}>
						{data.title}
					</h2>
				))}
			</div>
		</section>
	);
}
