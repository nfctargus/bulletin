import Link from 'next/link';
import { css } from '@emotion/css';

type Props = {
	text: string;
	href: string;
};
export default function StyledLink({ text, href }: Props) {
	return (
		<Link
			href={href}
			className={css`
				font-size: 14px;
				color: #e9353b;
				font-weight: 600;
				text-decoration: none;
				&:hover {
					text-decoration: underline;
				}
			`}>
			{`${text} →`}
		</Link>
	);
}
