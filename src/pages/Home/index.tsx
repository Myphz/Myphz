import React from "react";
import { Button } from "../../components/Button";
import { TypeText } from "../../components/TypeText";
import "./style.sass";

export const Home: React.FC = () => {
  return (
    <main className="align-center">
      <section>
        <h1 className="main-text font-title color-primary no-trail block" id="about">
          <TypeText text="Daniel" delay={1000} speed={100} blinkDelay={0} />
        </h1>

        <h3 className="thin secondary-text color-secondary no-trail block">
          <TypeText
            text="PROGRAMMER AND PROFESSIONAL GOOGLE SEARCHER"
            delay={2800}
            speed={80}
            blinkDelay={2300}
            charDelete={27}
            replace="WEB DEVELOPER"
          />
        </h3>
        <section className="h4 info">
          <p className="no-trail">
            Self-taught programmer motivated by passion and personal projects.
            Expert of searching bugs on Google and quickly scanning the best StackOverflow answers.
          </p>
          <a>
            <Button>CONTACT ME</Button>
          </a>
        </section>
      </section>
    </main>
  );
}