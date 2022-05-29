import React from "react";
import { fetchIcon } from "../../utilities/fetch";
import "./style.sass";

export const Footer: React.FC = () => {
  return (
    <footer>
      <aside className="contacts-aside">
        <a href="https://github.com/Myphz" target="_blank">
          <img src={fetchIcon("github")} alt="github" />
        </a>
        <a href="https://www.linkedin.com/in/danielscanu" target="_blank">
          <img src={fetchIcon("linkedin")} alt="linkedin" />
        </a>
        <a href="mailto:danielscanu45@outlook.it" target="_blank">
          <img src={fetchIcon("email")} alt="email" />
        </a>
        <hr />
      </aside>
      <div className="scroll-text">
        <span>SCROLL <img src={fetchIcon("arrow")} alt="arrow" /></span>
      </div>
    </footer>
  );
}