import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const ContactDiv = styled.div`
/* 
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  z-index: 10;
  justify-content: space-between; */
`;

export const IconLink = styled.a`
  text-decoration: none;
  color: #222831;
  font-size: 4rem;
  display: flex;
  justify-content: center;
  margin: 0.5rem;
`;

export const DivIcon = styled.div`
  display: flex;
  align-content: center;
  flex-direction: column;
  justify-content: flex-end;
  width: 10%;
  height: 100vh;
  height: 100%;
  position: fixed;
  left: 0;
  bottom: 0;

`;
export const DivCorreo = styled.div`
  display: flex;
  align-content: center;
  flex-direction: column;
  justify-content: flex-end;
  width: 10%;
  height: 100vh;
  position: fixed;
  right:0 ;
  bottom: 0;


`;
export const EmailLink = styled.a`
  font-family: "Roboto Mono", monospace;
  text-decoration: none;
  color: #000000;
  font-size: 1.4rem;
  writing-mode: vertical-rl;
  margin-bottom: 1rem;

  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Line = styled.span`
  width: 1px;
  height: 20rem;
  background-color:#393E46;
  margin: 0 auto;
`;
