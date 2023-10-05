import { css } from '@emotion/css';
import { Publisher, Article } from '../utils/types';
import { SectionWrapperStyle } from '../utils/styles';
import { Link } from 'react-router-dom';
import LatestNewsSkeleton from './skeletons/LatestNewsSkeleton';
import PublisherNameAndDate from '../partials/PublisherNameAndDate';
import ArticleTitle from '../partials/ArticleTitle';
import ArticleDescription from '../partials/ArticleDescription';
import ArticleCategoryReadTime from '../partials/ArticleCategoryReadTime';
import SectionHeader from '../partials/SectionHeader';
import { useSelector } from 'react-redux';
import { RootState } from '../utils/store';

const LatestNews = () => {
	const articles = useSelector((state: RootState) => state.article.articles);
	const publishers = useSelector((state: RootState) => state.publisher.publishers);
	const getPublisher = (id: number) => {
		return publishers.find((p) => p.id === id);
	};
	return (
		<SectionWrapperStyle>
			<SectionHeader headerText="Latest News" showSeeMoreText />
			{!articles && <LatestNewsSkeleton />}
			{articles && (
				<div
					className={css`
						display: flex;
						flex-direction: row;
						gap: 18px;
					`}>
					{articles.slice(0, 4).map((article) => (
						<Link
							key={article.id}
							to={`/articles/${article.id}`}
							className={css`
								width: 25%;
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
							<ArticleTitle fontSize="16px" title={article.title} truncAt={75} flexGrow />
							<ArticleDescription description={article.articleSections[0].text} truncAt={150} fontSize="13px" />
							<ArticleCategoryReadTime articleCategory={article.category} articleReadTime={article.readTime} fontSize="11px" />
						</Link>
					))}
				</div>
			)}
		</SectionWrapperStyle>
	);
};
export default LatestNews;
