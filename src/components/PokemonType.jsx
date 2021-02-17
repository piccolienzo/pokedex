import React from "react";
import { Link } from "react-router-dom";
import { FirstToUpper } from "../assets/utilities.js";
import { PokemonTypeBadge } from "./PokemonTypeBadge.jsx";

const PokemonType = (props) => {
	const { type } = props;
	return (
		<div>
			<h1>Type Info</h1>
			<h2>
				{type.id} - {FirstToUpper(type.name)}
			</h2>
			<div>
				<table className="table  table-sm" style={{ backgroundColor: "" }}>
					<thead>
						<tr>
							<th scope="col">Damage Relations</th>
							<td scope="row">
								<strong>Types</strong>
							</td>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th scope="row">Double damage from</th>
							<td>
								{type.damage_relations.double_damage_from.map((type, index) => (
									<PokemonTypeBadge key={index} type={type}></PokemonTypeBadge>
								))}
							</td>
						</tr>
						<tr>
							<th scope="row">Double damage to</th>
							<td>
								{type.damage_relations.double_damage_to.map((type, index) => (
									<PokemonTypeBadge key={index} type={type}></PokemonTypeBadge>
								))}
							</td>
						</tr>
						<tr>
							<th scope="row">Half damage from</th>
							<td>
								{type.damage_relations.half_damage_from.map((type, index) => (
									<PokemonTypeBadge key={index} type={type}></PokemonTypeBadge>
								))}
							</td>
						</tr>
						<tr>
							<th scope="row">Half damage to</th>
							<td>
								{type.damage_relations.half_damage_to.map((type, index) => (
									<PokemonTypeBadge key={index} type={type}></PokemonTypeBadge>
								))}
							</td>
						</tr>
						<tr>
							<th scope="row">No damage from</th>
							<td>
								{type.damage_relations.no_damage_from.map((type, index) => (
									<PokemonTypeBadge key={index} type={type}></PokemonTypeBadge>
								))}
							</td>
						</tr>
						<tr>
							<th scope="row">No damage to</th>
							<td>
								{type.damage_relations.no_damage_to.map((type, index) => (
									<PokemonTypeBadge key={index} type={type}></PokemonTypeBadge>
								))}
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div>
				<h2>Pokemon</h2>
				<ul>
					{type.pokemon.map((pokemon, index) => (
						<li key={index}>
							<Link to={`/pokemon/${pokemon.pokemon.name}`}>
								{FirstToUpper(pokemon.pokemon.name)}
							</Link>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};
export default PokemonType;
