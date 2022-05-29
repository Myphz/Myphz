import React from "react";
import { fetchIcon } from "../../utilities/fetch";
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
          <img src={fetchIcon(success ? "check" : "warning")}/><span>{message}</span>
        </div>
      }
    </>
  );
}