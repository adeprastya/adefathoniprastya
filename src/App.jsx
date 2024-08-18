import Home from "@/components/layouts/Home";
import About from "@/components/layouts/About";
import Portfolio from "@/components/layouts/Portfolio";
import Contact from "@/components/layouts/Contact";
import Mark from "@/components/layouts/Mark";
import Navigation from "@/components/shared/Navigation";
import Cursor from "@/components/shared/Cursor";
import { useRef } from "react";
import { isMobile } from "@/utils/helper";
import { ReactLenis } from "lenis/react";

export default function App() {
	const hovers = useRef([]);

	return (
		<ReactLenis root>
			<main className="cursor-none -z-0 relative w-full overflow-x-clip bg-zinc-950">
				<Navigation />

				<Home />

				<About hovers={hovers} />

				<Portfolio hovers={hovers} />

				<Contact />

				<Mark />

				{!isMobile() && <Cursor hovers={hovers.current} />}
			</main>
		</ReactLenis>
	);
}
