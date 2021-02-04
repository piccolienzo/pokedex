import React from "react";
import "../assets/css/PokemonTypes.css";
import { FirstToUpper } from "../assets/utilities.js";

export const PokemonType = (props) => {
	const { pokemon } = props;
	return (
		<React.Fragment>
			{pokemon.types.map((ptype) => (
				<span
					key={ptype.slot}
					className={`badge rounded-pill type ${ptype.type.name}`}
				>
					{FirstToUpper(ptype.type.name)}
				</span>
			))}
		</React.Fragment>
	);
};
