import { css } from '@emotion/css';
import SectionHeader from '../partials/SectionHeader';
import { SectionWrapperStyle } from '../utils/styles';
import { Link } from 'react-router-dom';
import ArticleCategoryReadTime from '../partials/ArticleCategoryReadTime';
import ArticleDescription from '../partials/ArticleDescription';
import ArticleTitle from '../partials/ArticleTitle';
import PublisherNameAndDate from '../partials/PublisherNameAndDate';
import { useSelector } from 'react-redux';
import { RootState } from '../utils/store';
import { selectArticlesByFlag } from '../utils/store/articles/articleSlice';
import EditorPickSkeleton from './skeletons/EditorPickSkeleton';

const EditorPick = () => {
	const articles = useSelector((state: RootState) => selectArticlesByFlag(state, 'editors-pick'));
	const publishers = useSelector((state: RootState) => state.publisher.publishers);
	const loadingPublishers = useSelector((state: RootState) => state.publisher.loading);
	const loadingArticles = useSelector((state: RootState) => state.article.loading);
	const getPublisher = (id: number) => {
		return publishers.find((p) => p.id === id);
	};
	return (
		<SectionWrapperStyle>
			<SectionHeader headerText="Editors Pick" showSeeMoreText />
			{(loadingPublishers || loadingArticles) && <EditorPickSkeleton />}
			{(!loadingPublishers || !loadingArticles) && (
				<div
					className={css`
						position: relative;
						text-align: center;
						width: 100%;
						padding: 5px;
						border-radius: 5px;
						&:hover {
							background-color: #f9f9f9f4;
						}
					`}>
					<Link className={css``} to={`/articles/${articles[0].id}`}>
						<img
							className={css`
								max-height: 100%;
								width: 100%;
								object-fit: cover;
								border-radius: 5px;
							`}
							src={articles[0].urlToImage}
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
						<PublisherNameAndDate publisherName={getPublisher(articles[0].publisher)?.name} datePublished={articles[0].publishedAt} publisherLogoUrl={getPublisher(articles[0].publisher)?.logoUrl} logoSize="14px" fontSize="13px" fontColor="#f5f5f5" />
						<ArticleTitle flexGrow title={articles[0].title} fontSize="18px" truncAt={100} fontColor="#f5f5f5" />
						<ArticleDescription description={articles[0].articleSections[0].text} truncAt={185} fontSize="15px" fontColor="#f5f5f5" />
						<ArticleCategoryReadTime articleCategory={articles[0].category} articleReadTime={articles[0].readTime} fontSize="13px" fontColor="#f5f5f5" />
					</div>
				</div>
			)}
			<div
				className={css`
					display: flex;
					flex-direction: row;
				`}>
				{articles && (
					<>
						{articles.slice(1, 5).map((article) => (
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
								<PublisherNameAndDate datePublished={article.publishedAt} publisherName={getPublisher(article.publisher)?.name} fontSize="11px" logoSize="14px" publisherLogoUrl={getPublisher(article.publisher)?.logoUrl} />
								<ArticleTitle fontSize="16px" title={article.title} truncAt={85} flexGrow />
								<ArticleCategoryReadTime articleCategory={article.category} articleReadTime={article.readTime} fontSize="11px" />
							</Link>
						))}
					</>
				)}
			</div>
		</SectionWrapperStyle>
	);
};
export default EditorPick;
