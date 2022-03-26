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
              <NavLinkM to="/">dsfsdfsdf dsfs dfsd sdfsd f</NavLinkM>
            </h3>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            excepturi tenetur, libero vero ratione ipsam omnis voluptatibus
            dolore sit nulla porro officia, deleniti doloribus recusandae eaque
            ea! Possimus, culpa architecto.
          </p>
          <Divtec>
            <p>Sublime </p>
            <p>Atom </p>
            <p>iTerm2 </p>
            <p>Hyper</p>
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
              <NavLinkM to="/">dsfsdfsdf dsfs dfsd sdfsd f</NavLinkM>
            </h3>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            excepturi tenetur, libero vero ratione ipsam omnis voluptatibus
            dolore sit nulla porro officia, deleniti doloribus recusandae eaque
            ea! Possimus, culpa architecto.
          </p>
          <Divtec>
            <p>Sublime </p>
            <p>Atom </p>
            <p>iTerm2 </p>
            <p>Hyper</p>
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
              <NavLinkM to="/">dsfsdfsdf dsfs dfsd sdfsd f</NavLinkM>
            </h3>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            excepturi tenetur, libero vero ratione ipsam omnis voluptatibus
            dolore sit nulla porro officia, deleniti doloribus recusandae eaque
            ea! Possimus, culpa architecto.
          </p>
          <Divtec>
            <p>Sublime </p>
            <p>Atom </p>
            <p>iTerm2 </p>
            <p>Hyper</p>
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
              <NavLinkM to="/">dsfsdfsdf dsfs dfsd sdfsd f</NavLinkM>
            </h3>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            excepturi tenetur, libero vero ratione ipsam omnis voluptatibus
            dolore sit nulla porro officia, deleniti doloribus recusandae eaque
            ea! Possimus, culpa architecto.
          </p>
          <Divtec>
            <p>Sublime </p>
            <p>Atom </p>
            <p>iTerm2 </p>
            <p>Hyper</p>
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
              <NavLinkM to="/">dsfsdfsdf dsfs dfsd sdfsd f</NavLinkM>
            </h3>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            excepturi tenetur, libero vero ratione ipsam omnis voluptatibus
            dolore sit nulla porro officia, deleniti doloribus recusandae eaque
            ea! Possimus, culpa architecto.
          </p>
          <Divtec>
            <p>Sublime </p>
            <p>Atom </p>
            <p>iTerm2 </p>
            <p>Hyper</p>
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
              <NavLinkM to="/">dsfsdfsdf dsfs dfsd sdfsd f</NavLinkM>
            </h3>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            excepturi tenetur, libero vero ratione ipsam omnis voluptatibus
            dolore sit nulla porro officia, deleniti doloribus recusandae eaque
            ea! Possimus, culpa architecto.
          </p>
          <Divtec>
            <p>Sublime </p>
            <p>Atom </p>
            <p>iTerm2 </p>
            <p>Hyper</p>
          </Divtec>
        </DidPane>
      </Glidere>
    </DivOther>
  );
};
