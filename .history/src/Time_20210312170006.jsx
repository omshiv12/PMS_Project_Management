import React,{useState} from 'react';
const Time=()=>{
    let newTime=new Date().toLocaleTimeString();

    const [cTime,setTime]=useState();
    const UpdateTime=()=>{
        newTime=new Date().toLocaleTimeString();
    }
    return(
        <>
        <h1>{cTime}</h1>
        <button onClick={UpdateTime}>get time</button>
        </>
    );
};
export default Time;