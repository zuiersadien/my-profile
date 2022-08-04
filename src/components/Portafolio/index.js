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
      path: "https://assets4.lottiefiles.com/packages/lf20_xqjdisla.json",
    });
  });
  return (
    <PortafolioDiv>
      <Texto>
        <div>
          <h2>Sobre Mi</h2>
          <p>
           Mi nombre es Elvis Wilfredo Taco kana .Soy un apasionado de la programación , informática y diseno web. 
           Radico actualmente en Arequipa ,y estoy con todas las ganas de buscar nuevas experiencias y aprender de ellas . 
          </p>
        </div>
        <BarrasDiv>
          <div>
            <p>Front End</p>

          </div>
          <div>
            <p>Back End</p>
  
          </div>
          <div>
            <p>React</p>

          </div>
          <div>
            <p>Vuejs</p>

          </div>
        </BarrasDiv>
      </Texto>
      <SpinnerDiv>
        <SpinningText text="react    html   VUEJS   JavaScript    Css    express  Mongodb  git  boostrap  ">
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
