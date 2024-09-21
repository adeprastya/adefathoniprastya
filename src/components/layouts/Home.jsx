import ParallaxText from "@/components/shared/ParallaxText";
import { motion } from "framer-motion";

const sty = {
	container: "relative w-full h-screen flex justify-center items-center",

	textWrapper: "z-10 w-full flex flex-col justify-center items-center",
	heroText: "overflow-clip font-serif text-5xl sm:text-6xl lg:text-7xl text-zinc-200 flex flex-col",

	parallaxWrapper: "-z-0 absolute w-full h-screen pt-12 pb-2 flex flex-col justify-around",
	parallaxText: "font-decor tracking-tight from-black to-zinc-700 bg-clip-text text-transparent leading-[0.1]"
};

const orcVar = {
	hidden: {
		opacity: 0
	},
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 1
		}
	},
	child: {
		hidden: {
			x: "-150%"
		},
		visible: {
			x: 0,
			transition: {
				duration: 1.5,
				ease: "easeInOut"
			}
		}
	}
};

export default function Home() {
	return (
		<section id="home" className={sty.container}>
			<div className={sty.textWrapper}>
				<motion.h1 variants={orcVar} initial="hidden" animate="visible" className={sty.heroText}>
					<motion.span variants={orcVar.child}>ADE</motion.span>

					<motion.span variants={orcVar.child}>FATHONI</motion.span>

					<motion.span variants={orcVar.child}>PRASTYA</motion.span>
				</motion.h1>
			</div>

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
