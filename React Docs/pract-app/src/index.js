import React from 'react';
import ReactDOM from 'react-dom/client';
import "./App.css";
import {Profile} from "./Gallery.js";
import Gallery from "./Gallery.js";
import { MyDetails } from './Gallery.js';
import Persons from './props.js';

export default function App(){
    return (
        <>
        <Gallery/>
        <Profile/>
        <MyDetails/>
        <Persons/>
        </>
    )
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);