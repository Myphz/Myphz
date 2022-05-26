import React from "react";
import { Contact } from "../Contact";
import { Home } from "../Home";
import { Projects } from "../Projects";
import { Skills } from "../Skills";
import RenderIfVisible from "react-render-if-visible";

export const Main: React.FC = () => {
  const pages = [Home, Skills, Projects, Contact];
  return (
    <>
      {pages.map((Page, i) => (
        <RenderIfVisible defaultHeight={2000} stayRendered={true} key={i}>
          <Page />
        </RenderIfVisible>
      ))}
    </>
  );
}