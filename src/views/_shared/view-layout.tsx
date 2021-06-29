import styled from "styled-components";

export const ScrollBox = styled.div`
	padding: ${({ theme }) => theme.gutter};
	height: calc(
		100vh - 154px
	); /* 100% screen height - header + title decoration height */
	width: 100%;
	overflow-y: overlay;
	font-family: sans-serif;
	padding: 10px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;
