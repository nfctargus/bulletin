import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/react';

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
	padding: 10px;

	li {
		padding: 10px 15px;
		border-radius: 3px;
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
	width: 60%;
	padding: 10px 0;
	.socialIcons {
		background-color: #e9353b;
		fill: #fff;
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
			background: #fff;
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
