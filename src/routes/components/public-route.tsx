import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { selectSessionToken } from "services/redux/features/authentication/selectors";
import { DASHBOARD } from "../routes-config";
import { CustomRouteProps } from "./types";

export const PublicRoute: React.FC<CustomRouteProps> = ({
	component: Component,
	...rest
}) => {
	const isLoggedIn = !!useSelector(selectSessionToken);

	return (
		<Route
			{...rest}
			render={(props) => {
				return isLoggedIn ? (
					<Redirect to={DASHBOARD} />
				) : (
					<Component {...props} />
				);
			}}
		/>
	);
};
