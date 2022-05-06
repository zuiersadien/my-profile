import styled from "styled-components";
import { NavLink } from "react-router-dom";

import Glider from "react-glider";


export const Glidere = styled(Glider)`
  perspective: 700px;
`;
export const DivOther = styled.div`
  width: 80%;
  margin: 0 auto;
  &>h2{
      text-align: center;
      padding: 3rem;
      font-size: 3rem;
  }
`;
export const DidPane = styled.div`
  padding: 2rem 1.75rem;
  margin: 2rem !important;
  background-color: rgb(57, 62, 70,0.2);
  margin: 0 auto;


  display: flex;
  flex-direction: column;
  & div > h3 > a {
    color: rgb(34, 40, 49);
    font-size: 2.2rem;
  }
  & p {
    font-size: 1.8rem;
  }
`;
export const IconDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 4rem;
  & a > svg > {
    color: rgb(34, 40, 49);
  }
`;
export const NavLinkM = styled.a`
  text-decoration: none;
  color: rgb(34, 40, 49);
`;

export const Divtec = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1rem;
  justify-content:  space-between;
 &>p{
    font-size: 1.6rem;
    
 }
`;
