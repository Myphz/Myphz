import React from "react";
import { Button } from "../../components/Button";
import { TypeText } from "../../components/TypeText";
import "./style.sass"

export const Contact: React.FC = () => {
  return (
    <main className="justify-center flex-column">
      <h1 className="color-primary font-title">
        <TypeText text="Contact" delay={200} speed={100} blinkDelay={50} />
      </h1>
      <section className="input-section">
        <h4>My inbox is always open for new opportunities.<br />
        Feel free to contact me for any inquiries you may have!</h4>
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
    </main>
  );
}