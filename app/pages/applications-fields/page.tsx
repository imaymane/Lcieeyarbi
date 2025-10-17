import ApplicationFields from "../../../components/applications-fields/applications-fields";
import ApplicationFieldsTitle from "../../../components/home/applications-fields-title";

function ApplicationsFields() {
	return (
		<div className="flex flex-col pl-28 pr-20 py-6 space-y-6 w-full">
			<ApplicationFieldsTitle />
			<ApplicationFields />
		</div>
	);
}

export default ApplicationsFields;
