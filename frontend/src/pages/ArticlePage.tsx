import { useEffect, useState } from 'react';
import { getArticleById } from '../utils/api';
import { useParams } from 'react-router-dom';
import { Article } from '../utils/types';
import Layout from '../components/Layout';
import formatRelative from 'date-fns/format';
import { css } from '@emotion/css';
import { formatArticleSections } from '../utils/helpers';

const ArticlePage = () => {
	const [article, setArticle] = useState<Article>();
	const { id } = useParams();
	useEffect(() => {
		getArticleById(parseInt(id!)).then((a) => {
			setArticle(a.data);
		});
	}, [id]);
	return (
		<Layout>
			{article && (
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
					<div>{article.articleSections?.map((section) => formatArticleSections(section))}</div>
				</div>
			)}
		</Layout>
	);
};
export default ArticlePage;
