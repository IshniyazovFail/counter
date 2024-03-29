import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {HashRouter,} from "react-router-dom";
import {Header} from "./components/Navbar/Header";
import {Pages} from "./components/Navbar/Pages";
import {Provider} from "react-redux";
import {store} from "./state/store";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
        <React.StrictMode>
            <HashRouter>
                <Header/>
                <Pages/>
            </HashRouter>
        </React.StrictMode>
    </Provider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
