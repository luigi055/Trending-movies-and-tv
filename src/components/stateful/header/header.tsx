import { logout } from "services/redux/features/authentication/actions";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "services/redux/features/authentication/selectors";
import UserCard from "components/cards/user-card";
import styled from "styled-components";

const HeaderStyled = styled.header`
	display: flex;
	justify-content: flex-end;
	padding: 10px 15px;
`;

function Header() {
	const user = useSelector(selectUser);
	const dispatch = useDispatch();

	const handleLogoutClick = async () => {
		dispatch(logout());
	};

	return (
		<HeaderStyled>
			<button onClick={handleLogoutClick}>sign out</button>
			<UserCard name={user?.name} email={user?.email} avatar={user?.avatar} />
		</HeaderStyled>
	);
}

export default Header;
