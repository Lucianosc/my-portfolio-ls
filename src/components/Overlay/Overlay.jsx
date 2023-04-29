import React from "react";
import styles from "./Overlay.module.scss";

//Overlay z-index: 5

export default function Overlay({ handleClick }) {
  return (
    <div className={`${styles["overlay"]}`} onClick={() => handleClick()}></div>
  );
}
