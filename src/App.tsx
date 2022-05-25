import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import "./assets/sass/_utilities.sass";
import { Layout } from "./components/Layout";
import { Skills } from "./pages/Skills";
import { Projects } from "./pages/Projects";
import { Contact } from "./pages/Contact";

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Layout />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;