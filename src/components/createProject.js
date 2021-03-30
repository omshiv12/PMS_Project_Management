import React ,{useState} from 'react'
import '../stylesheets/createproject.css';
import DeleteIcon from '@material-ui/icons/Delete';
import { TextareaAutosize } from '@material-ui/core';
import AddSharpIcon from '@material-ui/icons/AddSharp';
export default function CreateProject() {
    const [leaders,setleaders]=useState([]);
    const handleAddLeader=()=>{
        const values=[...leaders];
        values.push({value:''});
        setleaders(values);
    }
    const handleChangeLeader=(id,event)=>{
        const values=[...leaders];
        values[id].value=event.target.value;
        setleaders(values);
    }
    const handleDeleteLeader=(id)=>{
        const values=[...leaders];
        values.splice(id,1);
        setleaders(values);
    }
    ////Members
    const [members,setmembers]=useState([]);
    const handleAddMembers=()=>{
        const values=[...members];
        values.push({value:''});
        setmembers(values);
    }
    const handleChangeMembers=(id,event)=>{
        const values=[...members];
        values[id].value=event.target.value;
        setmembers(values);
    }
    const handleDeleteMembers=(id)=>{
        const values=[...members];
        values.splice(id,1);
        setmembers(values);
    }
    return (
        <div style = {{ display: 'flex',justifyContent:'center',alignItems:'center', backgroundColor: '#222222', height: '100%', width: '100%' } } >
        <div className='cont' style={{display: 'flex', flexDirection: 'column',borderRadius:50,backgroundColor:'#111111',width:'50%',justifyContent:'center',alignItems:'center'}}>
        <h1 style = {{  fontSize: 40, color: 'white' }}> Create Project </h1> 
        <input type='text' className='inpt' placeholder='Enter Project name'/>
        <input type='text' className='inpt' placeholder='Enter Expected Completion Date'/>
        <div style={{display:'flex'}}>
        <h3 style = {{  fontSize: 20, color: 'white' }}>Add Team Members</h3>
        <AddSharpIcon onClick={handleAddLeader} style={{color:'white',marginTop:'auto',marginBottom:'auto',marginLeft:10}}/>
        </div>
        {leaders.map((field,idx)=>{
            return(
                <div style={{display:'flex',width:'40%'}}>
                    <input type='email' 
                    className='inpt' 
                    style={{width:'100%',marginRight:10}}
                    placeholder='Enter Email ID' 
                    value={field.value} 
                    onChange={(e)=>handleChangeLeader(idx,e)}/>
                    <DeleteIcon onClick={()=>handleDeleteLeader(idx)} style={{color:'red',margin:'auto',cursor:'pointer'}}/>
                </div>
            );
        })}
        {/* <button onClick={handleAddLeader} className='btn' >Add</button> */}
        <div style={{display:'flex'}}>
        <h3 style = {{  fontSize: 20, color: 'white' }}>Add Team Members</h3>
        <AddSharpIcon onClick={handleAddMembers} style={{color:'white',marginTop:'auto',marginBottom:'auto',marginLeft:10}}/>
        </div>
        {members.map((field,idx)=>{
            return(
                <div style={{display:'flex',width:'40%'}}>
                    <input type='email' 
                    className='inpt' 
                    style={{width:'100%',marginRight:10}}
                    placeholder='Enter Email ID' 
                    value={field.value} 
                    onChange={(e)=>handleChangeMembers(idx,e)}/>
                    <DeleteIcon onClick={()=>handleDeleteMembers(idx)} style={{color:'red',margin:'auto',cursor:'pointer'}}/>
                </div>
            );
        })}
        {/* <button onClick={handleAddMembers} className='btn' >Add</button> */}
        <h3 style = {{  fontSize: 20, color: 'white' }}>Add Description</h3>
        <TextareaAutosize placeholder='Enter Description' style={{width:'40%',fontFamily:'sans-serif',marginTop:20,fontSize:20,padding:15,outline:'none',borderRadius:20,backgroundColor:'rgba(230,230,230)'}}/>
        <button className='btn' style={{marginTop:20,backgroundColor:'white',color:'black',fontWeight:'bold',marginBottom:26}} >Submit</button>
        </div>
        </div>
    )
}


