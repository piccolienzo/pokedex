import React from "react";
import "../assets/css/TriangleButton.css";
import leftarrow from "../assets/svg/left-arrow.svg";
import rightarrow from "../assets/svg/right-arrow.svg";

export const TriangleButton = (props) => {
	if (props.lado === "right") {
		return (
			<img
				src={rightarrow}
				alt="Triangle Button Right"
				className=" triangle-button-right position-sticky top-50 start-100 translate-middle-y"
				onClick={() => props.onClick()}
			></img>
		);
	} else if (props.lado === "left") {
		return (
			<img
				src={leftarrow}
				alt="Triangle Button Left"
				className=" triangle-button-left position-sticky top-50 start-0 translate-middle-y "
				onClick={() => props.onClick()}
			></img>
		);
	}
};
