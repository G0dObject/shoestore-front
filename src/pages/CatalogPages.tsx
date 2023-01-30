import { useParams } from 'react-router-dom';
import Catalog from '../Components/Catalog/Catalog';
import Header from '../Components/Header/Header';

const CatalogPages = () => {
	const { type, category, id } = useParams();

	return (
		<>
			<Header></Header>
			<Catalog category={category} type={type} id={id}></Catalog>
		</>
	);
};

export default CatalogPages;
