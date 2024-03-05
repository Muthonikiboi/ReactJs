import React from 'react';
import ReactDOM from 'react-dom/client';
import "./App.css";
import {Profile} from "./Gallery.js";

export default function App(){
    return (
        //<Gallery/>
        <Profile/>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);