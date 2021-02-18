import React, { useState } from "react";

export const PokemonSearch = () => {
	const [search, setSearch] = useState("");

	const handleChange = (e) => {
		setSearch(e.target.value);
	};
	const onSubmitSearch = (e) => {
		e.preventDefault();

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
						style={{}}
						onChange={handleChange}
						value={search}
						placeholder="Poke Search"
						autocomplete="off"
					></input>
					<button className="btn btn-dark" style={{}} type="submit">
						Search
					</button>
				</div>
			</form>
			<br />
		</div>
	);
};
