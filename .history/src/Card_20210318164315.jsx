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
            <Rist name={'Shivam'} job={'MicroSoft'} about={'Engineer'}/>
            
            </div>
            <div className='Card2'>
            <Rist name={'Mukund'} job={'Amazon'} about={'Engineer'}/>
            <Rist name={'Udit'} job={'Amazon'} about={'Engineer'}/>
            
            </div>
            <div className='Card2'>
            <Rist name={'rakesh'} job={'flipkart'} about={'Engineer'}/>
            <Rist name={'akshay'} job={'walmart'} about={'Engineer'}/>
            </div>
            <div className='Card2'>
            <Rist name={'ashish'>} job={'goldman'} about={'Engineer'}/>
            <Rist name={'shivank'} job={'tcs'} about={'Engineer'}/>
            </div>
        </div>
        
        </>

    );
};
export default Card;