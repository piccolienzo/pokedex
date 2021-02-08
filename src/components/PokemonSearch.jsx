import React, { useState } from "react";

export const PokemonSearch = () => {
	const [search, setSearch] = useState("");

	const handleChange = (e) => {
		setSearch(e.target.value);
		console.log(e.target.value);
	};
	const onSubmitSearch = (e) => {
		e.preventDefault();
		console.log("busqueda ", search);
		if (search !== "") {
			window.location.replace(`/search/${search}`);
		}
	};
	return (
		<div>
			<br />
			<form onSubmit={onSubmitSearch}>
				<div className="form-group row">
					<input
						name="search"
						type="text"
						className="form-control form-control-lg"
						style={{ width: "80%" }}
						onChange={handleChange}
						value={search}
						placeholder="Poke Search"
					></input>
					<button
						className="btn btn-lg btn-dark"
						style={{ width: "20%" }}
						type="submit"
					>
						Search
					</button>
				</div>
			</form>
			<br />
		</div>
	);
};
