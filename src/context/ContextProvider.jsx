import AppStateProvider from "./AppStateContext";

export default function ContextProvider({ children }) {
	return <AppStateProvider>{children}</AppStateProvider>;
}
