import LaboratoryCard from "../../../components/our-labs/laboratory-card";
import LabsTitle from "../../../components/our-labs/labs-title";

function OurLabs() {
  const labs = [
   
    {
      image:
        "/images/images/15.jpg",
      title: "Laboratoire d'analyse 1",
    },
    {
      image:
        "/images/images/IMG_3003.jpg",
      title: "Laboratoire d'analyse 2",
    },
    {
      image: "/images/images/14.jpg",
      title: "Laboratoire d'analyse 3",
    },
    {
      image: "/images/images/17.jpg",
      title: "Laboratoire d'analyse 4",
    },
    {
      image: "/images/images/31.jpg",
      title: "Laboratoire d'analyse 5",
    },
    {
      image: "/images/images/30.jpg",
      title: "Laboratoire d'analyse 6",
    },
  
    {
      image: "/images/images/IMG_3036.jpg",
      title: "Laboratoire d'analyse 7",
    },
    {
      image: "/images/images/33.jpg",
      title: "Laboratoire de controle CND 1",
    },
    {
      image: "/images/images/MT.png",
      title: "Laboratoire de controle CND 2 SMARTOR UT POSTE ULTRASONS",
    },
  
  ];
  return (
    <div className="flex flex-col pl-28 pr-20 py-6 space-y-8 w-full">
      <LabsTitle />
      <div className="flex flex-wrap">
        {labs.map((lab, index) => (
          <LaboratoryCard key={index} title={lab.title} image={lab.image} />
        ))}
      </div>
    </div>
  );
}

export default OurLabs;