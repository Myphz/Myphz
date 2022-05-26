import React from "react";
import "./assets/sass/_utilities.sass";
import { Layout } from "./components/Layout";
import { Main } from "./pages/Main";

const App: React.FC = () => {
  return (
    <>
      <Layout />
      <Main />
    </>
  );
}

export default App;