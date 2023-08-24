import React from "react";
import styles from "./Overlay.module.scss";

export default function Overlay({ handleClick }) {
  return (
    <div className={`${styles["overlay"]}`} onClick={() => handleClick()}></div>
  );
}
