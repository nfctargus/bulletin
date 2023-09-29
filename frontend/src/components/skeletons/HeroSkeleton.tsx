import { css } from '@emotion/css';
import { SkeletonStyle } from '../../utils/styles';

const HeroSkeleton = () => {
	return (
		<div
			className={css`
				display: flex;
				flex-direction: row;
				justify-content: space-around;
				align-items: center;
				height: 50%;
				width: 100%;
				margin: 25px 0;
				gap: 25px;
			`}>
			<SkeletonStyle
				width="40%"
				height="25vh"
				className={css`
					background: #f5f5f5;
					width: 40%;
					padding-right: 40px;
					border-radius: 5px;
				`}
			/>

			<div
				className={css`
					width: 60%;
					padding: 0 20px;
					margin: 25px 0;
					display: flex;
					justify-content: space-around;
					flex-direction: column;
					height: 25vh;
				`}>
				<SkeletonStyle width="25%" height="16px" />
				<SkeletonStyle width="75%" height="48px" />
				<SkeletonStyle width="75%" height="128px" />
				<SkeletonStyle width="40%" height="16px" />
			</div>
		</div>
	);
};

export default HeroSkeleton;
