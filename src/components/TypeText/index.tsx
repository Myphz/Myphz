import React, { useEffect, useRef, useState } from "react";
import "./typetext.sass";

interface Props {
  text: string,
  delay: number,
  speed: number,
  charDelete?: number,
  replace?: string
};

export const TypeText: React.FC<Props> = ({ text, delay, speed, charDelete, replace }) => {
  const span = useRef<HTMLSpanElement>(null);
  const [typingText, setTypingText] = useState("");
  let interval: number;
  let i = 0;

  // Remove the blinking animation after 1 second
  function removeBlinking() {
    setTimeout(() => span.current?.classList?.remove("blinking-animation"), 1000);
  }

  // Add the letter at index i of the parameter to typingText. Stop if done
  function addLetter(text: string): void {
    const letter = text[i];
    setTypingText(typingText => typingText + letter);
    if (i === text.length-1) {
      clearInterval(interval);
      if (!charDelete) return removeBlinking();
      setTimeout(() => interval = setInterval(deleteLetter, speed*1.5), 1000);
    }
    i++;
  };

  // Delete 1 letter from the right of typingText. Stop after deleting charDelete characters
  function deleteLetter(): void {
    setTypingText(typingText => typingText.slice(0, --i));
    if (text.length - i === charDelete) {
      clearInterval(interval);
      if (!replace) return removeBlinking();
      charDelete = 0;
      // Add the replacing characters
      setTimeout(() => {
        i = 0;
        interval = setInterval(() => addLetter(replace), speed);
      }, 1000);
    }
  };

  // On mount hook
  useEffect(() => {
    setTimeout(() => {
      interval = setInterval(() => addLetter(text), speed);
      span.current?.classList?.add("blinking-animation");
    }, delay);
  }, []);

  return (
    <span className="blinking-text" ref={span}>{ typingText }</span>
  );
}