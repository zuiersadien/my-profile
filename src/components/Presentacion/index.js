import React, { useRef, useEffect } from "react";
import lottie from "lottie-web";
import { Contenedor, DivTitulo, LinkContacto,DivImagen, H1, Olas ,Parrafo,Contactame} from "./styles";
import { NavLink } from "react-router-dom";
export const Presentacion = () => {
  const imagen = useRef(null);
  const refy = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: imagen.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "https://assets5.lottiefiles.com/packages/lf20_3qv42phq.json",
    });
    lottie.loadAnimation({
      container: refy.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "https://assets7.lottiefiles.com/packages/lf20_tzewfdoj.json",
    });
  });

  return (
    <div>
     
      <Contenedor>

      <Olas ref={refy}></Olas>
        <DivTitulo>
          <div>
            <H1>Hi,</H1>
            <H1>I’m will,</H1>
            <H1>full stak devoloper</H1>
          </div>
          <div>
            <Parrafo>
              I’m a software engineer specializing in building (and occasionally
              designing) exceptional digital experiences. Currently, I’m focused
              on building accessible, human-centered products at Upstatement.
            </Parrafo>
            <Contactame>
            <LinkContacto to="/">
              Contact me!
            </LinkContacto>
            </Contactame>
          </div>
        </DivTitulo>
        <DivImagen>
          <div ref={imagen}></div>
        </DivImagen>
      </Contenedor>
    </div>
  );
};
