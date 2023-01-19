import React from "react";
import "../scss/Header/_import.scss";

const People = (className?: React.HTMLAttributes<HTMLDivElement>) => {
	return (
		<>
			<svg
				className={className?.className}
				width={14}
				height={16}
				viewBox="0 0 14 16"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M7 7C8.65685 7 10 5.65685 10 4C10 2.34315 8.65685 1 7 1C5.34315 1 4 2.34315 4 4C4 5.65685 5.34315 7 7 7Z"
					stroke="white"
					strokeWidth={2}
					strokeMiterlimit={10}
				/>
				<path
					d="M13 16V14C12.9968 12.9401 12.5744 11.9245 11.8249 11.1751C11.0755 10.4256 10.0599 10.0032 9 10H5C3.94011 10.0032 2.92453 10.4256 2.17507 11.1751C1.42561 11.9245 1.00317 12.9401 1 14V16"
					stroke="white"
					strokeWidth={2}
					strokeMiterlimit={10}
				/>
			</svg>
		</>
	);
};

export default People;
