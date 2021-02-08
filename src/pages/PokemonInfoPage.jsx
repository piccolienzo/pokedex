import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { PokemonInfo } from "../components/PokemonInfo";

const PokemonInfoPage = () => {
	const { id } = useParams();
	const [pokemon, setPokemon] = useState();

	useEffect(() => {
		const getPokemon = async () => {
			const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

			const pokemon = await data.json();
			setPokemon(pokemon);
		};
		getPokemon();
		return () => {};
	}, []);

	return (
		<div className="row">
			<div className="col " style={{ maxWidth: "20vw" }}></div>
			<div className="col-8">
				<div>
					{pokemon !== undefined ? (
						<div>
							<PokemonInfo pokemon={pokemon}></PokemonInfo>
						</div>
					) : (
						"Parece que lo que buscas no se encuentra por aqui"
					)}
				</div>
			</div>
			<div className="col" style={{ maxWidth: "20vw" }}></div>
		</div>
	);
};

export default PokemonInfoPage;
