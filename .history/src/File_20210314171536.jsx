import React,{useState} from 'react';

const File=()=>{
    const [name,setName]=useState("");
    const[fullName,setfullName]=useState();
    const inputEvent=(event)=>{
        setName(event.target.value);
    };
    const onSubmit=()=>{
        setfullName(name);
    };
return(
    
    <>
    <div className="main_div">
        <form onSubmit={onSubmit}>
    <div>
        <h1>Hello{fullName}</h1>
        <input type='text' placeholder="enter your name"
        onChange={inputEvent} value={name} />
        <button onClick={onSubmit}>Click me</button>
    </div>
    </form>
    </div>
    </>
);
};
export default File;
