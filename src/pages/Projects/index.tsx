import React, { useEffect, useRef } from "react";
import { TypeText } from "../../components/TypeText";
import { fetchImage } from "../../utilities/fetch";
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
    document.ontouchmove = ({ changedTouches }) => setFontWeight(changedTouches[0].clientX, changedTouches[0].clientY);
    // Cleanup function
    return () => { document.onmousemove = null };
  }, []);

  return (
    <section className="justify-center flex-column">
      <section className="talk-cheap">
        <h6 className="color-secondary block">HOVER IT</h6>
        <h1 className="color-primary font-title talk-cheap block no-trail" ref={mainText}>
          <TypeText text='“TALK IS CHEAP.' delay={200} speed={100} blinkDelay={50} singleLetterSpan /><br />
          <TypeText text='SHOW ME THE CODE”' delay={2500} speed={100} blinkDelay={2200} singleLetterSpan />
        </h1>
        <h5 className="color-secondary block">- Linus Torvalds</h5>
      </section>
      <h4 className="details">For more details, visit <a className="a-link" href="https://github.com/Myphz" target="_blank">my GitHub profile</a></h4>
      <section className="containers space-between">
        <div className="container flex-column">
          <a className="flex-column flex-1" href="https://wwwallet.app" target="_blank">
            <span className="align-center">
              <img src={fetchImage("wwwallet")}/>
              <h3 className="wwwallet">wwwallet</h3>
            </span>
            <p className="flex-1 align-center">
              Cryptocurrency managing web and mobile
              application to calculate and
              display many useful statistics,
              updated real-time with several charts
              and visualizations.
            </p>
          </a>
        </div>
        <div className="container flex-column">
          <a className="flex-column flex-1" href="https://sortvisualizer.com" target="_blank">
            <span className="align-center">
              <img src={fetchImage("sortvisualizer")}/>
              <h3 className="sortvisualizer">SORT VISUALIZER</h3>
            </span>
            <p className="flex-1 align-center">
              Web application designed to better
              understand sorting algorithms by
              displaying and visualizing them. Built entirely with vanilla JavaScript, HTML and CSS
            </p>
          </a>
        </div>
      </section>
    </section>
  );
}