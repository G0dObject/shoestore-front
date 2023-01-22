import React from "react";
import "../../scss/Header/_import.scss";
const Authorization = () => {
	return (
		<div className="auth-modal">
			<div className="auth-modal__header">
				<div className="auth-modal__header__left"></div>
				<svg
					role="img"
					viewBox="0 0 24 24"
					className="auth-modal__header__right"
				>
					<path
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeMiterlimit="10"
						d="M19 19L5 5"
					></path>
					<path
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeMiterlimit="10"
						d="M5 19L19 5"
					></path>
				</svg>
			</div>
			<div className="auth-modal__main">
				<div className="auth-modal__title">ВХОД / РЕГИСТРАЦИЯ</div>
				<div className="auth-modal__title">Введите свой Логин / Пароль</div>
				<div className="auth-modal__login">f</div>
				<div className="auth-modal__password"></div>
				<button className="auth-modal__submit">Продолжить</button>
			</div>
		</div>
	);
};

export default Authorization;
