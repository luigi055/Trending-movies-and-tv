import styled from "styled-components";

export const StyledButton = styled.button<ButtonProps>`
	cursor: pointer;
	display: inline-block;
	font-weight: bold;
	text-align: center;
	vertical-align: middle;
	user-select: none;
	border: 1px solid transparent;
	padding: 0.4rem 0.75rem;
	font-size: 1rem;
	line-height: 1.5;
	border-radius: 0;
	transition: all 0.15s ease-in-out;
	background: ${({ variant, theme }) =>
		variant === "primary" ? theme.primaryColor : theme.backgroundColor};
	color: ${({ variant, theme }) =>
		variant === "primary" ? theme.onPrimaryColor : theme.onBackgroundColor};

	&:focus {
		outline: 0;
	}
`;
