import React from "react";
import { StyledButton } from "./styled";

const Button = React.forwardRef<HTMLButtonElement>(
	({ children, ...props }, ref) => {
		return (
			<StyledButton ref={ref} type="button" {...props}>
				{children}
			</StyledButton>
		);
	}
);

Button.displayName = "Button";

export default Button;
