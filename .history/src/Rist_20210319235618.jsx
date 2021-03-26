import React,{useState} from 'react';
import  {Route, useHistory,Switch} from "react-router-dom";
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
                <Switch>
                <Route exact path='/Project' component={Project} />
                </Switch>
                <button onClick={identity}>edit</button>
                
            </div>
            


        </div>
        
        </>
    );
};
export default Rist;