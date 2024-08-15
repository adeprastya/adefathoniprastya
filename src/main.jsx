import React from "react";
import ReactDOM from "react-dom/client";
import "@/assets/css/index.css";
import ContextProvider from "@/contexts/ContextProvider";
import App from "@/pages/app";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ContextProvider>
			<App />
		</ContextProvider>
	</React.StrictMode>
);
