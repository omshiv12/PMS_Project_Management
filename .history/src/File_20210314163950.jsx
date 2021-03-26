import React from 'react';
const File=()=>{
    const inputEvent=()=>{
        console.log("clicked");
    }
return(
    
    <>
    <div>
        <h1>Hello</h1>
        <input type='text' placeholder="enter your name"
        onChange={inputEvent} />
        <button>Click me</button>
    </div>
    </>
);
};
export default File;
