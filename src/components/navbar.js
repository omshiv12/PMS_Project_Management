import React from 'react';
// import ReactDOM from 'react-dom';
import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import '../index.css'
import { color } from './colors';
export default function NavBar() {
  return (
    <div style={{display:'flex',flexDirection:'row'}} >
        <MenuIcon style={{margin:'10',marginTop:15,color:color.secondary}}/>
        <ul style={{display:'flex',flexDirection:'row',listStyleType:'none'}}>
            <li><a href='#' className='lnk'>My Tasks</a></li>
            <li><a href='#' className='lnk'>Inbox</a></li>
            <li><a href='#' className='lnk'>Dashboard</a></li>
        </ul>
        <AddIcon style={{margin:'10',marginTop:13,color:color.secondary}}/>
        <input type='text'placeholder='Search' 
        style={{height:20,marginTop:13,width:500,color:color.secondary,outline:'none',borderColor:color.secondary,borderWidth:1,padding:5,marginLeft:90,borderRadius:10}}/>
        <a href='#'><SearchIcon style={{marginTop:13,backgroundColor:'white',height:30,borderTopRightRadius:10,borderBottomRightRadius:10,color:color.secondary}}/></a>
        <AccountCircleIcon style={{marginTop:13,marginLeft:'auto',color:color.secondary}} />
    </div>
  )
}