import { css } from '@emotion/css';
import { SkeletonStyle } from '../../utils/styles';

const EditorPickSkeleton = () => {
	return (
		<>
			<div
				className={css`
					position: relative;
					text-align: center;
					width: 100%;
					height: 35vh;
					padding: 5px;
					border-radius: 5px;
				`}>
				<SkeletonStyle width="100%" height="100%" />
			</div>
			<div
				className={css`
					display: flex;
					flex-direction: row;
					height: 20vh;
					width: 100%;
				`}>
				<div
					className={css`
						width: 25%;
						display: flex;
						flex-direction: column;
						justify-content: stretch;
						gap: 10px;
						padding: 5px;
					`}>
					<SkeletonStyle width="100%" height="50%" />
					<SkeletonStyle width="100%" height="10%" />
					<SkeletonStyle width="100%" height="25%" />
					<SkeletonStyle width="100%" height="10%" />
				</div>
				<div
					className={css`
						width: 25%;
						display: flex;
						flex-direction: column;
						justify-content: stretch;
						gap: 10px;
						padding: 5px;
					`}>
					<SkeletonStyle width="100%" height="50%" />
					<SkeletonStyle width="100%" height="10%" />
					<SkeletonStyle width="100%" height="25%" />
					<SkeletonStyle width="100%" height="10%" />
				</div>
				<div
					className={css`
						width: 25%;
						display: flex;
						flex-direction: column;
						justify-content: stretch;
						gap: 10px;
						padding: 5px;
					`}>
					<SkeletonStyle width="100%" height="50%" />
					<SkeletonStyle width="100%" height="10%" />
					<SkeletonStyle width="100%" height="25%" />
					<SkeletonStyle width="100%" height="10%" />
				</div>
				<div
					className={css`
						width: 25%;
						display: flex;
						flex-direction: column;
						justify-content: stretch;
						gap: 10px;
						padding: 5px;
					`}>
					<SkeletonStyle width="100%" height="50%" />
					<SkeletonStyle width="100%" height="10%" />
					<SkeletonStyle width="100%" height="25%" />
					<SkeletonStyle width="100%" height="10%" />
				</div>
			</div>
		</>
	);
};
export default EditorPickSkeleton;
