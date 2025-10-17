import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Button from "./button";
import { useState } from "react";
import { cn } from "../../utils/utils";

interface CardProps
	extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "type"> {
	title: string;
	description?: string;
	type?: string;
	image: string;
	link: string;
}

function Card({
	title,
	description = "",
	type = "Liste des Analyses",
	image,
	link,
	className,
	...props
}: CardProps) {
	const [isHovered, setIsHovered] = useState(false);

	const cardClass = cn({
		"flex flex-col w-[90%] h-full ml-[5%] my-5 items-center justify-center":
			true,
		[className!]: !!className,
	});

	return (
		<button
			className={cardClass}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			{...props}
		>
			<a href={link} className="block w-full h-full ">
				<div className="relative w-auto h-auto ">
					<img src={image} alt={title} />
					{isHovered && (
						<>
							<div className="absolute left-0 top-0 z-10 w-full h-full opacity-60 bg-black" />
							<div className="absolute top-[45%] left-[45%] w-auto h-auto items-center justify-center">
								<div className="absolute left-[15px] z-20 w-0.5 h-8 bg-white" />
								<div className="absolute top-[15px] z-20 w-8 h-0.5 bg-white" />
							</div>
						</>
					)}
				</div>
				<div className="bg-slate-200 p-6 w-full space-y-2 items-center justify-center">
					<div className="text-2xl text-left font-semibold">{title}</div>
					<div className="text-lg font-normal text-justify">{description}</div>
					<div className="flex flex-raw space-x-2">
						<Button size="sm" icon={faArrowRight} className="rounded-full" />
						<div>{type}</div>
					</div>
				</div>
			</a>
		</button>
	);
}

export default Card;
