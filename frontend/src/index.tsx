import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ArticlePage from './pages/ArticlePage';
import SelectedCategoryPage from './pages/SelectedCategoryPage';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './utils/store';
import SelectedFlagPage from './pages/SelectedFlagPage';
import AllPages from './pages/AllPages';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<Provider store={store}>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />} />
				<Route path="/pages" element={<AllPages />} />
				<Route path="/articles/:id" element={<ArticlePage />} />
				<Route path="/categories/:category" element={<SelectedCategoryPage />} />
				<Route path="/flags/:flag" element={<SelectedFlagPage />} />
			</Routes>
		</BrowserRouter>
	</Provider>
);
reportWebVitals();
