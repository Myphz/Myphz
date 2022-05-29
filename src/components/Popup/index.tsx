import React from "react";
import "./style.sass";

interface Props {
  success?: boolean | null,
  message?: string,
  key: number
};

export const Popup: React.FC<Props> = ({ success, message }) => {
  return (
    <>
      {
        typeof success === "undefined" ? <></> : success === null ?
        <div className="h4 align-center popup loading">{ message }</div> :
        <div className={"h4 align-center popup " + (success ? "popup-success" : "popup-error")}>
          <img src={`/icons/${success ? "check" : "warning"}.svg`}/><span>{message}</span>
        </div>
      }
    </>
  );
}