import React, { useEffect, useState } from 'react'
import css from "./Timer.module.css"
export default function Timer() {

    const [state, setState] = useState({
        hours: 0,
        minutes: 0,
        seconds: 0
    });
    const [stop, setStop] = useState(false);
    const handler = () => {
        setStop(!stop);
    };
    const handlerReset=()=>{
        setState({
            hours: 0,
            minutes: 0,
            seconds: 0
        })
    }
    const handlerClickHours = () => {
        setState((prev) => ({ ...prev, hours: prev.hours + 1 }));
    }
    const handlerClickMinutes = () => {
        if (state.minutes > 59) {
            setState((prev) => ({ ...prev, hours: prev.hours + 1, minutes: 0 }))
        } else if (state.minutes === 59) {
            setState((prev) => ({ ...prev, hours: prev.hours + 1, minutes: 0 }))
        } else {
            setState((prev) => ({ ...prev, minutes: prev.minutes + 1 }))
        }
    }
    const handlerClickSeconds = () => {
        // setState((prev)=>({...prev, seconds:prev.seconds+1}));
        if (state.seconds > 59) {
            setState((prev) => ({ ...prev, minutes: prev.minutes + 1, seconds: 0 }))
        } else if (state.minutes === 59) {
            setState((prev) => ({ ...prev, hours: prev.hours + 1, minutes: 0, seconds: 0 }))
        } else if (state.seconds === 59) {
            setState((prev) => ({ ...prev, seconds: 0, minutes: prev.minutes + 1 }))
        }
        else {
            setState((prev) => ({ ...prev, seconds: prev.seconds + 1 }))
        }
    }
    useEffect(() => {
        let interval;

        if (stop) {
            interval = setInterval(() => {
                setState((prev) => {
                    let { hours, minutes, seconds } = prev;
                    if (seconds > 0) {
                        seconds -= 1;
                    } else if (minutes > 0) {
                        minutes -= 1;
                        seconds = 59;
                    } else if (hours > 0) {
                        hours -= 1;
                        minutes = 59;
                        seconds = 59;
                    } else {
                        clearInterval(interval);
                        alert("vaxt bitdi");
                        setStop(false);
                    }

                    return { hours, minutes, seconds };
                });
            }, 1000);
        }

        return () => clearInterval(interval);
    }, [stop]);

    return (
        <>
            <div className={css.timer}>
                <div className={css.time}>
                <span className={css.span} onClick={handlerClickHours}>{(state.hours <= 9 ? "0" : "") + state.hours}</span>
                <div className={css.buttons}>
                    <button className={css.btnMini}>+</button>
                    <button className={css.btnMini}>-</button>
                </div>
                <span className={css.span} onClick={handlerClickMinutes}>{(state.minutes <= 9 ? "0" : "") + state.minutes}</span>
                <div className={css.buttons}>
                    <button className={css.btnMini}>+</button>
                    <button className={css.btnMini}>-</button>
                </div>
                <span className={css.span} onClick={handlerClickSeconds}> {(state.seconds <= 9 ? "0" : "") + state.seconds}</span>
                <div className={css.buttons}>
                    <button className={css.btnMini}>+</button>
                    <button className={css.btnMini}>-</button>
                </div>
                </div>
                {/* <div className={css.btns}>
                <button className={css.btn} onClick={handler}>
                    {stop ? "Pauza" : "Başlat"}
                </button>
                <button className={css.btn} onClick={handlerReset}>Reset</button>
                </div> */}
            </div>
        </>
    )
}
