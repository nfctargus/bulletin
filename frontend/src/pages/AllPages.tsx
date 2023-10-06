import { useSelector } from 'react-redux';
import Layout from '../components/Layout';
import { RootState } from '../utils/store';
import { css } from '@emotion/css';
import { BiLogoInstagramAlt } from 'react-icons/bi';
import { Link } from 'react-router-dom';
const AllPages = () => {
	const publishers = useSelector((state: RootState) => state.publisher.publishers);
	const style = { fill: '#f5f5f5', fontSize: '24px' };
	return (
		<Layout>
			<h1
				className={css`
					text-transform: capitalize;
					font-family: 'Noto Serif', serif;
				`}>
				Our Sponsored Partners
			</h1>
			{publishers.map((publisher) => (
				<div
					className={css`
						display: flex;
						flex-direction: column;
					`}>
					<div
						className={css`
							border-left: 4px solid #e9353b;
							padding: 0 10px;
						`}>
						<h2
							className={css`
								font-size: 19px;
							`}>
							{publisher.name}
						</h2>
						<h3
							className={css`
								font-size: 12px;

								font-weight: 400;
							`}>
							{publisher.category}
						</h3>
					</div>
					<div
						className={css`
							padding: 10px 15px;
						`}>
						{publisher.description}
					</div>
					<Link
						to={`https://instagram.com/${publisher.handle}`}
						className={css`
							margin: 0 15px;
							display: flex;
							align-items: center;
							gap: 5px;
							background-color: #e9353b;
							color: #f5f5f5;
							width: fit-content;
							padding: 5px 15px;
							border-radius: 5px;
							font-size: 14px;
							font-weight: 600;
							text-decoration: none;
						`}>
						<BiLogoInstagramAlt style={style} />
						{publisher.handle}
					</Link>
				</div>
			))}
		</Layout>
	);
};
export default AllPages;
