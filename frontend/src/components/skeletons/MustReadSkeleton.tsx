import { css } from '@emotion/css';
import { SkeletonStyle } from '../../utils/styles';

const MustReadSkeleton = () => {
	return (
		<>
			<div
				className={css`
					width: 25%;
					display: flex;
					flex-direction: column;
					padding: 5px;
					gap: 5px;
					justify-content: space-between;
				`}>
				<SkeletonStyle width="100%" height="50%" />
				<SkeletonStyle width="100%" height="5%" />
				<SkeletonStyle width="100%" height="15%" />
				<SkeletonStyle width="100%" height="15%" />
				<SkeletonStyle width="100%" height="5%" />
			</div>
			<div
				className={css`
					width: 55%;
					height: 100%;
					padding: 5px;
				`}>
				<SkeletonStyle width="100%" height="100%" />
			</div>
			<div
				className={css`
					width: 20%;
					border-radius: 5px;
					height: 100%;
					display: flex;
					flex-direction: column;
				`}>
				<div
					className={css`
						width: 100%;
						height: 50%;
						display: flex;
						flex-direction: column;
						padding: 5px;
						gap: 5px;
						justify-content: space-between;
					`}>
					<SkeletonStyle width="100%" height="50%" />
					<SkeletonStyle width="100%" height="7%" />
					<SkeletonStyle width="100%" height="15%" />
					<SkeletonStyle width="100%" height="7%" />
				</div>
				<div
					className={css`
						width: 100%;
						height: 50%;
						display: flex;
						flex-direction: column;
						padding: 5px;
						gap: 5px;
						justify-content: space-between;
					`}>
					<SkeletonStyle width="100%" height="50%" />
					<SkeletonStyle width="100%" height="7%" />
					<SkeletonStyle width="100%" height="15%" />
					<SkeletonStyle width="100%" height="7%" />
				</div>
			</div>
		</>
	);
};
export default MustReadSkeleton;
