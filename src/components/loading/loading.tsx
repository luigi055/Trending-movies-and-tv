import styled from "styled-components";

const Loading = styled.div`
	align-items: center;
	color: ${({ theme }) => theme.onPrimaryColor};
	display: flex;
	font-size: var(--h3);
	height: 100%;
	justify-content: center;
	width: 100%;
`;

export default Loading;
