import { CenteredMainElement, PageLayout, Card, Button } from "components";
import { useDispatch } from "react-redux";
import { login } from "services/redux/features/authentication/actions";
import styled from "styled-components";

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
				<Button variant="primary" onClick={handleLoginClick}>
					Login with github
				</Button>
			</LoginStyled>
		</PageLayout>
	);
}

export default Login;
