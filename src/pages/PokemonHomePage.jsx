import React from "react";
import { PokemonSearch } from "../components/PokemonSearch";

export const PokemonHomePage = () => {
	return (
		<div
			style={{
				backgroundColor: "white",
				textAlign: "center",
				borderBottomLeftRadius: "10px",
				borderBottomRightRadius: "10px",
			}}
		>
			<br />
			<div>
				<h1>Welcome to Pokedex</h1>
			</div>{" "}
			<div style={{ padding: "10%" }}>
				<PokemonSearch />
			</div>
			<div>Made by @Picco</div>
		</div>
	);
};
