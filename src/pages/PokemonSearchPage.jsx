import React, { useState, useEffect, Suspense } from "react";
import { useParams } from "react-router-dom";
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
				console.log(pokemons.length);

				getPokemons();
			} else {
				console.log(pokemons.length);
				console.log("Es un numero:" + pokemons);
				getPokemons();
			}
		}

		return () => {};
	}, []);

	return (
		<React.Fragment>
			<div className="row">
				<div className="col " style={{ maxWidth: "20vw" }}></div>
				<div className="col-8">
					<div className="row">
						<PokemonSearch></PokemonSearch>
					</div>
					<div className="row">
						<Suspense fallback={<h1>Loading Search...</h1>}>
							{pokemons.lenght !== 0 ? (
								<PokemonList pokemons={pokemons}></PokemonList>
							) : (
								<h2>
									Resultados para {search} {pokemons.lenght}
								</h2>
							)}
						</Suspense>
					</div>
				</div>
				<div className="col " style={{ maxWidth: "20vw" }}></div>
			</div>
		</React.Fragment>
	);
};
