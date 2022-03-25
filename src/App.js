// import lottie from "lottie-web";

import { Main } from "./components/main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./components/styles/GlobalStyles";
import React, { useEffect, useRef } from "react";
function App() {
  const container = useRef(null);
  // useEffect(() => {
  //   lottie.loadAnimation({
  //     container: container.current,
  //     renderer:"svg",
  //     loop: true,
  //     autoplay: true,
  //     path:'https://assets7.lottiefiles.com/packages/lf20_j6nmheu0.json'
  //   });
  // });

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
