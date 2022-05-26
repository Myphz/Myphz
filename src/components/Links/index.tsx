import React, { useEffect } from "react";
import "./style.sass";

export const Links: React.FC = () => {
  let elements: HTMLCollectionOf<Element>;
  let navbar: Element;
  let root: Element;

  let currentPageIndex = 0;
  let scrollTimeout = false;

  function redirect(i: number) {
    if (i < 0 || i >= elements.length || scrollTimeout) return;
    // Prevent scrolling for 100ms
    scrollTimeout = true;
    setTimeout(() => scrollTimeout = false, 100);
    currentPageIndex = i;
    root.scrollTo(0, root.scrollTop + elements[i].getBoundingClientRect().top - navbar.clientHeight);
  }

  useEffect(() => {
    elements = document.getElementsByClassName("renderIfVisible")!;
    navbar = document.getElementsByClassName("links-aside")![0];
    root = document.getElementById("root")!;

    root.addEventListener("wheel", (e: Event) => {
      e.preventDefault();
      const { deltaY } = e as WheelEvent;
      if (deltaY < 0) redirect(currentPageIndex-1);
      else redirect(currentPageIndex+1);
    });
  }, []);

  return (
    <aside className="links-aside">
      <nav tabIndex={1} className="navbar">
        <ol start={0} className="h6 text-secondary" onClick={() => (document.activeElement as HTMLElement).blur()}>
          <li style={{"--order": 1} as React.CSSProperties}><a onClick={() => redirect(0)}>ABOUT</a></li>
          <li style={{"--order": 2} as React.CSSProperties}><a onClick={() => redirect(1)}>SKILLS</a></li>
          <li style={{"--order": 3} as React.CSSProperties}><a onClick={() => redirect(2)}>PROJECTS</a></li>
          <li style={{"--order": 4} as React.CSSProperties}><a onClick={() => redirect(3)}>CONTACT</a></li>
          <li style={{"--order": 5} as React.CSSProperties}><a>RESUME</a></li>
        </ol>
      </nav>
    </aside>
  );
}