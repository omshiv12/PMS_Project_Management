import React,{useState} from 'react';

import './Rist.css';
const Rist=({name,about,job})=>{
    const [name,setName]=useState();
    const identity=()=>{
        let path='newPath';
        history.push(path);
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