import { SectionWrapperStyle } from '../utils/styles';
import { Publisher } from '../utils/types';
import { css } from '@emotion/css';
import TrendingPagesSkeleton from './skeletons/TrendingPagesSkeleton';
import SectionHeader from '../partials/SectionHeader';
import { useSelector } from 'react-redux';
import { RootState } from '../utils/store';

const TrendingPages = () => {
	const publishers = useSelector((state: RootState) => state.publisher.publishers);
	const loadingPublishers = useSelector((state: RootState) => state.publisher.loading);
	return (
		<SectionWrapperStyle>
			<SectionHeader headerText="Trending Pages" showSeeMoreText href="/pages" />
			<div
				className={css`
					display: flex;
					flex-direction: row;
					justify-content: space-between;
					width: 100%;
					padding: 0 20px;
				`}>
				{loadingPublishers && <TrendingPagesSkeleton numRows={10} />}
				{!loadingPublishers &&
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
		</SectionWrapperStyle>
	);
};
export default TrendingPages;
