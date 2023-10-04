import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ArticlePage from './pages/ArticlePage';
import CategoriesPage from './pages/CategoriesPage';
import SelectedCategoryPage from './pages/SelectedCategoryPage';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<App />} />
			<Route path="/articles/:id" element={<ArticlePage />} />
			<Route path="/categories" element={<CategoriesPage />} />
			<Route path="/categories/:category" element={<SelectedCategoryPage />} />
		</Routes>
	</BrowserRouter>
);
reportWebVitals();
