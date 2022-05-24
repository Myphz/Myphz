import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import "./assets/sass/_utilities.sass";
import { Layout } from "./components/Layout";
import { Skills } from "./pages/Skills";

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Layout />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;