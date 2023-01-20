import { useParams } from "react-router-dom";import Header from "../Components/Header/Header";

const TestPages = () => {
	const routeParams = useParams();
	console.log(routeParams);
	return <div><Header></Header></div>;
};

export default TestPages;
