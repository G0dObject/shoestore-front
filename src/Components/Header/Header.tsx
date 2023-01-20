import React from "react";
import "../../scss/Header/_import.scss";
import TopBar from "./TopBar";
import Zenden from "../../res/Zenden";
import People from "../../res/People";
import NavBarIcon from "../../res/NavBarIcon";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";

import { useState } from "react";
const Header = () => {
	const [navVisible, setNavVisisble] = useState(false);

	const toggle = () => {
		setNavVisisble(!navVisible);
	};
	return (
		<>
			<TopBar></TopBar>
			<div className="header">
				<div className="header__inner">
					<div className="header__inner__left">
						<div className="header__inner__left__container">
							<NavBarIcon
								className="header__sidebar__toggle"
								toggle={toggle}
							></NavBarIcon>

							<NavBar
								className={navVisible ? "sidenav show" : "sidenav hide"}
								toggle={toggle}
							></NavBar>

							<Zenden className="header__inner__left__container__logo" />
						</div>
					</div>
					<div className="header__inner__center">
						<div className="nav">
							<ul className="nav__list">
								<Link to="/catalog/woman" className="nav__item">
									Мужчинам
								</Link>
								<Link to="/catalog/man" className="nav__item">
									Женщинам
								</Link>
								<Link to="/catalog/kids" className="nav__item">
									Детям
								</Link>
							</ul>
						</div>
					</div>
					<div className="header__inner__right">
						<Link to="/Login" className="header__inner__right__container">
							<People className="header__inner__right__container__logo"></People>
							<div className="header__inner__right__container__item">Войти</div>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default Header;
