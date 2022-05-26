import React, { useEffect, useState } from "react";
import "./style.sass";

export const Links: React.FC = () => {
  let elements: HTMLCollectionOf<Element>;
  let navbar: Element;
  let root: Element;

  let [currentPageIndex, setCurrentPageIndex] = useState(0);
  let scrollTimeout = false;

  function redirect(toAdd: number) {
    const newIdx = currentPageIndex + toAdd;
    if (newIdx < 0 || newIdx >= elements.length || scrollTimeout) return;
    // Prevent scrolling for 100ms
    scrollTimeout = true;
    setTimeout(() => scrollTimeout = false, 100);

    root.scrollTo(0, root.scrollTop + elements[currentPageIndex + toAdd].getBoundingClientRect().top - navbar.clientHeight);
    setCurrentPageIndex(currentPageIndex => currentPageIndex + toAdd);
    currentPageIndex = newIdx;
  }

  useEffect(() => {
    elements = document.getElementsByClassName("renderIfVisible")!;
    navbar = document.getElementsByClassName("links-aside")![0];
    root = document.getElementById("root")!;

    root.addEventListener("wheel", (e: Event) => {
      e.preventDefault();
      const { deltaY } = e as WheelEvent;
      if (deltaY < 0) redirect(-1);
      else redirect(1);
    });
  }, []);

  return (
    <aside className="links-aside">
      <nav tabIndex={1} className="navbar">
        <ol start={0} className="h6 text-secondary" onClick={() => (document.activeElement as HTMLElement).blur()}>
          <li style={{"--order": 1} as React.CSSProperties}>
            <a className={currentPageIndex === 0 ? "active" : ""} onClick={() => redirect(0)}>ABOUT</a>
          </li>
          <li style={{"--order": 2} as React.CSSProperties}>
            <a className={currentPageIndex === 1 ? "active" : ""} onClick={() => redirect(1)}>SKILLS</a>
          </li>
          <li style={{"--order": 3} as React.CSSProperties}>
            <a className={currentPageIndex === 2 ? "active" : ""} onClick={() => redirect(2)}>PROJECTS</a>
          </li>
          <li style={{"--order": 4} as React.CSSProperties}>
            <a className={currentPageIndex === 3 ? "active" : ""} onClick={() => redirect(3)}>CONTACT</a>
          </li>
          <li style={{"--order": 5} as React.CSSProperties}>
            <a>RESUME</a>
          </li>
        </ol>
      </nav>
    </aside>
  );
}