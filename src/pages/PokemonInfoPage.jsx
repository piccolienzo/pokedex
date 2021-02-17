import React, { useState, useEffect, Suspense } from "react";
import { useParams } from "react-router-dom";
import { Error } from "../components/Error";
import { Loading } from "../components/Loading";
import { PokemonInfo } from "../components/PokemonInfo";

const PokemonInfoPage = () => {
	const { id } = useParams();
	const [pokemon, setPokemon] = useState();

	useEffect(() => {
		const getPokemon = async () => {
			const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
			let pokemon = null;
			if (data.ok) {
				pokemon = await data.json();
			}

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
					<Suspense fallback={<Loading></Loading>}>
						{console.log(pokemon)}
						{pokemon !== undefined ? (
							pokemon !== null ? (
								<div>
									<PokemonInfo pokemon={pokemon}></PokemonInfo>
								</div>
							) : (
								<Error></Error>
							)
						) : (
							<Loading></Loading>
						)}
					</Suspense>
				</div>
			</div>
			<div className="col" style={{ maxWidth: "20vw" }}></div>
		</div>
	);
};

export default PokemonInfoPage;
