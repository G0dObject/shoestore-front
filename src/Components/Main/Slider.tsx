import React from "react";
import "../../scss/Main/_import.scss";
import { useState } from "react";

const Slider = (props: SliderProps) => {
	const [slideIndex, setSlideIndex] = useState(1);
	const slides = props.slides;
	const onClickSetIndex = (value: number) => {
		if (slideIndex + value > slides.length) {
			setSlideIndex(1);
			return;
		} else if (slideIndex + value <= 0) {
			console.log(slides.length);

			setSlideIndex(slides.length);
			return;
		}
		setSlideIndex(slideIndex + value);
	};
	return (
		<div className={props.className}>
			{slides.map((slide) => {
				return (
					<div
						key={slide.id}
						className="swiper-container__card"
						style={{ backgroundColor: slide.backgroundColor }}
					>
						<img
							src={slide.src}
							style={{
								display: slide.id === slideIndex ? "none" : "block",
							}}
						/>
					</div>
				);
			})}

			<button
				className="swiper-button-prev"
				onClick={() => {
					onClickSetIndex(-1);
				}}
			>
				<svg role="img" viewBox="0 0 24 24" className="arrow-icon left">
					<path
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeMiterlimit="10"
						d="M9 5l7 7-7 7"
					></path>
				</svg>
			</button>
			<button
				className="swiper-button-next"
				onClick={() => {
					onClickSetIndex(1);
				}}
			>
				<svg role="img" viewBox="0 0 24 24" className="arrow-icon">
					<path
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeMiterlimit="10"
						d="M9 5l7 7-7 7"
					></path>
				</svg>
			</button>
		</div>
	);
};

export default Slider;
