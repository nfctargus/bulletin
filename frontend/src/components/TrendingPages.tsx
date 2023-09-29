import StyledLink from '../partials/StyledLink';
import { SectionHeaderStyle } from '../utils/styles';
import { Publisher } from '../utils/types';
import { css } from '@emotion/css';
import TrendingPagesSkeleton from './skeletons/TrendingPagesSkeleton';

type Props = {
	publishers?: Publisher[];
};
const TrendingPages = ({ publishers }: Props) => {
	return (
		<>
			<div
				className={css`
					display: flex;
					justify-content: space-between;
					align-items: center;
					margin: 10px 0;
				`}>
				<SectionHeaderStyle>Trending Pages</SectionHeaderStyle>
				<StyledLink text="See More" href="/" />
			</div>
			<div
				className={css`
					display: flex;
					flex-direction: row;
					justify-content: space-between;
					gap: 20px;
					width: 100%;
					padding: 0 20px;
				`}>
				{!publishers && <TrendingPagesSkeleton numRows={10} />}
				{publishers &&
					publishers.slice(0, 10).map((publisher: Publisher) => (
						<div
							className={css`
								text-align: center;
								&:hover {
									cursor: pointer;
								}
							`}
							key={publisher.id}>
							<div
								className={css`
									background-image: linear-gradient(#e9353b, #ff7300);
									width: 68px;
									height: 68px;
									border-radius: 50%;
									display: grid;
									place-items: center;
								`}>
								<img
									className={css`
										border-radius: 50%;
										width: 95%;
										aspect-ratio: 1/1;
										object-fit: cover;
										box-shadow: 0 0 2px #cccccc80;
									`}
									src={publisher.logoUrl}
									alt={publisher.name}
								/>
							</div>
							<p
								className={css`
									font-size: 10px;
								`}>
								{publisher.handle}
							</p>
						</div>
					))}
			</div>
		</>
	);
};
export default TrendingPages;
