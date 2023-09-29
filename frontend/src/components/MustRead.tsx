import { css } from '@emotion/css';
import { Article, Publisher } from '../utils/types';
import { formatDate, truncateArticleText } from '../utils/helpers';
import { Link } from 'react-router-dom';

type Props = {
	articles?: Article[];
	getPublisher: (id: number) => Publisher | undefined;
};
const MustRead = ({ articles, getPublisher }: Props) => {
	return (
		<>
			{articles && (
				<div
					className={css`
						display: flex;
						width: 100%;
						margin: 25px 0;
						height: 30vh;
						gap: 16px;
					`}>
					<Link
						to={`/articles/${articles[0].id}`}
						className={css`
							width: 25%;
							display: flex;
							flex-direction: column;
							text-decoration: none;
							justify-content: space-evenly;
							border-radius: 5px;
							gap: 16px;
							padding: 5px;
							&:hover {
								background-color: #f9f9f9f4;
							}
						`}>
						<img
							className={css`
								width: 100%;
								max-height: 50%;
								aspect-ratio: 1/1;
								object-fit: cover;
								border-radius: 5px;
							`}
							src={articles[0].urlToImage}
						/>
						<div
							className={css`
								display: flex;
								flex-direction: column;
								justify-content: space-between;
								width: 100%;
								gap: 10px;
								border-radius: 5px;
								height: 50%;
							`}>
							<small
								className={css`
									font-size: 11px;
									font-weight: 400;
									display: flex;
									align-items: center;
								`}>
								<img
									className={css`
										width: 12px;
										height: 12px;
										border-radius: 50%;
										margin: 0 4px;
									`}
									src={getPublisher(articles[0].publisher)?.logoUrl}
									alt={getPublisher(articles[0].publisher)?.name}
								/>
								{getPublisher(articles[0].publisher)?.name} ● {articles[0].publishedAt && formatDate(articles[0].publishedAt)}
							</small>
							<h3
								className={css`
									font-size: 16px;
									flex-grow: 1;
									color: #1f1f1f;
									font-family: 'Noto Serif', serif;
								`}>
								{truncateArticleText(articles[0].title, 100)}
							</h3>
							<p
								className={css`
									font-weight: 400;
									font-size: 13px;
								`}>
								{truncateArticleText(articles[0].description, 100)}
							</p>
							<small
								className={css`
									font-weight: 400;
									font-size: 11px;
								`}>
								<b
									className={css`
										font-weight: 400;
										color: #e9353b;
									`}>
									War
								</b>{' '}
								● {articles[0].readTime} min read
							</small>
						</div>
					</Link>
					<div
						className={css`
							position: relative;
							text-align: center;
							width: 55%;
							padding: 5px;
							border-radius: 5px;
							&:hover {
								background-color: #f9f9f9f4;
							}
						`}>
						<Link className={css``} to={`/articles/${articles[1].id}`}>
							<img
								className={css`
									max-height: 100%;
									width: 100%;
									aspect-ratio: 1/1;
									object-fit: cover;
									border-radius: 5px;
								`}
								src={articles[1].urlToImage}
							/>
						</Link>
						<div
							className={css`
								position: absolute;
								bottom: 0;
								left: 0;
								text-align: left;
								display: flex;
								flex-direction: column;
								gap: 16px;
								padding: 16px;
							`}>
							<small
								className={css`
									font-size: 11px;
									font-weight: 400;
									display: flex;
									align-items: center;
									color: #f5f5f5;
								`}>
								<img
									className={css`
										width: 12px;
										height: 12px;
										border-radius: 50%;
										margin: 0 4px;
									`}
									src={getPublisher(articles[1].publisher)?.logoUrl}
									alt={getPublisher(articles[1].publisher)?.name}
								/>
								{getPublisher(articles[1].publisher)?.name} ● {articles[1].publishedAt && formatDate(articles[1].publishedAt)}
							</small>
							<h3
								className={css`
									font-size: 16px;
									flex-grow: 1;
									color: #f5f5f5;
									font-family: 'Noto Serif', serif;
								`}>
								{truncateArticleText(articles[1].title, 100)}
							</h3>
							<p
								className={css`
									font-weight: 400;
									font-size: 13px;
									color: #f5f5f5;
								`}>
								{truncateArticleText(articles[2].description, 200)}
							</p>
							<small
								key={articles[1].id}
								className={css`
									font-weight: 400;
									font-size: 11px;
									color: #f5f5f5;
								`}>
								{articles[1].category} ● {articles[1].readTime} min read
							</small>
						</div>
					</div>
					<div
						className={css`
							width: 20%;
							border-radius: 5px;
							height: 100%;
							display: flex;
							flex-direction: column;
							gap: 16px;
						`}>
						<Link
							key={articles[2].id}
							to={`/articles/${articles[2].id}`}
							className={css`
								width: 100%;
								height: 50%;
								border-radius: 5px;
								display: flex;
								text-decoration: none;
								flex-direction: column;
								padding: 5px;
								justify-content: space-between;
								&:hover {
									background-color: #f9f9f9f4;
								}
							`}>
							<img
								src={articles[2].urlToImage}
								className={css`
									max-height: 50%;
									width: 100%;
									aspect-ratio: 1/1;
									object-fit: cover;
									border-radius: 5px;
								`}
							/>
							<small
								className={css`
									font-size: 11px;
									font-weight: 400;
									padding: 5px 0;
									display: flex;
									align-items: center;
								`}>
								<img
									className={css`
										width: 12px;
										height: 12px;
										border-radius: 50%;
										margin: 0 4px;
									`}
									src={getPublisher(articles[2].publisher)?.logoUrl}
									alt={getPublisher(articles[2].publisher)?.name}
								/>
								{getPublisher(articles[2].publisher)?.name} ● {articles[2].publishedAt && formatDate(articles[2].publishedAt)}
							</small>
							<h3
								className={css`
									font-size: 16px;
									flex-grow: 1;
									color: #1f1f1f;
									font-family: 'Noto Serif', serif;
								`}>
								{truncateArticleText(articles[2].title, 50)}
							</h3>
							<small
								key={articles[2].id}
								className={css`
									font-weight: 400;
									font-size: 11px;
								`}>
								<b
									className={css`
										font-weight: 400;
										color: #e9353b;
									`}>
									{articles[2].category}
								</b>{' '}
								● {articles[2].readTime} min read
							</small>
						</Link>
						<Link
							key={articles[3].id}
							to={`/articles/${articles[3].id}`}
							className={css`
								width: 100%;
								height: 50%;
								border-radius: 5px;
								display: flex;
								text-decoration: none;
								flex-direction: column;
								padding: 5px;
								justify-content: space-between;
								&:hover {
									background-color: #f9f9f9f4;
								}
							`}>
							<img
								src={articles[3].urlToImage}
								className={css`
									max-height: 50%;
									width: 100%;
									aspect-ratio: 1/1;
									object-fit: cover;
									border-radius: 5px;
								`}
							/>
							<small
								className={css`
									font-size: 11px;
									font-weight: 400;
									padding: 5px 0;
									display: flex;
									align-items: center;
								`}>
								<img
									className={css`
										width: 12px;
										height: 12px;
										border-radius: 50%;
										margin: 0 4px;
									`}
									src={getPublisher(articles[3].publisher)?.logoUrl}
									alt={getPublisher(articles[3].publisher)?.name}
								/>
								{getPublisher(articles[3].publisher)?.name} ● {articles[2].publishedAt && formatDate(articles[3].publishedAt)}
							</small>
							<h3
								className={css`
									font-size: 16px;
									flex-grow: 1;
									color: #1f1f1f;
									font-family: 'Noto Serif', serif;
								`}>
								{truncateArticleText(articles[3].title, 42)}
							</h3>
							<small
								key={articles[3].id}
								className={css`
									font-weight: 400;
									font-size: 11px;
								`}>
								<b
									className={css`
										font-weight: 400;
										color: #e9353b;
									`}>
									{articles[3].category}
								</b>{' '}
								● {articles[3].readTime} min read
							</small>
						</Link>
					</div>
				</div>
			)}
		</>
	);
};
export default MustRead;
