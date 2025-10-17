import HeroSection from "../../../components/accreditations/hero-section";
import AccrediationsCards from "../../../components/accreditations/accreditations-cards";

function Accrediations() {
	return (
		<div className="flex flex-col pl-28 pr-20 py-6 space-y-10">
			<HeroSection />
			<AccrediationsCards />
		</div>
	);
}

export default Accrediations;
