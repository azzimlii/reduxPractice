import './App.css'
import Stopwatch from './reduxPractice/stopwatch/Stopwatch';
import Timer from './reduxPractice/timer/Timer';
import Clock from './reduxPractice/clock/Clock';
import Nav from './components/Nav';
import { Provider } from 'react-redux';
import { store } from './app/store';

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
      <Provider store={store} >
        <Nav />
        <Routes>
          <Route path="/" element={<Clock />} />
          <Route path="stopwatch/*" element={<Stopwatch />} />
          <Route path="timer/*" element={<Timer />} />
        </Routes>
        </Provider >
      </BrowserRouter>
    </>
  )
}
export default App
