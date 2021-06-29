import { useDispatch } from "react-redux";
import styled from "styled-components";
import { CenteredMainElement, PageLayout, Button } from "components";
import { login } from "services/redux/features/authentication/actions";

const LoginStyled = styled(CenteredMainElement)`
	background: ${({ theme }) => theme.primaryVariantColor};
`;

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
