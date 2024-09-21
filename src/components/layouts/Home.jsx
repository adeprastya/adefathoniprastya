import ParallaxText from "@/components/shared/ParallaxText";
import { SplitTextChar } from "@/components/shared/SplitText";

const sty = {
	container: "relative w-full h-screen flex justify-center items-center",

	textWrapper: "z-10 w-full flex flex-col justify-center items-center",
	heroText: "overflow-clip font-serif text-5xl sm:text-6xl lg:text-7xl text-zinc-200 flex flex-col",

	parallaxWrapper: "-z-0 absolute w-full h-screen pt-12 pb-2 flex flex-col justify-around",
	parallaxText: "font-decor tracking-tight from-black to-zinc-700 bg-clip-text text-transparent leading-[0.1]"
};

const vars = {
	visible: (i) => ({
		y: ["-200%", "-100%", "0%"],
		transition: {
			delay: i * 0.2
		}
	})
};

export default function Home() {
	return (
		<section id="home" className={sty.container}>
			{/* Hero Text */}
			<div className={sty.textWrapper}>
				<h1 className={sty.heroText}>
					<SplitTextChar wrap={true} variants={vars} initial="hidden" animate="visible">
						ADE
					</SplitTextChar>

					<SplitTextChar wrap={true} variants={vars} initial="hidden" animate="visible">
						FATHONI
					</SplitTextChar>

					<SplitTextChar wrap={true} variants={vars} initial="hidden" animate="visible">
						PRASTYA
					</SplitTextChar>
				</h1>
			</div>

			{/* Parallax Text / Background */}
			<div className={sty.parallaxWrapper}>
				<ParallaxText baseVelocity={-25} textStyle={`${sty.parallaxText} text-[6rem] bg-gradient-to-t`}>
					Hello - Namaste -
				</ParallaxText>
				<ParallaxText baseVelocity={15} textStyle={`${sty.parallaxText} text-[4.5rem] bg-gradient-to-t`}>
					Ciao Ola - Zdravstvuyte -
				</ParallaxText>
				<ParallaxText baseVelocity={-10} textStyle={`${sty.parallaxText} text-[3rem] bg-gradient-to-t`}>
					Konnichiwa - Hola -
				</ParallaxText>

				<div className="h-3/6"></div>

				<ParallaxText
					baseVelocity={10}
					containerStyle="z-20 relative"
					textStyle={`${sty.parallaxText} text-[3rem] bg-gradient-to-b`}
				>
					Ni hao - Marhaba -
				</ParallaxText>
				<ParallaxText
					baseVelocity={-15}
					containerStyle="z-10 relative"
					textStyle={`${sty.parallaxText} text-[4.5rem] bg-gradient-to-b`}
				>
					Konnichiwa - Bonjour -
				</ParallaxText>
				<ParallaxText baseVelocity={25} textStyle={`${sty.parallaxText} text-[6rem] bg-gradient-to-b`}>
					Annyeonghaseyo - Halo -
				</ParallaxText>
			</div>
		</section>
	);
}
