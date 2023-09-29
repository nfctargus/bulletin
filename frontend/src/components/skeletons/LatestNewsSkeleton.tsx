import { css } from '@emotion/css';
import { SkeletonStyle } from '../../utils/styles';

const LatestNewsSkeleton = () => {
	return (
		<div
			className={css`
				display: flex;
				flex-direction: row;
				gap: 18px;
				margin: 25px 0;
				width: 100%;
			`}>
			<div
				className={css`
					width: 20%;
					gap: 10px;
					display: flex;
					justify-content: space-around;
					flex-direction: column;
					height: 30vh;
				`}>
				<SkeletonStyle width="100%" height="50%" />
				<SkeletonStyle width="100%" height="5%" />
				<SkeletonStyle width="100%" height="20%" />
				<SkeletonStyle width="100%" height="20%" />
				<SkeletonStyle width="100%" height="5%" />
			</div>
			<div
				className={css`
					width: 20%;
					gap: 10px;
					display: flex;
					justify-content: space-around;
					flex-direction: column;
					height: 30vh;
				`}>
				<SkeletonStyle width="100%" height="50%" />
				<SkeletonStyle width="100%" height="5%" />
				<SkeletonStyle width="100%" height="20%" />
				<SkeletonStyle width="100%" height="20%" />
				<SkeletonStyle width="100%" height="5%" />
			</div>
			<div
				className={css`
					width: 20%;
					gap: 10px;
					display: flex;
					justify-content: space-around;
					flex-direction: column;
					height: 30vh;
				`}>
				<SkeletonStyle width="100%" height="50%" />
				<SkeletonStyle width="100%" height="5%" />
				<SkeletonStyle width="100%" height="20%" />
				<SkeletonStyle width="100%" height="20%" />
				<SkeletonStyle width="100%" height="5%" />
			</div>
			<div
				className={css`
					width: 20%;
					gap: 10px;
					display: flex;
					justify-content: space-around;
					flex-direction: column;
					height: 30vh;
				`}>
				<SkeletonStyle width="100%" height="50%" />
				<SkeletonStyle width="100%" height="5%" />
				<SkeletonStyle width="100%" height="20%" />
				<SkeletonStyle width="100%" height="20%" />
				<SkeletonStyle width="100%" height="5%" />
			</div>
			<div
				className={css`
					width: 20%;
					gap: 10px;
					display: flex;
					justify-content: space-around;
					flex-direction: column;
					height: 30vh;
				`}>
				<SkeletonStyle width="100%" height="50%" />
				<SkeletonStyle width="100%" height="5%" />
				<SkeletonStyle width="100%" height="20%" />
				<SkeletonStyle width="100%" height="20%" />
				<SkeletonStyle width="100%" height="5%" />
			</div>
		</div>
	);
};
export default LatestNewsSkeleton;
