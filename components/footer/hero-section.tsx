import Button from "../ui/button";
import { faAward } from "@fortawesome/free-solid-svg-icons";

function HeroSection() {
	return (
		<div className="flex py-4 px-20 items-center justify-between bg-slate-200 w-full">
			<div className="flex items-center justify-start w-full font-bold">
				LCIE propose l’offre la plus complète à ces partenaires en terme
				d’analyses.
			</div>
			<div className="flex items-end justify-end">
				<Button
					label="Consultez"
					icon={faAward}
					variant="secondary"
					size="lg"
				/>
			</div>
			<div></div>
		</div>
	);
}

export default HeroSection;
