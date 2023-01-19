import React from "react";
import "../scss/Header/_import.scss";

const People = (className?: React.HTMLAttributes<HTMLDivElement>) => {
	return (
		<svg className={className?.className}>
			<circle
				fill="none"
				width="16"
				height="16"
				stroke="currentColor"
				strokeWidth="2"
				strokeMiterlimit="10"
				cx="12"
				cy="8"
				r="3"
			></circle>
			<path
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				strokeMiterlimit="10"
				d="M18 20v-2a4.012 4.012 0 00-4-4h-4a4.012 4.012 0 00-4 4v2"
			></path>
		</svg>
	);
};

export default People;
