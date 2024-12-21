import React, { useEffect } from 'react'
import css from "./Stopwatch.module.css"
import { stopwatch } from '../../features/timerSlice';
import { useDispatch, useSelector } from 'react-redux';
export default function Stopwatch() {
  const { hours, minutes, seconds, stop, circleArray } = useSelector((state) => state.timer);
  const dispatch = useDispatch();
  useEffect(() => {
    let interval;
    if (stop) {
      interval = setInterval(() => {
        dispatch(stopwatch());
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [stop]);
  return (
    <>
      <div className={css.stopwatch}>
        <div>
          <span className={css.span} >{(hours <= 9 ? "0" : "") + hours} saat</span>
          <span className={css.span} >{(minutes <= 9 ? "0" : "") + minutes} dq.</span>
          <span className={css.span} >{(seconds <= 9 ? "0" : "") + seconds} sn.</span>
          <hr />
        </div>
        <ul>
          {circleArray.map((circle, index) => (
            <li key={index}>{circle}</li>
          ))}
        </ul>
      </div>
    </>
  )
}
