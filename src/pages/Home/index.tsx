import React from "react";
import { TypeText } from "../../components/TypeText";
import "./home.sass";

export const Home: React.FC = () => {
  return (
    <main className="justify-center align-center noselect">
      <section>
        <h1 className="main-text text-primary">
          <TypeText text="Daniel" delay={1000} />
        </h1>

        <h2 className="thin secondary-text text-secondary">
          <TypeText text="PROGRAMMER AND PROFESSIONAL GOOGLE SEARCHER" delay={2800} />
        </h2>
      </section>
    </main>
  );
}