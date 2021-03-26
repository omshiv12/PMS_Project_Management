import React from "react";

const Change=()=>{
    const [bg,setBg]=useState();
    const bgChange=()=>{
        const purple='#8e44ad';
    
    }
    return(
        <>
        <div style={{backgroundColor:bg}}>
            <button onClick={bgChange}>Click me</button>
        </div>
        </>
    );
};