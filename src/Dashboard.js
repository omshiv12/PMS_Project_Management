import React from 'react';
// import ReactDOM from 'react-dom';
import Card from './card';
// import CreateProject from './components/createProject';
// import EditProject from './components/EditProject';
// import NavBar from './navbar';
// import SubNav from './subNav';
import './index.css';
import { Typography } from '@material-ui/core';

export default function App() {
  return (
    <>
        {/* <CreateProject/> */}
        {/* <NavBar/> */}
        <hr style={{padding:0,margin:0}}/>

        {/* <SubNav/> */}
        <hr style={{padding:0,margin:0,marginBottom:40}}/>
        
        {/* <div style={{width:"100%",backgroundColor:'#708090',padding:20}}> */}
          <Typography variant="h5" style={{textAlign:"center"}}>My Tasks</Typography>
          
        {/* </div> */}
        <Card/>
    </>
  )
}