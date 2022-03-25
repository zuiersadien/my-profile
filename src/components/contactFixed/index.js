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
        <IconLink to="./">
          <AiFillGithub />
        </IconLink>
        <IconLink to="./">
          <AiFillLinkedin />
        </IconLink>
        <IconLink to="./">
          <AiFillCodepenCircle />
        </IconLink>
        <Line></Line>
      </DivIcon>
      <DivCorreo>
        <EmailLink to="./">zuiersadien@gmail.com</EmailLink>
        <Line></Line>
      </DivCorreo>
    </ContactDiv>
  );
};
