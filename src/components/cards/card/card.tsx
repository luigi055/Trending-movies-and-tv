import styled from "styled-components";

export const Card = styled.div`
	background: ${({ theme }) => theme.backgroundColor};
	box-shadow: 0px 0px 16px 1px rgba(0, 0, 0, 0.1);
	color: ${({ theme }) => theme.onBackgroundColor};
`;
