import { FunctionComponent } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { MOVIES, TV_SHOWS, LOGIN } from "./routes-config";
import { PrivateRoute, PublicRoute } from "./components";
import Movies from "views/movies";
import TV from "views/tv";
import Login from "views/login";

const ClientRouter: FunctionComponent = () => (
  <Switch>
    <PublicRoute exact path={LOGIN} component={Login} />
    <PrivateRoute exact path={MOVIES} component={Movies} />
    <PrivateRoute exact path={TV_SHOWS} component={TV} />
    <Route path="*">
      <Redirect to={LOGIN} />
    </Route>
  </Switch>
);

export default ClientRouter;
