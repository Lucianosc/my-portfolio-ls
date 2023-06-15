import React, { useState, useRef, useEffect } from "react";
import styles from "./Projects.module.scss";
import { ProjectCard, Modal, Overlay } from "../../components";
import {
  projects,
  collegeProjects,
  contributedProjects,
} from "../../constants/projects";

export default function Projects() {
  const [showModal, setShowModal] = useState(false);
  const [projectData, setProjectData] = useState();
  const modalRef = useRef();

  const handleProyectClick = (project) => {
    setProjectData(project);
    setShowModal(true);
  };

  return (
    <main className={`${styles["main-container"]}`}>
      <div className={`${styles["projects"]}`}>
        <h1>Projects</h1>
        <div className={`${styles["projects-list"]}`}>
          {projects.map((project) => (
            <ProjectCard
              project={project}
              key={project.id}
              handleClick={() => handleProyectClick(project)}
            />
          ))}
        </div>
      </div>
      <div className={`${styles["projects"]}`}>
        <h1>Projects i contributed</h1>
        <div className={`${styles["projects-list"]}`}>
          {contributedProjects.map((project) => (
            <ProjectCard
              project={project}
              key={project.id}
              handleClick={() => handleProyectClick(project)}
            />
          ))}
        </div>
      </div>
      <div className={`${styles["projects"]}`}>
        <h1>College projects</h1>
        <div className={`${styles["projects-list"]}`}>
          {collegeProjects.map((project) => (
            <ProjectCard
              project={project}
              key={project.id}
              handleClick={() => handleProyectClick(project)}
            />
          ))}
        </div>
      </div>
      {showModal && (
        <>
          <div ref={modalRef}>
            <Modal
              projectData={projectData}
              handleClick={() => setShowModal(false)}
            />
          </div>
          <Overlay handleClick={() => setShowModal(false)} />
        </>
      )}
    </main>
  );
}
