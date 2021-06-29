import { FunctionComponent } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { DASHBOARD, SETTINGS, LOGIN, ROOT } from "./routes-config";
import { PrivateRoute, PublicRoute } from "./components";
import Dashboard from "views/dashboard";
import Settings from "views/settings";
import Login from "views/login";

const ClientRouter: FunctionComponent = () => (
	<Switch>
		<Route exact path={ROOT}>
			<Redirect to={LOGIN} />
		</Route>
		<PrivateRoute exact path={DASHBOARD} component={Dashboard} />
		<PrivateRoute exact path={SETTINGS} component={Settings} />
		<PublicRoute exact path={LOGIN} component={Login} />
	</Switch>
);

export default ClientRouter;
