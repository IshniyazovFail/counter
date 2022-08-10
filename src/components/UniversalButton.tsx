import React from "react";
import s from './UniversalButton.module.css'

type ButtonsType = {
name:string
    callback:()=>void
    counter?:number
    max:number
    errorValue:boolean
}

export const UniversalButton = (p: ButtonsType) => {
    const onClickHandler =()=>{
        p.callback()
    }
    return (
        <div >
            <button className={s.button}  disabled={p.counter===p.max||p.errorValue} onClick={onClickHandler} >{p.name}</button>
        </div>
    )
}