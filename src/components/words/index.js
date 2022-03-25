import React from "react";
import { Minword } from "../minwords";
import {WordsDiv}from "./styles"

export const Words = () => {
  return (
    <WordsDiv>
      <Minword title="hola"  
      textp="A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm."
      tecnologias={["hola","hola2","hola3","hola4","hola5"]}
      img="https://atrevete.academy/blog/wp-content/uploads/2020/12/que-es-el-marketing-visual-y-como-usarlo.jpg"
      />
    </WordsDiv>
  );
};
