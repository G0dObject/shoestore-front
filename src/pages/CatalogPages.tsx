import { useParams } from 'react-router-dom';
import Header from '../Components/Header/Header';
import Catalog from '../Core/Interfaces/Catalog/Catalog';

const CatalogPages = () => {
	const { type, category, id } = useParams();
	return (
		<div>
			<Header></Header>
			<Catalog type={type} category={category} id={id}></Catalog>
		</div>
	);
};

export default CatalogPages;
