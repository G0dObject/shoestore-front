import { useRef } from 'react';
import { store } from '../..';
import '../../scss/Header/_import.scss';
const Authorization = (props: AuthrizationProps) => {
	let register = false;
	const Login = useRef<HTMLInputElement | null>(null);
	const Password = useRef<HTMLInputElement | null>(null);
	const Authorize = (login: string, password: string) => {
		register ? store.registration(password, login, password) : store.login(login, password);
	};
	return (
		<div className="auth-modal">
			<div className="auth-modal__header">
				<div className="auth-modal__header__left"></div>
				<button className="auth-modal__header__right" onClick={props.closeCallback}>
					<svg role="img" viewBox="0 0 24 24">
						<path
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeMiterlimit="10"
							d="M19 19L5 5"></path>
						<path
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeMiterlimit="10"
							d="M5 19L19 5"></path>
					</svg>
				</button>
			</div>
			<div className="auth-modal__main">
				<div className="auth-modal__title">ВХОД / РЕГИСТРАЦИЯ</div>
				<div className="auth-modal__title">Введите свой Логин / Пароль</div>
				<div className="auth-modal__login">
					<label className="input">
						<input
							ref={Login}
							type="text"
							name="login"
							id="login"
							className="input__login"
							placeholder="Логин"
							inputMode="text"></input>
					</label>
				</div>
				<div className="auth-modal__password">
					<label className="input">
						<input
							ref={Password}
							type="text"
							name="password"
							id="password"
							className="input__password"
							placeholder="Пароль"
							inputMode="text"></input>
					</label>
				</div>
				<div className="auth-modal__toggle">
					<input
						className="auth-modal__toggle_checkbox"
						type="checkbox"
						onClick={() => {
							register = !register;
						}}></input>
					<label className="auth-modal__toggle__label">Создать аккаунт?</label>
				</div>

				<button
					onClick={() => {
						Authorize(
							Login.current?.value as string,
							Password.current?.value as string,
						);
					}}
					className="auth-modal__submit">
					Продолжить
				</button>
			</div>
		</div>
	);
};

export default Authorization;
