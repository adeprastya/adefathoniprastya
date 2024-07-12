import React from "react";
import ReactDOM from "react-dom/client";
import "@/assets/css/index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ContextProvider from "@/context/ContextProvider";
import Intro from "@/pages/intro";
import App from "@/pages/app";

const router = createBrowserRouter([
	{
		path: "/adefathoniprastya",
		element: <App />
	},
	{
		path: "/adefathoniprastya/intro",
		element: <Intro />
	}
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ContextProvider>
			<RouterProvider router={router} />
		</ContextProvider>
	</React.StrictMode>
);
