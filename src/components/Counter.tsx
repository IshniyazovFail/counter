import React from "react";
import {UniversalInput} from "./UniversalInput";
import {UniversalButton} from "./UniversalButton";

type CounterType={
    max:number
    maxValue:(value: number)=>void
    start:number
    startValue:(value: number)=>void
    setLimit:()=>void
    errorValue:boolean
}

export const Counter = (p:CounterType) => {
    return (
        <div className='counter'>
            <div className='display'>
                <div>Max value: <UniversalInput limit={p.max} callback={p.maxValue}/></div>
                <div>Start value:<UniversalInput limit={p.start} callback={p.startValue}/></div>
            </div>
            <div className="set">
                <UniversalButton errorValue={p.errorValue} callback={p.setLimit} max={p.max} name="set"/>
            </div>
        </div>
    );
};

