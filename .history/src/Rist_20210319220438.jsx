import React,{useState} from 'react';
import {BrowserRouter as Router, useHistory} from "react-router-dom";

import './Rist.css';
const Rist=({name,about,job})=>{
     const history=useHistory();
     const identity=()=>{
         history.push("./")
     }
    return(
        <>
        <div className='Rist'>
            <div className='upper-container'>
                <div className='image-container'>
                    <img />
                </div>
            </div>
            <div className='lower-container'>
                <h3>{name}</h3>
                <h4>{job}</h4>
                <p>{about}</p>
                
                <button onClick={identity}>edit</button>
                
            </div>
            


        </div>
        
        </>
    );
};
export default Rist;