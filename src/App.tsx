import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter";
import {Limiter} from "./components/Limiter";

type statusType = "active"|"expectation"



function App() {
    let [start, setStart] = useState<number>(0)
    let [max, setMax] = useState<number>(5)
    let [counter, setCounter] = useState<number>(start)
    let[status,setStatus]=useState<statusType>("active")


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
       setMax(value)
        setStatus("expectation")

    }
    const startValue = (value: number) => {
        setStart(value)
    }

    const setLimit = () => {
        localStorage.setItem("max value", JSON.stringify(max))
        localStorage.setItem("start value", JSON.stringify(start))
        setCounter(start)

    }

    const errorValue= start<0||start===max||start>max;
    return (
        <div className='body'>
            <Counter startValue={startValue} maxValue={maxValue} setLimit={setLimit} errorValue={errorValue} start={start} max={max}/>
            <Limiter counter={counter} max={max} errorValue={errorValue} counterValue={counterValue} resetCounter={resetCounter}/>
        </div>
    )
}

export default App;
