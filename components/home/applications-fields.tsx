import Card from "../ui/card";

const cardsContent = [
	{
		title: "Qualité de l’air intérieur",
		image: "/images/images/IMG-20240611-WA0007.jpg",
		link: "/applications-fields",
	},
	{
		title: "Qualité de l'eau potable et douce",
		image: "/images/images/traitement-eaux-usees-echantillon-758x572.jpeg",
		link: "/applications-fields",
	},
	{
		title: "Emission des cheminées",
		image: "/images/images/IMG-20240601-WA0040.jpg",
		link: "/applications-fields",
	},	
	
	{
		title: "Qualité du sol",
		image: "/images/images/38.jpg",
		link: "/applications-fields",
	},
	{
		title: "Qualité des  poussières",
		image: "/images/images/20240520_125309.jpg",
		link: "/applications-fields",
	},
	{
		title: "Rejets liquides",
		image: "/images/images/rejet.jpg",
		link: "/applications-fields",
	},
	{
		title: "Contrôle CND non destrctif par ressuage",
		image: "/images/images/20230321_102714.jpg",
		link: "/applications-fields",
	},

	{
		title: "Évaluation du bruit émis dans l’environnement",
		image: "/images/images/20240507_102423.jpg",
		link: "/applications-fields",
		
	},
	{
		title: "Contrôle CND par magnetoscopie",
		image: "/images/images/42.jpg",
		link: "/applications-fields",
		
	},
	


];

function ApplicationFields() {
	return (
		<div className="grid grid-cols-3 w-full items-center justify-center">
			{cardsContent.map((card, i) => (
				<Card key={i} {...card} />
			))}
		</div>
	);
}

export default ApplicationFields;
