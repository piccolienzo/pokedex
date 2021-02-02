import React from "react";

export const PokemonLinkListItem = (props) => {
	return (
		<div>
			<h2>
				{props.pokemon.id} - {props.pokemon.name}
			</h2>
			<img
				style={{ width: "200px", height: "200px" }}
				src={
					props.pokemon["sprites"]["other"]["official-artwork"]["front_default"]
				}
			></img>
		</div>
	);
};
