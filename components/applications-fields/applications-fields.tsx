import { useState } from "react";
import Card from "../ui/card";
import ApplicationContent from "./application-content";
import SideBar from "./side-bar";

const cardsContent = [
  {
    title: "Qualité de l'air intérieur",
    image: "/images/images/IMG-20240611-WA0007.jpg",
    link: "#",
  },
  {
    title: "Qualité de l'eau potable et douce",
    image: "/images/images/traitement-eaux-usees-echantillon-758x572.jpeg",
    link: "#",
  },
  {
    title: "Emissions des cheminées",
    image: "/images/images/IMG-20240601-WA0040.jpg",
    link: "#",
  },
  {
    title: "Qualité du sol",
    image: "/images/images/38.jpg",
    link: "#",
  },
  {
    title: "Qualité des poussières",
    image: "/images/images/20240520_125309.jpg",
    link: "/applications-fields",
  },
  {
    title: "Rejets liquides",
    image: "/images/images/rejet.jpg",
    link: "#",
  },
  {
    title: "Contrôle CND non destrctif par ressuage",
    image: "/images/images/20230321_102714.jpg",
    link: "#",
  },
  {
    title: "Évaluation du bruit émis dans l'environnement",
    image: "/images/images/20240507_102423.jpg",
    link: "#",
  },
  {
    title: "Controle CND par magnetoscopie ",
    image: "/images/images/42.jpg",
    link: "#",
  },
];

function ApplicationFields() {
  const [showCardContent, setShowCardContent] = useState(false);
  const [cardIndex, setCardIndex] = useState(-1);

  const titles = cardsContent.map(card => card.title);

  return (
    <>
      <div className={`grid grid-cols-3 ${showCardContent ? "hidden" : ""}`}>
        {cardsContent.map((card, i) => (
          <Card
            key={i}
            {...card}
            onClick={e => {
              e.preventDefault();
              setShowCardContent(true);
              setCardIndex(i);
            }}
          />
        ))}
      </div>
      {cardIndex !== -1 && (
        <div className="flex flex-row space-x-5">
          <SideBar
            titles={titles}
            index={cardIndex}
            onClick={index => {
              setCardIndex(index);
            }}
          />
          <ApplicationContent
            {...cardsContent[cardIndex]}
            onClick={() => {
              setShowCardContent(false);
              setCardIndex(-1);
            }}
          />
        </div>
      )}
    </>
  );
}

export default ApplicationFields;