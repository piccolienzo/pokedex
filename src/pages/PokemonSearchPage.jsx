import React, { useState, useEffect, Suspense } from "react";
import { useParams } from "react-router-dom";
import { Loading } from "../components/Loading";
import { PokemonSearch } from "../components/PokemonSearch";

const PokemonList = React.lazy(() => import("../components/PokemonList"));

export const PokemonSearchPage = () => {
	const { search } = useParams();
	const [pokemons, setPokemons] = useState([]);

	useEffect(() => {
		const getPokemons = async () => {
			const data = await fetch("https://pokeapi.co/api/v2/pokemon?limit=1118");

			const pokemonlist = await data.json();
			const pikachu = await pokemonlist.results.filter((pokemon) =>
				pokemon.name.includes(search.toLowerCase())
			);

			setPokemons([]);
			setPokemons(pikachu);
		};
		if (search !== undefined) {
			if (isNaN(search)) {
				getPokemons();
			} else {
				getPokemons();
			}
		}

		return () => {
			setPokemons([]);
		};
	}, []);

	return (
		<React.Fragment>
			<div className="row">
				<div className="col " style={{ maxWidth: "20vw" }}></div>
				<div
					className="col-8"
					style={{
						backgroundColor: "white",
						borderBottomLeftRadius: "10px",
						borderBottomRightRadius: "10px",
					}}
				>
					<div className="row" style={{ padding: "10%" }}>
						<PokemonSearch></PokemonSearch>
					</div>
					<div className="row">
						<Suspense fallback={<Loading></Loading>}>
							{pokemons.length !== 0 ? (
								<div>
									<div style={{ textAlign: "center" }}>
										<h3>
											Results for '{search}' : {pokemons.length}
										</h3>
									</div>
									<PokemonList pokemons={pokemons}></PokemonList>
								</div>
							) : search === undefined ? (
								<div style={{ textAlign: "center" }}>
									<h3>Search your Pokemon</h3>
								</div>
							) : (
								<div style={{ textAlign: "center" }}>
									<h3>
										Results for '{search}' : {pokemons.length}
									</h3>
								</div>
							)}
						</Suspense>
					</div>
				</div>
				<div className="col " style={{ maxWidth: "20vw" }}></div>
			</div>
		</React.Fragment>
	);
};
