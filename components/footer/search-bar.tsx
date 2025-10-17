import React from "react";
import Button from "../ui/button";
import Input from "../ui/input";

import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBar: React.FC = () => {
	return (
		<div className="px-4 py-2 w-full flex flex-raw">
			<Input type="text" placeholder="Recherche..." />
			<Button
				icon={faSearch}
				variant="primary"
				className="text-white rounded-none"
			/>
		</div>
	);
};

export default SearchBar;
