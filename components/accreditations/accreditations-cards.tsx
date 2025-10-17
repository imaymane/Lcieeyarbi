import Button from "../ui/button";

const AccrediationsCards = () => {
	const accreditations = [
		{
			image: "images/accreditations/idna-food.jpg",
			document: "files/idna-food.pdf",
		},
		{
			image: "images/accreditations/touax.jpg",
			document: "files/touax.pdf",
		},
		{
			image: "images/accreditations/somodelco.jpg",
			document: "files/somodelco.pdf",
		},
		{
			image: "images/accreditations/exprom.jpg",
			document: "files/exprom.pdf",
		},
		{
			image: "images/accreditations/1.png",
			document: "files/Bitulife.pdf",
		},
		{
			image: "images/accreditations/ghizoplast.png",
			document: "files/Ghizoplast.pdf",
		},
		{
			image: "images/accreditations/GTR.png",
			document: "files/Attestation de reference GTR -CND.pdf",
		},
		{
			image: "images/accreditations/logo-init.png",
			document: "files/Attestation de reference SOFALIM-Emission-Bruit-Eau.pdf",
		},
		{
			image: "images/accreditations/smsi.png",
			document: "files/smsi.pdf",
		},
	];
	return (
		<div className="grid grid-cols-3">
			{accreditations.map((accreditation, index) => (
				<div
					key={index}
					className="flex flex-col justify-center items-center w-full space-y-4 p-2 bg-white rounded-lg transition-all hover:shadow-2xl hover:scale-110"
				>
					<img
						src={accreditation.image}
						className="border-4 border-gray-200 h-52 w-full object-cover rounded-lg shadow-lg transition-all"
					/>
					<Button
						label="Consulter"
						onClick={() => {
							if (accreditation.document) {
								window.open(accreditation.document, "_blank");
							}
						}}
					/>
				</div>
			))}
		</div>
	);
};

export default AccrediationsCards;
