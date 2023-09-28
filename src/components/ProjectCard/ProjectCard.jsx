import React from "react";
import styles from "./ProjectCard.module.scss";

export default function ProjectCard({
  handleClick,
  project: { id, images, description, title, tags },
}) {
  return (
    <div
      key={id}
      className={`${styles["project-card"]}`}
      onClick={() => handleClick()}
    >
      <div className={styles.tags}>
        {tags.map(({ src: tagSrc, alt: tagAlt }, index) => (
          <div style={{ transitionDelay: `${(index + 1) / 10}s` }} key={index}>
            <img src={tagSrc} alt={tagAlt} />
            <p>{tagAlt}</p>
          </div>
        ))}
      </div>
      <button>view project</button>
      <img className={styles.main_img} src={images[0]} alt={title} />
      {/* <div className={`${styles['project-info']}`}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div> */}
    </div>
  );
}
