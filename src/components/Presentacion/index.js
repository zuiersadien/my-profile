import React, { useRef, useEffect } from "react";
import lottie from "lottie-web";
import {
  Contenedor,
  DivTitulo,
  LinkContacto,
  DivImagen,
  H1,
  Olas,
  Parrafo,
  Contactame,
} from "./styles";
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
    <div id="about">
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
              Hola, soy un programador web ,especializado en la construcción (y
              ocasionalmente diseñando) experiencias digitales excepcionales.
              Actualmente, estoy enfocado en la creación de productos accesibles
              Experto creando paginas web con las tecnologias de react y Vue .
            </Parrafo>
            <Contactame>
              <LinkContacto href="https://www.linkedin.com/in/evis-wilfredo-taco-kana-1b970b199/">Contactame!</LinkContacto>
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
