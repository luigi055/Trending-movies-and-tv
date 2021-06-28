import UserCard from "components/cards/user-card";
import styled from "styled-components";

const HeaderStyled = styled.header`
	align-items: center;
	display: flex;
	justify-content: space-between;
	padding: 10px 15px;
`;

const Header: React.FC<HeaderProps> = ({ title, user = {} }) => {
	return (
		<HeaderStyled>
			<h1>{title}</h1>
			<UserCard name={user?.name} email={user?.email} avatar={user?.avatar} />
		</HeaderStyled>
	);
};

export default Header;
