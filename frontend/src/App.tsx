import { ThemeProvider } from "styled-components";
import theme from "./styles/Theme";
import Reset from "./styles/Reset";
import GlobalStyles from "./styles/GlobalStyles";
import Router from "./Router";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Reset />
      <GlobalStyles />
      <Router />
    </ThemeProvider>
  );
}

export default App;
