import React from "react";

const Change=()=>{
    const purple='#8e44ad';
    const [bg,setBg]=useState();
    const bgChange=()=>{
        let newBg='#34495e';
        setBg()
    
    }
    return(
        <>
        <div style={{backgroundColor:bg}}>
            <button onClick={bgChange}>Click me</button>
        </div>
        </>
    );
};