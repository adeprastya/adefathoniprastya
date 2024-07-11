import Carousel from "@/components/molecules/Carousel";

const imageSources = [
	"https://images.unsplash.com/photo-1719583112932-d2426a3196ae?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	"https://images.unsplash.com/photo-1718638485305-c9513e99eb19?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
];

export default function About() {
	return (
		<section className="relative overflow-hidden w-full h-screen grid grid-cols-6 grid-rows-12">
			<div className="col-span-6 row-span-4 sm:col-span-6 sm:row-span-5 md:col-span-2 md:row-span-12">
				<Carousel sources={imageSources} />
			</div>

			<div className="col-span-6 row-span-2 sm:col-span-6 sm:row-span-2 md:col-span-4 md:row-span-4 font-cormorant font-bold text-3xl sm:text-4xl md:text-5xl xl:text-6xl text-slate-100 flex items-center justify-center">
				ABOUT ME
			</div>

			<div className="col-span-6 row-span-3 sm:col-span-3 sm:row-span-5 md:col-span-2 md:row-span-8 font-sans font-light text-base sm:text-lg lg:text-xl text-slate-300 flex items-start justify-center px-20 sm:p-10 lg:p-16">
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi nobis eveniet quae. Animi distinctio tempore
				minima voluptates error eveniet quaerat vero. Assumenda omnis totam magni
			</div>

			<div className="col-span-6 row-span-3 sm:col-span-3 sm:row-span-5 md:col-span-2 md:row-span-8 font-sans font-light text-base sm:text-lg lg:text-xl text-slate-300 flex items-start justify-center px-20 sm:p-10 lg:p-16">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore minima minus corporis, expedita inventore
				quisquam. Similique, minima voluptate officia assumenda molestias?
			</div>
		</section>
	);
}
