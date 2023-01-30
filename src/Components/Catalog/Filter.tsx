import { Link } from 'react-router-dom';
import '../../scss/Catalog/_import.scss';
const Filter = () => {
	return (
		<div className="filter">
			<div className="filter__inner">
				<fieldset className="filter__section">
					<div className="filter__title">Категории</div>
					<div className="filter__content">
						<div className="categories-list">
							<div className="categories-list__item">
								<Link to={'/catalog/man/all'}>Все</Link>
							</div>
							<div className="categories-list__item">
								<Link to={'/catalog/man/sneakers'}>Кроссовки</Link>
							</div>
							<div className="categories-list__item">
								<Link to={'/catalog/man/keds'}>Кеды</Link>
							</div>
							<div className="categories-list__item">
								<Link className="categories-list__item" to={'/catalog/man/shoes'}>
									Туфли
								</Link>
							</div>
							<div className="categories-list__item">
								<Link className="categories-list__item" to={'/catalog/man/loafers'}>
									Макасины
								</Link>
							</div>
							<div className="categories-list__item">
								<Link className="categories-list__item" to={'/catalog/man/boots'}>
									Сапоги
								</Link>
							</div>
							<div className="categories-list__item">
								<Link
									className="categories-list__item"
									to={'/catalog/man/slippers'}>
									Тапочки
								</Link>
							</div>
						</div>
					</div>
				</fieldset>
			</div>
		</div>
	);
};

export default Filter;
