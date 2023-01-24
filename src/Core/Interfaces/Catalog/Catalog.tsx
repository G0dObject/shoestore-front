import { useParams } from 'react-router-dom';

const Catalog = (props: CatalogProps) => {
	const { type, category, id } = useParams();
	console.log(type, category, id);

	return <div>{type} </div>;
};

export default Catalog;
