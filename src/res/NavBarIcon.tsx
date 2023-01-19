const NavBarIcon = (className: NavBarIconProps) => {
	return (
		<svg
			onClick={() => className.toggle()}
			role="img"
			viewBox="0 0 24 24"
			className={className.className}
		>
			<g
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				strokeMiterlimit="10"
			>
				<path d="M19 7H5"></path>
				<path d="M19 12H5"></path>
				<path d="M19 17H5"></path>
			</g>
		</svg>
	);
};

export default NavBarIcon;
