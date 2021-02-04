import React, { useEffect, useState } from "react";

import PokemonListItem from "./PokemonListItem";

import "../assets/css/TriangleButton.css";
import { TriangleButton } from "./TriangleButton";
import { PokemonListDisplay } from "./PokemonListDisplay";

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
		setPokemons([]);
		setPokemons(pokemonlist);
		console.log(pokemonlist);
		setNextPage(pokemonlist.next === null ? "" : pokemonlist.next);
		setPreviousPage(pokemonlist.previous === null ? "" : pokemonlist.previous);
	};

	return (
		<React.Fragment>
			<div className="row">
				<div className="col " style={{ maxWidth: "20vw" }}>
					{previous !== "" ? (
						<TriangleButton
							lado="left"
							onClick={() => togglePage(previous)}
						></TriangleButton>
					) : (
						""
					)}
				</div>
				<div className="col-8">
					{pokemons.results !== undefined ? (
						<PokemonListDisplay pokemons={pokemons}></PokemonListDisplay>
					) : (
						"cargando..."
					)}
				</div>
				<div className="col " style={{ maxWidth: "20vw" }}>
					{next !== "" ? (
						<TriangleButton
							lado="right"
							onClick={() => togglePage(next)}
						></TriangleButton>
					) : (
						""
					)}
				</div>
			</div>
		</React.Fragment>
	);
};

export default PokemonList;
