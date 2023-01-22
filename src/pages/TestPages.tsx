import { useParams } from "react-router-dom";
import Header from "../Components/Header/Header";
import Slider from "../Components/Main/Slider";

const TestPages = () => {
	const routeParams = useParams();
	console.log(routeParams);
	return (
		<>
			<Header></Header>
			<h1 style={{ color: "black" }}> {routeParams.category}</h1>
		</>
	);
};

export default TestPages;
