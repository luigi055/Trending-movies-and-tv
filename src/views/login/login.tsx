import { useDispatch } from "react-redux";
import { LoginStyled } from "./styled";
import { PageLayout, Button } from "components";
import { login } from "services/redux/features/authentication/actions";

function Login() {
	const dispatch = useDispatch();

	const handleLoginClick = () => {
		dispatch(login());
	};

	return (
		<PageLayout>
			<LoginStyled>
				<Button
					data-testid="github-login__btn"
					variant="primary"
					onClick={handleLoginClick}
				>
					Login with github
				</Button>
			</LoginStyled>
		</PageLayout>
	);
}

export default Login;
