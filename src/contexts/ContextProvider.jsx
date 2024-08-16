import { MousePositionValueProvider } from "@/contexts/useMousePositionValue";

export default function ContextProvider({ children }) {
	return <MousePositionValueProvider>{children}</MousePositionValueProvider>;
}
