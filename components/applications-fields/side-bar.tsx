import { useState } from "react";

function SideBar({
	titles,
	index,
	onClick,
}: {
	titles: string[];
	index: number;
	onClick: (index: number) => void;
}) {
	const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

	return (
		<div className="flex flex-col w-1/3 h-auto space-y-0.5 mt-6">
			{titles.map((title, i) => (
				<div
					key={i}
					className="relative text-lg font-medium p-3 bg-slate-200 hover:bg-slate-400"
					onClick={() => onClick(i)}
					onMouseEnter={() => setHoveredIndex(i)}
					onMouseLeave={() => setHoveredIndex(null)}
				>
					<div
						className={`absolute left-0 top-0 w-1 h-full bg-blue-950 ${
							i === index || i === hoveredIndex ? "" : "hidden"
						}`}
					/>
					{title}
				</div>
			))}
		</div>
	);
}

export default SideBar;
