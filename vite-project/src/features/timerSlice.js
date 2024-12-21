import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    hours: 0,
    minutes: 0,
    seconds: 0,
    stop: false,
    circleArray: [],
    circleTitle: "Dovrler",
    pastOfTimer: [],
    pastTitle: "Kecmis olcmeler"
}
const timerSlice = createSlice({
    name: 'timer',
    initialState,
    reducers: {
        plusHours: (state) => {
            state.hours += 1;
        },
        plusMinutes: (state, action) => {
            if (state.minutes > 59) {
                state.hours += 1;
                state.minutes = 0;
            }
            else if (state.minutes === 59) {
                state.hours += 1;
                state.minutes = 0
            }
            else {
                state.minutes += 1
            }
        },
        plusSeconds: (state, action) => {
            if (state.seconds > 59) {
                minutes += 1;
                state.seconds = 0
            } else if (state.minutes === 59) {
                state.hours += 1;
                state.minutes = 0;
                state.seconds = 0
            } else if (state.seconds === 59) {
                state.seconds = 0;
                state.minutes += 1
            }
            else {
                state.seconds += 1;
            }
        },
        process: (state) => {
            if (state.seconds > 0) {
                state.seconds -= 1;
            } else if (state.minutes > 0) {
                state.seconds = 59;
                state.minutes -= 1;
            } else if (state.hours > 0) {
                state.hours -= 1;
                state.minutes = 59;
                state.seconds = 59;
            } else {
                state.stop = false;
                alert("Vaxt bitdi");
            }
        },
        minusHours: (state) => {
            if (state.hours > 0) {
                state.hours -= 1;
            }
        },
        minusMinutes: (state) => {
            if (state.minutes > 0) {
                state.minutes -= 1;
            } else if (state.hours > 0) {
                state.hours -= 1;
                state.minutes = 59;
            }
        },
        minusSeconds: (state) => {
            if (state.seconds > 0) {
                state.seconds -= 1;
            } else if (state.minutes > 0) {
                state.minutes -= 1;
                state.seconds = 59;
            } else if (state.hours > 0) {
                state.hours -= 1;
                state.minutes = 59;
                state.seconds = 59;
            }
        },
        stopwatch: (state) => {
            let { hours, minutes, seconds } = state;
            if (seconds < 59) {
                state.seconds += 1;
            } else {
                state.seconds = 0;
                if (minutes < 59) {
                    state.minutes += 1;
                } else {
                    state.minutes = 0;
                    state.hours += 1;
                }
            }
        },
        isStoping: (state) => {
            state.stop = !state.stop;
        },
        saveTime: (state) => {
            const time = `${(state.hours <= 9 ? "0" : "") + state.hours}:${(state.minutes <= 9 ? "0" : "") + state.minutes}:${(state.seconds <= 9 ? "0" : "") + state.seconds}`
            if (!state.circleArray.includes(state.circleTitle)) state.circleArray.push(state.circleTitle)
            state.circleArray.push(time)
        },
        savePastTime: (state) => {
            ``
            const time = `${(state.hours <= 9 ? "0" : "") + state.hours}:${(state.minutes <= 9 ? "0" : "") + state.minutes}:${(state.seconds <= 9 ? "0" : "") + state.seconds}`
            if (!state.pastOfTimer.includes(state.pastTitle)) state.pastOfTimer.push(state.pastTitle)
            state.pastOfTimer.push(time);
        }
    },
});

export const { plusHours, plusMinutes, plusSeconds, process, minusHours, minusMinutes, minusSeconds, isStoping, stopwatch, saveTime, savePastTime } = timerSlice.actions;
export default timerSlice.reducer;
