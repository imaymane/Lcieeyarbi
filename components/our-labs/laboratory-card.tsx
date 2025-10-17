interface LaboratoryCardProps {
	title: string;
	image: string;
}

const LaboratoryCard = ({ title, image }: LaboratoryCardProps) => {
	return (
		<div className="flex flex-col w-[46%] items-center justify-center m-[2%] p-2 bg-white border border-gray-200 rounded-lg shadow-2xl">
			<img src={image} alt={title} className="object-cover rounded-lg" />
			<div className="text-2xl font-bold tracking-wider text-center text-gray-700 mt-8">
				{title}
			</div>
			<div className="w-[40%] h-1 mt-4 bg-gray-500 mb-1" />
		</div>
	);
};

export default LaboratoryCard;
