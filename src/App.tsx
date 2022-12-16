import React, { useEffect } from "react";
import "./assets/sass/_utilities.sass";
import { Layout } from "./components/Layout";
import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";
import { Skills } from "./pages/Skills";
import { Footer } from "./components/Footer";

const pages = [Home, Skills, Projects, Contact];

const App: React.FC = () => {
  const isMobile = !!getComputedStyle(document.body).getPropertyValue('--ismobile');

  useEffect(() => {
    function inViewport(entries: IntersectionObserverEntry[]) {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add("anim-started");
      });
    };

    const obs = new IntersectionObserver(inViewport, { threshold: isMobile ? .25 : .7 });
    const elements = document.querySelectorAll(".anim");
    elements.forEach(element => obs.observe(element));
  }, []);

  return (
    <>
      <Layout />
      {pages.map((Page, i) => (
        <Page />
      ))}
      <Footer />
    </>
  );
}

export default App;