import React from "react";
import { TypeText } from "../../components/TypeText";
import "./style.sass"

export const Skills: React.FC = () => {
  const logos = {
    JavaScript: "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black",
    Python: "https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white",
    Rust: "https://img.shields.io/badge/Rust-541100?style=for-the-badge&logo=rust&logoColor=white",
    C: "https://img.shields.io/badge/C-00599C?style=for-the-badge&logo=c&logoColor=white",
    TypeScript: "https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white",
    HTML: "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white",
    SASS: "https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white",
    Vue: "https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vue.js&logoColor=4FC08D",
    React: "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB",
    Express: "https://img.shields.io/badge/Express.js-404D59?style=for-the-badge",
    Flask: "https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white",
    NodeJS: "https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white",
    MongoDB: "https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white",
    Git: "https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"
  }

  return (
    <section className="justify-center flex-column skills-main">
      <section className="skills-sections">
        <section className="skills-main-text">
          <h1 className="color-primary font-title no-trail"><TypeText text="Skills" delay={200} speed={60} blinkDelay={150} /></h1>
          <p className="anim no-trail">
            I've been interested in computer science ever since I was a kid.
            Over the course of more than 4 years, I've worked and developed countless personal projects,
            from simple Discord bots to  <a href="https://github.com/Myphz/wwwallet-fe" target="_blank" className="a-link">complex web applications with custom authentication systems and several functionalities.</a>
          </p>
          <p className="anim no-trail">
            The most important skill I've learnt as a software engineer is being able to easily break down complicated problems
            into simple tasks, and methodically work on them one by one. I believe that's fundamental to complete big projects and write maintainable code.
          </p>
          <p className="anim no-trail">
            I like to test myself, I am constantly looking for intriguing challenges and
            opportunities to improve and further hone my skills. That's why I've learnt almost everything by myself.
            Thanks to this experience, I'm easily able to learn and adapt to new technologies quickly and autonomously.
          </p>
        </section>

        <section className="space-between language-experiences-sections">
          <section className="flex-column">
            <h2 className="color-primary font-title no-trail"><TypeText text="Technologies" delay={1200} speed={80} blinkDelay={900} /></h2>

            <div className="container skills anim flex-1">
              <div>
                <ul className="skill-list h4">
                  {Object.entries(logos).slice(0, 7).map(([language, img]) => (
                    <li key={language}>
                      <img src={img} alt={language} />
                    </li>
                  ))}
                </ul>

                <ul className="skill-list h4">
                  {Object.entries(logos).slice(7).map(([language, img]) => (
                    <li key={language}>
                      <img src={img} alt={language} />
                    </li>
                  ))}
                </ul>
              </div>

              <h5 style={{textAlign: "center", display: "block", width: "100%"}}>And many more...</h5>
            </div>

          </section>

          <section className="flex-column">
            <h2 className="color-primary font-title no-trail"><TypeText text="Professional experience" delay={1200} speed={60} blinkDelay={900} /></h2>

            <div className="experiences anim flex-column flex-1">
            <section className="container flex-column">
                <h4 className="color-accent font-title">Way AS</h4>
                <p className="h5 flex-1 align-center">
                  Fullstack developer for Way AS (simulator-based driving school). Handle users’ data with real-time GraphQL queries & mutations,
                  architect & build booking + payment infrastructure with custom interfaces.
                </p>
              </section>

              <section className="container flex-column">
                <h4 className="color-accent font-title">PianoBit</h4>
                <p className="h5 flex-1 align-center">
                  Web developer for PianoBit, developing back-end servers using Moleculer and front-end applications with Vue,
                  integrated with a MongoDB database
                </p>
              </section>

              <section className="container flex-column">
                <h4 className="color-accent font-title">Freelancer</h4>
                <p className="h5 flex-1 align-center">
                  I’ve worked for hundreds of clients as a freelancer in many
                  different fields of programming, from GUI development to Machine Learning & AI
                </p>
              </section>
            </div>
          </section>

        </section>
      </section>
    </section>
  );
}