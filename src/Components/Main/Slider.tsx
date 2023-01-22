import React from "react";
import "../../scss/Main/_import.scss";
import { useState } from "react";

const Slider = (props: SliderProps) => {
	const [slideIndex, setSlideIndex] = useState(1);
	const slides = props.slides;
	const onClickSetIndex = (value: number) => {
		if (slideIndex + value > slides.length || slideIndex + value < 1) {
			return;
		}
		setSlideIndex(slideIndex + value);
	};
	return (
		<div className={props.className}>
			<>
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
			</>
			<a
				className="swiper-button-prev"
				onClick={() => {
					onClickSetIndex(-1);
				}}
			></a>
			<a
				className="swiper-button-next"
				onClick={() => {
					onClickSetIndex(1);
				}}
			></a>
		</div>
	);
};

export default Slider;
