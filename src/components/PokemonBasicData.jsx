import React from "react";
import { PokemonTypeBadge } from "./PokemonTypeBadge";
import "../assets/css/PokemonBasicData.css";
export const PokemonBasicData = (props) => {
	const { pokemon } = props;
	return (
		<table style={{ margin: "0 auto" }}>
			<thead>
				<tr>
					<th>Base Info</th>
				</tr>
				<tr>
					<th></th>
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
						{pokemon.types.map((ptype) => (
							<PokemonTypeBadge type={ptype.type} />
						))}
					</td>
				</tr>
			</tbody>
		</table>
	);
};
