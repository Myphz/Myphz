import React from "react";
import { Button } from "../../components/Button";
import { TypeText } from "../../components/TypeText";
import "./style.sass"

export const Contact: React.FC = () => {
  return (
    <section className="justify-center flex-column contact-main">
      <h1 className="color-primary font-title block no-trail">
        <TypeText text="Contact" delay={200} speed={100} blinkDelay={50} />
      </h1>
      <section className="input-section">
        <h4 className="block no-trail">
          My inbox is always open for new opportunities.<br />
          Feel free to contact me for any inquiries you may have!<br />
          Alternatively, you can send an email to <a href="mailto:danielscanu45@outlook.it" className="a-link">danielscanu45@outlook.it</a>
        </h4>
        <form className="input-form h4">
          <div>
            <input type="text" placeholder="Email" autoComplete="email" spellCheck="false" autoCapitalize="none" />
            <span className="focus-border"></span>
          </div>
          <div>
            <input type="text" placeholder="Subject" spellCheck="false" autoCapitalize="none" />
            <span className="focus-border"></span>
          </div>

          <div>
            <textarea placeholder="Message" />
            <span className="focus-border"></span>
          </div>

          <Button submit>Send Message</Button>
        </form>
      </section>
    </section>
  );
}