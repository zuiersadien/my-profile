import React from "react";
import { Minword } from "../minwords";
import { WordsDiv, H2 } from "./styles";

export const Words = () => {
  return (
    <WordsDiv>
      <div>
        <H2>Algunos trabajos realizados</H2>
      </div>
      <div>
      <Minword
          title="Activo Digital "
          variant="bold"
          key="1"
          link="https://activodigital.pe"
          textp="Aplicación web destinada a la compra y venta de USDT en el Peru usando como tecnologias principales ,Js ,PHP ,Svelte ,Vue ,Mongodb , Express y MySQL "
          tecnologias={["Vuejs", "Svelte ", "Mongodb", "bulmaCss"]}
          img="https://i.ibb.co/zXQTX21/image-2022-08-03-223135254.png"
        />
        <Minword
          title="Prometsur web"
          variant=""
          key="2"
          link="https://prometsruweb.herokuapp.com"
          textp="Aplicación web destinada al rubro de la metálica ,ubicada en arequipa usando como tecnologías principales  React js ,Mongodb , Express NodeJS"
          tecnologias={["VS Code", "React ", "styled compoents", "CSS"]}
          img="https://i.ibb.co/DMDvcj4/image-2022-08-03-222051746.png"
        />

        <Minword
          title="Cat WIKI"
          variant="bold"
          key="2"
          link="https://cat-wiki-9t9ezhlwt-zuiersadien.vercel.app"
          textp="Aplicación web destinada a la búsqueda y la raza de gatos  ,usando como tecnologías principales  React js "
          tecnologias={["VS Code", "react ", "API REST", "nodejs"]}
          img="https://i.postimg.cc/LSDyh7Zr/image-2022-05-06-111201479.png"
        />
        <Minword
          title="vue TODO"
          variant=""
          key="3"
          link="https://vue-todo-l7828v8bh-zuiersadien.vercel.app"
          textp="Aplicación de creación de notas , usando como tecnologia Vuejs "
          tecnologias={["JS", "VUEJS ", "HTML", "CSS"]}
          img="https://i.postimg.cc/cxh5SkQG/image-2022-05-06-111711837.png"
        />
      </div>
    </WordsDiv>
  );
};
