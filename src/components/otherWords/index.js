import React from "react";
import {
  DivOther,
  DidPane,
  IconDiv,
  NavLinkM,
  Divtec,
  Glidere,
} from "./styled";

import Glider from "react-glider";
import "glider-js/glider.min.css";
import { AiTwotoneFolderAdd } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";
import { NavLink } from "react-router-dom";

export const OtherWords = () => {
  return (
    <DivOther>
      <h2>Other Noteworthy Projects</h2>

      <Glidere draggable hasArrows hasDots slidesToShow={3} slidesToScroll={5}>
        <DidPane>
          <IconDiv>
            <NavLinkM to="/">
              <AiTwotoneFolderAdd />
            </NavLinkM>
            <NavLinkM to="/">
              <FiExternalLink />
            </NavLinkM>
          </IconDiv>
          <div>
            <h3>
              <NavLinkM href="https://physionic-3yhliwcxg-zuiersadien.vercel.app">Physionic</NavLinkM>
            </h3>
          </div>
          <p>
           Pagina web destinada al uso de creacion de citas en un hospital
          </p>
          <Divtec>
            <p>react </p>
            <p>js </p>
            <p>styled components</p>
          </Divtec>
        </DidPane>
        <DidPane>
          <IconDiv>
            <NavLinkM to="/">
              <AiTwotoneFolderAdd />
            </NavLinkM>
            <NavLinkM to="/">
              <FiExternalLink />
            </NavLinkM>
          </IconDiv>
          <div>
            <h3>
              <NavLinkM href="https://game-life-phi.vercel.app">game life</NavLinkM>
            </h3>
          </div>
          <p>
          El Juego de la vida es un autómata celular diseñado por el matemático británico John Horton Conway en 1970. Es un juego de cero jugadores, en el que su evolución es determinada por un estado inicial, sin requerir intervención adicional.
          </p>
          <Divtec>
            <p>js </p>
            <p>css </p>
            <p>html </p>
          </Divtec>
        </DidPane>{" "}
        <DidPane>
          <IconDiv>
            <NavLinkM to="/">
              <AiTwotoneFolderAdd />
            </NavLinkM>
            <NavLinkM to="/">
              <FiExternalLink />
            </NavLinkM>
          </IconDiv>
          <div>
            <h3>
              <NavLinkM to="/">Prometsur web</NavLinkM>
            </h3>
          </div>
          <p>
          Aplicación web destinada al rubro de la metálica ,ubicada en arequipa usando como tecnologías principales React js ,Mongodb , Express NodeJS
          </p>
          <Divtec>
            <p>react </p>
            <p>js </p>
            <p>styled componets </p>
          </Divtec>
        </DidPane>{" "}
  
      </Glidere>
    </DivOther>
  );
};
