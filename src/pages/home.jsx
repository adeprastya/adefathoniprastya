import { useRef } from "react";
import Cursor from "@/components/Cursor";

export default function Home() {
	const hovers = useRef([]);

	return (
		<div className="w-screen h-screen bg-slate-600 flex justify-center items-center gap-8 cursor-none">
			<h1 ref={(node) => hovers.current.push([node, "OUTLINE"])}>Home</h1>
			<h1 ref={(node) => hovers.current.push([node, "HIDDEN"])}>Home</h1>
			<h1 ref={(node) => hovers.current.push([node, <Test />])}>Home</h1>

			<Cursor hovers={hovers.current} />
		</div>
	);
}

function Test() {
	return (
		<div className="w-10 h-10 bg-blue-500/20 text-slate-50">
			<h1>abcdefg</h1>
		</div>
	);
}
