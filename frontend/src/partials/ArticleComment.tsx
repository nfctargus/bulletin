import { css } from '@emotion/css';
import { Comment } from '../utils/types';
import formatRelative from 'date-fns/format';
import { formatDistance, subDays } from 'date-fns';

type Props = {
	comment: Comment;
};
const ArticleComment = ({ comment }: Props) => {
	return (
		<div
			key={comment.id}
			className={css`
				border-bottom: 1px solid #6a6a6a62;
				padding: 10px 20px;
			`}>
			<div
				className={css`
					display: flex;
					gap: 10px;
					align-items: center;
					flex-direction: row;
				`}>
				<h3>{comment.author}</h3>
				<small
					className={css`
						padding: 10px 0;
					`}>
					{formatDistance(subDays(new Date(comment.publishedAt), 3), new Date(), { addSuffix: true })}
				</small>
			</div>
			<section>{comment.text}</section>
		</div>
	);
};
export default ArticleComment;
