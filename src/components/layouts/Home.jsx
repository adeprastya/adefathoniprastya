import ParallaxText from "@/components/shared/ParallaxText";
import AlternatingTexts from "@/components/shared/AlternatingTexts";

const sty = {
	container: "relative w-screen h-screen flex justify-center items-center",

	textWrapper: "z-10 w-full flex flex-col justify-center items-center",
	shortText: "font-cormorant text-2xl sm:text-3xl lg:text-4xl text-zinc-300",
	alterantingTexts:
		"font-cinzel font-light text-7xl sm:text-8xl lg:text-9xl text-transparent bg-gradient-to-bl from-amber-500 to-yellow-300 bg-clip-text sm:tracking-widest",
	longText:
		"w-9/12 sm:w-7/12 lg:w-5/12 font-cormorant font-bold text-center tracking-wider text-base sm:text-lg lg:text-xl text-zinc-400",

	parallaxWrapper: "-z-0 absolute h-screen w-full pt-20 pb-4 flex flex-col justify-around",
	parallaxText:
		"font-cinzel font-light tracking-tight from-black to-zinc-700 bg-clip-text text-transparent leading-[0.1]"
};

export default function Home() {
	return (
		<section id="home" className={sty.container}>
			<div className={sty.textWrapper}>
				<p className={sty.shortText}>Im Ade, and i love</p>

				<h1>
					<AlternatingTexts textStyle={sty.alterantingTexts}>CODE, ART, MUSIC, GAME</AlternatingTexts>
				</h1>

				<p className={sty.longText}>
					Building the digital world with a fusion of code and art is not just a profession, it is my calling, my
					passion, and the way I express creativity.
				</p>
			</div>

			<div className={sty.parallaxWrapper}>
				<ParallaxText baseVelocity={-25} textStyle={`${sty.parallaxText} text-[9rem] bg-gradient-to-t`}>
					Hello - Namaste -
				</ParallaxText>
				<ParallaxText baseVelocity={15} textStyle={`${sty.parallaxText} text-[8rem] bg-gradient-to-t`}>
					Ciao Ola - Zdravstvuyte -
				</ParallaxText>
				<ParallaxText baseVelocity={-10} textStyle={`${sty.parallaxText} text-[7rem] bg-gradient-to-t`}>
					Konnichiwa - Hola -
				</ParallaxText>

				<div className="h-1/6"></div>

				<ParallaxText
					baseVelocity={10}
					containerStyle="z-20 relative"
					textStyle={`${sty.parallaxText} text-[7rem] bg-gradient-to-b`}
				>
					Ni hao - Marhaba -
				</ParallaxText>
				<ParallaxText
					baseVelocity={-15}
					containerStyle="z-10 relative"
					textStyle={`${sty.parallaxText} text-[8rem] bg-gradient-to-b`}
				>
					Konnichiwa - Bonjour -
				</ParallaxText>
				<ParallaxText baseVelocity={25} textStyle={`${sty.parallaxText} text-[9rem] bg-gradient-to-b`}>
					Annyeonghaseyo - Halo -
				</ParallaxText>
			</div>
		</section>
	);
}
