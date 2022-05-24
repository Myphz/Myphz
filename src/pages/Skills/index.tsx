import React from "react";
import "./style.sass"

export const Skills: React.FC = () => {
  const languages = ["JavaScript", "Python", "Rust", "C", "TypeScript", "HTML", "SASS", "SQL"];

  return (
    <main className="justify-center flex-column">
      <section className="skills-section">
        <section>
          <h1 className="color-primary">Skills</h1>
          <p>
            I've been interested in computer science ever since I was a kid.
            Over the course of more than 4 years, I've worked and developed countless personal projects,
            from simple Discord bots to complex web applications with custom authentication systems and tons of functionalities.
          </p>
          <p>
            The most important skill I've learnt as a software engineer is being able to easily break down complicated problems
            into simple tasks, and methodically work on them one by one. I believe that's fundamental to complete big projects and write maintainable code.
          </p>
          <p>
            I like to test myself, I am constantly looking for intriguing challenges and
            opportunities to improve and further improve my skills. That's why I've learnt almost everything by myself.
            Thanks to this experience, I'm able to easily learn and adapt to new technologies quickly and autonomously.
          </p>
        </section>
        <section>
          <h2 className="color-primary">Languages</h2>
          <div style={{display: "flex"}} className="h4">
            <ul className="skill-list">
              {languages.slice(0,4).map(language => (
                <li>{language}</li>
              ))}
            </ul>
            <ul className="skill-list">
              {languages.slice(4,8).map(language => (
                <li>{language}</li>
              ))}
            </ul>
          </div>
        </section>
      </section>
    </main>
  );
}