import styled from "styled-components";

const HeaderStyled = styled.header`
	align-items: center;
	display: flex;
	justify-content: space-between;
	padding: 10px 15px;
`;

const Header: React.FC = ({ children }) => {
	return <HeaderStyled>{children}</HeaderStyled>;
};

export default Header;
