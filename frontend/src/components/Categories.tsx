import { css } from '@emotion/css';
import SectionHeader from '../partials/SectionHeader';
import { SectionWrapperStyle } from '../utils/styles';
import { Article, Publisher } from '../utils/types';
import { Link } from 'react-router-dom';
import PublisherNameAndDate from '../partials/PublisherNameAndDate';
import ArticleTitle from '../partials/ArticleTitle';
import ArticleCategoryReadTime from '../partials/ArticleCategoryReadTime';
type Props = {
	getArticles: (category: string) => Article[] | undefined;
	getPublisher: (id: number) => Publisher | undefined;
};
const Categories = ({ getArticles, getPublisher }: Props) => {
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
				<div
					className={css`
						width: 50%;
						display: flex;
					`}>
					{getArticles('Business')
						?.slice(0, 2)
						.map((article) => (
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
					{getArticles('Sport')
						?.slice(1, 3)
						.map((article) => (
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
			</div>
		</SectionWrapperStyle>
	);
};
export default Categories;
