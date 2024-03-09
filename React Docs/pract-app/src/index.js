import React from 'react';
import ReactDOM from 'react-dom/client';
import "./App.css";
import {Profile} from "./Gallery.js";
import Gallery from "./Gallery.js";
import { MyDetails } from './Gallery.js';

export default function App(){
    return (
        <>
        <Gallery/>
        <Profile/>
        <MyDetails/>
        </>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);