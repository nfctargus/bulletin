import { Publisher, Article } from '../utils/types';
import { css } from '@emotion/css';
import HeroSkeleton from './skeletons/HeroSkeleton';
import PublisherNameAndDate from '../partials/PublisherNameAndDate';
import ArticleTitle from '../partials/ArticleTitle';
import ArticleDescription from '../partials/ArticleDescription';
import ArticleCategoryReadTime from '../partials/ArticleCategoryReadTime';

type Props = {
	getPublisher: (id: number) => Publisher | undefined;
	getArticle: (id: number) => Article | undefined;
};
const FeaturedArticle = ({ getPublisher, getArticle }: Props) => {
	const article = getArticle(50006);
	const publisher = getPublisher(1010);
	return (
		<>
			<div
				className={css`
					background: #f5f5f5;
					border-radius: 5px;
					margin: 25px 0;
					display: grid;
					place-items: center;
					padding: 24px 0;
					color: #1f1f1f;
				`}>
				<h1
					className={css`
						text-transform: uppercase;
						font-size: 16px;
						padding: 16px;
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
				<div
					className={css`
						display: flex;
						flex-direction: row;
						justify-content: space-around;
						align-items: center;
						height: 50%;
						width: 100%;
						margin: 25px 0;
					`}>
					<div
						className={css`
							width: 75%;
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
						`}>
						<PublisherNameAndDate publisherName={publisher?.name} datePublished={article.publishedAt} publisherLogoUrl={publisher?.logoUrl} logoSize="24px" fontSize="16px" />
						<ArticleTitle flexGrow title={article.title} fontSize="32px" />
						<ArticleDescription description={article.description} truncAt={100} />
						<ArticleCategoryReadTime articleCategory={article.category} articleReadTime={article.readTime} />
					</div>
				</div>
			)}
		</>
	);
};
export default FeaturedArticle;
