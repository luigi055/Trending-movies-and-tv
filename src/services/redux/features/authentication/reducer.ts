import initialState from "./initial-state";
import { AUTH_LOGIN_SUCCESS, AUTH_LOGOUT } from "./actions";

const authenticationStateHandlers: Record<string, Function> = {
  [AUTH_LOGIN_SUCCESS]: (
    _state: State["authentication"],
    action: ActionPayloadRequired<State["authentication"]>
  ) => action.payload,
  [AUTH_LOGOUT]: () => initialState,
};

export const reduceAuthentication = (
  state: State["authentication"] = initialState,
  action: ActionStandard<IUser>
) => {
  const handler = authenticationStateHandlers[action.type];
  const hasHandler = !!handler;

  return hasHandler ? handler(state, action) : state;
};
