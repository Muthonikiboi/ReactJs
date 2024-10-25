import { useState } from 'react';

export default function Snapshot(){
    return(
        <Form/>
    )
}

function Form(){
    const [ isSent, setIsSent]=useState(false);
    const [message,setMessage]=useState('Type Here')

    if (isSent){
        <h1>message is on its way</h1>
    }

    return(
        <form onSubmit={(e)=>{
            e.preventDefault()
            setIsSent(true)
            sendMessage(message)
        }}>
            <textarea onChange={e=>setMessage(e.target.value)}/>
            <button type='submit'>Send</button>
        </form>
    )
}

function sendMessage(message){

}