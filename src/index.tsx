import { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css';
import Store from './store/index';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

export const store = new Store();
export const Context = createContext(store);
root.render(
	//<React.StrictMode>
	<Context.Provider value={store}>
		<App />
	</Context.Provider>,
	//</React.StrictMode>,
);
