import { css } from '@emotion/css';
import { truncateArticleText } from '../utils/helpers';

type Props = {
	description?: string;
	truncAt?: number;
	fontSize?: string;
	fontColor?: string;
};
const ArticleDescription = ({ description, truncAt, fontSize, fontColor }: Props) => {
	return (
		<div
			className={css`
				font-size: ${fontSize ? fontSize : '16px'};
				color: ${fontColor ? fontColor : '#3c3c3c'};
			`}>
			{truncateArticleText(description!, truncAt!)}
		</div>
	);
};

export default ArticleDescription;
