import React, { useEffect, useRef } from "react";

import logo from "../styles/logo.png";
import lottie from "lottie-web";
import SpinningText from "../hooks/spiner";
import { FaReact, FaGitAlt, FaNodeJs } from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiJavascript,
  SiBootstrap,
  SiGraphql,
} from "react-icons/si";
import { DiLinux, DiCss3Full } from "react-icons/di";
import { AiOutlineHtml5 } from "react-icons/ai";

import {
  PortafolioDiv,
  Texto,
  SpinnerDiv,
  BarrasDiv,
  ImgSpiner,
  DivIcon,
} from "./styled";

export const Portafolio = () => {
  const img = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: img.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "https://assets3.lottiefiles.com/packages/lf20_douhbfp2.json",
    });
  });
  return (
    <PortafolioDiv>
      <Texto>
        <div>
          <h2>About Me</h2>
          <p>
            Hello! My name is Brittany andt. My interest in web development
            started back in 2012 when I decided to try editing custom Tumblr
            themes — turns out hacking together a custom reblog button taught me
            a lot about HTML & CSS!
          </p>
        </div>
        <BarrasDiv>
          <div>

            <p>Front End</p>
            <div></div>
          </div>
          <div>
            <p>Back End</p>
            <div></div>
          </div>
          <div>
            <p>React</p>
            <div></div>
          </div>
        </BarrasDiv>
      </Texto>
      <SpinnerDiv>
        <SpinningText text="react    html   angular   JavaScript    Css    express       ">
          <ImgSpiner ref={img}>
            <DivIcon>
              <FaReact />
            </DivIcon>
            <DivIcon>
              <SiExpress />
            </DivIcon>
            <DivIcon>
              <FaGitAlt />
            </DivIcon>
            <DivIcon>
              <SiMongodb />
            </DivIcon>
            <DivIcon>
              <DiLinux />
            </DivIcon>
            <DivIcon>
              <DiCss3Full />
            </DivIcon>
            <DivIcon>
              <AiOutlineHtml5 />
            </DivIcon>
            <DivIcon>
              <SiJavascript />
            </DivIcon>
            <DivIcon>
              <SiBootstrap />
            </DivIcon>
            <DivIcon>
              <SiGraphql />
            </DivIcon>
            <DivIcon>
              <FaNodeJs />
            </DivIcon>
          </ImgSpiner>
        </SpinningText>
      </SpinnerDiv>
    </PortafolioDiv>
  );
};
