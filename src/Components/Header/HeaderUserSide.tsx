import { useState } from 'react';
import { store } from '../..';
import People from '../../res/People';

const HeaderUserSide = (props: { callbackauth: () => void }) => {
	const [reload, setReload] = useState(false);
	const User = () => {
		return (
			<>
				<div className="header__inner__right__container">
					<>Привет {store.user}</>
					<br></br>
					<button
						onClick={() => {
							store.logout();
							setReload(!reload);
						}}>
						Выход?
					</button>
				</div>
			</>
		);
	};
	const Guest = () => {
		return (
			<>
				<button className="header__inner__right__container" onClick={props.callbackauth}>
					<People className="header__inner__right__container__logo"></People>
					<div className="header__inner__right__container__item">Войти</div>
				</button>
			</>
		);
	};

	if (store.isAuth) return User();
	else return Guest();
};

export default HeaderUserSide;
