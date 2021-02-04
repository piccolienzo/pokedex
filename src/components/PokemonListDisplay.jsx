import React from "react";
import PokemonListItem from "./PokemonListItem";

export const PokemonListDisplay = (props) => {
	return (
		<React.Fragment>
			{props.pokemons.results !== undefined ? (
				<div>
					{props.pokemons.results.map((pokemon) => (
						<PokemonListItem pokemon={pokemon}></PokemonListItem>
					))}
				</div>
			) : (
				"cargando..."
			)}
		</React.Fragment>
	);
};
