import { css } from '@emotion/css';
import { Article, Publisher } from '../utils/types';
import { formatDate, truncateArticleText } from '../utils/helpers';
import { Link } from 'react-router-dom';
import { SectionWrapperStyle } from '../utils/styles';
import SectionHeader from '../partials/SectionHeader';
import PublisherNameAndDate from '../partials/PublisherNameAndDate';
import ArticleTitle from '../partials/ArticleTitle';
import ArticleDescription from '../partials/ArticleDescription';
import ArticleCategoryReadTime from '../partials/ArticleCategoryReadTime';

type Props = {
	articles?: Article[];
	getPublisher: (id: number) => Publisher | undefined;
};
const MustRead = ({ articles, getPublisher }: Props) => {
	return (
		<SectionWrapperStyle>
			<SectionHeader headerText="Must Read" showSeeMoreText />
			{articles && (
				<div
					className={css`
						display: flex;
						width: 100%;
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
							padding: 12px;
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
							<PublisherNameAndDate publisherName={getPublisher(articles[0].publisher)?.name} datePublished={articles[0].publishedAt} publisherLogoUrl={getPublisher(articles[0].publisher)?.logoUrl} logoSize="12px" fontSize="11px" />
							<ArticleTitle flexGrow title={articles[0].title} fontSize="16px" truncAt={55} />
							<ArticleDescription description={articles[0].articleSections[0].text} truncAt={100} fontSize="13px" />
							<ArticleCategoryReadTime articleCategory={articles[0].category} articleReadTime={articles[0].readTime} fontSize="11px" />
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
							<PublisherNameAndDate publisherName={getPublisher(articles[1].publisher)?.name} datePublished={articles[1].publishedAt} publisherLogoUrl={getPublisher(articles[1].publisher)?.logoUrl} logoSize="12px" fontSize="11px" fontColor="#f5f5f5" />
							<ArticleTitle flexGrow title={articles[1].title} fontSize="16px" truncAt={100} fontColor="#f5f5f5" />
							<ArticleDescription description={articles[1].articleSections[0].text} truncAt={185} fontSize="13px" fontColor="#f5f5f5" />
							<ArticleCategoryReadTime articleCategory={articles[1].category} articleReadTime={articles[1].readTime} fontSize="11px" fontColor="#f5f5f5" />
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
							<PublisherNameAndDate publisherName={getPublisher(articles[2].publisher)?.name} datePublished={articles[2].publishedAt} logoSize="12px" fontSize="11px" publisherLogoUrl={getPublisher(articles[2].publisher)?.logoUrl} padding="5px 0" />
							<ArticleTitle flexGrow title={articles[2].title} fontSize="14px" truncAt={35} />
							<ArticleCategoryReadTime articleCategory={articles[2].category} articleReadTime={articles[2].readTime} fontSize="11px" />
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
							<PublisherNameAndDate publisherName={getPublisher(articles[3].publisher)?.name} datePublished={articles[3].publishedAt} logoSize="12px" fontSize="11px" publisherLogoUrl={getPublisher(articles[3].publisher)?.logoUrl} padding="5px 0" />
							<ArticleTitle flexGrow title={articles[3].title} fontSize="14px" truncAt={35} />
							<ArticleCategoryReadTime articleCategory={articles[3].category} articleReadTime={articles[3].readTime} fontSize="11px" />
						</Link>
					</div>
				</div>
			)}
		</SectionWrapperStyle>
	);
};
export default MustRead;
