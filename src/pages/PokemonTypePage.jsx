import React, { useState, useEffect, Suspense } from "react";
import { useParams } from "react-router-dom";
import { Error } from "../components/Error";
import { Loading } from "../components/Loading";
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
			} else {
				setType(null);
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
					<Suspense fallback={<Loading></Loading>}>
						{type !== undefined ? (
							type !== null ? (
								<PokemonType type={type}></PokemonType>
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
