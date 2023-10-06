import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const SectionWrapperStyle = styled.div`
	display: grid;
	place-items: center;
	width: 100%;
`;
export const HeaderStyle = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	font-size: 20px;
`;
export const HeaderMenuStyle = styled.ul`
	display: flex;
	justify-content: space-around;
	list-style: none;
	color: #1f1f1f;
	font-size: 16px;
	padding: 0 5px;
	a {
		text-decoration: none;
		padding: 15px 15px;
		margin: 0;
		height: 100%;
		border-radius: 5px;
		&:hover {
			background: #ccc;
			transition: all 0.1s ease;
		}
	}
`;
export const FooterSocialLinksListStyle = styled.ul`
	display: flex;
	justify-content: space-between;
	align-items: center;
	list-style: none;
	width: 80%;
	padding: 10px 0;
	.socialIcons {
		background-color: #e9353b;
		fill: #f5f5f5;
		border-radius: 50%;
		padding: 2px;
		height: 60%;
		width: 60%;
	}
	li {
		display: grid;
		place-items: center;
		border-radius: 50%;
		width: 38px;
		height: 38px;
		box-shadow: 0 2px 5px #cccccc9c;
	}
	li:hover {
		cursor: pointer;
		.socialIcons {
			fill: #e9353b;
			background: #f5f5f5;
			transition: all 0.3s linear;
		}
	}
`;
export const FooterMenuListStyle = styled.ul`
	list-style: none;
	font-size: 12px;
	padding: 6px;

	li {
		padding-bottom: 10px;
		color: #434343;
		:first-of-type {
			font-size: 16px;
			font-weight: 600;
			padding-bottom: 8px;
			color: #000;
		}
	}
	li:hover {
		text-decoration: underline;
		cursor: pointer;
		transition: all 0.2s ease;
		:first-of-type {
			text-decoration: none;
			cursor: default;
		}
	}
`;
export const SectionHeaderStyle = styled.h1`
	font-size: 24px;
	font-weight: 600;
	color: #1f1f1f;
`;
type SkeletonProps = {
	width: string;
	height: string;
	round?: boolean;
};

const dynamicStyle = (props: SkeletonProps) =>
	css`
		width: ${props.width};
		height: ${props.height};
		background: linear-gradient(-45deg, #b4b4b4, #b4b4b4, #f5f5f5, #f5f5f5);
		background-size: 500% 500%;
		animation: gradient 15s ease infinite;
		border-radius: ${props.round ? '50%' : '5px'};
		@keyframes gradient {
			0% {
				background-position: 0% 50%;
			}
			50% {
				background-position: 100% 50%;
			}
			100% {
				background-position: 0% 50%;
			}
		}
	`;

export const SkeletonStyle = styled.div`
	${dynamicStyle};
`;
export const ArticleSectionStyle = styled.div`
	margin: 0 10px 20px 0;
	font-size: 16px;
	h2 {
		font-size: 22px;
		font-weight: 600;
		padding-left: 5px;
	}
`;
export const QuoteContainerStyle = styled.div`
	border-left: 5px solid #e9353b;
	padding-left: 15px;
	margin: 24px 72px;
	font-size: 20px;
	font-style: italic;
	font-weight: 400;
	display: flex;
	justify-content: center;
	flex-direction: column;

	small {
		margin-top: 8px;
		font-size: 14px;
		font-style: normal;
	}
`;
export const ArticleSectionImageStyle = styled.div`
	display: flex;
	justify-content: left;
	place-items: center;
	flex-direction: column;
	padding: 15px 0;

	img {
		max-width: 65%;
		border-radius: 5px;
		margin-right: auto;
	}
	div {
		padding: 8px;
		max-width: 65%;
		font-size: 14px;
		margin-right: auto;
	}
`;
export const LoginRegisterButton = styled.button`
	padding: 17px 24px;
	background-color: #e9353b;
	color: #f5f5f5;
	border-radius: 5px;
	border: none;
	width: fit-content;
	cursor: pointer;
	:hover {
		background-color: #971d21;
		transition: all 0.2s ease;
	}
`;
