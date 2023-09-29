import { css } from '@emotion/css';

export default function Loading() {
	return (
		<div
			className={css`
				background: #940202;
				border-radius: 5px;
				width: 100vw;
				height: 100vh;
			`}>
			LOADING
		</div>
	);
}
