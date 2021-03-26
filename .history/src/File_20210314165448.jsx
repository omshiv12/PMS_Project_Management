import React,{useState} from 'react';

const File=()=>{
    const [name,setName]=useState();
    const[fullName,setfullName]=useStste();
    const inputEvent=(event)=>{
        setName(event.target.value);
    }
return(
    
    <>
    <div>
        <h1>Hello{fullName}</h1>
        <input type='text' placeholder="enter your name"
        onChange={inputEvent} value={name} />
        <button>Click me</button>
    </div>
    </>
);
};
export default File;
