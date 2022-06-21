import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Home from "./pages/HomePage";
import PersistentDrawerRight from "./components/Drawer";
import BuyShino from "./pages/BuyShino";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import swal from '@sweetalert/with-react'
import { Button } from "react-bootstrap";
 

function App() {
  const theme = createTheme();
  const sweetBabo = ()=>{
    swal(
      <div>
        <h1>Hello world!</h1>
        {/* <p>
          This is now rendered with JSX!
        </p> */}
      </div>
    )
  }
  return (
    <>
    <Button onClick={sweetBabo}>click</Button>
      <ThemeProvider theme={theme}>
        {/* <Home /> */}
        <Routes>
          <Route index path="/" element={<Home/>}/>
          <Route path="Buyshino" element={<BuyShino/>}/>
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
