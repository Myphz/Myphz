import React, { useEffect, useRef } from "react";
import "./style.sass";

export const Links: React.FC = () => {
  let pages: NodeListOf<Element>;
  let navbar: Element;
  let root: Element;

  let currentPageBottom = 0;
  let prevPageBottom = 0;

  const ol = useRef<HTMLOListElement>(null);

  let pageIdx = 0;
  let scrollTimeout = false;

  // Jump to specified page
  function redirect(newIdx: number) {
    if (newIdx < 0 || newIdx >= pages.length || scrollTimeout) return;
    pageIdx = newIdx;
    pages[pageIdx].scrollIntoView();
    setColor()
  };

  // Set color of current page tab
  function setColor() {
    if (!ol.current) return;
    Array.from(ol.current.children).forEach((li, i) => {
      if (i === pageIdx) li.classList.add("active");
      else li.classList.remove("active");
    });
  };

  // Detect when a new page has been reached by scrolling
  function detectScrollPage() {
    if (!currentPageBottom) currentPageBottom = pages[pageIdx].getBoundingClientRect().bottom + root.scrollTop;
    const heightBottom = root.scrollTop + window.innerHeight;

    if (heightBottom > currentPageBottom + window.innerHeight / 2) {
      pageIdx++;
      prevPageBottom = currentPageBottom;
      currentPageBottom = pages[pageIdx].getBoundingClientRect().bottom + root.scrollTop;
      setColor();
    } else if (heightBottom < prevPageBottom + window.innerHeight / 2) {
      pageIdx--;
      currentPageBottom = prevPageBottom;
      prevPageBottom = pageIdx - 1 >= 0 ? pages[pageIdx-1].getBoundingClientRect().bottom + root.scrollTop : 0;
      setColor();
    }
  };

  useEffect(() => {
    pages = document.querySelectorAll("#root > section")!;
    navbar = document.getElementsByClassName("links-aside")![0];
    root = document.getElementById("root")!;

    setColor();
    // Change colors links on scroll
    root.addEventListener("touchmove",  detectScrollPage, {passive: true});
    root.addEventListener("scroll",  detectScrollPage, {passive: true});
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
            <a href={`${import.meta.env.MODE === "development" ? "/" : "/Myphz/"}resume.pdf`} target="_blank">RESUME</a>
          </li>
        </ol>
      </nav>
    </aside>
  );
}