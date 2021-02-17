import React, { useEffect, useState, Suspense } from "react";
import PokemonList from "../components/PokemonList";
import { TriangleButton } from "../components/TriangleButton";
import "../assets/css/TriangleButton.css";
import { Loading } from "../components/Loading";

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
		<div>
			<Suspense fallback={<Loading></Loading>}>
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
						<div
							style={{
								borderRadius: "10px",
								backgroundColor: "white",
								textAlign: "center",
								marginTop: "30px",
								marginBottom: "10px",
								padding: "5%",
							}}
						>
							<h1>Pokemon List</h1>
						</div>
						<div className="row">
							{pokemons !== undefined ? (
								<PokemonList pokemons={pokemons}></PokemonList>
							) : (
								<Loading></Loading>
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
			</Suspense>
		</div>
	);
};

export default PokemonListPage;
