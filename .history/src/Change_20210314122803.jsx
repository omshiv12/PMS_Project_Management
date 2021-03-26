import React from "react";

const Change=()=>{
    const purple='#8e44ad';
    const [bg,setBg]=useState();
    const bgChange=()=>{
        
    
    }
    return(
        <>
        <div style={{backgroundColor:bg}}>
            <button onClick={bgChange}>Click me</button>
        </div>
        </>
    );
};