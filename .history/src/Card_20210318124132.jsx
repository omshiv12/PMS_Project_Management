import React,{useState} from 'react';
import Rist from './Rist';
import './Card.css';
const Card=()=>{
    const[name,setName]=useState('Name');
    const[job,setJob]=useState('Title');
    const[about,setAbout]=useState('kuch');



    return(
        <>
        <div className='Card'>
            <div className='Card1'>
            <Rist name={'punit'} job={'google'} about={'Engineer'}/>
            <Rist name={'punit'} job={'google'} about={'Engineer'}/>
            <Rist name={'punit'} job={'google'} about={'Engineer'}/>
            </div>
            <div className='Card2'>
            <Rist name={'punit'} job={'google'} about={'Engineer'}/>
            <Rist name={'punit'} job={'google'} about={'Engineer'}/>
            <Rist name={'punit'} job={'google'} about={'Engineer'}/>
            </div>
        </div>
        
        </>

    );
};
export default Card;