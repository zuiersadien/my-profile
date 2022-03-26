import React from "react";
import { ContactFixed } from "../contactFixed";
import { Header } from "../header/index";
import { Presentacion } from "../Presentacion";
import { OtherWords } from "../otherWords";
import { Portafolio } from "../Portafolio";
import { Words } from "../words";
export const Main = () => {
  return (
    <div>
      <Header />
      <Presentacion/>
      <ContactFixed/>
      <Portafolio/>
      <Words/>
      <OtherWords/>
    </div>
  );
};
