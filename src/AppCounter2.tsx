import React, {useEffect, useState} from 'react';
import {Counter} from "./components/Counter";
import {Limiter} from "./components/Limiter";
import   "./App.css";
import {LimiterCounter2} from "./components/LimiterCounter2";

export const AppCounter2 = () => {

    let [start, setStart] = useState<number>(0)
    let [max, setMax] = useState<number>(5)
    let [counter, setCounter] = useState<number>(start)
    let[status,setStatus]=useState<boolean>(false)


    useEffect(() => {
        let maxAsString = localStorage.getItem("max value")
        if (maxAsString) {
            setMax(JSON.parse(maxAsString))
        }
        let startAsString = localStorage.getItem("start value")
        if (startAsString) {
            setStart(JSON.parse(startAsString))
            setCounter(JSON.parse(startAsString))
        }
    }, [])


    const counterValue = () => {
        setCounter(counter + 1)
    }
    const resetCounter = () => {
        setCounter(start)

    }

    const maxValue = (value: number) => {
        setMax(Math.round(value))

    }
    const startValue = (value: number) => {
        setStart(Math.round(value))
    }

    const setLimit = () => {
        localStorage.setItem("max value", JSON.stringify(max))
        localStorage.setItem("start value", JSON.stringify(start))
        setCounter(start)
        setStatus(!status)
    }

    const errorValue= start<0||start===max||start>max;
    return (
        <div className='body'>
            {status? <Counter startValue={startValue} maxValue={maxValue} setLimit={setLimit} errorValue={errorValue} start={start} max={max}/>:
                <LimiterCounter2 setLimit={setLimit} counter={counter} max={max} errorValue={errorValue} counterValue={counterValue} resetCounter={resetCounter}/>
            }
        </div>
    )


};

