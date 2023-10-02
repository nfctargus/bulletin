import { css } from '@emotion/css';
import { SectionHeaderStyle } from '../utils/styles';
import StyledLink from './StyledLink';

type Props = {
	headerText: string;
	href?: string;
	width?: string;
	showSeeMoreText?: boolean;
};
const SectionHeader = ({ headerText, href, width, showSeeMoreText }: Props) => {
	return (
		<div
			className={css`
				display: flex;
				justify-content: space-between;
				align-items: center;
				width: ${width ? width : '100%'};
				margin-bottom: 25px;
			`}>
			<SectionHeaderStyle>{headerText}</SectionHeaderStyle>
			{showSeeMoreText ? <StyledLink text="See More" href={href ? href : '/'} /> : <StyledLink href={href ? href : '/'} />}
		</div>
	);
};
export default SectionHeader;
