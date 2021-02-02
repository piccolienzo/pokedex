import React from "react";
import "../assets/css/TriangleButton.css";

export const TriangleButton = (props) => {
	if (props.lado === "right") {
		return (
			<button
				className="btn triangle-button-right position-sticky top-50 end-0 translate-middle-y "
				onClick={() => props.onClick()}
			>
				►
			</button>
		);
	} else if (props.lado === "left") {
		return (
			<button
				className="btn triangle-button-left position-sticky top-50 start-50 translate-middle-y"
				onClick={() => props.onClick()}
			>
				◄
			</button>
		);
	}
};
