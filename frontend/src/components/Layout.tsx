import { css } from '@emotion/css';
import Footer from './Footer';
import Header from './Header';

type Props = {
	children: React.ReactNode;
};
const Layout = ({ children }: Props) => {
	return (
		<div
			className={css`
				display: grid;
				place-items: center;
			`}>
			<div
				className={css`
					padding: 24px 86px;
					gap: 50px;
					display: flex;
					justify-content: center;
					flex-direction: column;

					width: 80vw;
					@media (min-width: 1280px) {
						display: grid;
						place-items: center;
						width: 55vw;
					}
				`}>
				<Header />
				{children}
				<Footer />
			</div>
		</div>
	);
};
export default Layout;
