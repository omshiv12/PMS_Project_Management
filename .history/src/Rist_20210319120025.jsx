import React,{useState} from 'react';
import './Rist.css';
const Rist=({name,about,job})=>{
    // const[name,setName]=useState('Name');
    // const[job,setJob]=useState('Title');
    // const[about,setAbout]=useState('kuch');
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
                <button>profile</button>

            </div>
           
        </div>
        
        </>
    );
};
export default Rist;