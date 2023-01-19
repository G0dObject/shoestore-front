import React from "react";
import { ClassElement } from "typescript";

const PhoneIcon = (className?: React.HTMLAttributes<HTMLDivElement>) => {
	return (
		<svg
			className={className?.className}
			width="16"
			height="16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g clipPath="url(#clip0_1630_872)">
				<path
					d="m10 10.528 1.034-1.033a1.01 1.01 0 0 1 1.08-.222l1.259.503A1.006 1.006 0 0 1 14 10.7v2.308a1.003 1.003 0 0 1-1.052.992C4.124 13.449 2.343 5.973 2.006 3.112A1.002 1.002 0 0 1 3.007 2h2.228a.996.996 0 0 1 .923.628l.503 1.26a.997.997 0 0 1-.217 1.08L5.41 6s.595 4.029 4.59 4.527Z"
					fill="#fff"
				></path>
			</g>
			<defs>
				<clipPath id="clip0_1630_872">
					<path fill="#fff" d="M0 0h16v16H0z"></path>
				</clipPath>
			</defs>
		</svg>
	);
};

export default PhoneIcon;
