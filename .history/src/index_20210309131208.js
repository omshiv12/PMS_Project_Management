import React from 'react';
import ReactDOM from 'react-dom';
const fname="krishna";
const lname="krishna";
const currdate=new Date().toLocaleDateString();
const currtime=new Date().toLocaleTimeString();
//console.log(`my name is ${flname}`);
ReactDOM.render(
    <>
    <h1 contentEditable="true">My name is {fname} </h1>
    <p>current data is={currdate}</p>
    <p>current time is={currtime}</p>
</>    
    ,document.getElementById("root")
);