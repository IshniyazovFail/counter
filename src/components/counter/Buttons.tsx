import React from "react";
import s from './Buttons.module.css'

type ButtonsType = {
    changeCount: () => void
    resetCount: () => void
    counter: number
    max:number
    start:number
}

export const Buttons = (p: ButtonsType) => {
 const errorInc=p.counter === p.max ||p.start<0||p.max===p.start||p.max<p.start;
    return (
        <div className={s.buttons}>
            <button disabled={errorInc } onClick={() => p.changeCount()}
                    className={errorInc? s.opacity : s.inc}>inc
            </button>
            <button onClick={() => p.resetCount()} className={s.reset}>reset</button>
        </div>
    )
}