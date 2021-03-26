import React,{useState} from 'react';

const File=()=>{
    const [name,setName]=useState();
    const inputEvent=(event)=>{
        setName(event.target.value);
    }
return(
    
    <>
    <div>
        <h1>Hello{name}</h1>
        <input type='text' placeholder="enter your name"
        onChange={inputEvent} />
        <button>Click me</button>
    </div>
    </>
);
};
export default File;
