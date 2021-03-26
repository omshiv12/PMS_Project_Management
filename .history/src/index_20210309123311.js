import React from 'react';
import ReactDOM from 'react-dom';
const flname="krishna";
console.log(`my name is ${flname}`)
ReactDOM.render(
    <>
    <h1>My name is {flname}</h1>
    <p>my lucky number is{2+3}</p>
</>    
    ,document.getElementById("root")
);