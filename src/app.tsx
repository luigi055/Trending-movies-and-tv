import { useEffect } from "react";
import ApplicationRouter from "routes";
import { BrowserRouter as Router } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ThemeProvider } from "styled-components";
import { refreshSession } from "services/redux/features/authentication/actions";
import { GlobalStyles, defaultTheme } from "styles";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshSession());
  }, [dispatch]);

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Router>
        <div className="App">
          <ApplicationRouter />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
