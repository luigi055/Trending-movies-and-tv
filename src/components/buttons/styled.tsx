import styled from "styled-components";

export const StyledButton = styled.button<ButtonProps>`
  background: ${({ variant, theme }) =>
    variant === "primary" ? theme.primaryColor : theme.backgroundColor};
  border-radius: 0;
  border: 1px solid transparent;
  color: ${({ variant, theme }) =>
    variant === "primary" ? theme.onPrimaryColor : theme.onBackgroundColor};
  cursor: pointer;
  display: inline-block;
  font-size: 1rem;
  font-weight: bold;
  line-height: 1.5;
  padding: 0.4rem 0.75rem;
  text-align: center;
  transition: all 0.15s ease-in-out;
  user-select: none;
  vertical-align: middle;

  &:focus {
    outline: 0;
  }
`;
