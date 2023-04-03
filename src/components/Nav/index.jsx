import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './style.module.css'

export default function Nav() {
    const checkClass = ({isActive}) => isActive? s.active:'';
  return (
    <div>
        <nav className={s.nav}>
        <NavLink className={checkClass} to='/'>Add Page</NavLink>
        <NavLink className={checkClass} to='/show'>Show Page</NavLink>
        </nav>
        
    </div>
  )
}
