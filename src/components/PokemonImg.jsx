import React from "react";

export const PokemonImg = (props) => {
	const { pokemon } = props;
	return (
		<img
			style={{ width: "30vw", minWidth: "45vw" }}
			alt={`${pokemon.name} Pokemon ImagePokemon `}
			src={pokemon["sprites"]["other"]["official-artwork"]["front_default"]}
		></img>
	);
};
