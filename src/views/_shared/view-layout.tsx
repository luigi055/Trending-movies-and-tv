import styled, { css } from "styled-components";
import {
	declareCssForMediumView,
	declareCssForLargeView,
	declareCssForExtraLargeView,
} from "styles/responsive";

export const ScrollBox = styled.div`
	padding: ${({ theme }) => theme.gutter};
	height: calc(
		100vh - 154px
	); /* 100% screen height - header + title decoration height */
	width: 100%;
	overflow-y: overlay;
	font-family: sans-serif;
	padding: 10px;
	display: grid;
	grid-template-columns: 1fr;

	::-webkit-scrollbar-track {
		-webkit-box-shadow: inset 0 0 6px ${({ theme }) => theme.onPrimaryColor};
		background-color: transparent;
	}

	::-webkit-scrollbar {
		width: 3px;
		background-color: transparent;
	}

	::-webkit-scrollbar-thumb {
		background-color: ${({ theme }) => theme.primaryVariantColor};
	}

	${declareCssForMediumView(css`
		grid-template-columns: 1fr 1fr;
	`)}

	${declareCssForLargeView(css`
		grid-template-columns: 1fr 1fr 1fr;
	`)}

	${declareCssForExtraLargeView(css`
		grid-template-columns: 1fr 1fr 1fr 1fr;
	`)}
`;
