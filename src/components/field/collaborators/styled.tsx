import styled from "styled-components";
import { transparentize } from "polished";

export const StyledLabel = styled.label`
	font-weight: 500;
	margin-bottom: 0.4rem;
`;

export const StyledInput = styled.input`
	appearance: none;
	background-color: transparent;
	border-radius: 0;
	border: 1px solid grey;
	color: black;
	display: block;
	font-size: 1rem;
	line-height: 1.5;
	padding: 0.5rem 0.4rem;
	transition: all 0.15s ease-in-out;
	width: 100%;

	&:focus {
		outline: none;
		border-color: grey;
		box-shadow: 0 0 0 0.2rem ${transparentize(0.75, "black")};
	}

	&:disabled {
		background-color: white;
		opacity: grey;
	}
`;
