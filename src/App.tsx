import { Routes, Route, useParams, BrowserRouter } from "react-router-dom";
import MainPages from "./pages/MainPages";
import TestPages from "./pages/TestPages";
const App = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<MainPages />}></Route>
					<Route path="/:userId" element={<TestPages></TestPages>} />
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default App;
