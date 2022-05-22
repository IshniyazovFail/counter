import React, {useState} from 'react';
import './App.css';
import {Buttons} from "./Buttons";


function App() {
    let [counter, serCounter] = useState<number>(0)
    const changeCount = () => {
        serCounter(counter + 1)
    }
    const resetCount = () => {
        serCounter(counter = 0)
    }

    return (
        <div className="App">
            <header className="App-header">
                <div className="display">
                    <div className={counter === 5 ? "red" : "number"}> {counter}</div>
                </div>
                <div className="buttons">
                    <Buttons counter={counter} resetCount={resetCount} changeCount={changeCount}/>
                </div>
            </header>
        </div>
    );
}

export default App;
