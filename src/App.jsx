import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Box } from "@mui/material";
import IDE from "./Pages/IDE";
import TopBar from "./Components/TopBar";
import LeftSideBar from "./Components/LeftSideBar";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";

function App() {
  const [count, setCount] = useState(0);
  const [isSelected, setisSelected] = useState(0);
  const changeSelected = (k) => {
    setisSelected(k);
  };
  const [code, setcode] = useState(
    '// Online Java Compiler\n// Use this editor to write, compile and run your Java code online\n\nclass HelloWorld {\n    public static void main(String[] args) {\n        System.out.println("Hello, World!");\n    }\n}'
  );
  const changeCode = (k) => {
    setcode(k);
  };
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={[
            <TopBar />,
            <LeftSideBar
              isSelected={isSelected}
              changeSelected={changeSelected}
              code={code}
              changeCode={changeCode}
            />,
            <IDE isSelected={isSelected} code={code} changeCode={changeCode} />,
          ]}
        />
        <Route path="/home" element={[<TopBar/>,<LandingPage />]} />
      </Routes>
    </>
  );
}

export default App;
