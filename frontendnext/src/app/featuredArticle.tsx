'use client';

import { formatDate, truncateArticleDescription } from '@/utils/helpers';
import { Article, Publisher } from '@/utils/types';
import { css } from '@emotion/css';

type Props = {
	getPublisher: (id: number) => Publisher | undefined;
	getArticle: (id: number) => Article | undefined;
};
export default function FeaturedArticle({ getPublisher, getArticle }: Props) {
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
					<h2
						className={css`
							font-weight: 400;
							display: flex;
							align-items: center;

							font-size: 16px;
						`}>
						<img
							className={css`
								width: 24px;
								height: 24px;
								border-radius: 50%;
								margin: 0 4px;
							`}
							src={publisher?.logoUrl}
							alt={publisher?.name}
						/>
						{publisher?.name} ● {article && formatDate(article.publishedAt)}
					</h2>
					<h1
						className={css`
							flex-grow: 1;
							color: #1f1f1f;
							font-family: 'Noto Serif', serif;
						`}>
						{article?.title}
					</h1>
					<div>{article && truncateArticleDescription(article!.description, 100)}</div>
					<div>
						<span
							className={css`
								color: #e9353b;
							`}>
							{article?.category}
						</span>{' '}
						● {article?.readTime} min read
					</div>
				</div>
			</div>
		</>
	);
}
