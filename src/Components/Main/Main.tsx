import React from "react";
import "../../scss/Main/_import.scss";
const Main = () => {
	return (
		<div className="page__main">
			<div className="swiper-container"></div>
			<div className="page__main__inner">
				<div className="categories-section">
					<div className="categories-section__main">
						<div className="categories-section__item women">Женщинам</div>
						<div className="categories-section__item men">Мужчинам</div>
						<div className="categories-section__item kids">Детям</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Main;
