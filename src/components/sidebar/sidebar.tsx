import styled, { css } from "styled-components";
import { declareCssForMediumView } from "styles/responsive";

const Aside = styled.aside`
	flex-basis: 30%;
	padding-bottom: calc(${({ theme }) => theme.gutter} * 2);
	padding-top: calc(${({ theme }) => theme.gutter} * 2);

	${declareCssForMediumView(css`
		flex-basis: 30%;
		max-width: 200px;
	`)}
`;

const Sidebar: React.FC = ({ children, ...props }) => {
	return <Aside>{children}</Aside>;
};

export default Sidebar;
