import { useState } from "react";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

import Button from "../ui/button";

const images = [
	{
		link: "/images/images/IMG_3003.jpg",
		title:
			"LCIE est un laboratoire qui dispose des standards internationaux.",
	},
	{
		link: "/images/images/15.jpg",
		title: "Il assure la qualité, la sécurité et la fiabilité des produits testés.",
	},
];

function PresentationSlider() {
	const [currentSlide, setCurrentSlide] = useState(0);
	return (
		<div className="relative flex-1 h-full">
			<div className="relative h-[360px] overflow-hidden">
				{images.map((image, index) => (
					<div
						key={index}
						className={`duration-700 ease-in-out ${
							currentSlide === index ? "" : "hidden"
						}`}
					>
						<img
							src={image.link}
							className="absolute block w-full h-full object-cover"
							alt={image.title}
						/>
						<div className="absolute bottom-0 w-full text-center text-white text-2xl font-bold pb-4 pt-8 bg-gradient-to-t from-black to-transparent">
							{image.title}
						</div>
					</div>
				))}
			</div>
			<Button
				size="lg"
				icon={faArrowRight}
				className="absolute top-44 right-4 z-30 rounded-full p-3 text-xl"
				onClick={() => {
					if (currentSlide === 0) {
						return setCurrentSlide(images.length - 1);
					}
					return setCurrentSlide(currentSlide - 1);
				}}
			/>
			<Button
				size="lg"
				icon={faArrowLeft}
				className="absolute top-44 left-4 z-30 rounded-full p-3 text-xl"
				onClick={() => {
					if (currentSlide === images.length - 1) {
						return setCurrentSlide(0);
					}
					return setCurrentSlide(currentSlide + 1);
				}}
			/>
		</div>
	);
}

export default PresentationSlider;
