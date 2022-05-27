import React, { useEffect, useRef } from "react";
import "./style.sass";

export const Links: React.FC = () => {
  let pages: HTMLCollectionOf<Element>;
  let navbar: Element;
  let root: Element;

  const ol = useRef<HTMLOListElement>(null);

  let pageIdx = 0;
  let scrollTimeout = false;

  function redirect(newIdx: number) {
    if (newIdx < 0 || newIdx >= pages.length || scrollTimeout) return;
    // Prevent scrolling for 100ms
    scrollTimeout = true;
    setTimeout(() => scrollTimeout = false, 100);

    root.scrollTo(0, root.scrollTop + pages[newIdx].getBoundingClientRect().top - navbar.clientHeight);
    pageIdx = newIdx;
    setColor()
  }

  function setColor() {
    if (!ol.current) return;
    Array.from(ol.current.children).forEach((li, i) => {
      if (i === pageIdx) li.classList.add("active");
      else li.classList.remove("active");
    });
  }

  useEffect(() => {
    pages = document.getElementsByClassName("renderIfVisible")!;
    navbar = document.getElementsByClassName("links-aside")![0];
    root = document.getElementById("root")!;

    setColor();
    root.addEventListener("wheel", (e: Event) => {
      e.preventDefault();
      const { deltaY } = e as WheelEvent;
      if (deltaY < 0) redirect(pageIdx-1);
      else redirect(pageIdx+1);
    });
  }, []);

  return (
    <aside className="links-aside">
      <nav tabIndex={1} className="navbar space-between">
        <span className="drag text-secondary h6">DRAG ANYWHERE</span>
        <ol start={0} className="h6 text-secondary" onClick={() => (document.activeElement as HTMLElement).blur()} ref={ol}>
          <li style={{"--order": 1} as React.CSSProperties}>
            <a onClick={() => redirect(0)}>ABOUT</a>
          </li>
          <li style={{"--order": 2} as React.CSSProperties}>
            <a onClick={() => redirect(1)}>SKILLS</a>
          </li>
          <li style={{"--order": 3} as React.CSSProperties}>
            <a onClick={() => redirect(2)}>PROJECTS</a>
          </li>
          <li style={{"--order": 4} as React.CSSProperties}>
            <a onClick={() => redirect(3)}>CONTACT</a>
          </li>
          <li style={{"--order": 5} as React.CSSProperties}>
            <a href="/resume.pdf" target="_blank">RESUME</a>
          </li>
        </ol>
      </nav>
    </aside>
  );
}