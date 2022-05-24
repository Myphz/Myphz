import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { TypeText } from "../../components/TypeText";
import "./home.sass";

export const Home: React.FC = () => {
  return (
    <main className="align-center">
      <section>
        <h1 className="main-text color-primary noselect">
          <TypeText text="Daniel" delay={1000} speed={120} blinkDelay={0} />
        </h1>

        <h3 className="thin secondary-text color-secondary noselect">
          <TypeText
            text="PROGRAMMER AND PROFESSIONAL GOOGLE SEARCHER"
            delay={2800}
            speed={100}
            blinkDelay={2300}
            charDelete={27}
            replace="WEB DEVELOPER"
          />
        </h3>
        <section className="h4 info">
          <p>
            Self-taught programmer motivated by passion and personal projects.
            Expert of searching bugs on Google and quickly scanning the best StackOverflow answers.
          </p>
          <Link to="/contact">
            <Button>CONTACT ME</Button>
          </Link>
        </section>
      </section>
    </main>
  );
}