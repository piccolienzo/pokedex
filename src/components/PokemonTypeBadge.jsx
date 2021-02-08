import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/PokemonTypes.css";
import { FirstToUpper } from "../assets/utilities.js";

export const PokemonTypeBadge = (props) => {
	const { type } = props;

	const onClick = () => {
		window.location.replace(`/type/${type.name}`);
	};
	return (
		<React.Fragment>
			<span
				className={`badge rounded-pill type ${type.name}`}
				onClick={() => onClick()}
			>
				{FirstToUpper(type.name)}
			</span>
		</React.Fragment>
	);
};
