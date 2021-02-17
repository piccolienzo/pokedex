import React from "react";
import calmarno from "../assets/img/calmarno.png";

export const Error = () => {
	return (
		<div
			style={{
				backgroundColor: "white",
				display: "grid",
				alignItems: "center",
				justifyContent: "center",
				textAlign: "center",
			}}
		>
			<h1>Error</h1>
			<img
				src={calmarno}
				style={{ width: "30vw", minWidth: "45vw" }}
				alt={"error"}
			></img>
			<h2>Source not found</h2>
		</div>
	);
};
