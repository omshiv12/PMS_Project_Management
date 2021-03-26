import React,{useState} from 'react';

const File=()=>{
    const [name,setName]=useState();
    const inputEvent=(event)=>{
        console.log(event.target.value);
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
