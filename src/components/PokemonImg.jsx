import React from "react";
import noImage from "../assets/img/no_image.png";

export const PokemonImg = (props) => {
	const { pokemon } = props;
	if (
		pokemon["sprites"]["other"]["official-artwork"]["front_default"] !== null
	) {
		return (
			<img
				className="img-fluid"
				style={{ width: "30vw", minWidth: "45vw" }}
				alt={`${pokemon.name} Pokemon `}
				src={pokemon["sprites"]["other"]["official-artwork"]["front_default"]}
			></img>
		);
	} else {
		return (
			<img
				className="img-fluid"
				style={{ width: "30vw", minWidth: "45vw" }}
				alt={`${pokemon.name} Pokemon image no available`}
				src={noImage}
			></img>
		);
	}
};
