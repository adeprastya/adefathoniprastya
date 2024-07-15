import Cursor from "@/components/molecules/Cursor";
import Home from "@/components/template/Home";
import About from "@/components/template/About";
import Portfolio from "@/components/template/Portfolio";
import Contact from "@/components/template/Contact";
import Outro from "@/components/template/Outro";

export default function App() {
	return (
		<main className="cursor-none bg-slate-950">
			<Cursor hovers={[]} />

			<Home />

			<About />

			<Portfolio />

			<Contact />

			<Outro />
		</main>
	);
}
