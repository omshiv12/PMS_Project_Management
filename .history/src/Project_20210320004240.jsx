import React,{useState} from 'react';

 const Project=()=>{
     const [projectName,setName]=useState('');

    return(
    <>
    
    <h1>{projectName}</h1>
    </>
    );

 };
 export default Project;