import React from 'react';
import { NavLink, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import nav from "./Nav.module.css";
import { isStoping, saveTime } from '../features/timerSlice';

export default function Nav() {
  const stop = useSelector((state) => state.timer.stop);
  const dispatch = useDispatch();
  const location=useLocation();

  return (
    <nav className={nav.header}>
      <NavLink className={({ isActive }) => isActive ? `${nav.link} ${nav.active}` : nav.link} to="/">Saat</NavLink>
      <NavLink className={({ isActive }) => isActive ? `${nav.link} ${nav.active}` : nav.link} to="/stopwatch">Saniyeolcen</NavLink>
      <NavLink className={({ isActive }) => isActive ? `${nav.link} ${nav.active}` : nav.link} to="/timer">Taymer</NavLink>
      <button className={nav.play} onClick={() => dispatch(isStoping())}> {stop ? "❚❚" : "►"} </button>
      {location.pathname==="/stopwatch" && ( <button className={nav.circle} onClick={() => dispatch(saveTime())}> ⭘ </button>)}
    </nav>
  );
}
