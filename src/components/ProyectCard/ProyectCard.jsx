import React from 'react'
import styles from './ProyectCard.module.scss'

export default function ProyectCard({
  project: { id, image, description, title },
}) {
  return (
    <div key={id} className={`${styles['project-card']}`}>
      <img src={image} alt={title} />
      {/* <div className={`${styles['project-info']}`}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div> */}
    </div>
  )
}
