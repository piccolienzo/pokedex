import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const PokemonInfo = () => {
	const { id } = useParams();
	const [pokemon, setPokemon] = useState();

	useEffect(() => {
		getPokemon();
		return () => {};
	}, []);

	const getPokemon = async () => {
		const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

		const pokemon = await data.json();
		setPokemon(pokemon);
	};
	return (
		<div>
			<h1>Pokemon Info</h1>
			{pokemon !== undefined ? (
				<div>
					<h2>
						{pokemon.id} - {pokemon.name}
					</h2>
					<img
						style={{ width: "200px", height: "200px" }}
						src={
							pokemon["sprites"]["other"]["official-artwork"]["front_default"]
						}
					></img>{" "}
				</div>
			) : (
				"Parece que lo que buscas no se encuentra por aqui"
			)}
		</div>
	);
};
