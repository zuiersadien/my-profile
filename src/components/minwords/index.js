import React from "react";
import {CustonMinWords,TextDiv,ImgDiv,Image,H3,Resalto,Linktitulo,DivPs} from "./styles";
import { NavLink } from "react-router-dom";
import { AiOutlineGithub } from 'react-icons/ai';
import { FiExternalLink } from 'react-icons/fi';

export const Minword = (props) => {
  return (
    <CustonMinWords>
      <TextDiv>
        <Linktitulo to="/">
          <H3>{props.title}</H3>
        </Linktitulo>
        <Resalto>
          <p>{props.textp}</p>
        </Resalto>
        <DivPs>
          {props.tecnologias.map((i) => (
            <p>{i}</p>
          ))}
        </DivPs>
        <div>
          <NavLink to="/">
              <AiOutlineGithub/>
          </NavLink>
          <NavLink to="/">
              <FiExternalLink/>
          </NavLink>
        </div>
      </TextDiv>
      <ImgDiv>
            <NavLink to="/">
            <Image src={props.img} alt="" />
            </NavLink>
  
      </ImgDiv>
    </CustonMinWords>
  );
};
