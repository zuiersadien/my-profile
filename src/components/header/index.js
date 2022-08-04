import React, { useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";

import {
  Libarra,
  UlBarra,
  ContainerBarra,
  NavBarra,
  LogoBarra,
  UlDiv,
  LinkBarra,
} from "./styles";
import lottie from "lottie-web";

export const Header = () => {

  
  return (
    <ContainerBarra>
      <NavBarra >
        <UlBarra>
          <LogoBarra>
            <LinkBarra to="/">

            </LinkBarra>
          </LogoBarra>
          <UlDiv>
            <Libarra>
              <LinkBarra href="#info">1. About</LinkBarra>
            </Libarra>
            <Libarra>
              <LinkBarra href="#skills">2. My skills</LinkBarra>
            </Libarra>
            <Libarra>
              <LinkBarra href="#words">3. My words</LinkBarra>
            </Libarra>
            <Libarra>
              <LinkBarra href="#practices">4. My practices</LinkBarra>
            </Libarra>
            <Libarra>
              <LinkBarra href="/">5. My Contacts</LinkBarra>
            </Libarra>
          </UlDiv>
        </UlBarra>
      </NavBarra>
    </ContainerBarra>
  );
};
