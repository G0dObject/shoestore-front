import { Routes, Route, useParams, BrowserRouter } from "react-router-dom";
import MainPages from "./pages/MainPages";
import TestPages from "./pages/TestPages";
const App = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<MainPages />}></Route>
					<Route path="/catalog/:category/:type/:id" element={<TestPages></TestPages>} />
					<Route path="/catalog/:category/:type/" element={<TestPages></TestPages>} />
					<Route path="/catalog/:category/" element={<TestPages></TestPages>} />
					<Route path="*" element={<>Элемент не найден</>} />
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default App;
