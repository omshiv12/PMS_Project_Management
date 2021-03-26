import React,{useState} from 'react';

const File=()=>{
    const [name,setName]=useState("");
    
    const inputEvent=(event)=>{
        setName(event.target.value);
    };
    
    const onSubmit=(event)=>{
        event.preventDefault();
        setfullName(name);
        setNameNew();
    };
return(
    
    <>
    <div className="main_div">
        <form onSubmit={onSubmit}>
    <div>
        <h1>Hello{fullName} {setNameNew}</h1>
        <input type='text' placeholder="enter your name"
        name='' onChange={inputEvent} value={name} />
        <input type='text' placeholder="enter your name"
        onChange={inputEventTwo} value={lastName} />
        <button onClick={onSubmit}>Click me</button>
    </div>
    </form>
    </div>
    </>
);
};
export default File;
