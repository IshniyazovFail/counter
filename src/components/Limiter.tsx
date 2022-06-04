import React from 'react';
import {UniversalButton} from "./UniversalButton";


type LimiterPropsType={
    counter:number
    max:number
    errorValue:boolean
    counterValue:()=>void
    resetCounter:()=>void

}
export const Limiter = (p:LimiterPropsType) => {
    return (
        <div className="counter">
            <div className="display">
                <div className={p.counter !==p.max?"number":"number_error"}>{p.errorValue?<div className="text_error">incorrect value !</div>:p.counter}</div>
            </div>
            <div className="buttons">
                <UniversalButton errorValue={p.errorValue} max={p.max} counter={p.counter} callback={p.counterValue} name="inc"/>
                <UniversalButton errorValue={p.errorValue} max={p.max}  callback={p.resetCounter} name="reset"/>
            </div>
        </div>
    );
};

