import { css } from '@emotion/css';
import { truncateArticleText } from '../utils/helpers';

type Props = {
	flexGrow?: boolean;
	title?: string;
	fontSize?: string;
	truncAt?: number;
	fontColor?: string;
};
const ArticleTitle = ({ flexGrow, title, fontSize, truncAt, fontColor }: Props) => {
	return (
		<h1
			className={css`
				flex-grow: ${flexGrow ? 1 : 0};
				font-size: ${fontSize || '24px'};

				color: ${fontColor ? fontColor : '#1f1f1f'};
				font-family: 'Noto Serif', serif;
			`}>
			{truncateArticleText(title!, truncAt!)}
		</h1>
	);
};

export default ArticleTitle;
