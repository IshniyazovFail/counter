import React from 'react';
import {NavLink} from "react-router-dom";
import s from "./Header.module.css"

export const Header = () => {
    return (
        <div className={s.body}>
            <div className={s.button}>
                <NavLink to={"/counter_1"}> Counter 1</NavLink>
                <NavLink to={"/counter_2"}>Counter 2</NavLink>
            </div>
        </div>
    );
};

