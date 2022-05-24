import React from "react";
import "./style.sass";

interface Props {
  children: React.ReactNode
};

export const Button: React.FC<Props> = ({ children }) => {
  return (
    <button className="button">
      { children }
    </button>
  );
}