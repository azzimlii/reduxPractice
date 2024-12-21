import React, { useEffect } from 'react'
import css from "./Timer.module.css"
import { useDispatch, useSelector } from 'react-redux';
import { minusHours, minusMinutes, minusSeconds, plusHours, plusMinutes, plusSeconds, process, savePastTime } from '../../features/timerSlice';
export default function Timer() {
    const { hours, minutes, seconds, stop, pastOfTimer } = useSelector((state) => state.timer);
    const dispatch = useDispatch();
    useEffect(() => {
        let interval;
        if (stop) {
            dispatch(savePastTime())
            interval = setInterval(() => {
                dispatch(process());
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [stop]);
    return (
        <>
            <div className={css.timer}>
                <div className={css.time}>
                    <span className={css.span} >{(hours <= 9 ? "0" : "") + hours}</span>
                    <div className={css.buttons}>
                        <button className={css.btnMini} onClick={() => dispatch(plusHours())}>+</button>
                        <button className={css.btnMini} onClick={() => dispatch(minusHours())}>-</button>
                    </div>
                    <span className={css.span} >{(minutes <= 9 ? "0" : "") + minutes}</span>
                    <div className={css.buttons}>
                        <button className={css.btnMini} onClick={() => dispatch(plusMinutes())}>+</button>
                        <button className={css.btnMini} onClick={() => dispatch(minusMinutes())}>-</button>
                    </div>
                    <span className={css.span} > {(seconds <= 9 ? "0" : "") + seconds}</span>
                    <div className={css.buttons}>
                        <button className={css.btnMini} onClick={() => dispatch(plusSeconds())}>+</button>
                        <button className={css.btnMini} onClick={() => dispatch(minusSeconds())}>-</button>
                    </div>
                </div>
                <ul>
                    {pastOfTimer.map((time, index) => (
                        <li key={index}>{time}</li>
                    ))}
                </ul>
            </div>
        </>
    )
}
