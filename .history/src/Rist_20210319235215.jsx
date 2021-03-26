import React,{useState} from 'react';
import  {Route, useHistory} from "react-router-dom";
import Project from './Project';
import './Rist.css';
const Rist=({name,about,job})=>{
     const history=useHistory();
     const identity=()=>{
         history.push("./Project")
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
                <Route exact path='/Project' component={Project} />
                <button onClick={()=>history.push('/project')}>edit</button>
                
            </div>
            


        </div>
        
        </>
    );
};
export default Rist;