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
              <LinkBarra to="/">1. About</LinkBarra>
            </Libarra>
            <Libarra>
              <LinkBarra to="/s">2. My skills</LinkBarra>
            </Libarra>
            <Libarra>
              <LinkBarra to="/">3. My words</LinkBarra>
            </Libarra>
            <Libarra>
              <LinkBarra to="/">4. My practices</LinkBarra>
            </Libarra>
            <Libarra>
              <LinkBarra to="/">5. My Contacts</LinkBarra>
            </Libarra>
          </UlDiv>
        </UlBarra>
      </NavBarra>
    </ContainerBarra>
  );
};
