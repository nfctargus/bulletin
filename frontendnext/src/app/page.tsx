'use client';

import { css } from '@emotion/css';
import Header from './header';
import FeaturedArticle from './featuredArticle';
import LatestNews from './latestNews';
import SocialFeeds from './feeds';
import Footer from './footer';
import setDefaultOptions from 'date-fns/setDefaultOptions';
import { enAU } from 'date-fns/locale';
import { getArticles, getPublishers } from '@/utils/api';
import { Article, Publisher } from '@/utils/types';
import { useState, useEffect, Suspense } from 'react';
import Loading from './loading';
setDefaultOptions({ locale: enAU });

export default function Home() {
	const [articles, setArticles] = useState<Article[]>();
	const [publishers, setPublishers] = useState<Publisher[]>();

	useEffect(() => {
		getArticles().then((a) => setArticles(a.data));
		getPublishers().then((p) => setPublishers(p.data));
	}, []);
	const getArticleById = (id: number) => {
		return articles?.find((a) => a.id === id);
	};
	const getPublisherById = (id: number) => {
		return publishers?.find((p) => p.id === id);
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
			<SocialFeeds />
			<Footer />
		</div>
	);
}
