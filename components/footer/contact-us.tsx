import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

const contactAndAddress = [
  {
    label: "Lot. Ben Yakhlef Centre A n°40 RDC, Ben Yakhlef – Mohammedia.",
    link: "https://goo.gl/maps/1mz4JnKJj5gk2tZr7",
    logo: faLocationDot,
  },
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
    label: "lcie@gmail.com",
    link: `mailto:lcie@gmail.com`,
    logo: faEnvelope,
  },
  {
    label: [
      "Lun - Ven: 8h30 - 17h",
      "Sam: 8h30 - 13h",
      "Dimanche : Système de permanence.",
    ],
    table: true,
    link: "",
    logo: faClock,
  },
];

function ContactUs() {
  return (
    <div className="flex flex-col items-start justify-start p-3">
      <div className="px-4 py-2 text-[25px] font-semibold">Nous contacter</div>
      {contactAndAddress.map((item, index) => {
        return (
          <div
            key={index}
            className="flex items-center justify-center px-4 py-2"
          >
            <FontAwesomeIcon icon={item.logo} className="mr-2" />
            {item.table ? (
              <div className="flex flex-col">
                {item.label.map((line, lineIndex) => {
                  return (
                    <div key={lineIndex} className="text-sm">
                      {line}
                    </div>
                  );
                })}
              </div>
            ) : (
              <a href={item.link} className="hover:text-blue-500">
                {item.label}
              </a>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default ContactUs;