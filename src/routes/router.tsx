import { FunctionComponent } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { DASHBOARD, SETTINGS, LOGIN } from "./routes-config";
import { PrivateRoute, PublicRoute } from "./components";
import Dashboard from "views/dashboard";
import Settings from "views/settings";
import Login from "views/login";

const ClientRouter: FunctionComponent = () => (
  <Switch>
    <PublicRoute exact path={LOGIN} component={Login} />
    <PrivateRoute exact path={DASHBOARD} component={Dashboard} />
    <PrivateRoute exact path={SETTINGS} component={Settings} />
    <Route path="*">
      <Redirect to={LOGIN} />
    </Route>
  </Switch>
);

export default ClientRouter;
