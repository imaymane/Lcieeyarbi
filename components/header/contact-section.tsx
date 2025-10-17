import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const contact = [
	{
		label: "+212 6 63 51 02 51",
		link: "tel:+212663510251",
		logo: faPhone,
	},
	{
		label: "+212 6 60 66 19 26",
		link: "tel:+212660661926",
		logo: faPhone,
	},
	{
		label: "contact@lcie.ma",
		link: `mailto:contact@lcie.ma`,
		logo: faEnvelope,
	},
];

function ContactSection() {
	return (
		<div className="flex items-center justify-between py-4 px-20 z-40">
			{/* Logo */}
			<div className="flex flex-row items-center justify-start w-20 h-20">
    			<img src="/images/laboratories/logo ayman 2.jpg" alt="Logo" />
			</div>
			{/* Contact */}
			<div className="flex flex-row items-center justify-end">
				{contact.map((item, index) => {
					return (
						<div
							key={index}
							className="flex items-center justify-center px-4 py-2"
						>
							<FontAwesomeIcon icon={item.logo} className="mr-2" />
							<a href={item.link} className="hover:text-blue-500">
								{item.label}
							</a>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default ContactSection;
