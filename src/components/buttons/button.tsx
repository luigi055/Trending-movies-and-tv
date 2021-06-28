import React from "react";
import { StyledButton } from "./styled";

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ children, variant, ...props }, ref) => {
		return (
			<StyledButton ref={ref} type="button" variant={variant} {...props}>
				{children}
			</StyledButton>
		);
	}
);

Button.displayName = "Button";

export default Button;
