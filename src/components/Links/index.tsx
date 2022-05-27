import React, { useEffect, useRef } from "react";
import "./style.sass";

export const Links: React.FC = () => {
  let pages: HTMLCollectionOf<Element>;
  let navbar: Element;
  let root: Element;

  let currentPageBottom = 0;
  let prevPageBottom = 0;

  const ol = useRef<HTMLOListElement>(null);

  let pageIdx = 0;
  let scrollTimeout = false;

  // Jump to specified page
  function redirect(newIdx: number, repeat=true) {
    if (newIdx < 0 || newIdx >= pages.length || scrollTimeout) return;
    if (repeat) {
      // Prevent scrolling for 700ms and repeat redirect after 700ms (to fix height errors if prev pages weren't rendered)
      scrollTimeout = true;
      setTimeout(() => { scrollTimeout = false; redirect(newIdx, false); }, 700);
    }

    root.scrollTo(0, root.scrollTop + pages[newIdx].getBoundingClientRect().top - navbar.clientHeight);
    pageIdx = newIdx;
    setColor()
  }

  // Set color of current page tab
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
    // Redirect to page on wheel move desktop
    root.addEventListener("wheel", (e: Event) => {
      e.preventDefault();
      const { deltaY } = e as WheelEvent;
      if (deltaY < 0) redirect(pageIdx-1);
      else redirect(pageIdx+1);
    });

    // Set current tab color for mobile
    root.addEventListener("touchmove", () => {
      if (!currentPageBottom) currentPageBottom = pages[pageIdx].getBoundingClientRect().bottom + root.scrollTop;
      const heightBottom = root.scrollTop + window.innerHeight;

      if (heightBottom > currentPageBottom + window.innerHeight / 2) {
        pageIdx++;
        prevPageBottom = currentPageBottom;
        currentPageBottom = pages[pageIdx].getBoundingClientRect().bottom + root.scrollTop;
        setColor();
      } else if (heightBottom < prevPageBottom + window.innerHeight /2) {
        pageIdx--;
        currentPageBottom = prevPageBottom;
        prevPageBottom = pageIdx - 1 >= 0 ? pages[pageIdx-1].getBoundingClientRect().bottom + root.scrollTop : 0;
        setColor();
      }
    })
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