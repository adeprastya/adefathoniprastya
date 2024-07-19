import LogoIcon from "@/assets/icon/LogoIcon";
import MenuIcon from "@/assets/icon/MenuIcon";
import StarIcon from "@/assets/icon/StarIcon";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const list = [
	{
		title: "Home",
		link: "#home"
	},
	{
		title: "About",
		link: "#about"
	},
	{
		title: "Works",
		link: "#portfolio"
	},
	{
		title: "Contact",
		link: "#contact"
	},
	{
		title: "Marks",
		link: "#mark"
	}
];

const sty = {
	container: "pointer-events-none z-50 fixed w-screen h-screen",

	headerWrap: "pointer-events-auto absolute top-0 w-full p-2 pe-8 flex justify-between items-center",
	logo: "w-10 sm:w-12 lg:w-14 aspect-square fill-slate-200 *:w-full *:h-full",

	navWrap: "pointer-events-none absolute right-0",
	listWrap: "w-screen h-screen px-8 bg-slate-950/60 backdrop-blur-sm flex flex-col justify-around",
	list: "pointer-events-auto relative font-cormorant font-bold tracking-widest leading-none text-slate-950 text-shadow-border text-shadow-slate-200     before:pointer-events-auto before:absolute before:top-1/2 before:-translate-y-1/2 before:-translate-x-20 before:w-4 before:aspect-square before:rounded-full before:border-2 before:border-slate-200     hover:text-shadow-yellow-400 hover:before:border-yellow-400"
};

export default function Navigation() {
	const [isNavOpen, setIsNavOpen] = useState(false);
	const [activeNav, setActiveNav] = useState(0);

	const handleMenu = () => {
		setIsNavOpen((n) => !n);
	};

	useEffect(() => {
		const handleScroll = () => {
			document.querySelectorAll("section").forEach((section, index) => {
				const rect = section.getBoundingClientRect();
				if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
					setActiveNav(index);
				}
			});
		};

		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header className={sty.container}>
			<div className={sty.headerWrap}>
				<button className={sty.logo}>
					<LogoIcon />
				</button>

				<div className="flex gap-4">
					<button className={sty.logo}>
						<StarIcon />
					</button>

					<motion.button
						onClick={handleMenu}
						className={sty.logo + " z-[60]"}
						animate={isNavOpen ? { rotate: 0 } : { rotate: 180 }}
					>
						<MenuIcon />
					</motion.button>
				</div>
			</div>

			<nav className={sty.navWrap}>
				<motion.ul
					animate={isNavOpen ? { x: 0 } : { x: "100%", paddingTop: "30vh", paddingBottom: "30vh" }}
					className={sty.listWrap}
				>
					{list.map((list, i) => (
						<a
							key={i}
							onClick={(e) => {
								e.preventDefault();
								document.querySelector(list.link).scrollIntoView({ behavior: "smooth" });
							}}
							href={list.link}
						>
							<motion.li
								className={`${sty.list} ${activeNav === i ? " before:border-yellow-400 text-shadow-yellow-400" : ""}`}
								animate={isNavOpen ? { fontSize: "6rem" } : { fontSize: "1rem" }}
								transition={{ ease: "linear" }}
							>
								{list.title}
							</motion.li>
						</a>
					))}
				</motion.ul>
			</nav>
		</header>
	);
}
