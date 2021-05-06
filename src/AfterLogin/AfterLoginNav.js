import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import './index.css';
import { AppBar, Typography } from '@material-ui/core';


export default function NavBar() {

  const logout = () => {
    localStorage.removeItem('login');
    window.location.reload();
    
  }
  

  return (

    <AppBar style={{display:'flex',flexDirection:'row',backgroundColor:'#03045e'}} >
       
        <ul style={{display:'flex',flexDirection:'row',listStyleType:'none',marginTop:15}}>
            <li><Typography color="inherit"><a href='/dashboard' className='lnk'>Dashboard</a></Typography></li>
            <li><Typography color="inherit"><a href='/projects' className='lnk'>Projects</a></Typography></li>
        </ul>

        <AddIcon style={{margin:'10',marginTop:15,color:'white'}} onClick={()=>{window.location.href="/createProject"}}/>
        <AccountCircleIcon onClick={logout}  style={{fontSize:30,marginTop:15,marginLeft:'auto',marginRight:40}} />
    </AppBar>
  )
}