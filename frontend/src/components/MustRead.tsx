import { css } from '@emotion/css';
import { Link } from 'react-router-dom';
import { SectionWrapperStyle } from '../utils/styles';
import SectionHeader from '../partials/SectionHeader';
import PublisherNameAndDate from '../partials/PublisherNameAndDate';
import ArticleTitle from '../partials/ArticleTitle';
import ArticleDescription from '../partials/ArticleDescription';
import ArticleCategoryReadTime from '../partials/ArticleCategoryReadTime';
import { useSelector } from 'react-redux';
import { RootState } from '../utils/store';
import { selectArticlesByFlag } from '../utils/store/articles/articleSlice';
import MustReadSkeleton from './skeletons/MustReadSkeleton';
import React from 'react';
const MustRead = () => {
	const articles = useSelector((state: RootState) => selectArticlesByFlag(state, 'must-read'));
	const publishers = useSelector((state: RootState) => state.publisher.publishers);
	const loadingPublishers = useSelector((state: RootState) => state.publisher.loading);
	const loadingArticles = useSelector((state: RootState) => state.article.loading);
	const getPublisher = (id: number) => {
		return publishers.find((p) => p.id === id);
	};

	return (
		<SectionWrapperStyle>
			<SectionHeader headerText="Must Read" showSeeMoreText href="/flags/must-read" />
			<div
				className={css`
					display: flex;
					width: 100%;
					height: 32vh;
				`}>
				{(loadingPublishers || loadingArticles) && <MustReadSkeleton />}
				{(!loadingPublishers || !loadingArticles) &&
					articles.slice(0, 4).map((article, index) => (
						<React.Fragment key={index}>
							{index === 0 && (
								<Link
									key={index}
									to={`/articles/${article.id}`}
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
										<PublisherNameAndDate publisherName={getPublisher(article.publisher)?.name} datePublished={article.publishedAt} publisherLogoUrl={getPublisher(article.publisher)?.logoUrl} logoSize="12px" fontSize="11px" />
										<ArticleTitle flexGrow title={article.title} fontSize="16px" truncAt={55} />
										<ArticleDescription description={article.articleSections[0].text} truncAt={100} fontSize="13px" />
										<ArticleCategoryReadTime articleCategory={article.category} articleReadTime={article.readTime} fontSize="11px" />
									</div>
								</Link>
							)}
							{index === 1 && (
								<div
									key={index}
									className={css`
										position: relative;
										text-align: center;
										width: 55%;
										height: 100%;
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
										<PublisherNameAndDate publisherName={getPublisher(article.publisher)?.name} datePublished={article.publishedAt} publisherLogoUrl={getPublisher(article.publisher)?.logoUrl} logoSize="12px" fontSize="11px" fontColor="#f5f5f5" />
										<ArticleTitle flexGrow title={article.title} fontSize="16px" truncAt={100} fontColor="#f5f5f5" />
										<ArticleDescription description={article.articleSections[0].text} truncAt={185} fontSize="13px" fontColor="#f5f5f5" />
										<ArticleCategoryReadTime articleCategory={article.category} articleReadTime={article.readTime} fontSize="11px" fontColor="#f5f5f5" />
									</div>
								</div>
							)}
							{index === 2 && (
								<div
									key={index === 2 ? index : index + 1}
									className={css`
										width: 20%;
										border-radius: 5px;
										height: 100%;
										display: flex;
										flex-direction: column;
										gap: 16px;
									`}>
									<Link
										key={article.id}
										to={`/articles/${article.id}`}
										className={css`
											width: 100%;
											height: 50%;
											overflow: hidden;
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
											src={article.urlToImage}
											className={css`
												max-height: 50%;
												width: 100%;
												aspect-ratio: 1/1;
												object-fit: cover;
												border-radius: 5px;
											`}
										/>
										<PublisherNameAndDate publisherName={getPublisher(article.publisher)?.name} datePublished={article.publishedAt} logoSize="12px" fontSize="11px" publisherLogoUrl={getPublisher(article.publisher)?.logoUrl} padding="5px 0" />
										<ArticleTitle flexGrow title={article.title} fontSize="14px" truncAt={35} />
										<ArticleCategoryReadTime articleCategory={article.category} articleReadTime={article.readTime} fontSize="11px" />
									</Link>
									<Link
										key={articles[index + 1].id}
										to={`/articles/${articles[index + 1].id}`}
										className={css`
											overflow: hidden;
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
											src={articles[index + 1].urlToImage}
											className={css`
												max-height: 50%;
												width: 100%;
												aspect-ratio: 1/1;
												object-fit: cover;
												border-radius: 5px;
											`}
										/>
										<PublisherNameAndDate publisherName={getPublisher(articles[index + 1].publisher)?.name} datePublished={articles[index + 1].publishedAt} logoSize="12px" fontSize="11px" publisherLogoUrl={getPublisher(articles[index + 1].publisher)?.logoUrl} padding="5px 0" />
										<ArticleTitle flexGrow title={articles[index + 1].title} fontSize="14px" truncAt={35} />
										<ArticleCategoryReadTime articleCategory={articles[index + 1].category} articleReadTime={articles[index + 1].readTime} fontSize="11px" />
									</Link>
								</div>
							)}
						</React.Fragment>
					))}
			</div>
		</SectionWrapperStyle>
	);
};
export default MustRead;
