import React, { useEffect, useState, Suspense } from "react";
import "../assets/css/TriangleButton.css";
const PokemonListItem = React.lazy(() => import("./PokemonListItem"));

const PokemonList = (props) => {
	return (
		<React.Fragment>
			<Suspense fallback={<h1>Loading List...</h1>}>
				{props.pokemons.map((pokemon) => (
					<PokemonListItem pokemon={pokemon}></PokemonListItem>
				))}
			</Suspense>
		</React.Fragment>
	);
};

export default PokemonList;
/*{props.pokemons.results !== undefined ? (
				<div>
					{props.pokemons.results.map((pokemon) => (
						<PokemonListItem pokemon={pokemon}></PokemonListItem>
					))}
				</div>
			) : (
				"cargando lista..."
			)}*/
