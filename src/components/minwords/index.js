import React from "react";
import {CustonMinWords,TextDiv,IconDiv,ImgDiv,LinkIcono,Image,H3,Resalto,ImgLink,Linktitulo,DivPs} from "./styles";
import { NavLink } from "react-router-dom";
import { AiOutlineGithub } from 'react-icons/ai';
import { FiExternalLink } from 'react-icons/fi';

export const Minword = (props,left) => {
  return (
    <CustonMinWords >
      <TextDiv variant={props.variant}>
        <Linktitulo to="/">
          <p>proyecto V.3</p>
        </Linktitulo>
          <H3 href={props.link}>{props.title}</H3>
        <Resalto>
          <p>{props.textp}</p>
        </Resalto>
        <DivPs>
          {props.tecnologias.map((i) => (
            <p key={props.key}>{i}</p>
          ))}
        </DivPs>
        <IconDiv>
          <LinkIcono to="/">
              <AiOutlineGithub/>
          </LinkIcono>
          <LinkIcono to="/">
              <FiExternalLink/>
          </LinkIcono>
        </IconDiv>
      </TextDiv>
      <ImgDiv variant={props.variant}>
            <ImgLink to="/">
            <Image src={props.img} alt="" />
            </ImgLink>
  
      </ImgDiv>
    </CustonMinWords>
  );
};
