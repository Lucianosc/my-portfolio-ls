import React from "react";
import styles from "./Projects.module.scss";
import { ProjectCard } from "../../components";
import { projects, uniProjects } from "../../constants/projects";

export default function Projects() {
  return (
    <div className={`${styles["main-container"]}`}>
      <div className={`${styles["projects"]}`}>
        <h1>Projects</h1>
        <div className={`${styles["projects-list"]}`}>
          {projects.map((project) => (
            <ProjectCard project={project} key={project.id} />
          ))}
        </div>
      </div>
      <div className={`${styles["projects"]}`}>
        <h1>University projects</h1>
        <div className={`${styles["projects-list"]}`}>
          {uniProjects.map((project) => (
            <ProjectCard project={project} key={project.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
