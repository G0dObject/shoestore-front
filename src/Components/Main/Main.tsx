import React from "react";
import { Link } from "react-router-dom";
import "../../scss/Main/_import.scss";
import Slider from "./Slider";
const slides: Slider[] = [
	{
		src: "https://cdn.zenden.cloud/MaKYRQQbsC6VRYFpyomnLAncJZpTjOY1NHQlRNHkzzw/fit/768/520/ce/0/aHR0cHM6Ly96ZW5kZW4ucnUvdXBsb2FkL2libG9jay85OGQvMjAwOTBxaHh1bG1wZmVuZjAxcGNvOWpraG1xbWlleG0uanBn.jpg",
		backgroundColor: "#e3e2e8",
		id: 1,
	},
	{
		src: "https://cdn.zenden.cloud/NhDiU_W6tH02jC5mvG9-U6yBmSZj_Bjn-z3a7UGHyqw/fit/768/520/ce/0/aHR0cHM6Ly96ZW5kZW4ucnUvdXBsb2FkL2libG9jay9lNGYvN3ZwbmtwbjB5ZXB2aG5leGc5a2MydGx3NHdlcGsxcTYuanBn.jpg",
		backgroundColor: "rgb(211, 143, 60)",
		id: 2,
	},
];
const Main = () => {
	return (
		<div className="page__main">
			<div className="notification"></div>
			<Slider slides={slides} className="swiper-container">
				<img src="https://cdn.zenden.cloud/MaKYRQQbsC6VRYFpyomnLAncJZpTjOY1NHQlRNHkzzw/fit/768/520/ce/0/aHR0cHM6Ly96ZW5kZW4ucnUvdXBsb2FkL2libG9jay85OGQvMjAwOTBxaHh1bG1wZmVuZjAxcGNvOWpraG1xbWlleG0uanBn.jpg"></img>
			</Slider>
			<div className="page__main__inner">
				<div className="categories-section">
					<div className="categories-section__main">
						<Link
							to="/catalog/woman"
							className="categories-section__item woman"
						>
							<div className="categories-section__item__title">Женщинам</div>
							<div className="categories-selection__item__inner">
								<div className="categories-selection__item__inner__image">
									<img src="https://cdn.zenden.cloud/Wh756l6gVPVCqEHmqlYAJNrG8D2Q9ogNI3l81P8OGJo/fit/500/500/ce/0/aHR0cHM6Ly96ZW5kZW4ucnUvdXBsb2FkL3VmL2Q0OS9iNzhyMGtuMDM2NXllbDBtbmludGJyMDdueHJ5aWhreS5qcGc.jpg"></img>
								</div>
							</div>
						</Link>
						<Link to="/catalog/man" className="categories-section__item man">
							<div className="categories-section__item__title">Мужчинам</div>
							<div className="categories-selection__item__inner">
								<div className="categories-selection__item__inner__image">
									<img src="https://cdn.zenden.cloud/EwTK0lz4VOVkdkObaanozRhlOqFBFaF1Rztel4hKBrQ/fit/500/500/ce/0/aHR0cHM6Ly96ZW5kZW4ucnUvdXBsb2FkL3VmLzgzNS9yMDdwdG5zM2lpbGNkMmtramloNHAzMHUzNTRxdTNoby5qcGc.jpg"></img>
								</div>
							</div>
						</Link>
						<Link to="catalog/kids" className="categories-section__item kids">
							<div className="categories-section__item__title">Детям</div>
							<div className="categories-selection__item__inner">
								<div className="categories-selection__item__inner__image">
									<img src="https://cdn.zenden.cloud/5PSYORm0lolFekFdrjYxkgU6ET0uCivue7C1kJUcm-8/fit/500/500/ce/0/aHR0cHM6Ly96ZW5kZW4ucnUvdXBsb2FkL3VmLzVlNy81aW1tM3h6dHAxaTlwaDJ5YzF2dmlqM2ZncXF4YmVxeC5qcGc.jpg"></img>
								</div>
							</div>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Main;
