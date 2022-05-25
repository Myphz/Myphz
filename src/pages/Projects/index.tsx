import React from "react";
import { TypeText } from "../../components/TypeText";
import "./style.sass";

export const Projects: React.FC = () => {
  return (
    <main className="justify-center flex-column">
      <section className="talk-cheap noselect">
        <h6 className="color-secondary">HOVER IT</h6>
        <h1 className="color-primary font-title talk-cheap">
          <TypeText text='“TALK IS CHEAP.' delay={200} speed={120} blinkDelay={50} singleLetterSpan /><br />
          <TypeText text='SHOW ME THE CODE”' delay={2500} speed={120} blinkDelay={2200} />
        </h1>
        <h5 className="color-secondary">- Linus Torvalds</h5>
      </section>
    </main>
  );
}