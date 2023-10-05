import { css } from '@emotion/css';
import SectionHeader from '../partials/SectionHeader';
import { SectionWrapperStyle } from '../utils/styles';
import { Article, Publisher } from '../utils/types';
import { Link } from 'react-router-dom';
import PublisherNameAndDate from '../partials/PublisherNameAndDate';
import ArticleTitle from '../partials/ArticleTitle';
import ArticleCategoryReadTime from '../partials/ArticleCategoryReadTime';
import { useSelector } from 'react-redux';
import { RootState } from '../utils/store';
import { selectArticlesByCategory } from '../utils/store/articles/articleSlice';
import CategoriesSkeleton from './skeletons/CategoriesSkeleton';
type Props = {
	category1: string;
	category2: string;
};
const Categories = ({ category1, category2 }: Props) => {
	const articlesCategory1 = useSelector((state: RootState) => selectArticlesByCategory(state, category1));
	const articlesCategory2 = useSelector((state: RootState) => selectArticlesByCategory(state, category2));
	const publishers = useSelector((state: RootState) => state.publisher.publishers);
	const loadingPublishers = useSelector((state: RootState) => state.publisher.loading);
	const loadingArticles = useSelector((state: RootState) => state.article.loading);
	const getPublisher = (id: number) => {
		return publishers.find((p) => p.id === id);
	};
	return (
		<SectionWrapperStyle>
			<div
				className={css`
					display: flex;
					width: 100%;
					justify-content: space-between;
					align-items: center;
					gap: 24px;
				`}>
				<SectionHeader headerText="Business" width="50%" href="/categories/business" />
				<SectionHeader headerText="Sports News" width="50%" href="/categories/sport" />
			</div>
			<div
				className={css`
					display: flex;
					width: 100%;
					gap: 16px;
				`}>
				{(loadingPublishers || loadingArticles) && <CategoriesSkeleton />}
				{(!loadingPublishers || !loadingArticles) && (
					<>
						<div
							className={css`
								width: 50%;
								display: flex;
							`}>
							{articlesCategory1.slice(0, 2).map((article) => (
								<Link
									key={article.id}
									to={`/articles/${article.id}`}
									className={css`
										width: 50%;
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
									<ArticleTitle fontSize="16px" title={article.title} truncAt={85} flexGrow />
									<ArticleCategoryReadTime articleCategory={article.category} articleReadTime={article.readTime} fontSize="11px" />
								</Link>
							))}
						</div>
						<div
							className={css`
								width: 50%;
								display: flex;
							`}>
							{articlesCategory2.slice(1, 3).map((article) => (
								<Link
									key={article.id}
									to={`/articles/${article.id}`}
									className={css`
										width: 50%;
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
									<ArticleTitle fontSize="16px" title={article.title} truncAt={85} flexGrow />
									<ArticleCategoryReadTime articleCategory={article.category} articleReadTime={article.readTime} fontSize="11px" />
								</Link>
							))}
						</div>
					</>
				)}
			</div>
		</SectionWrapperStyle>
	);
};
export default Categories;
