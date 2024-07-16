import Cursor from "@/components/molecules/Cursor";
import Home from "@/components/template/Home";
import About from "@/components/template/About";
import Portfolio from "@/components/template/Portfolio";
import Contact from "@/components/template/Contact";
import Outro from "@/components/template/Outro";
import { useRef } from "react";

export default function App() {
	const hovers = useRef([]);

	return (
		<main className="relative z-[-999] bg-slate-950 cursor-none">
			<Home />

			<About hovers={hovers} />

			<Portfolio hovers={hovers} />

			<Contact />

			<Outro />

			<Cursor hovers={hovers.current} />
		</main>
	);
}
