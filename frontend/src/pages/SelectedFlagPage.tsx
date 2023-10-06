import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { RootState } from '../utils/store';
import { selectArticlesByFlag } from '../utils/store/articles/articleSlice';
import { css } from '@emotion/css';
import Layout from '../components/Layout';
import PublisherNameAndDate from '../partials/PublisherNameAndDate';
import ArticleTitle from '../partials/ArticleTitle';
import ArticleDescription from '../partials/ArticleDescription';
import ArticleCategoryReadTime from '../partials/ArticleCategoryReadTime';

const SelectedFlagPage = () => {
	const { flag } = useParams();
	const articles = useSelector((state: RootState) => selectArticlesByFlag(state, flag!));
	const publishers = useSelector((state: RootState) => state.publisher.publishers);
	const loadingPublishers = useSelector((state: RootState) => state.publisher.loading);
	const loadingArticles = useSelector((state: RootState) => state.article.loading);
	const getPublisher = (id: number) => {
		return publishers?.find((p) => p.id === id);
	};
	return (
		<Layout>
			<h1
				className={css`
					text-transform: capitalize;
					font-family: 'Noto Serif', serif;
				`}>
				{flag}
			</h1>
			<div
				className={css`
					display: grid;
					grid-auto-rows: 1fr;
					grid-template-columns: 1fr 1fr;
					gap: 20px 20px;
				`}>
				{/* {(loadingPublishers || loadingArticles) && <SelectedCategorySkeleton />} */}
				{(!loadingPublishers || !loadingArticles) &&
					articles.map((article) => (
						<Link
							key={article.id}
							to={`/articles/${article.id}`}
							className={css`
								width: 100%;
								display: flex;
								flex-direction: column;
								justify-content: stretch;
								gap: 10px;
								text-decoration: none;
								padding: 5px;
								border-radius: 5px;
								&:hover {
									background-color: #f9f9f9f4;
								}
							`}>
							<img
								className={css`
									border-radius: 5px;
									width: 100%;
									aspect-ratio: 3/2;
									object-fit: cover;
									margin-bottom: 5px;
								`}
								src={article.urlToImage}
								alt={article.title}
							/>
							<PublisherNameAndDate datePublished={article.publishedAt} publisherName={getPublisher(article.publisher)?.name} fontSize="11px" logoSize="12px" publisherLogoUrl={getPublisher(article.publisher)?.logoUrl} />
							<ArticleTitle fontSize="16px" title={article.title} truncAt={85} flexGrow />
							<ArticleDescription description={article.articleSections[0].text} truncAt={300} fontSize="13px" />
							<ArticleCategoryReadTime articleCategory={article.category} articleReadTime={article.readTime} fontSize="11px" />
						</Link>
					))}
			</div>
		</Layout>
	);
};

export default SelectedFlagPage;
