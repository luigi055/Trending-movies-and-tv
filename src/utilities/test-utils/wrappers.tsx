import { FunctionComponent } from "react";
import { createMemoryHistory } from "history";
import { ThemeProvider } from "styled-components";
import { Router } from "react-router-dom";
import { defaultTheme } from "styles";
import { setStore } from "services/redux";
import { Provider } from "react-redux";
import { Store } from "redux";

export const ComponentWithTheme: FunctionComponent = ({ children }) => (
  <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
);

export const ConnectedComponent: FunctionComponent<{
  store?: Store;
  history?: any;
}> = ({ store = setStore(), history = createMemoryHistory(), children }) => (
  <Provider store={store}>
    <ComponentWithTheme>
      <Router history={history}>{children}</Router>;
    </ComponentWithTheme>
  </Provider>
);
