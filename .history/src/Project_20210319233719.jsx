import React,{useState} from 'react';
import {useHistory,useLocation} from 'react-router-dom';
 const Project=()=>{
     const history=useHistory();
     const location=useLocation();
    return(
    <>
    <h1>Name {location.pathname.replace("/",'')}</h1>
    {
        <p>hfdnhcnjldh</p>
    }
    </>
    );

 };
 export default Project;
