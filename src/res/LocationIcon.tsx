import React from "react";

const LocationIcon = (className?: React.HTMLAttributes<HTMLDivElement>) => {
	return (
		<svg
			className={className?.className}
			width="16"
			height="16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g clipPath="url(#clip0_1630_862)">
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M11.771 3.533a5.4 5.4 0 0 0-7.542 0 5.187 5.187 0 0 0 0 7.42L8 14.667l3.771-3.71a5.186 5.186 0 0 0 0-7.424ZM8 9.667A2.333 2.333 0 1 0 8 5a2.333 2.333 0 0 0 0 4.667Z"
					fill="#52AE32"
				></path>
			</g>
			<defs>
				<clipPath id="clip0_1630_862">
					<path fill="#fff" d="M0 0h16v16H0z"></path>
				</clipPath>
			</defs>
		</svg>
	);
};

export default LocationIcon;
