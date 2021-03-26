import React,{useState} from 'react';
import {useHistory} from "react-router-dom";

import './Rist.css';
const Rist=({name,about,job})=>{
     const History=useHistory('');
    // const identity=()=>{
    //     let path='newPath';
    //     setPro(path);
    // }
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
                <a href="" target="_blank">
                <button onClick={identity}>edit</button>
                </a>
            </div>
            


        </div>
        
        </>
    );
};
export default Rist;