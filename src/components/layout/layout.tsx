import styled from "styled-components";

export const PageLayout = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
	justify-content: start;
`;

export const Container = styled.div`
	display: flex;
	flex-grow: 100;
	justify-content: start;
`;

export const CenteredMainElement = styled.div`
	align-items: center;
	display: flex;
	flex-grow: 100;
	justify-content: center;
`;

export const Main = styled.main`
	border-radius: 10px 0 0 0;
	box-shadow: 0px 2px 16px 0 rgba(0, 0, 0, 0.16);
	flex-grow: 100;
	overflow: hidden;
`;
