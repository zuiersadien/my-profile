import styled from "styled-components";
import { NavLink } from "react-router-dom";
export const CustonMinWords = styled.div`
  width: 80%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto;
    margin-bottom:4rem ;
  position: relative;
`;
export const TextDiv = styled.div`
  height: 100%;
  grid-column:${props=>props.variant==="bold"?"7/13":"1 / 7"};
  grid-row: 1/2;
  text-align: ${props=>props.variant==="bold"?"right":"left"};
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const ImgDiv = styled.div`
  grid-column: ${props=>props.variant==="bold"?"1 / 8":"6/13"};
  grid-row: 1/2;
  height: 100%;
  background-color: rgba(0, 173, 181, 1);
  display: flex;
  flex-direction: row-reverse;
  border-left: 5px #00adb5 solid;
  
  
  position: relative;
  transition: 1s;
  &:hover{
    background-color: rgba(0, 173, 181, 0);
  }
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
  opacity: 0.7;
  transition: 1s;
  display: flex;
  flex-direction: row-reverse;
  min-width: 500px;
  object-fit: cover;
  
  &:hover{
    opacity:1;
  }
`;
export const Linktitulo = styled(NavLink)`
  text-decoration: none;
`;
export const H3 = styled.a`
  font-size: 3rem;
  color: #222831;
`;
export const Resalto = styled.div`
  background-color: rgb(238, 238, 238,0.9);

  position: relative;
  z-index: 1;
  width: 100%;
  padding: 2.5rem;
  & > p {
    position: relative;
    height: 100%;
    width: 100%;
    top: 0;
    right: 0;
    font-size: 1.8rem;

  }
`;
export const DivPs = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-family: "SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", monospace;
  font-size: 1.3rem;
  justify-content: space-around;
`;

export const ImgLink = styled(NavLink)`
  width: 100%;
  height: 100%;
`;

export const IconDiv = styled.div`
  font-size: 2rem;
`;

export const LinkIcono = styled(NavLink)`
  font-size: 2rem;
  text-decoration: none;
  color: #00adb5;
  padding: 1rem;
`;
