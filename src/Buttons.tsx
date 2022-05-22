import React from "react";
import s from './Buttons.module.css'

type ButtonsType = {
    changeCount: () => void
    resetCount: () => void
    counter: number
}

export const Buttons = (p: ButtonsType) => {

    return (
        <div className={s.buttons}>
            <button disabled={p.counter === 5} onClick={() => p.changeCount()}
                    className={p.counter === 5 ? s.opacity : s.inc}>inc
            </button>
            <button onClick={() => p.resetCount()} className={s.reset}>reset</button>
        </div>
    )
}