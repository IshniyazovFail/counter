import React from 'react';
import {Route, Routes} from "react-router-dom";
import App from "../../App";
import {AppCounter2} from "../../AppCounter2";

 export const Pages = () => {
    return (
        <div>
            <Routes>
                <Route path={"/counter_1"} element={<App/>}/>
                <Route path={"/counter_2"} element={<AppCounter2/>}/>
            </Routes>
        </div>
    );
};

