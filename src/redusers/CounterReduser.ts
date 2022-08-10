import {counterType} from "../App";


type actionType=setMaxACType|setCounterAC|setStartACType|setStatusType

const initialState:counterType = {
    start:0,
    max:5,
    counter:0,
    status:false
}
export const counterReduser=(state:counterType=initialState,action:actionType)=>{
    switch (action.type){
        case "SET_MAX":
        case "SET_COUNTER":
        case "SET_START":
        case "SET_STATUS":
            return {...state,...action.payload}
        default :return state
    }
}


type setMaxACType=ReturnType<typeof setMaxAC>
export const setMaxAC=(max:number)=>{
    return{
        type:"SET_MAX",
        payload:{
            max
        }
    } as const
}

type setCounterAC =ReturnType<typeof setCounterAC>
export const setCounterAC=(counter:number)=>{
    return{
        type:"SET_COUNTER",
        payload:{
            counter
        }
    } as const
}

type setStartACType=ReturnType<typeof setStartAC>
export const setStartAC=(start:number)=>{
    return{
        type:"SET_START",
        payload:{
            start
        }

    } as const
}



type setStatusType=ReturnType<typeof setStatusAC>
export  const setStatusAC=(status:boolean)=>{
    return{
        type:"SET_STATUS",
        payload:{
            status
        }
    } as const
}