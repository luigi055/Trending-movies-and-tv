import { FunctionComponent } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { DASHBOARD, SETTINGS, LOGIN, ROOT } from "./routes-config";
import { PrivateRoute, PublicRoute } from "./components";
import Dashboard from "views/dashboard";
import Settings from "views/settings";
import Login from "views/login";
import ViewHeader from "views/_shared/view-header";

const ClientRouter: FunctionComponent = () => (
	<Switch>
		<Route exact path={ROOT}>
			<Redirect to={LOGIN} />
		</Route>
		<PublicRoute exact path={LOGIN} component={Login} />
		<PrivateRoute exact path={DASHBOARD} component={Dashboard} />
		<PrivateRoute exact path={SETTINGS} component={Settings} />
	</Switch>
);

export default ClientRouter;
