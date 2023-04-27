import React from "react";
import styles from "./ProjectCard.module.scss";

export default function ProjectCard({
  project: { id, image, description, title },
}) {
  return (
    <div key={id} className={`${styles["project-card"]}`}>
      <button>view project</button>
      <img src={image} alt={title} />
      {/* <div className={`${styles['project-info']}`}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div> */}
    </div>
  );
}
