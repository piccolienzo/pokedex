import React, { useState, useEffect, Suspense } from "react";
import { useParams } from "react-router-dom";
import PokemonType from "../components/PokemonType";

export const PokemonTypePage = () => {
	const { id } = useParams();
	const [type, setType] = useState();

	useEffect(() => {
		const getType = async () => {
			const data = await fetch(`https://pokeapi.co/api/v2/type/${id}`);

			if (data.status !== 404) {
				const type = await data.json();
				setType(type);
			}
		};
		getType();
		return () => {};
	}, []);
	return (
		<div className="row">
			<div className="col " style={{ maxWidth: "20vw" }}></div>
			<div className="col-8" style={{ backgroundColor: "white" }}>
				<div>
					<h1>Type Info</h1>
					<Suspense fallback={<h1>Loading Search...</h1>}>
						{type !== undefined ? (
							<PokemonType type={type}></PokemonType>
						) : (
							"Parece que lo que buscas no se encuentra por aqui"
						)}
					</Suspense>
				</div>
			</div>
			<div className="col" style={{ maxWidth: "20vw" }}></div>
		</div>
	);
};
