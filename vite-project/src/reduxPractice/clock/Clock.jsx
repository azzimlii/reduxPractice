import React, { useEffect, useState } from 'react'
import css from "./Clock.module.css"
export default function Clock() {
    const [time, setTime] = useState({
        hours: new Date().getHours(),
        minutes: new Date().getMinutes(),
        seconds: new Date().getSeconds(),
      });

    useEffect(()=>{
        setInterval(() => {
            let now = new Date()
            setTime({
                hours: now.getHours(),
                minutes: now.getMinutes(),
                seconds: now.getSeconds(),
            })
        }, 1000);
    },[])

    return (
        <>
        <div className={css.clock}>
            {/* {time.hours}   {time.minutes}   {time.seconds} */}
        <span>{(time.hours <= 9 ? "0" : "") + time.hours} </span>: 
        <span>{(time.minutes <= 9 ? "0" : "") + time.minutes} </span>:
        <span> {(time.seconds <= 9 ? "0" : "") + time.seconds}</span>
        </div>
        </>
    )
}
