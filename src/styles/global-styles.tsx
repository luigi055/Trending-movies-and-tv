import {
	createGlobalStyle,
	GlobalStyleComponent,
	css,
} from "styled-components";
import { declareCssForMediumView } from "./responsive";

const GlobalStyles: GlobalStyleComponent<
	{ theme: Theme },
	{}
> = createGlobalStyle`
${({ theme }) =>
	css`
		:root {
			--base-size: 0.95rem;
			--type-scale: 1.1;
			--h3: calc(var(--base-size) * var(--type-scale));
			--h2: calc(var(--h3) * var(--type-scale));
			--h1: calc(var(--h2) * var(--type-scale));
			--text-sm: calc(var(--base-size) / var(--type-scale));
		}

		${declareCssForMediumView(css`
			:root {
				--base-size: 1rem;
				--type-scale: 1.2;
			}
		`)}

		*,
    *::after,
    *::before {
			box-sizing: border-box;
			border: 0;
			margin: 0;
			padding: 0;
		}

		::selection {
			background-color: ${theme.primaryColor};
			color: ${theme.onPrimaryColor};
		}

		html,
		body {
			background: ${theme.backgroundColor};
			font-size: var(--base-size);
			font-family: ${theme.fontFamily}, sans-serif;
			color: ${theme.onBackgroundColor};
			line-height: 1.15;
			text-size-adjust: 100%;
			height: 100%;
			margin: 0;
		}

		#root,
		.App {
			height: 100%;
			position: relative;
		}

		h1 {
			font-size: var(--h1);
		}

		h2 {
			font-size: var(--h2);
		}

		h3 {
			font-size: var(--h3);
		}

		p,
		h4 {
			font-size: var(--base-size);
		}

		small,
		.text-small,
		h5 {
			font-size: var(--text-sm);
		}

		textarea {
			resize: none;
			width: 100%;
		}

		img {
			display: block;
		}
	`}`;

export default GlobalStyles;
