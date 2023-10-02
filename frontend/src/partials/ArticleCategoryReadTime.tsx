import { css } from '@emotion/css';

type Props = {
	categoryTextColor?: string;
	articleCategory?: string;
	articleReadTime?: number;
	fontSize?: string;
	fontColor?: string;
	bold?: boolean;
};
const ArticleCategoryReadTime = ({ categoryTextColor, articleCategory, articleReadTime, fontSize, fontColor, bold }: Props) => {
	return (
		<div
			className={css`
				font-size: ${fontSize ? fontSize : '16px'};
				color: ${fontColor ? fontColor : '#3c3c3c'};
			`}>
			<span
				className={css`
					color: ${categoryTextColor ? categoryTextColor : '#e9353b'};
					font-weight: ${bold ? 600 : 400};
				`}>
				{articleCategory}
			</span>{' '}
			● {articleReadTime} min read
		</div>
	);
};

export default ArticleCategoryReadTime;
