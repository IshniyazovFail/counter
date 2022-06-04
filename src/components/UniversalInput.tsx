import React, {ChangeEvent} from "react";
import s from './UniversalInput.module.css'
type UniversalInputType={
    callback:(value:number)=>void
    limit:number
    errorValue:boolean
}

export const UniversalInput=(p:UniversalInputType)=>{
    const onChangeHandler=(e:ChangeEvent<HTMLInputElement>)=>{
        p.callback(e.currentTarget.valueAsNumber)
    }

    return(
        <input className={p.errorValue?s.input_error:s.input} value={p.limit} onChange={onChangeHandler} type={"number"}/>
    )
}