import React from "react";
import { Button } from "../../components/Button";
import { TypeText } from "../../components/TypeText";
import "./style.sass";

export const Home: React.FC = () => {
  let animationEnd = false;
  setTimeout(() => animationEnd = true, 2250);

  function toggleGlow({ target }: { target: EventTarget }) {
    if (!animationEnd) return;
    (target as HTMLSpanElement).classList.toggle("text-glow");
  };

  // Scroll to the contact page
  function scrollBottom() {
    const root = document.getElementById("root")!;
    root.scrollTo(0, root.scrollHeight);
  };

  return (
    <section className="align-center">
      <section>
        <h1 className="main-text color-primary no-trail block">
          <span onMouseEnter={toggleGlow} onMouseLeave={toggleGlow}>Daniel</span>
        </h1>

        <h3 className="font-title secondary-text color-secondary no-trail block">
          <TypeText
            text="PROGRAMMER AND PROFESSIONAL GOOGLE SEARCHER"
            delay={2800}
            speed={80}
            blinkDelay={2300}
            charDelete={27}
            replace="WEB DEVELOPER"
          />
        </h3>
        <section className="h4 info anim">
          <p className="no-trail">
            Self-taught programmer motivated by passion and personal projects.
            Expert of searching bugs on Google and quickly scanning the best StackOverflow answers.
          </p>
          <a onClick={scrollBottom}>
            <Button>CONTACT ME</Button>
          </a>
        </section>
      </section>
    </section>
  );
}