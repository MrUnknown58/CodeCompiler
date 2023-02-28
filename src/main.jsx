// import { ThemeProvider } from "@material-tailwind/react";
import { CssBaseline, StyledEngineProvider } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});
const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline>
        <StyledEngineProvider injectFirst>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </StyledEngineProvider>
      </CssBaseline>
    </ThemeProvider>
  </React.StrictMode>
);
