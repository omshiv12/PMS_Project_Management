import React from "react";

const Change=()=>{
    const bgChange=()=>{
        console.log("clicked")
    }
    return(
        <>
        <div style={{backgroundColor:"cyan"}}>
            <button onClick={bgChange}>Click me</button>
        </div>
        </>
    );
};