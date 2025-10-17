const messageContent = {
	content: [
		"Bienvenue au Laboratoire de Contrôle Industriel et d’Environnement (LCIE) !",
		"Créé en 2021 par des anciens cadres du Laboratoire Public d’Essais et d’Etudes (LPEE), qui dispose d'une expérience de plus de trente ans dans les mesures, analyses et expertises industrielles et environnementales.",
		"Notre mission est de répondre aux besoins des opérateurs économiques en termes de caractérisation de l’environnement (air, eau, sol) et de contrôles industriels (métallurgie, soudures, etc…).",
		"Contactez-nous dès aujourd'hui pour bénéficier de nos services fiables et efficaces pour vos besoins en contrôle industriel et environnemental.",

	],
	
	keywords: [
		"L’Orientation Client",
		"Le professionnalisme",
		"L’Innovation",
		"L’Intégrité",
	],
};

function PresidentSection() {
	return (
		<>
			<div className="text-3xl font-bold">Mot du président</div>
			<div className="w-24 h-1 bg-blue-900" />
			<div className="flex flex-row items-center w-full">
				<div className="w-[80%]">
					{messageContent.content.map((content, i) => (
						<div key={i} className="text-lg font-medium text-justify pb-4">
							{content}
						</div>
					))}
					<div className="grid grid-cols-2">
						{messageContent.keywords.map((keyword, i) => (
							<div key={i} className="flex flex-row items-center">
								<div className="w-2 h-2 bg-blue-900 mr-2" />
								<div className="text-lg font-medium">{keyword}</div>
							</div>
						))}
					</div>
				</div>
			
				<div></div>
			</div>
		</>
	);
}

export default PresidentSection;
