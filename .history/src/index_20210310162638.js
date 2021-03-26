import React from "react";
import ReactDOM from "react-dom";
import {add,sub,mul,div}from './calc';
ReactDOM.render(
    
    
    <>
    <ol>
    <li>sum is {add(30,2)}</li>
    <li>{sub(40,3)}</li>
    <li>{mul(32,4)}</li>
    <li>{div(40,4)}</li>
    </ol>
    </>
  
    
    ,
    
    
    document.getElementById("root")

);