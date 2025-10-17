const Description = () => {
	return (
	  <div className="flex flex-col flex-1 space-y-6">
		<div className="text-left text-3xl font-bold">
		  Nos réferences
		</div>
		<div className="w-16 h-1 mt-10 bg-blue-950" />
		<div className="flex-1 flex flex-col justify-center">
		  <div className="h-[50%] flex flex-col justify-center text-justify border-b-2 border-gray-200">
			<div>
			  Chez <b>LCIE</b>, l'excellence est notre standard absolu. Notre passion pour la qualité 
			  nous pousse à l'amélioration continue via d'importants investissements technologiques de 
			  pointe et les ressources techniques les plus récentes afin 
			  d'assurer des résultats d'une qualité supérieure. Pour nous, chez LCIE, la qualité 
			  transcende le simple objectif ; c'est notre engagement indéfectible envers nos clients.
			</div>
		  </div>
		  <div className="h-[50%] flex flex-col justify-center border-b-2 border-gray-200">
			<div className="text-left text-2xl font-bold">
			 Réferences:  
			</div>
			<div className="w-16 h-1 mt-5 bg-blue-950" />
		  </div>
		</div>
	  </div>
	);
  };
  
  export default Description;
