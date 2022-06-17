import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Home from "./pages/HomePage";
import PersistentDrawerRight from "./components/Drawer";

function App() {
  const theme = createTheme();
  return (
    <>
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </>
  );
}

export default App;
