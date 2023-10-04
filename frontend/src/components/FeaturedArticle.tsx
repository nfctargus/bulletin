import { Publisher, Article } from '../utils/types';
import { css } from '@emotion/css';
import HeroSkeleton from './skeletons/HeroSkeleton';
import PublisherNameAndDate from '../partials/PublisherNameAndDate';
import ArticleTitle from '../partials/ArticleTitle';
import ArticleDescription from '../partials/ArticleDescription';
import ArticleCategoryReadTime from '../partials/ArticleCategoryReadTime';
import { SectionWrapperStyle } from '../utils/styles';
import { Link } from 'react-router-dom';

type Props = {
	getPublisher: (id: number) => Publisher | undefined;
	getArticle: (id: number) => Article | undefined;
};
const FeaturedArticle = ({ getPublisher, getArticle }: Props) => {
	const article = getArticle(50006);
	const publisher = getPublisher(1010);
	return (
		<SectionWrapperStyle>
			<div
				className={css`
					background: #f5f5f5;
					border-radius: 5px;
					display: grid;
					width: 100%;
					place-items: center;
					padding: 28px 0;
					color: #1f1f1f;
				`}>
				<h1
					className={css`
						text-transform: uppercase;
						font-size: 16px;
						padding: 16px 0;
						letter-spacing: 2px;
						color: #1f1f1f;
					`}>
					Welcome to Bulletin
				</h1>
				<h2
					className={css`
						font-size: 24px;
						width: 50%;
					`}>
					Crafting narratives 📝 that ignite inspiration 💡, knowledge 📖 and entertainment 🎬 since 1985
				</h2>
			</div>
			{!article && <HeroSkeleton />}
			{article && (
				<Link
					key={article.id}
					to={`/articles/${article.id}`}
					className={css`
						display: flex;
						flex-direction: row;
						justify-content: space-around;
						align-items: center;
						width: 100%;
						margin-top: 25px;
						text-decoration: none;
						padding: 5px;
						border-radius: 5px;
						&:hover {
							background-color: #f9f9f9f4;
						}
					`}>
					<div
						className={css`
							width: 50%;
							padding-right: 40px;
						`}>
						<img
							className={css`
								border-radius: 5px;
								width: 100%;
								aspect-ratio: 4/3;
								object-fit: cover;
							`}
							src={article?.urlToImage}
							alt={article?.title}
						/>
					</div>
					<div
						className={css`
							display: flex;
							flex-direction: column;
							gap: 16px;
							padding: 0 20px;
							width: 50%;
						`}>
						<PublisherNameAndDate publisherName={publisher?.name} datePublished={article.publishedAt} publisherLogoUrl={publisher?.logoUrl} logoSize="24px" fontSize="16px" />
						<ArticleTitle flexGrow title={article.title} fontSize="32px" />
						<ArticleDescription description={article.articleSections![0].text} truncAt={200} />
						<ArticleCategoryReadTime articleCategory={article.category} articleReadTime={article.readTime} />
					</div>
				</Link>
			)}
		</SectionWrapperStyle>
	);
};
export default FeaturedArticle;
