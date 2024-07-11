import { useContext, forwardRef } from "react";
import { appStateContext } from "@/context/AppStateContext";
import { motion } from "framer-motion";
import { DiscIcon } from "@radix-ui/react-icons";

const sty = {
	container: "fixed z-50 bottom-10 left-[50%] translate-x-[-50%] flex flex-col items-center gap-2 sm:gap-3 xl:gap-4",
	text: "font-light text-center text-base sm:text-lg xl:text-xl",
	icon: "w-4 h-4 sm:w-5 sm:h-5 xl:w-6 xl:h-6 animate-ping"
};

const IntroToast = forwardRef(({ index }, ref) => {
	const { appState } = useContext(appStateContext);

	return (
		<motion.div
			initial={{ y: 0, x: "-50%", opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{
				ease: "easeInOut",
				duration: 1,
				delay: 4
			}}
			className={`${sty.container} ${index >= 6 ? "cursor-none" : "cursor-default"}`}
			ref={ref}
		>
			<p className={`${sty.text} ${index <= 2 ? "text-slate-600" : "text-slate-400"}`}>
				{appState.isMobile ? "Tap to continue" : "Click or press Key to continue"}
			</p>
			<DiscIcon className={`${sty.icon} ${index < 3 ? "text-slate-800" : "text-slate-300"}`} />
		</motion.div>
	);
});

export default IntroToast;
