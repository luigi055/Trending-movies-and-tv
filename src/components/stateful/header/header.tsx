import { logout } from "services/redux/features/authentication/actions";
import { useDispatch } from "react-redux";

function Header() {
	const dispatch = useDispatch();
	const handleLogoutClick = async () => {
		dispatch(logout());
	};

	return (
		<header>
			<button onClick={handleLogoutClick}>sign out</button>
		</header>
	);
}

export default Header;
