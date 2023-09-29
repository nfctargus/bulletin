import { css } from '@emotion/css';
import { SkeletonStyle } from '../../utils/styles';

type Props = {
	numRows: number;
};
const TrendingPagesSkeleton = ({ numRows }: Props) => {
	const rows = [];
	for (let i = 0; i < numRows; i++) {
		rows.push(
			<div
				key={i}
				className={css`
					display: flex;
					width: 68px;
					height: 7vh;
				`}>
				<div
					className={css`
						width: 100%;
						display: flex;
						justify-content: space-around;
						flex-direction: column;
						align-items: center;
					`}>
					<SkeletonStyle width="68px" height="68px" round />
					<SkeletonStyle width="90%" height="10%" />
				</div>
			</div>
		);
	}
	return <>{rows}</>;
};
export default TrendingPagesSkeleton;
