import React from "react";
import "./assets/sass/_utilities.sass";
import { Layout } from "./components/Layout";
import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";
import { Skills } from "./pages/Skills";
import RenderIfVisible from "react-render-if-visible";

const pages = [Home, Skills, Projects, Contact];

const App: React.FC = () => {
  return (
    <>
      <Layout />
      {pages.map((Page, i) => (
        <RenderIfVisible defaultHeight={2000} stayRendered={true} key={i}>
          <Page />
        </RenderIfVisible>
      ))}
    </>
  );
}

export default App;