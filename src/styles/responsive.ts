import {
	css,
	FlattenSimpleInterpolation,
	ThemeProps,
	Interpolation,
} from "styled-components";

type ThemeInterpolation =
	| FlattenSimpleInterpolation
	| Interpolation<ThemeProps<Theme>>;

export const declareCssForMediumView = (
	breakPointStyles: ThemeInterpolation
) => css`
	@media screen and (min-width: ${({ theme }) =>
			`${theme.mediumBreakPoint}${theme.breakPointUnit}`}) {
		${breakPointStyles}
	}
`;
