import Carousel from "@/components/molecules/Carousel";
import SocialMediaIcons from "@/components/molecules/SocialMediaIcons";
import photo1 from "@/assets/image/photo1.png";
import photo2 from "@/assets/image/photo2.png";

const imageSources = [photo1, photo2];

const sty = {
	container: "relative w-full h-screen grid grid-cols-6 grid-rows-12",
	iconWrapper:
		"z-10 absolute bottom-[4%] left-[50%] translate-x-[-50%] flex gap-2 rounded-md backdrop-blur-lg backdrop-brightness-50 px-2 py-1     *:w-5 *:h-5 *:fill-slate-300 *:cursor-pointer",
	title: "font-cormorant text-4xl md:text-5xl lg:text-6xl text-yellow-400 pt-6",
	text: "font-cormorant tracking-wide text-3xl md:text-4xl lg:text-5xl text-slate-300"
};

export default function About() {
	return (
		<section className={sty.container}>
			<div className="col-span-6 row-span-4 sm:col-span-6 sm:row-span-5 md:col-span-2 md:row-span-12">
				<Carousel sources={imageSources}>
					<SocialMediaIcons className={sty.iconWrapper} />
				</Carousel>
			</div>

			<div className="col-span-6 row-span-1 md:col-span-4 md:row-span-2 flex items-center justify-center">
				<h1 className={sty.title}>About Me</h1>
			</div>

			<div className="col-span-6 row-span-7  md:col-span-4 md:row-span-10 flex flex-col justify-evenly items-center">
				<h2 className={sty.text}>Deskripsi Singkat</h2>
				<h2 className={sty.text}>Riwayat Pendidikan & Kerja</h2>
				<h2 className={sty.text}>Keahlian</h2>
				<h2 className={sty.text}>Prestasi dan Pencapaian</h2>
			</div>
		</section>
	);
}
