import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PokemonLinkListItem } from "./PokemonLinkListItem";

const PokemonListItem = (props) => {
	const [pokemon, setPokemon] = useState();

	useEffect(() => {
		const getPokemon = async () => {
			const data = await fetch(props.pokemon.url);

			const pokemon = await data.json();
			setPokemon(pokemon);

			console.log(pokemon);
		};
		getPokemon();
		return () => {};
	}, []);

	return (
		<div>
			{pokemon !== undefined ? (
				<Link to={`/pokemon/${pokemon.id}`} style={{ textDecoration: "none" }}>
					<PokemonLinkListItem pokemon={pokemon}></PokemonLinkListItem>
				</Link>
			) : (
				""
			)}
		</div>
	);
};

export default PokemonListItem;
