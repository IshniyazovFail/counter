import {counterReduser} from "../redusers/CounterReduser";
import {combineReducers, createStore} from "redux";


const RootReduser=combineReducers({
    counter:counterReduser
})

export const store=createStore(RootReduser)
export type RootStateType=ReturnType<typeof RootReduser>