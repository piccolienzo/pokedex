import React from "react";
import { PokemonBasicData } from "./PokemonBasicData";
import { PokemonImg } from "./PokemonImg";

import { FirstToUpper } from "../assets/utilities.js";
import "../assets/css/PokemonInfoPage.css";

export const PokemonInfo = (props) => {
	const { pokemon } = props;
	return (
		<div className="flex-container">
			<div className="flex-box-100">
				<h1>Pokemon Info</h1>
				<h2>
					{pokemon.id} - {FirstToUpper(pokemon.name)}
				</h2>
			</div>
			<div className="flex-box-60">
				<PokemonImg pokemon={pokemon}></PokemonImg>
			</div>
			<div className="flex-box-40">
				<PokemonBasicData pokemon={pokemon}></PokemonBasicData>
			</div>
		</div>
	);
};
