import React, { useEffect, useState } from "react";
import PokemonList from "../components/PokemonList";
import { TriangleButton } from "../components/TriangleButton";
import "../assets/css/TriangleButton.css";
import { PokemonSearch } from "../components/PokemonSearch";

const PokemonListPage = (props) => {
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
		setPokemons(pokemonlist.results);
		setNextPage(pokemonlist.next === null ? "" : pokemonlist.next);
		setPreviousPage(pokemonlist.previous === null ? "" : pokemonlist.previous);
	};

	const togglePage = async (topage) => {
		const data = await fetch(topage);

		const pokemonlist = await data.json();
		setPokemons([]);
		setPokemons(pokemonlist.results);

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
					<div className="row">
						{pokemons !== undefined ? (
							<PokemonList pokemons={pokemons}></PokemonList>
						) : (
							"cargando pagina..."
						)}
					</div>
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

export default PokemonListPage;
