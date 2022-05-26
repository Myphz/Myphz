import React from "react";
import { Link } from "react-router-dom";
import "./style.sass";

export const Links: React.FC = () => {
  return (
    <nav tabIndex={1} className="navbar">
      <ol start={0} className="h6 text-secondary">
        <li style={{"--order": 1} as React.CSSProperties}><Link to="/">ABOUT</Link></li>
        <li style={{"--order": 2} as React.CSSProperties}><Link to="/skills">SKILLS</Link></li>
        <li style={{"--order": 3} as React.CSSProperties}><Link to="/projects">PROJECTS</Link></li>
        <li style={{"--order": 4} as React.CSSProperties}><Link to="/contact">CONTACT</Link></li>
        <li style={{"--order": 5} as React.CSSProperties}><Link to="/resume">RESUME</Link></li>
      </ol>
    </nav>
  );
}