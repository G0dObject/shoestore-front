import React from "react";
import "../../scss/Header/_import.scss";
import LocationIcon from "../../res/LocationIcon";
import PhoneIcon from "../../res/PhoneIcon";

const TopBar = () => {
	return (
		<div className="top-bar">
			<div className="top-bar__inner">
				<div className="top-bar__inner__left">
					<LocationIcon className="top-bar__inner__left__item__icon" />
					<div className="top-bar__inner__left__item">Location</div>
					<div className="top-bar__inner__left__item"></div>
					<div className="top-bar__inner__left__item">Доставка</div>
				</div>
				<div className="top-bar__inner__right__item">
					<PhoneIcon className="top-bar__inner__right__item" />

					<a className="top-bar__inner__right__item" href="tel:+7000000-00-00">
						+7(000)000-00-00
					</a>
				</div>
			</div>
		</div>
	);
};

export default TopBar;
