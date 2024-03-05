import React from 'react';
import ReactDOM from 'react-dom';
import "./App.css";

export default function App(){
    return (
        <div>
            <Intro />
            <h1>PRACTICE</h1>
            <Profile />
            <Profile />
            <Profile />
        </div>
    )
}

function Intro(){
    return(
        <article>
            <h1>This is My first component in react</h1>
            <ol>
                <li>My name is Joy Kiboi</li>
                <li>I School at dedn Kimathi</li>
            </ol>
        </article>
    )
}

function Profile(){
    return(
        <img
      src="https://i.imgur.com/MK3eW3Am.jpg"
      alt="Katherine Johnson"
    />
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);