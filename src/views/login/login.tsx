import { useDispatch } from "react-redux";
import { login } from "services/redux/features/authentication/actions";

function Login() {
	const dispatch = useDispatch();

	const handleLoginClick = async () => {
		dispatch(login());
	};

	return (
		<div className="Login">
			<button onClick={handleLoginClick}>Login with github</button>
		</div>
	);
}

export default Login;
