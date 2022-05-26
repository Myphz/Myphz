import React from "react";
import "./style.sass";

export const Links: React.FC = () => {
  return (
    <aside className="links-aside">
      <nav tabIndex={1} className="navbar">
        <ol start={0} className="h6 text-secondary" onClick={() => (document.activeElement as HTMLElement).blur()}>
          <li style={{"--order": 1} as React.CSSProperties}><a>ABOUT</a></li>
          <li style={{"--order": 2} as React.CSSProperties}><a>SKILLS</a></li>
          <li style={{"--order": 3} as React.CSSProperties}><a>PROJECTS</a></li>
          <li style={{"--order": 4} as React.CSSProperties}><a>CONTACT</a></li>
          <li style={{"--order": 5} as React.CSSProperties}><a>RESUME</a></li>
        </ol>
      </nav>
    </aside>
  );
}