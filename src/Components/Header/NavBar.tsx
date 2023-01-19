import React from "react";
import { Type } from "typescript";
import "../../scss/Header/_import.scss";

const NavBar = (props: NavBarProps) => {
	return (
		<div>
			<div className={props.className}>
				<a className="closebtn" onClick={() => props.toggle()}>
					&times;
				</a>
				<a href="#">Женщинам</a>
				<a href="#">Мужчинам</a>
				<a href="#">Детям</a>
			</div>
		</div>
	);
};

export default NavBar;
