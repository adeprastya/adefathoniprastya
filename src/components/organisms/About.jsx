import Carousel from "@/components/molecules/Carousel";
import SocialMediaIcons from "@/components/molecules/SocialMediaIcons";
import photo from "@/assets/image/photo.png";

const imageSources = [photo, photo, photo];

const sty = {
	container: "relative overflow-hidden w-full h-screen grid grid-cols-6 grid-rows-12",
	iconWrapper:
		"z-10 absolute bottom-[4%] left-[50%] translate-x-[-50%] flex gap-2 rounded-md backdrop-blur-lg backdrop-brightness-50 px-2 py-1     *:w-5 *:h-5 *:fill-slate-300 *:cursor-pointer",
	title: "font-cormorant text-3xl sm:text-4xl md:text-5xl xl:text-6xl text-slate-200",
	paragraph: "font-fira font-light text-base sm:text-lg lg:text-xl text-slate-400"
};

export default function About() {
	return (
		<section className={sty.container}>
			<div className="col-span-6 row-span-4 sm:col-span-6 sm:row-span-5 md:col-span-2 md:row-span-12">
				<Carousel sources={imageSources}>
					<SocialMediaIcons className={sty.iconWrapper} />
				</Carousel>
			</div>

			<div className="col-span-6 row-span-2 sm:col-span-6 sm:row-span-2 md:col-span-4 md:row-span-4 flex items-center justify-center">
				<h1 className={sty.title}>About Me</h1>
			</div>

			<div className="col-span-6 row-span-3 sm:col-span-3 sm:row-span-5 md:col-span-2 md:row-span-8 flex items-start justify-center px-20 sm:p-10 lg:p-16">
				<p className={sty.paragraph}>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi nobis eveniet quae. Animi distinctio
					tempore minima voluptates error eveniet quaerat vero. Assumenda omnis totam magni
				</p>
			</div>

			<div className="col-span-6 row-span-3 sm:col-span-3 sm:row-span-5 md:col-span-2 md:row-span-8 flex items-start justify-center px-20 sm:p-10 lg:p-16">
				<p className={sty.paragraph}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore minima minus corporis, expedita inventore
					quisquam. Similique, minima voluptate officia assumenda molestias?
				</p>
			</div>
		</section>
	);
}
