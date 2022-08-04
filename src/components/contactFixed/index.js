import React from "react";
import { NavLink } from "react-router-dom";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillCodepenCircle,
  
} from "react-icons/ai";
import { IconLink, DivIcon, DivCorreo, EmailLink, Line,ContactDiv } from "./styles";

export const ContactFixed = () => {
  return (
    <ContactDiv>
      <DivIcon>
        <IconLink href="https://github.com/zuiersadien">
          <AiFillGithub />
        </IconLink>
        <IconLink href="https://www.linkedin.com/in/evis-wilfredo-taco-kana-1b970b199/">
          <AiFillLinkedin />
        </IconLink>
        <IconLink href="https://www.linkedin.com/in/evis-wilfredo-taco-kana-1b970b199/">
          <AiFillCodepenCircle />
        </IconLink>
        <Line></Line>
      </DivIcon>
      <DivCorreo>
        <EmailLink href="mailto:zuiersadien@gmail.com">zuiersadien@gmail.com</EmailLink>
        <Line></Line>
      </DivCorreo>
    </ContactDiv>
  );
};
