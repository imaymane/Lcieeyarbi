import RequestsSection from "../home/requests-section";
import Description from "./description";

const HeroSection = () => {
	return (
		<>
			<div className="flex flex-raw space-x-8 w-full">
				<Description />
				<RequestsSection />
			</div>
		</>
	);
};

export default HeroSection;
