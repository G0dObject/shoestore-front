import { useLayoutEffect, useState } from 'react';
import '../../Core/Enum/ProductType';
import { ProductType } from '../../Core/Enum/ProductType';
import { Product } from '../../Core/Interfaces/Auth/Product';

import { useLocation } from 'react-router-dom';

import { CategoryType } from '../../Core/Enum/CategoryType';
import { CatalogProps } from '../../Core/Interfaces/Catalog/CatalogProps';
import '../../scss/Catalog/_import.scss';
import ProductService from '../../Services/ProductService';
import Filter from './Filter';
import ProductCart from './ProductCard';

const Catalog = (props: CatalogProps) => {
	const [products, Setproducts] = useState<Product[]>();
	const location = useLocation();

	useLayoutEffect(() => {
		console.log('req');

		Setproducts([]);
		ProductService.get(props.type as unknown as ProductType, CategoryType.Man).then(
			(response) => Setproducts(response),
		);
	}, [location]);

	return (
		<div className="catalog-section">
			<div className="catalog-section__main">
				<div className="catalog-breadcrumbs">
					<div className="catalog-section__label">
						{props.category}·{props.type}
					</div>
				</div>

				<div className="catalog-section__sidebar">
					<Filter></Filter>
				</div>
				<div className="catalog-section__content">
					<div className="catalog-section__list">
						<>
							{products?.map((a) => {
								return (
									<ProductCart
										id={a.id}
										price={a.price}
										name={a.name}
										img="https://cdn.zenden.cloud/Ige7eWM4hDO9RyecWl4JQ5I-ZIDqrKAMxA74rKBqofI/fit/256/256/ce/0/aHR0cHM6Ly96ZW5kZW4ucnUvdXBsb2FkL2libG9jay84ODgvYzlpN3R2aDBjNmRvbThobWdraWVyYjkycHlyZmM2dXIuanBn.jpg"
										key={a.id}></ProductCart>
								);
							})}
						</>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Catalog;
