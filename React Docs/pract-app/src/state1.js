import { useState } from "react";
import { sculptureList } from "./data";

export default function LearnStates(){
    return(
        <div>
            <FirstState/>
        </div>
    )
}

function FirstState(){

    const [index, setIndex]=useState(0);

    function handleNextClick(){
        if(index <= 12){
            setIndex(index+1)
        }else{
            setIndex(1)
        }
    }

    const deta =sculptureList[index];

    return(
        <div>
            <button onClick={handleNextClick}>
                Next
            </button>
            <h1>{deta.name}</h1>
            <img src={deta.url} alt={deta.alt}/>
            <h3>{deta.description}</h3>
        </div>
    )
}