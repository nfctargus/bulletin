import { useEffect, useState } from 'react';
import { getArticleById } from '../utils/api';
import { useParams } from 'react-router-dom';
import { Article } from '../utils/types';

const ArticlePage = () => {
	const [article, setArticle] = useState<Article>();
	const { id } = useParams();
	useEffect(() => {
		getArticleById(parseInt(id!)).then((a) => {
			setArticle(a.data[0]);
		});
	}, [id]);
	return <div>{article?.title}</div>;
};
export default ArticlePage;
