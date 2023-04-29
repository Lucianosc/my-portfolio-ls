import React, { useState, useRef, useEffect } from "react";
import styles from "./Projects.module.scss";
import { ProjectCard, Modal, Overlay } from "../../components";
import { projects, uniProjects } from "../../constants/projects";

export default function Projects() {
  const [showModal, setShowModal] = useState(false);
  const [projectData, setProjectData] = useState();
  const modalRef = useRef();

  const handleProyectClick = (project) => {
    setProjectData(project);
    setShowModal(true);
  };

  return (
    <div className={`${styles["main-container"]}`}>
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
        <h1>University projects</h1>
        <div className={`${styles["projects-list"]}`}>
          {uniProjects.map((project) => (
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
            <Modal projectData={projectData} />
          </div>
          <Overlay handleClick={() => setShowModal(false)} />
        </>
      )}
    </div>
  );
}
