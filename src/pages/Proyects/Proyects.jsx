import React from 'react'
import styles from './Proyects.module.scss'
import ProyectCard from '../../components/ProyectCard/ProyectCard'
import { projects, uniProjects } from '../../constants/proyects'

export default function Proyects() {
  return (
    <div className={`${styles['main-container']}`}>
      <div className={`${styles['projects']}`}>
        <h1>Projects</h1>
        <div className={`${styles['projects-list']}`}>
          {projects.map((project) => (
            <ProyectCard project={project} key={project.id} />
          ))}
        </div>
      </div>
      <div className={`${styles['projects']}`}>
        <h1>University projects</h1>
        <div className={`${styles['projects-list']}`}>
          {uniProjects.map((project) => (
            <ProyectCard project={project} key={project.id} />
          ))}
        </div>
      </div>
    </div>
  )
}
