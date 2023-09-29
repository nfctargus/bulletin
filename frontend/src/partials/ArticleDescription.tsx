import { truncateArticleText } from '../utils/helpers';

type Props = {
	description?: string;
	truncAt?: number;
};
const ArticleDescription = ({ description, truncAt }: Props) => {
	return <div>{truncateArticleText(description!, truncAt!)}</div>;
};

export default ArticleDescription;
