import lottie from "lottie-web";
import "./app.css";

import React, { useEffect, useRef } from "react";

function App() {
  const container = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer:"svg",
      loop: true,
      autoplay: true,
      path:'https://assets2.lottiefiles.com/packages/lf20_u4yrau.json'
    });
  });

  return (
    <div className="App" id="lot" ref={container}>
      asdsadsaasdsdfasdf
    </div>
  );
}

export default App;
