import { useEffect, useState } from 'react';
import FeaturedArticle from './components/FeaturedArticle';
import { Article, Publisher } from './utils/types';
import { getArticles, getPublishers } from './utils/api';
import LatestNews from './components/LatestNews';
import TrendingPages from './components/TrendingPages';
import MustRead from './components/MustRead';
import EditorPick from './components/EditorPick';
import Categories from './components/Categories';
import Layout from './components/Layout';

const App = () => {
	const [articles, setArticles] = useState<Article[]>();
	const [publishers, setPublishers] = useState<Publisher[]>();

	useEffect(() => {
		setTimeout(() => {
			getArticles().then((a) => setArticles(a.data));
			getPublishers().then((p) => setPublishers(p.data));
		}, 1000);
	}, []);

	const getArticleById = (id: number) => {
		return articles?.find((a) => a.id === id);
	};
	const getPublisherById = (id: number) => {
		return publishers?.find((p) => p.id === id);
	};
	const getMustReadArticles = () => {
		return articles?.filter((article) => article.flags.find((f) => f === 'must-read'));
	};
	const getEditorsPickArticles = () => {
		return articles?.filter((article) => article.flags.find((f) => f === 'editors-pick'));
	};
	const getArticleByCategory = (category: string) => {
		return articles?.filter((article) => article.category === category);
	};

	return (
		<Layout>
			<FeaturedArticle getPublisher={getPublisherById} getArticle={getArticleById} />
			<LatestNews articles={articles!} publishers={publishers!} getPublisher={getPublisherById} />
			<TrendingPages publishers={publishers} />
			<MustRead articles={getMustReadArticles()} getPublisher={getPublisherById} />
			<EditorPick articles={getEditorsPickArticles()} getPublisher={getPublisherById} />
			<Categories getArticles={getArticleByCategory} getPublisher={getPublisherById} />
		</Layout>
	);
};
export default App;
