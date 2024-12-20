import React from 'react'
import {
  NavLink,
} from "react-router-dom";
import nav from "./Nav.module.css";
export default function Nav() {

  return (
    <NavLink className={nav.header}>
      <NavLink className={({ isActive }) => isActive ? `${nav.link} ${nav.active}` : nav.link} to="/">Saat</NavLink>
      <NavLink className={({ isActive }) => isActive ? `${nav.link} ${nav.active}` : nav.link} to="/stopwatch">Saniyeolcen</NavLink>
      <NavLink className={({ isActive }) => isActive ? `${nav.link} ${nav.active}` : nav.link} to="/timer">Taymer</NavLink>
      <button className={nav.play}>►</button>
      <button className={nav.circle}>⭘</button>
    </NavLink>
  )
}