import React, {useEffect, useState} from 'react';
import './App.css';
import {Buttons} from "./components/counter/Buttons";
import {Limiter} from "./components/limiter/Limiter";


function App() {

    let text = "enter values and press 'set' "

    let [counter, setCounter] = useState<number>(0)
    let [max, setMax] = useState<number>(5)
    let [start, setStart] = useState<number>(0)

    useEffect(() => {
        let maxValueAsString = localStorage.getItem("max value")
        if (maxValueAsString) {
            let maxAsNumber = JSON.parse(maxValueAsString)
            setMax(maxAsNumber)
        }
    }, [])

    useEffect(() => {
        let ValueAsString = localStorage.getItem("start value")
        if (ValueAsString) {
            let start = JSON.parse(ValueAsString)
            setCounter(start)
            setStart(start)
        }
    }, [])

    const changeCount = () => {
        setCounter(counter + 1)
    }
    const resetCount = () => {
        setCounter(counter = start)
    }

    const maxValue = (value: string) => {
        localStorage.setItem("max value", value)
        setMax(JSON.parse(value))
    }


    const startValue = (value: string) => {
        localStorage.setItem("start value", value)
        setStart(JSON.parse(value))
    }
    const getStartValue = () => {
        let ValueAsString = localStorage.getItem("start value")
        if (ValueAsString) {
            let start = JSON.parse(ValueAsString)
            setCounter(start)
            setStart(start)
        }

    }

    const getMaxValue = () => {
        let maxValueAsString = localStorage.getItem("max value")
        if (maxValueAsString) {
            let maxAsNumber = JSON.parse(maxValueAsString)
            setMax(maxAsNumber)
        }
    }

    const error= counter === max ||start<0||start===max||start>max;
    return (
        <div className="App">

            <Limiter start={start}
                     max={max}
                     getMaxValue={getMaxValue}
                     counter={counter}
                     getStartValue={getStartValue}
                     startValue={startValue}
                     maxValue={maxValue}/>


            <header className="App_counter">
                <div className="display">
                    <div
                        className={error? "red" : "number"}> {start < 0 || start === max || start > max ? "error" : counter}</div>
                </div>
                <div className="buttons">
                    <Buttons start={start}
                             max={max}
                             counter={counter}
                             resetCount={resetCount}
                             changeCount={changeCount}/>
                </div>
            </header>
        </div>
    );
}

export default App;
