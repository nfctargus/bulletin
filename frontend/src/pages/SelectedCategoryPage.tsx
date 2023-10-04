import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Article, Publisher } from '../utils/types';
import { getArticlesByCategory, getPublishers } from '../utils/api';
import { css } from '@emotion/css';
import PublisherNameAndDate from '../partials/PublisherNameAndDate';
import ArticleTitle from '../partials/ArticleTitle';
import ArticleDescription from '../partials/ArticleDescription';
import ArticleCategoryReadTime from '../partials/ArticleCategoryReadTime';
import Layout from '../components/Layout';

const SelectedCategoryPage = () => {
	const { category } = useParams();
	const [articles, setArticles] = useState<Article[]>();
	const [publishers, setPublishers] = useState<Publisher[]>();
	useEffect(() => {
		getArticlesByCategory(category!).then((a) => {
			setArticles(a.data);
		});
		getPublishers().then((p) => setPublishers(p.data));
	}, []);
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
				Latest {category} News
			</h1>
			<div
				className={css`
					display: grid;
					grid-auto-rows: 1fr;
					grid-template-columns: 1fr 1fr;
					gap: 20px 20px;
				`}>
				{articles &&
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
export default SelectedCategoryPage;
