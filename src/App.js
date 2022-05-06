// import lottie from "lottie-web";

import { Main } from "./components/main";
import WordSphere from 'wordsphere';


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
