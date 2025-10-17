import { useState } from "react";
import { cn } from "../../utils/utils";

const mainMenu = [
	{
		name: "Accueil",
		link: "/",
		multiOptions: false,
	},
	{
		name: "Le laboratoire",
		link: "#",
		multiOptions: true,
		options: [
			{
				name: "Présentation",
				link: "./files/presentationdelciecomp.pdf",
			},
			{
				name: "Le mot du président",
				link: "/president-word",
			},
		],
	},
	{
		name: "Domaines d'applications",
		link: "/applications-fields",
		multiOptions: false,
	},
	{
		name: "Nos réferences",
		link: "/réferences",
		multiOptions: false,
	},
	{
		name: "Nos laboratoires",
		link: "/our-labs",
		multiOptions: false,
	},
	{
		name: "Carrières",
		link: "/recruitment-and-internships",
		multiOptions: false,
	},
	{
		name: "Contact",
		link: "/contact",
		multiOptions: false,
	},
];

function MainNav({ activeIndex }: { activeIndex: number }) {
	const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
	// const [activeIndex, setActiveIndex] = useState(0);

	return (
		<div className="flex gap-6">
			{mainMenu.map((item, index) => {
				const isItemActive = activeIndex === index;
				const itemClasses = cn("relative border-transparent", {
					"border-b-2 border-blue-500": isItemActive,
				});
				return (
					<div
						key={index}
						className={itemClasses}
						onMouseEnter={() => setHoveredIndex(index)}
						onMouseLeave={() => setHoveredIndex(null)}
					>
						<a
							className="flex flex-col items-center justify-center py-2.5 hover:border-b-2 hover:text-blue-500 hover:border-blue-500"
							href={item.link}
							// onClick={() => {
							// 	setActiveIndex(index);
							// }}
						>
							<div className="text-[14px] font-semibold">
								{item.name.toUpperCase()}
							</div>
						</a>

						{item.multiOptions && hoveredIndex === index && (
							<div className="absolute top-[41px] -left-2 w-48 bg-white border-t-2 border-blue-500 shadow-md">
								{item.options?.map((option, optionIndex) => (
									<a
										key={optionIndex}
										href={option.link}
										className="block px-4 py-3 text-[14px] font-semibold hover:bg-blue-100"
									>
										{option.name}
									</a>
								))}
							</div>
						)}
					</div>
				);
			})}
		</div>
	);
}

export default MainNav;
