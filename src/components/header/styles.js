import styled from "styled-components";
import { NavLink } from "react-router-dom";



export const ContainerBarra=styled.div`
    width: 100%;
    height:10%;
    position: fixed;
    z-index: 20;
    
`
export const NavBarra=styled.nav`
  width: 100%;
  height: 100%;
`
export const UlBarra =styled.ul`
  width: 100%;
  height: 100%;
 `
 export const LogoBarra = styled.div`
    height: 30%;
 `;
 

 export const UlDiv=styled.div`

    display: flex;
    align-items:center;


`

export const Libarra = styled.li`
    padding: 0.5rem 0.2rem ;
    width: 100%;
    text-align: end;
    display: flex;


`;
export const LinkBarra =styled.a`
  font-size: 1.6rem;
  text-align: center;
  width: 100%;


  color: black;
`;

