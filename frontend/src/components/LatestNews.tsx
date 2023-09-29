import { css } from '@emotion/css';
import { Publisher, Article } from '../utils/types';
import { formatDate } from '../utils/helpers';
import { Suspense } from 'react';
import { SectionHeaderStyle } from '../utils/styles';
import StyledLink from '../partials/StyledLink';
import { Link } from 'react-router-dom';
import LatestNewsSkeleton from './skeletons/LatestNewsSkeleton';
import PublisherNameAndDate from '../partials/PublisherNameAndDate';
import ArticleTitle from '../partials/ArticleTitle';

type Props = {
	publishers: Publisher[];
	articles: Article[];
	getPublisher: (id: number) => Publisher | undefined;
};
const LatestNews = ({ publishers, articles, getPublisher }: Props) => {
	return (
		<div
			className={css`
				display: grid;
				place-items: center;
				width: 100%;
			`}>
			<div
				className={css`
					display: flex;
					justify-content: space-between;
					width: 100%;
					align-items: center;
				`}>
				<SectionHeaderStyle>Latest News</SectionHeaderStyle>
				<StyledLink text="See More" href="/" />
			</div>

			{!articles && <LatestNewsSkeleton />}
			{articles && (
				<div
					className={css`
						display: flex;
						flex-direction: row;
						gap: 18px;
						margin: 25px 0;
					`}>
					{articles.slice(0, 5).map((article) => (
						<Link
							key={article.id}
							to={`/articles/${article.id}`}
							className={css`
								width: 20%;
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
									aspect-ratio: 1/1;
									object-fit: cover;
									margin-bottom: 5px;
								`}
								src={article.urlToImage}
								alt={article.title}
							/>
							<PublisherNameAndDate datePublished={article.publishedAt} publisherName={getPublisher(article.publisher)?.name} fontSize="11px" logoSize="12px" publisherLogoUrl={getPublisher(article.publisher)?.logoUrl} />
							<h3
								className={css`
									font-size: 16px;
									flex-grow: 1;
									color: #1f1f1f;
									font-family: 'Noto Serif', serif;
								`}>
								{article.title.length > 60 ? `${article.title.substring(0, 60)}...` : article.title}
							</h3>
							<ArticleTitle fontSize="16px" title={article.title} flexGrow />
							<p
								className={css`
									font-weight: 400;
									font-size: 13px;
								`}>{`${article.description.substring(0, 125)}...`}</p>
							<small
								key={article.id}
								className={css`
									font-weight: 400;
									font-size: 11px;
								`}>
								<b
									className={css`
										font-weight: 400;
										color: #e9353b;
									`}>
									{article.category}
								</b>{' '}
								● {article.readTime} min read
							</small>
						</Link>
					))}
				</div>
			)}
		</div>
	);
};
export default LatestNews;
