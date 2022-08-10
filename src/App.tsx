import React from 'react';
import './App.css';
import {Counter} from "./components/Counter";
import {Limiter} from "./components/Limiter";
import {setCounterAC, setMaxAC, setStartAC} from "./redusers/CounterReduser";
import {RootStateType} from "./state/store";
import {useDispatch, useSelector} from "react-redux";


export type counterType = {
    start: number
    max: number
    counter: number
    status:boolean
}

function App() {

   const state = useSelector<RootStateType, counterType>(state => state.counter)
   const dispatch = useDispatch()

    const counterValue = () => {
        dispatch(setCounterAC(state.counter + 1))
    }
    const resetCounter = () => {
        dispatch(setCounterAC(state.start ))
    }

    const maxValue = (value: number) => {
            dispatch(setMaxAC(value))

    }
    const startValue = (value: number) => {
        dispatch(setStartAC(value))
    }

    const setLimit = () => {
        dispatch(setCounterAC(state.start))

    }

 const error =state.start < 0 || state.start === state.max || state.start > state.max||isNaN(state.max)||isNaN(state.start)
    return (
        <div className='body'>
            <Counter startValue={startValue} maxValue={maxValue} setLimit={setLimit} errorValue={error}
                     start={state.start} max={state.max}/>
            <Limiter counter={state.counter} max={state.max} errorValue={error} counterValue={counterValue}
                     resetCounter={resetCounter}/>
        </div>
    )
}

export default App;
