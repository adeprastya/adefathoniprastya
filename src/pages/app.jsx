import Cursor from "@/components/molecules/Cursor";
import Home from "@/components/templates/Home";
import About from "@/components/templates/About";
import Portfolio from "@/components/templates/Portfolio";
import Contact from "@/components/templates/Contact";
import Mark from "@/components/templates/Mark";
import Navigation from "@/components/templates/Navigation";
import { useRef } from "react";
import { isMobile } from "@/utils/commonHelper";

export default function App() {
	const hovers = useRef([]);

	return (
		<main className="cursor-none relative -z-0 bg-slate-950">
			<Navigation />

			<Home />

			<About hovers={hovers} />

			<Portfolio hovers={hovers} />

			<Contact />

			<Mark />

			{!isMobile() && <Cursor hovers={hovers.current} />}
		</main>
	);
}
