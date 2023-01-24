import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CatalogPages from './pages/CatalogPages';
import MainPages from './pages/MainPages';
const App = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<MainPages />}></Route>
					<Route
						path="/catalog/:category/:type/:id"
						element={<CatalogPages></CatalogPages>}
					/>
					<Route
						path="/catalog/:category/:type/"
						element={<CatalogPages></CatalogPages>}
					/>
					<Route path="/catalog/:category/" element={<CatalogPages></CatalogPages>} />
					<Route path="*" element={<>Элемент не найден</>} />
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default App;
