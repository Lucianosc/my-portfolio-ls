import React, { useRef } from "react";
import styles from "./Modal.module.scss";
import { CloseIcon } from "../../assets";

export default function Modal({
  handleClick,
  projectData: { id, title, description, images, link },
}) {
  return (
    <div className={`${styles["container"]}`}>
      <button onClick={() => handleClick()}>
        <CloseIcon />
      </button>
      <div className={`${styles["img-container"]}`}>
        <img src={images[1]} />
        {link && (
          <a target="_blank" href={link}>
            Visit Project
          </a>
        )}
      </div>

      <div className={`${styles["text-container"]}`}>
        {title && <h2>{title}</h2>}
        <div dangerouslySetInnerHTML={{ __html: description }} />
      </div>
    </div>
  );
}
