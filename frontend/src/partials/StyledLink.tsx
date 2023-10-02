import { Link } from 'react-router-dom';
import { css } from '@emotion/css';

type Props = {
	text?: string;
	href: string;
};
const StyledLink = ({ text, href }: Props) => {
	return (
		<Link
			to={href}
			className={css`
				font-size: 14px;
				color: #e9353b;
				font-weight: 600;
				text-decoration: none;
				&:hover {
					text-decoration: underline;
				}
			`}>
			{text ? `${text} →` : `→`}
		</Link>
	);
};

export default StyledLink;
