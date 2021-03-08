import React from 'react';
import ReactDOM from 'react-dom';
import Card from './components/card';
import NavBar from './components/navbar';
import SubNav from './components/subNav';
import './index.css';
export default function App() {
  return (
    <>
        <NavBar/>
        <hr style={{padding:0,margin:0}}/>
        <SubNav/>
        <hr style={{padding:0,margin:0,marginBottom:40}}/>
        <h2 style={{textAlign:'center',color:'#d00000'}}>My Tasks</h2>
        <Card/>
    </>
  )
}
