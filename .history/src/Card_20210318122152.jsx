import React,{useState} from 'react';
import Rist from './Rist';
const Card=()=>{
    const[name,setName]=useState('Name');
    const[job,setJob]=useState('Title');
    const[about,setAbout]=useState('kuch');



    return(
        <>
        <div className='Card'>
            <Rist name={'punit'} job={'google'} about={'Engineer'}/>
        </div>
        </>

    );
};
export default Card;