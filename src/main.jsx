import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/index.css";
import Intro from "./pages/intro";
import ContextProvider from "./context/ContextProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ContextProvider>
			<Intro />
		</ContextProvider>
	</React.StrictMode>
);
