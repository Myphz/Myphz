import React from "react";
import "./style.sass";

interface Props {
  children: React.ReactNode,
  submit?: boolean
};

export const Button: React.FC<Props> = ({ children, submit }) => {
  return (
    <button className="button" type={submit ? "submit" : undefined}>
      { children }
    </button>
  );
}