import React,{useState} from 'react';

 const Project=()=>{
     const [name,setName]=useState('name');
    return(
    <>
    
    <h1>{name}</h1>
    </>
    );

 };
 export default Project;
