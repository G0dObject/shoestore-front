import React from "react";
import "../../scss/Header/_import.scss";
import icon from "../../res/LocationIcon.svg";
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
					<div className="top-bar__inner__right__item">8 800 600-22-02</div>
				</div>
			</div>
		</div>
	);
};

export default TopBar;
