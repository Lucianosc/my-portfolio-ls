import React from "react";
import styles from "./ProjectCard.module.scss";

export default function ProjectCard({
  handleClick,
  project: { id, images, description, title },
}) {
  return (
    <div
      key={id}
      className={`${styles["project-card"]}`}
      onClick={() => handleClick()}
    >
      <button>view project</button>
      <img src={images[0]} alt={title} />
      {/* <div className={`${styles['project-info']}`}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div> */}
    </div>
  );
}
