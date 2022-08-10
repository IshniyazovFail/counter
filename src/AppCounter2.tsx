import React, {useEffect, useState} from 'react';
import {Counter} from "./components/Counter";
import "./App.css";
import {LimiterCounter2} from "./components/LimiterCounter2";
import {RootStateType} from "./state/store";
import {useDispatch, useSelector} from "react-redux";
import {setCounterAC, setMaxAC, setStartAC, setStatusAC} from "./redusers/CounterReduser";
import {counterType} from "./App";

export const AppCounter2 = () => {

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
        dispatch(setStatusAC(!state.status))

    }

    const errorValue= state.start<0||state.start===state.max||state.start>state.max||isNaN(state.max)||isNaN(state.start);
    return (
        <div className='body'>
            {state.status? <Counter startValue={startValue} maxValue={maxValue} setLimit={setLimit} errorValue={errorValue} start={state.start} max={state.max}/>:
                <LimiterCounter2 setLimit={setLimit} counter={state.counter} max={state.max} errorValue={errorValue} counterValue={counterValue} resetCounter={resetCounter}/>
            }
        </div>
    )


};

