const LabsTitle = () => {
	return (
		<div className="flex flex-raw space-x-8 w-full">
			<div className="w-[33%]">
				<div className="text-left text-3xl font-bold">Nos Laboratoires</div>
				<div className="absolute w-16 h-1 mt-8 bg-blue-950" />
			</div>
			<div className="w-[67%] h-auto relative">
				<div className="absolute w-1 h-full bg-blue-950" />
				<div className="flex italic font-semibold h-full items-center bg-slate-200 py-4 px-8">
					Nos laboratoires sont dotés d’équipements à la fine pointe de la
					technologie.
				</div>
			</div>
		</div>
	);
};

export default LabsTitle;
