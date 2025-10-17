const ContactTitle = () => {
	const content = {
		title: "Demande d'information",
		description: [
			"Veuillez remplir le formulaire de demande d’information en complétant tous les champs requis. Nous vous contacterons dès que possible.",
		],
	};

	return (
		<div className="flex flex-raw space-x-8 w-full">
			<div className="w-[33%]">
				<div className="text-left text-3xl font-bold">{content.title}</div>
				<div className="absolute w-16 h-1 mt-8 bg-blue-950" />
			</div>
			<div className="w-[67%] h-auto relative">
				<div className="absolute w-1 h-full bg-blue-950" />
				<div className="flex italic font-semibold h-full items-center bg-slate-200 py-4 px-8">
					{content.description.map((desc, index) => (
						<div key={index}>{desc}</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default ContactTitle;
