import React from "react";
import { Type } from "typescript";
import "../../scss/Header/_import.scss";
import {NavLink} from "react-router-dom";

const NavBar = (props: NavBarProps) => {
	return (
		<div>
			<div className={props.className}>
				<a className="closebtn" onClick={() => props.toggle()}>
					&times;
				</a>
				<NavLink to="/catalog/category/woman">Женщинам</NavLink>
				<NavLink to="/catalog/category/men">Мужчинам</NavLink>
				<NavLink to="/catalog/category/kids">Детям</NavLink>
			</div>
		</div>
	);
};

export default NavBar;
