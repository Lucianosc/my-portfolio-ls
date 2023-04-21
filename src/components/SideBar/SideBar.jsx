import React from 'react'
import { logo } from '../../assets'
import { LinkedInLogo, GitHubLogo } from '../../assets'
import { useNavigate, useLocation } from 'react-router-dom'
import { navlinks } from '../../constants/navlinks'
import styles from './SideBar.module.scss'

export default function SideBar() {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <menu>
      <div className={`${styles['logo']}`}>
        <div>
          <a onClick={() => navigate('/')}>
            <img src={logo} alt="logo" />
          </a>
        </div>
        <span>Web Developer</span>
      </div>
      <nav className={`${styles['nav-links']}`}>
        {navlinks.map(({ name, link }) => (
          <a
            key={name}
            onClick={() => navigate(link)}
            className={`${link === location.pathname && styles['selected']}`}
          >
            {name}
          </a>
        ))}
      </nav>

      <div className={`${styles['social-media']}`}>
        <a
          href="https://linkedin.com/in/luciano-scaminaci-605132220/"
          target="_blank"
        >
          <LinkedInLogo width="20px" height="20px" />
        </a>
        <a href="https://github.com/Lucianosc" target="_blank">
          <GitHubLogo width="20px" height="20px" />
        </a>
      </div>
    </menu>
  )
}
