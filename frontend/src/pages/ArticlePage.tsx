import { useParams } from 'react-router-dom';
import Layout from '../components/Layout';
import formatRelative from 'date-fns/format';
import { css } from '@emotion/css';
import { formatArticleSections } from '../utils/helpers';
import { useSelector } from 'react-redux';
import { RootState } from '../utils/store';
import { selectArticleById } from '../utils/store/articles/articleSlice';
import ArticleSkeleton from '../components/skeletons/ArticleSkeleton';
import { selectCommentByArticleId } from '../utils/store/comments/commentSlice';
import ArticleComment from '../partials/ArticleComment';
import { LoginRegisterButton } from '../utils/styles';

const ArticlePage = () => {
	const { id } = useParams();
	const article = useSelector((state: RootState) => selectArticleById(state, parseInt(id!)));
	const loadingArticles = useSelector((state: RootState) => state.article.loading);
	const loadingComments = useSelector((state: RootState) => state.comment.loading);
	const comments = useSelector((state: RootState) => selectCommentByArticleId(state, parseInt(id!)));

	return (
		<Layout>
			{loadingArticles && <ArticleSkeleton />}
			{!loadingArticles && (
				<div
					className={css`
						display: flex;
						flex-direction: column;
						gap: 10px;
						width: 100%;
					`}>
					<small>{article?.category}</small>
					<h1
						className={css`
							width: 80%;
						`}>
						{article?.title}
					</h1>
					<div
						className={css`
							padding-bottom: 20px;
							border-bottom: 2px solid #ccc;
							margin-bottom: 20px;
						`}>
						{article?.author} {formatRelative(new Date(article!.publishedAt), 'iii, d MMMM yyyy hh:mmaaa')}
					</div>
					<div>{article && article.articleSections && article.articleSections?.map((section) => formatArticleSections(section))}</div>
				</div>
			)}
			{loadingComments && <div>Loading Comments</div>}
			<div
				className={css`
					border-top: 1px solid #000;
					width: 100%;
					padding-top: 10px;
				`}>
				<div
					className={css`
						width: 100%;
						display: flex;
						flex-direction: row;
					`}>
					<div
						className={css`
							padding: 48px 0;
							display: flex;
							gap: 10px;
							width: 70%;
							background-color: #f5f5f5;
							border-top-left-radius: 5px;
							border-bottom-left-radius: 5px;
							flex-direction: column;
							align-items: center;
							font-size: 24px;
							font-weight: 600;
						`}>
						Register and have your say.<LoginRegisterButton>Register to comment</LoginRegisterButton>
					</div>
					<div
						className={css`
							padding: 48px 0;
							display: flex;
							gap: 10px;
							width: 30%;
							background-color: #292929;
							color: #f5f5f5;
							border-top-right-radius: 5px;
							border-bottom-right-radius: 5px;
							flex-direction: column;
							align-items: center;
							font-size: 18px;
						`}>
						Already have an account?<LoginRegisterButton>Log in</LoginRegisterButton>
					</div>
				</div>

				{!loadingComments && comments.map((comment) => <ArticleComment comment={comment} />)}
				{comments.length < 1 && (
					<div
						className={css`
							border: 1px solid #ccc;
							padding: 20px;
							font-size: 13px;
							background-color: #f5f5f5;
							border-radius: 5px;
							margin: 15px 0;
						`}>
						There are no comments yet. Why don't you write one?
					</div>
				)}
			</div>
		</Layout>
	);
};
export default ArticlePage;
