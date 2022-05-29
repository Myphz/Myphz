import React, { FormEvent, useState } from "react";
import { Button } from "../../components/Button";
import { Popup } from "../../components/Popup";
import { TypeText } from "../../components/TypeText";
import { SERVER_URL } from "../../config";
import "./style.sass"

interface Response {
  success?: boolean | null,
  message?: string
};

export const Contact: React.FC = () => {
  const [popupStatus, setPopupStatus] = useState<Response>({});
  const [popupKey, setPopupKey] = useState(0);

  async function sendEmail(e: FormEvent) {
    e.preventDefault();
    const body = Object.fromEntries(new FormData(e.target as HTMLFormElement));
    if (Object.values(body).some(val => !val)) {
      setPopupKey(key => key+1);
      return setPopupStatus({ success: false, message: "Please enter all the required fields" });
    };

    setPopupStatus({ success: null, message: "Loading..."});
    setPopupKey(key => key+1);

    const res = await fetch(SERVER_URL, {
      method: "POST",
      body: JSON.stringify(body)
    });

    setPopupStatus(await res.json());
    setPopupKey(key => key+1);
  }

  return (
    <>
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
          <form className="input-form h4" onSubmit={sendEmail}>
            <div>
              <input type="text" placeholder="Email" autoComplete="email" spellCheck="false" autoCapitalize="none" name="email" />
              <span className="focus-border"></span>
            </div>
            <div>
              <input type="text" placeholder="Subject" spellCheck="false" autoCapitalize="none" name="subject" />
              <span className="focus-border"></span>
            </div>

            <div>
              <textarea placeholder="Message" name="body" />
              <span className="focus-border"></span>
            </div>

            <Button submit>Send Message</Button>
          </form>
        </section>
      </section>
      <Popup {...popupStatus} key={popupKey} />
    </>
  );
}