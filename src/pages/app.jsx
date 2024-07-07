import Cursor from "@/components/Cursor";
import Home from "@/components/Home";
import { useRef } from "react";

export default function App() {
	const hovers = useRef([]);

	return (
		<div className="overflow-x-hidden -z-[999] relative min-h-[200vh] min-w-screen bg-slate-950">
			<Cursor hovers={hovers} />

			<Home />
		</div>
	);
}
