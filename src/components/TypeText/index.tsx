import React, { useEffect, useRef, useState } from "react";
import "./typetext.sass";

interface Props {
  text: string,
  delay: number,
  speed: number,
  blinkDelay: number,
  charDelete?: number,
  replace?: string,
  singleLetterSpan?: boolean
};

export const TypeText: React.FC<Props> = ({ text, delay, speed, blinkDelay, charDelete, replace, singleLetterSpan }) => {
  const span = useRef<HTMLSpanElement>(null);
  const [typingText, setTypingText] = useState("");
  let interval: number;
  let i = 0;

  // Add blinking animation
  function addBlinking() {
    span.current?.classList?.add("blinking-animation");
  }

  // Remove the blinking animation after 0.5 second
  function removeBlinking() {
    setTimeout(() => span.current?.classList?.remove("blinking-animation"), 500);
  };

  // Add the letter at index i of the parameter to typingText. Stop if done
  function addLetter(text: string): void {
    const letter = text[i];
    setTypingText(typingText => typingText + (singleLetterSpan ? `<span>${letter}</span>` : letter));
    if (i === text.length-1) {
      clearInterval(interval);
      if (!charDelete) return removeBlinking();
      // Start deleting letters after 1 second, 50% faster than writing
      setTimeout(() => interval = setInterval(deleteLetter, speed/2), 1000);
    }
    i++;
  };

  // Delete 1 letter from the right of typingText. Stop after deleting charDelete characters
  function deleteLetter(): void {
    setTypingText(typingText => singleLetterSpan ? typingText.slice(0, --i*14) : typingText.slice(0, --i));
    if (text.length - i === charDelete) {
      clearInterval(interval);
      if (!replace) return removeBlinking();
      charDelete = 0;
      // Add the replacing characters
      setTimeout(() => {
        i = 0;
        interval = setInterval(() => addLetter(replace), speed);
      }, 500);
    }
  };

  // On mount hook
  useEffect(() => {
    (async () => {
      while (!span.current!.classList.contains("anim-started")) {
        await new Promise((res) => setTimeout(res, 500));
      }
  
      setTimeout(addBlinking, blinkDelay);
      setTimeout(() => {
        interval = setInterval(() => addLetter(text), speed);
      }, delay);
    })();
  }, []);

  return (
    <>
      {
        singleLetterSpan
        ? <span className="blinking-text anim" ref={span} dangerouslySetInnerHTML={{ __html: typingText}}></span>
        : <span className="blinking-text anim" ref={span}>{ typingText }</span>
      }
    </>
  );
}