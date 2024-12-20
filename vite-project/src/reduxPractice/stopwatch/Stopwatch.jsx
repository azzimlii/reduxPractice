import React, { useEffect, useState } from 'react'
import css from "./Stopwatch.module.css"
export default function Stopwatch() {

  const [state, setState] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [stop, setStop] = useState(false);
  const handler = () => {
    setStop(!stop);
  };
//   const handlerClickHours = () => {
//     setState((prev) => ({ ...prev, hours: prev.hours + 1 }));
//   };
  const handlerReset=()=>{
    setState({
        hours: 0,
        minutes: 0,
        seconds: 0
    })
}
//   const handlerClickMinutes = () => {
//     if (state.minutes >= 59) {
//       setState((prev) => ({
//         ...prev,
//         hours: prev.hours + 1,
//         minutes: 0,
//       }));
//     } else {
//       setState((prev) => ({
//         ...prev,
//         minutes: prev.minutes + 1,
//       }));
//     }
//   };

//   const handlerClickSeconds = () => {
//     if (state.seconds >= 59) {
//       setState((prev) => ({
//         ...prev,
//         minutes: prev.minutes + 1,
//         seconds: 0,
//       }));
//     } else {
//       setState((prev) => ({
//         ...prev,
//         seconds: prev.seconds + 1,
//       }));
//     }
//   };
  useEffect(() => {
    let interval;

    if (stop) {
      interval = setInterval(() => {
        setState((prev) => {
          let { hours, minutes, seconds } = prev;
          if (seconds < 59) {
            seconds += 1;
          } else {
            seconds = 0;
            if (minutes < 59) {
              minutes += 1;
            } else {
              minutes = 0;
              hours += 1;
            }
          }
          return { hours, minutes, seconds };
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [stop]);

  return (
    <>
      <div className={css.stopwatch}>
        <div>
        <span className={css.span} >{(state.hours <= 9 ? "0" : "") + state.hours} saat</span>
        <span className={css.span} >{(state.minutes <= 9 ? "0" : "") + state.minutes} dq.</span>
        <span className={css.span} >{(state.seconds <= 9 ? "0" : "") + state.seconds} sn.</span>
        <hr />
        </div>
        <div className={css.btns}>
        <button className={css.btn} onClick={handler}>{stop ? "Pauza" : "Başlat"}</button>
        <button className={css.btn} onClick={handlerReset}>Reset</button>
        </div>
      </div>
    </>
  )
}
