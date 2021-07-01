import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducers from "./root-reducers";
import rootSagas from "./root-sagas";
import storeInitialState from "./initial-state";
import composeEnhancer from "./debug/compose-enhancer";

const sagaMiddleware = createSagaMiddleware();

const setStore = (initialState: State = storeInitialState) => {
  const store = createStore(
    rootReducers,
    initialState,
    composeEnhancer(applyMiddleware(sagaMiddleware))
  );
  sagaMiddleware.run(rootSagas);

  return store;
};

export default setStore;
