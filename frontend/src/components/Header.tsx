import { css } from '@emotion/css';
import { HeaderMenuStyle, HeaderStyle } from '../utils/styles';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<HeaderStyle>
			<Link
				to="/"
				className={css`
					color: #e9353b;
					padding: 0 10px;
					margin: 10px 0;
					border-right: 1.5px solid #000;
					font-size: 36px;
					text-decoration: none;
					font-weight: 600;
					display: flex;
					align-items: center;
					font-family: 'Noto Serif', serif;
				`}>
				Bulletin
				<img
					className={css`
						width: 50px;
						margin: 0 5px 0 2px;
						aspect-ratio: 1/1;
					`}
					src="/BulletinLogoSmall.png"
				/>
			</Link>
			<HeaderMenuStyle>
				<li>
					<Link to={'/'}>Stories</Link>
				</li>
				<li>
					<Link to={'/'}>Creators</Link>
				</li>
				<li>
					<Link to={'/'}>Community</Link>
				</li>
				<li>
					<Link to={'/'}>Subscribe</Link>
				</li>
			</HeaderMenuStyle>
		</HeaderStyle>
	);
};
export default Header;
