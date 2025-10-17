import RequestsSection from "./requests-section";
import PresentationSlider from "./presentation-slider";
import PresidentSection from "./president-section";
import ApplicationFieldsTitle from "./applications-fields-title";
import ApplicationFields from "./applications-fields";

function Presentation() {
	return (
		<>
			<div className="flex flex-raw pl-28 pr-20 space-x-8 w-full">
				<PresentationSlider />
				<RequestsSection />
			</div>
			<div className="flex flex-col my-6 pl-28 pr-20 py-6 space-y-6 w-full bg-slate-200">
				<PresidentSection />
			</div>
			<div className="flex flex-col pl-28 pr-20 py-6 space-y-6 w-full">
				<ApplicationFieldsTitle />
				<ApplicationFields />
			</div>
		</>
	);
}

export default Presentation;
