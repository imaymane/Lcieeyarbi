function FooterBar() {
	const currentYear = new Date().getFullYear();
	return (
		<div className="flex py-6 items-center justify-center border-solid border-t-2 border-gray-300 w-[85%]">
			© {currentYear} Propriété LCIE. Tous les droits sont réservées
		</div>
	);
}

export default FooterBar;
