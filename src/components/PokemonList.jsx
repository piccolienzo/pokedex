import React, { useEffect, useState } from "react";

import PokemonListItem from "./PokemonListItem";

const PokemonList = () => {
	const [pokemons, setPokemons] = useState([]);
	const [next, setNextPage] = useState("");
	const [previous, setPreviousPage] = useState("");
	useEffect(() => {
		getPokemons();
		return () => {};
	}, []);

	const getPokemons = async () => {
		const data = await fetch("https://pokeapi.co/api/v2/pokemon/");

		const pokemonlist = await data.json();
		setPokemons(pokemonlist);
		setNextPage(pokemonlist.next === null ? "" : pokemonlist.next);
		setPreviousPage(pokemonlist.previous === null ? "" : pokemonlist.previous);
	};

	const togglePage = async (topage) => {
		const data = await fetch(topage);

		const pokemonlist = await data.json();
		setPokemons(pokemonlist);
		console.log(pokemonlist);
		setNextPage(pokemonlist.next === null ? "" : pokemonlist.next);
		setPreviousPage(pokemonlist.previous === null ? "" : pokemonlist.previous);
	};

	return (
		<React.Fragment>
			{pokemons.results !== undefined ? (
				<div>
					{pokemons.results.map((pokemon) => (
						<PokemonListItem pokemon={pokemon}></PokemonListItem>
					))}
				</div>
			) : (
				"cargando..."
			)}
			<br></br>
			{previous !== "" ? (
				<button onClick={() => togglePage(previous)}>←←←←←</button>
			) : (
				""
			)}
			{next !== "" ? (
				<button onClick={() => togglePage(next)}> →→→→→ </button>
			) : (
				""
			)}
		</React.Fragment>
	);
};

export default PokemonList;
