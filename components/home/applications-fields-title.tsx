const subtitle = [
	"Le Laboratoire de Contrôle Industriel et d’Environnement (LCIE) propose l’offre la plus complète à ces partenaires en terme d’analyses.",
	"Aussi, LCIE assure l’accompagnement, le conseil, l’audit et le suivis des dossiers et des requêtes des différentes analyses des clients du laboratoire.",
];
function ApplicationsFields() {
	return (
		<div className="flex flex-raw space-x-8 w-full">
			<div className="w-[33%]">
				<div className="text-left text-3xl font-bold">
					Domaines
					<br />
					d'application
				</div>
				<div className="absolute w-16 h-1 mt-8 bg-blue-950" />
			</div>
			<div className="w-[67%] h-auto relative">
				<div className="absolute w-1 h-full bg-blue-950" />
				<div className="italic font-semibold bg-slate-200 py-4 px-8">
					{subtitle.map((s, i) => (
						<div key={i}>{s}</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default ApplicationsFields;
