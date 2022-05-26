import React from "react";
import { Links } from "../Links";
import { Contacts } from "../Contacts";
import initializeOGL from "../../utilities/ogl";
import "./style.sass";

export const Layout: React.FC = () => {
  initializeOGL();
  return (
    <header>
      <Links />
      <Contacts />
    </header>
  );
}