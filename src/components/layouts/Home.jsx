import ParallaxText from "@/components/shared/ParallaxText";
import { SplitTextChar } from "@/components/shared/SplitText";
import { motion } from "framer-motion";

const sty = {
	container: "relative w-full h-screen flex justify-center items-center",

	textWrapper: "z-10 flex flex-col justify-center items-center",
	heroText: "overflow-clip font-serif text-5xl sm:text-6xl lg:text-7xl text-zinc-200 flex flex-col transform-gpu",
	heroTextInnerWrap: "inline-block overflow-clip",
	heroTextInner:
		"inline-block relative before:absolute before:top-full before:size-full before:content-[attr(data-content)]",

	parallaxWrapper: "-z-0 absolute w-full h-screen pt-12 pb-2 flex flex-col justify-around",
	parallaxText: "font-decor tracking-tight from-black to-zinc-600 bg-clip-text text-transparent leading-[0.1]"
};

const vars = {
	visible: (i) => ({
		y: ["-300%", "-200%", "-100%", "0%"],
		transition: {
			delay: i * 0.3,
			duration: 1
		}
	})
};

export default function Home({ hovers }) {
	return (
		<section id="home" className={sty.container}>
			{/* Hero Text */}
			<div ref={(node) => hovers.current.push([node, "OUTLINE"])} className={sty.textWrapper}>
				<h1 className={sty.heroText}>
					<SplitTextChar
						wrapper={<motion.span variants={vars} animate="visible" className={sty.heroTextInnerWrap} />}
						className={sty.heroTextInner}
						whileHover={{ y: "-100%" }}
						transition={{ duration: 0.6 }}
					>
						ADE
					</SplitTextChar>

					<SplitTextChar
						wrapper={<motion.span variants={vars} animate="visible" className={sty.heroTextInnerWrap} />}
						className={sty.heroTextInner}
						whileHover={{ y: "-100%" }}
						transition={{ duration: 0.6 }}
					>
						FATHONI
					</SplitTextChar>

					<SplitTextChar
						wrapper={<motion.span variants={vars} animate="visible" className={sty.heroTextInnerWrap} />}
						className={sty.heroTextInner}
						whileHover={{ y: "-100%" }}
						transition={{ duration: 0.6 }}
					>
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
