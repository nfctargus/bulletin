import { useEffect } from 'react';
import FeaturedArticle from './components/FeaturedArticle';
import LatestNews from './components/LatestNews';
import TrendingPages from './components/TrendingPages';
import MustRead from './components/MustRead';
import EditorPick from './components/EditorPick';
import Categories from './components/Categories';
import Layout from './components/Layout';
import { useDispatch } from 'react-redux';
import { AppDispatch } from './utils/store';
import { getArticlesThunk } from './utils/store/articles/articleThunk';
import { getPublishersThunk } from './utils/store/publishers/publisherThunk';

const App = () => {
	const dispatch = useDispatch<AppDispatch>();
	useEffect(() => {
		setTimeout(() => {
			dispatch(getArticlesThunk());
			dispatch(getPublishersThunk());
		}, 2000);
	}, []);

	return (
		<Layout>
			<FeaturedArticle articleId={50006} />
			<LatestNews />
			<TrendingPages />
			<MustRead />
			<EditorPick />
			<Categories category1="Business" category2="Sport" />
		</Layout>
	);
};
export default App;
