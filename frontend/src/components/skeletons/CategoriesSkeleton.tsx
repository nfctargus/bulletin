import { css } from '@emotion/css';
import { SkeletonStyle } from '../../utils/styles';

const CategoriesSkeleton = () => {
	return (
		<>
			<div
				className={css`
					width: 50%;
					display: flex;
					flex-direction: row;
					justify-content: stretch;
					gap: 10px;
					height: 27vh;
					padding: 5px;
				`}>
				<div
					className={css`
						width: 50%;
						display: flex;
						flex-direction: column;
						justify-content: stretch;
						gap: 10px;
						height: 27vh;
						padding: 5px;
					`}>
					<SkeletonStyle width="100%" height="60%" />
					<SkeletonStyle width="100%" height="5%" />
					<SkeletonStyle width="100%" height="25%" />
					<SkeletonStyle width="100%" height="5%" />
				</div>
				<div
					className={css`
						width: 50%;
						display: flex;
						flex-direction: column;
						justify-content: stretch;
						gap: 10px;
						height: 27vh;
						padding: 5px;
					`}>
					<SkeletonStyle width="100%" height="60%" />
					<SkeletonStyle width="100%" height="5%" />
					<SkeletonStyle width="100%" height="25%" />
					<SkeletonStyle width="100%" height="5%" />
				</div>
			</div>
			<div
				className={css`
					width: 50%;
					display: flex;
					flex-direction: row;
					justify-content: stretch;
					gap: 10px;
					height: 27vh;
					padding: 5px;
				`}>
				<div
					className={css`
						width: 50%;
						display: flex;
						flex-direction: column;
						justify-content: stretch;
						gap: 10px;
						height: 27vh;
						padding: 5px;
					`}>
					<SkeletonStyle width="100%" height="60%" />
					<SkeletonStyle width="100%" height="5%" />
					<SkeletonStyle width="100%" height="25%" />
					<SkeletonStyle width="100%" height="5%" />
				</div>
				<div
					className={css`
						width: 50%;
						display: flex;
						flex-direction: column;
						justify-content: stretch;
						gap: 10px;
						height: 27vh;
						padding: 5px;
					`}>
					<SkeletonStyle width="100%" height="60%" />
					<SkeletonStyle width="100%" height="5%" />
					<SkeletonStyle width="100%" height="25%" />
					<SkeletonStyle width="100%" height="5%" />
				</div>
			</div>
		</>
	);
};
export default CategoriesSkeleton;
