import { useEffect, useState } from 'react';
import FeaturedArticle from './components/FeaturedArticle';
import Footer from './components/Footer';
import Header from './components/Header';
import { css } from '@emotion/css';
import { Article, Publisher } from './utils/types';
import { getArticles, getPublishers } from './utils/api';
import LatestNews from './components/LatestNews';
import TrendingPages from './components/TrendingPages';
import HeroSkeleton from './components/skeletons/HeroSkeleton';
import MustRead from './components/MustRead';
import EditorPick from './components/EditorPick';
import Categories from './components/Categories';

const App = () => {
	const [articles, setArticles] = useState<Article[]>();
	const [publishers, setPublishers] = useState<Publisher[]>();

	useEffect(() => {
		setTimeout(() => {
			getArticles().then((a) => setArticles(a.data));
			getPublishers().then((p) => setPublishers(p.data));
		}, 3000);
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

	return (
		<div
			className={css`
				padding: 24px 86px;
				display: flex;
				justify-content: center;
				flex-direction: column;
			`}>
			<Header />
			<FeaturedArticle getPublisher={getPublisherById} getArticle={getArticleById} />

			<LatestNews articles={articles!} publishers={publishers!} getPublisher={getPublisherById} />
			<TrendingPages publishers={publishers} />
			<MustRead articles={getMustReadArticles()} getPublisher={getPublisherById} />
			<EditorPick />
			<Categories />
			<Footer />
		</div>
	);
};
export default App;
