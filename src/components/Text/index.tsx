import React from "react";

interface Props {
  text: string
};

export const Text: React.FC<Props> = ({ text }) => {
  return (
    <span>{ text }</span>
  );
}