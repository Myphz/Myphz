import React, { useEffect, useRef, useState } from "react";
import "./typetext.sass";

interface Props {
  text: string,
  delay: number,
  speed: number
};

export const TypeText: React.FC<Props> = ({ text, delay, speed }) => {
  const span = useRef<HTMLSpanElement>(null);
  const [typingText, setTypingText] = useState("");
  let interval: number;
  let i = 0;

  function addLetter(): void {
    const letter = text[i];
    setTypingText(typingText => typingText + letter);
    if (i === text.length-1) {
      setTimeout(() => span.current?.classList?.remove("blinking-animation"), 1000);
      return clearInterval(interval);
    }
    i += 1;
  };

  // On mount hook
  useEffect(() => {
    setTimeout(() => {
      interval = setInterval(addLetter, speed);
      span.current?.classList?.add("blinking-animation");
    }, delay);
  }, []);

  return (
    <span className="blinking-text" ref={span}>{ typingText }</span>
  );
}