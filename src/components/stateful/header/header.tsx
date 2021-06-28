import { logout } from "services/redux/features/authentication/actions";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "services/redux/features/authentication/selectors";

function Header() {
	const user = useSelector(selectUser);
	const dispatch = useDispatch();

	const handleLogoutClick = async () => {
		dispatch(logout());
	};

	return (
		<header>
			<button onClick={handleLogoutClick}>sign out</button>

			<div>
				<img src={user?.avatar} alt={`${user?.name}'s avatar`} />
				<h3>{user?.name}</h3>
				<h4>{user?.email}</h4>
			</div>
		</header>
	);
}

export default Header;
