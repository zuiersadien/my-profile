// import lottie from "lottie-web";

import { Main } from "./components/main";
import AnimatedCursor from "react-animated-cursor";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./components/styles/GlobalStyles";
import React, { useEffect, useRef } from "react";
function App() {
  const container = useRef(null);
  useEffect(() => {});

  return (
    <div className="App" ref={container}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <AnimatedCursor
                  innerSize={8}
                  outerSize={8}
                  color="34, 40, 49"
                  outerAlpha={0.2}
                  innerScale={0.7}
                  outerScale={5}
                  trailingSpeed={3}
                />
                <GlobalStyle />
                <Main />
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
