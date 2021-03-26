import React,{useState} from 'react';
import ''
const Rist=()=>{
    const[name,setName]=useState('Name');
    const[job,setJob]=useState('Title');
    const[about,setAbout]=useState('kuch');
    return(
        <>
        <div className='Rist'>
            <div className='upper'>
                <div className='image'>
                    <img src=""/>
                </div>
            </div>
            <div className='lower'>
                <h1>{name}</h1>
                <h1>{job}</h1>
                <h1>{about}</h1>
                <button>profile</button>

            </div>

        </div>
        </>
    );
};
export default Rist;