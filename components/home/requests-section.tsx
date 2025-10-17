import Button from "../../components/ui/button";

const buttons = [
	{
		label: "DEMANDE DE DEVIS",
		href: "/contact",
	},
	{
		label: "DEMANDE D'INFORMATION",
		href: "/contact",
	},
	{
		label: "RECRUTEMENT ET STAGES",
		href: "/recruitment-and-internships",
	},
	{
		label: "LOCALISATION GOOGLE MAPS",
		href: "https://www.google.com/maps/place/Ben+Yakhlef,+Maroc/@33.680181,-7.350595,13z/data=!4m6!3m5!1s0xda7b14d3c5f4fff:0x34fef6bbefd55ffc!8m2!3d33.6812829!4d-7.3489551!16s%2Fg%2F1222c9dt?hl=fr&entry=ttu",
	},
];

function RequestsSection() {
	return (
		<div className="w-[32%] bg-blue-400 flex flex-col p-7 space-y-5">
			<div className="text-center text-3xl font-bold text-white pb-4">
				Consultez LCIE
			</div>
			{buttons.map((btn, i) => (
				<Button
					key={i}
					variant="secondary"
					size="sm"
					label={btn.label}
					className="py-3 font-bold text-white"
					onClick={() => {
						if (btn.href) {
							window.open(btn.href, "_blank");
						}
					}}
				/>
			))}
		</div>
	);
}

export default RequestsSection;
