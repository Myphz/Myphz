import React from "react";
import { Link } from "react-router-dom";
import "./style.sass";

export const Links: React.FC = () => {
  return (
    <nav className="navbar">
      <ol start={0} className="h6 text-secondary">
        <li><Link to="/">ABOUT</Link></li>
        <li><Link to="/skills">SKILLS</Link></li>
        <li><Link to="/projects">PROJECTS</Link></li>
        <li><Link to="/contact">CONTACT</Link></li>
        <li><Link to="/resume">RESUME</Link></li>
      </ol>
    </nav>
  );
}