import React from "react";
import { PokemonType } from "./PokemonType";
import "../assets/css/PokemonBasicData.css";
export const PokemonBasicData = (props) => {
	const { pokemon } = props;
	return (
		<table style={{ margin: "0" }}>
			<thead>
				<tr>
					<th>Base Info</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<th>ID</th> <td>{pokemon.id}</td>
				</tr>
				<tr>
					<th>Order</th> <td>{pokemon.order}</td>
				</tr>
				<tr>
					<th>Height</th> <td>{pokemon.height / 10} m.</td>
				</tr>
				<tr>
					<th>Weight</th> <td>{pokemon.weight / 10} Kg.</td>
				</tr>
				<tr>
					<th>Base Exp.</th> <td>{pokemon.base_experience}</td>
				</tr>
				<tr>
					<th>Default</th> <td>{pokemon.is_default ? "Yes" : "No"}</td>
				</tr>
				<tr>
					<th>Type</th>
					<td>
						<PokemonType pokemon={pokemon} />
					</td>
				</tr>
			</tbody>
		</table>
	);
};
