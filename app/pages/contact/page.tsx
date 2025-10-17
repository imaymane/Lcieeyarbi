import ContactTitle from "../../../components/contact/contact-title";
import ContactForm from "../../../components/contact/contact-form";
import DisplayMap from "../../../components/contact/map";

function Contact() {
	return (
		<div className="flex flex-col pl-28 pr-20 py-6 space-y-8 w-full">
			<ContactTitle />
			<ContactForm />
			<DisplayMap />
		</div>
	);
}

export default Contact;
