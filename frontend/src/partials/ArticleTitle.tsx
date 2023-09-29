import { css } from '@emotion/css';

type Props = {
	flexGrow?: boolean;
	title?: string;
	fontSize?: string;
};
const ArticleTitle = ({ flexGrow, title, fontSize }: Props) => {
	return (
		<h1
			className={css`
				flex-grow: ${flexGrow ? 1 : 0};
				font-size: ${fontSize || '24px'};
				color: #1f1f1f;
				font-family: 'Noto Serif', serif;
			`}>
			{title}
		</h1>
	);
};

export default ArticleTitle;
