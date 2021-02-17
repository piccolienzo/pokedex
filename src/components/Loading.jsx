import React from "react";

export const Loading = () => {
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				height: "200px",
				backgroundColor: "white",
			}}
		>
			<div
				className="spinner-border"
				style={{
					display: "grid",
					alignItems: "center",
				}}
				role="status"
			>
				<span className="visually-hidden">Loading...</span>
			</div>
		</div>
	);
};
