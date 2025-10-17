const applicationFields = [
	{ name: "La qualité", link: "/applications-fields" },
	{
		name: "Émissions atmosphériques",
		link: "/applications-fields",
	},
	{ name: "Eaux", link: "/applications-fields" },
	{ name: "La qualité du sol", link: "/applications-fields" },
	{
		name: "Bruit",
		link: "/applications-fields",
	},
	{ name: "Rejets liquides", link: "/applications-fields" },
	{
		name: "Assemblages soudés CND",
		link: "/applications-fields",
	},
];

function ApplicationFields() {
	return (
		<div className="flex flex-col items-start justify-start p-3">
			<div className="py-2 text-[22px] font-semibold">
				Domaines d'Applications
			</div>
			<ul className="grid grid-cols-2 gap-4 list-disc p-4">
				{applicationFields.map((item, index) => {
					return (
						<li key={index} className="">
							<a href={item.link} className="hover:text-blue-500">
								<div>{item.name}</div>
							</a>
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export default ApplicationFields;
