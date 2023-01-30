import { Link } from 'react-router-dom';
import NavBarIcon from '../../res/NavBarIcon';
import Zenden from '../../res/Zenden';
import '../../scss/Header/_import.scss';
import NavBar from './NavBar';
import TopBar from './TopBar';

import { useState } from 'react';
import Authorization from '../Auth/Authorization';
import HeaderUserSide from './HeaderUserSide';

const Header = () => {
	const [navVisible, setNavVisisble] = useState(false);
	const [authVisible, setAuthVisible] = useState(false);

	const toggle = () => {
		setNavVisisble(!navVisible);
	};
	const toggleoffauth = () => {
		console.log('no');
		setAuthVisible(false);
	};
	const toggleauth = () => {
		setAuthVisible(!authVisible);
	};

	return (
		<>
			{authVisible ? <Authorization closeCallback={toggleoffauth}></Authorization> : null}
			<TopBar></TopBar>
			<div className="header">
				<div className="header__inner">
					<div className="header__inner__left">
						<Link to="/" className="header__inner__left__container">
							<NavBarIcon
								className="header__sidebar__toggle"
								toggle={toggle}></NavBarIcon>

							<Zenden className="header__inner__left__container__logo" />
						</Link>
						<NavBar
							className={navVisible ? 'sidenav show' : 'sidenav hide'}
							onClick={toggle}></NavBar>
					</div>
					<div className="header__inner__center">
						<div className="nav">
							<ul className="nav__list">
								<Link to="/catalog/man" className="nav__item">
									Мужчинам
								</Link>
								<Link to="/catalog/woman" className="nav__item">
									Женщинам
								</Link>
								<Link to="/catalog/kids" className="nav__item">
									Детям
								</Link>
							</ul>
						</div>
					</div>
					<HeaderUserSide callbackauth={toggleauth}></HeaderUserSide>
				</div>
			</div>
			<div className="notification"></div>
		</>
	);
};

export default Header;
