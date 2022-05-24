import React from "react";
import { TypeText } from "../../components/TypeText";
import "./home.sass";

export const Home: React.FC = () => {
  return (
    <main className="align-center noselect">
      <section>
        <h1 className="main-text color-primary">
          <TypeText text="Daniel" delay={1000} speed={120} blinkDelay={0} />
        </h1>

        <h3 className="thin secondary-text color-secondary">
          <TypeText
            text="PROGRAMMER AND PROFESSIONAL GOOGLE SEARCHER"
            delay={2800}
            speed={100}
            blinkDelay={2300}
            charDelete={27}
            replace="WEB DEVELOPER"
          />
        </h3>
        <p className="h4 info">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Fusce sit amet massa sed tellus rutrum auctor. Vestibulum a bibendum erat.
          Donec aliquet egestas nisl.
        </p>
      </section>
    </main>
  );
}