import { NavLink ,Link } from "react-router-dom";
import styled from "styled-components";

export const Contenedor = styled.div`
  width: 80%;

  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
  flex-wrap: wrap;
  padding-top:5rem;

`;

export const DivTitulo = styled.div`
  min-width: 300px;
  width: 50%;
  @media (max-width: 300px) {
    width: 100%;
  }
`;

export const DivImagen = styled.div`
  width: 50%;
`;
export const H1 = styled.h1`
  font-size: 6rem;
  padding: 1.5rem;
`;
export const Olas = styled.div`
  width: 100%;
  margin: 0 auto;
  transform: rotate(180deg);
  position: fixed;
  z-index: -1;
`;
export const Parrafo = styled.p`
  font-size: 2rem;
  padding: 2rem;

`;
export const Contactame = styled.div`

  padding: 2rem;
  display: flex;
  justify-content: flex-start;
  text-align: center;
  z-index: 20;
  position: relative;
`;
export const LinkContacto = styled.a`
  font-size: 3.5rem;
  padding: 2rem;

  color: #222831;
  text-align: center;

`;
