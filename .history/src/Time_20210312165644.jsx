import React,{useState} from 'react';
const Time=()=>{
    let newTime=new Date().toLocaleTimeString();

    const [cTime,setTime]=useState();
    return(
        <>
        <h1>{cTime}</h1>
        <button>get time</button>
        </>
    );
};
export default Time;