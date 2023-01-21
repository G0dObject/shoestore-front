import React from 'react';
import '../../scss/Main/_import.scss';
const Main = () => {
	return (
		<div className="page__main">
			<div className="swiper-container"></div>
			<div className="page__main__inner">
				<div className="categories-section">
					<div className="categories-section__main">
						<div className="categories-section__item women">
							<div className="categories-section__item__title">Женщинам</div>
							<div className="categories-selection__item__inner">
								<img
									src="https://cdn.zenden.cloud/Wh756l6gVPVCqEHmqlYAJNrG8D2Q9ogNI3l81P8OGJo/fit/500/500/ce/0/aHR0cHM6Ly96ZW5kZW4ucnUvdXBsb2FkL3VmL2Q0OS9iNzhyMGtuMDM2NXllbDBtbmludGJyMDdueHJ5aWhreS5qcGc.jpg"
									className="categories-selection__item__inner__image"></img>
							</div>
						</div>
						<div className="categories-section__item men">
							<div className="categories-section__item__title">Мужчинам</div>
							<div className="categories-selection__item__inner">
								<img
									src="https://cdn.zenden.cloud/EwTK0lz4VOVkdkObaanozRhlOqFBFaF1Rztel4hKBrQ/fit/500/500/ce/0/aHR0cHM6Ly96ZW5kZW4ucnUvdXBsb2FkL3VmLzgzNS9yMDdwdG5zM2lpbGNkMmtramloNHAzMHUzNTRxdTNoby5qcGc.jpg"
									className="categories-selection__item__inner__image"></img>
							</div>
						</div>
						<div className="categories-section__item kids">
							<div className="categories-section__item__title">Детям</div>
							<div className="categories-selection__item__inner">
								<img
									src="https://cdn.zenden.cloud/5PSYORm0lolFekFdrjYxkgU6ET0uCivue7C1kJUcm-8/fit/500/500/ce/0/aHR0cHM6Ly96ZW5kZW4ucnUvdXBsb2FkL3VmLzVlNy81aW1tM3h6dHAxaTlwaDJ5YzF2dmlqM2ZncXF4YmVxeC5qcGc.jpg"
									className="categories-selection__item__inner__image"></img>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Main;
