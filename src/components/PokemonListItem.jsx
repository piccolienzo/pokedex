import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PokemonLinkListItem } from "./PokemonLinkListItem";

const PokemonListItem = (props) => {
	const [pokemon, setPokemon] = useState();
	const [url] = useState(props.pokemon.url);
	useEffect(() => {
		const getPokemon = async () => {
			const data = await fetch(url);

			const pokemon = await data.json();
			setPokemon(pokemon);
		};
		getPokemon();
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
