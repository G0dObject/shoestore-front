const ProductCard = (props: ProductCardProps) => {
	return (
		<div className="catalog-section__card" style={{ color: 'red' }}>
			<div className="catalog-section__card__img">
				<img src="https://cdn.zenden.cloud/Ige7eWM4hDO9RyecWl4JQ5I-ZIDqrKAMxA74rKBqofI/fit/256/256/ce/0/aHR0cHM6Ly96ZW5kZW4ucnUvdXBsb2FkL2libG9jay84ODgvYzlpN3R2aDBjNmRvbThobWdraWVyYjkycHlyZmM2dXIuanBn.jpg"></img>
			</div>

			<div className="catalog-section__card__header">
				<div className="catalog-section__card__title">{props.name}</div>
			</div>
			<div className="catalog-section__card__price">{props.price}</div>
		</div>
	);
};

export default ProductCard;
