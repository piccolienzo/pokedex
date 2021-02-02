import React from "react";

import "../assets/OptionButton.css";

const OptionButton = (props) => {
	const onClick = (e) => {
		e.preventDefault();
	};

	return (
		<button className="OptionButton" onClick={() => onClick}>
			{props.text}
		</button>
	);
};

export default OptionButton;
