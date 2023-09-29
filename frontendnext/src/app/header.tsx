'use client';

import { HeaderMenuStyle, HeaderStyle } from '@/utils/styles';
import { css } from '@emotion/css';
import Link from 'next/link';

export default function Header() {
	return (
		<HeaderStyle>
			<Link
				href="/"
				className={css`
					color: #e9353b;
					padding: 0 10px;
					margin: 10px 0;
					border-right: 1.5px solid #000;
					font-size: 36px;
					text-decoration: none;
					font-weight: 600;
					font-family: 'Noto Serif', serif;
				`}>
				Bulletin
			</Link>
			<HeaderMenuStyle>
				<li>Stories</li>
				<li>Creator</li>
				<li>Community</li>
				<li>Subscribe</li>
			</HeaderMenuStyle>
		</HeaderStyle>
	);
}
