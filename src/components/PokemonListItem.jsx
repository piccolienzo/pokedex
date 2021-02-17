import React, { useEffect, useState, Suspense } from "react";
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
			<Suspense
				fallback={
					<div className="spinner-border" role="status">
						<span className="visually-hidden">Loading...</span>
					</div>
				}
			>
				{pokemon !== undefined ? (
					<Link
						to={`/pokemon/${pokemon.id}`}
						style={{ textDecoration: "none" }}
					>
						<PokemonLinkListItem pokemon={pokemon}></PokemonLinkListItem>
					</Link>
				) : (
					""
				)}
			</Suspense>
		</div>
	);
};

export default PokemonListItem;
