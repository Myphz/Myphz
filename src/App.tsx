import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import "./assets/sass/_utilities.sass";
import { Layout } from "./components/Layout";

const App: React.FC = () => {
  return (
    <>
      <Layout />
      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </main>
    </>
  );
}

export default App;