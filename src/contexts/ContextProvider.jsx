import { MouseMotionProvider } from "@/contexts/useMouseMotion";

export default function ContextProvider({ children }) {
	return <MouseMotionProvider>{children}</MouseMotionProvider>;
}
