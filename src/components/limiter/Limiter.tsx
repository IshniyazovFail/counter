import React, {ChangeEvent} from "react";
import s from './Limiter.module.css'

type limiterType = {
    maxValue: (value: string) => void
    startValue: (value: string) => void
    getStartValue: () => void
    getMaxValue: () => void
    counter: number
    max: number
    start: number
}

export const Limiter = (p: limiterType) => {

    const onClickSetHundler = () => {
        p.getStartValue()
        p.getMaxValue()

    }
    const maxOnChangeInput = (max: ChangeEvent<HTMLInputElement>) => {
        p.maxValue(max.currentTarget.value)

    }
    const startOnChangeInput = (start: ChangeEvent<HTMLInputElement>) => {
        p.startValue(start.currentTarget.value)


    }
    const errorSet = p.start < 0 || p.max === p.start || p.max < p.start
    return (
        <div className="App_limiter">
            <div className="display">
                <div className="value">
                    <div className="value_limit"> max value:<input value={p.max} onChange={maxOnChangeInput}
                                                                   type="number" className="input"/></div>
                    <div className="value_limit">start value:<input value={p.start} onChange={startOnChangeInput}
                                                                    type="number" className="input"/></div>
                </div>
            </div>
            <div className="buttons">
                <button className={errorSet?s.opacity :s.button} disabled={errorSet } onClick={onClickSetHundler}>set</button>
            </div>
        </div>
    )


}