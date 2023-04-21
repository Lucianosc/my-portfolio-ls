import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home, Skills, Proyects, Contact } from './pages'
import { SideBar } from './components'
import styles from './App.module.scss'

function App() {
  return (
    <div className={`${styles['container']}`}>
      <SideBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/skills" element={<Skills />}></Route>
        <Route path="/Proyects" element={<Proyects />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </div>
  )
}

export default App
