import { useParams } from "react-router-dom";

const TestPages = () => {
	const routeParams = useParams();
	console.log(routeParams);
	return <div>{}</div>;
};

export default TestPages;
