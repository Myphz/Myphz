import React from "react";
import "./style.sass";

export const Footer: React.FC = () => {
  return (
    <footer>
      <aside className="contacts-aside">
        <a href="https://github.com/Myphz" target="_blank">
          <img src="/icons/github.svg" />
        </a>
        <a href="mailto:danielscanu45@outlook.it" target="_blank">
          <img src="/icons/email.svg" />
        </a>
        <hr />
      </aside>
      <div className="scroll-text">
        <span>SCROLL <img src="/icons/arrow.svg" /></span>
      </div>
    </footer>
  );
}