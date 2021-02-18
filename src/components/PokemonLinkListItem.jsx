import React from "react";
import noImage from "../assets/img/no_image.png";

export const PokemonLinkListItem = (props) => {
	return (
		<div
			className="card mb-3"
			style={{ maxWidth: "60vw", borderRadius: "10px" }}
		>
			<div className="row g-0">
				<div className="col-md-4 text-center">
					{null !==
					props.pokemon["sprites"]["other"]["official-artwork"][
						"front_default"
					] ? (
						<img
							className="r"
							style={{ width: "100%", borderRadius: "10px" }}
							alt="Pokemon List Item"
							src={
								props.pokemon["sprites"]["other"]["official-artwork"][
									"front_default"
								]
							}
						></img>
					) : (
						<img
							className="r"
							style={{ width: "100%", borderRadius: "10px" }}
							alt="Pokemon List Item"
							alt={`${props.pokemon.name} Pokemon no available`}
							src={noImage}
						></img>
					)}
				</div>
				<div className="col-md-8">
					<div className="card-body ">
						<br />
						<h2 className="card-title text-center" style={{ color: "black" }}>
							{props.pokemon.name.charAt(0).toUpperCase() +
								props.pokemon.name.slice(1)}
						</h2>
						<p className="card-text text-center" style={{ color: "black" }}>
							Pokemon N° {props.pokemon.id}
						</p>

						<br />
						<br />

						<p className="card-text text-center">
							<small className="text-muted">Click for more info</small>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
