import { createSlice } from '@reduxjs/toolkit';

const initialState={
    movies: [],
    filtered:[],
    title: 'Новый список',
    listItem: []
}
const timerSlice = createSlice({
    name: 'timer',
    initialState,
    reducers: {
        plus:(state,action)=>{
            state.movies=action.payload
        },
        minus:(state,action)=>{
            state.filtered=action.payload
        },
        removeFromList:(state, action)=> {
            state.movies = state.movies.filter(
                (movie) => movie.imdbID !== action.payload.imdbID
            );
        },
        addTolist:(state,action)=>{
            state.listItem=action.payload
        }
    },
});

export const { setMovies, setFiltered, addTolist, removeFromList } = timerSlice.actions;
export default timerSlice.reducer;
