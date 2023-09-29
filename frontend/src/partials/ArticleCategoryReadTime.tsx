import { css } from '@emotion/css';

type Props = {
	categoryTextColor?: string;
	articleCategory?: string;
	articleReadTime?: number;
};
const ArticleCategoryReadTime = ({ categoryTextColor, articleCategory, articleReadTime }: Props) => {
	return (
		<div>
			<span
				className={css`
					color: ${categoryTextColor ? categoryTextColor : '#e9353b'};
				`}>
				{articleCategory}
			</span>{' '}
			● {articleReadTime} min read
		</div>
	);
};

export default ArticleCategoryReadTime;
