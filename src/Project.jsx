import React,{useState} from 'react';

 const Project=()=>{
     const [projectName,setName]=useState('ProjectName ');

    return(
    <>
    
    <h1>{projectName}</h1>
    </>
    );

 };
 export default Project;
