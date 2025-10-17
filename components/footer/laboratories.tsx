import SearchBar from "./search-bar";

const ourLaboratories = [
  {
    image: "/images/images/15.jpg",
    name: "Laboratoire de Génie Electrique et Informatique Industrielle",
  },
  {
    image: "/images/images/IMG_3003.jpg",
    name: "Laboratoire de Génie Mécanique et Productique",
  },
  {
    image: "/images/images/14.jpg",
    name: "Laboratoire de Génie des Procédés et Matériaux",
  },
  {
    image: "/images/images/17.jpg",
    name: "Laboratoire de Génie Civil, Géotechnique et Risques Naturels",
  },
  {
    image: "/images/images/31.jpg",
    name: "Laboratoire de Génie des Systèmes Industriels",
  },
  {
    image: "/images/images/30.jpg",
    name: "Laboratoire de Génie des Réseaux de Transport et de Distribution",
  },
];

function DisplayLaboratories() {
  return (
    <div className="flex flex-col items-start justify-start p-3">
      <div className="pl-4 py-2 text-[22px] font-semibold">
        Nos Laboratoires
      </div>
      <div className="grid grid-cols-3 gap-4 p-4">
        {ourLaboratories.map((laboratory, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center"
            >
              <img
                src={laboratory.image}
                alt={laboratory.name}
                className="w-[100px] h-[70px]"
              />
            </div>
          );
        })}
      </div>
      <SearchBar />
    </div>
  );
}

export default DisplayLaboratories;