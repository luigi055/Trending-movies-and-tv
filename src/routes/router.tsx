import { FunctionComponent } from "react";
import { Switch } from "react-router-dom";
import { DASHBOARD, SETTINGS, LOGIN } from "./routes-config";
import { PrivateRoute, PublicRoute } from "./components";
import Dashboard from "views/dashboard";
import Settings from "views/settings";
import Login from "views/login";

const ClientRouter: FunctionComponent = () => (
	<Switch>
		<PrivateRoute exact path={DASHBOARD} component={Dashboard} />
		<PrivateRoute exact path={SETTINGS} component={Settings} />
		<PublicRoute path={LOGIN} component={Login} exact />
	</Switch>
);

export default ClientRouter;
