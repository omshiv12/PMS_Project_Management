import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
const fname="krishna";
const lname="krishna";
const links="";
const currdate=new Date().toLocaleDateString();
const currtime=new Date().toLocaleTimeString();
//console.log(`my name is ${flname}`);
ReactDOM.render(
    <>
    <h1 contentEditable="true">My name is {fname} </h1>
    <p>current data is={currdate}</p>
    <p>current time is={currtime}</p>
    <img src="pic_trulli.jpg"></img>
    <img src="pic_trulli.jpg"></img>
    <a href={links} target="_king">
    <img src="pic_trulli.jpg"></img>
    </a>
</>    
    ,document.getElementById("root")
);