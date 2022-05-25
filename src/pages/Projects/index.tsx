import React, { useEffect, useRef, useState } from "react";
import { TypeText } from "../../components/TypeText";
import "./style.sass";

export const Projects: React.FC = () => {
  const mainText = useRef<HTMLHeadingElement>(null);

  function setFontWeight(x: number, y: number) {
    if (!mainText.current) return;
    Array.from(mainText.current.children).forEach(spans => {
      Array.from(spans.children).forEach(span => {
        const position = span.getBoundingClientRect();
        // Distance between cursor and this span
        const distance = Math.ceil(Math.sqrt((position.x - x) ** 2 + (position.y - y) ** 2));
        span.setAttribute("style", `font-variation-settings: 'wght' ${900 - distance * 2};`);
      });
    });
  };

  useEffect(() => {
    document.onmousemove = ({ pageX, pageY }) => setFontWeight(pageX, pageY);
  })

  return (
    <main className="justify-center flex-column">
      <section className="talk-cheap noselect">
        <h6 className="color-secondary">HOVER IT</h6>
        <h1 className="color-primary font-title talk-cheap" ref={mainText}>
          <TypeText text='“TALK IS CHEAP.' delay={200} speed={120} blinkDelay={50} singleLetterSpan /><br />
          <TypeText text='SHOW ME THE CODE”' delay={2500} speed={120} blinkDelay={2200} singleLetterSpan />
        </h1>
        <h5 className="color-secondary">- Linus Torvalds</h5>
      </section>
    </main>
  );
}