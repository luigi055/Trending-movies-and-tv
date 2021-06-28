import styled from "styled-components";

export const TitleDecoration = styled.div`
	padding: calc(${({ theme }) => theme.gutter} * 2);
	background: ${({ theme }) => theme.primaryVariantColor};
	color: ${({ theme }) => theme.onPrimaryColor};
	border-radius: 10px 0 0 0;
`;
