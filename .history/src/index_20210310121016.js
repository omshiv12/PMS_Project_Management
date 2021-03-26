import React from "react";
import ReactDOM from "react-dom";

let currDate=new Date(2021,3,10,12);
currDate=currDate.getHours();
let greeting='';
if(currDate>=1 && currDate<12){
    greeting='Good Morning';
}else if(currDate>=12 && currDate<19){
    greeting="Good AfterNoon";
}else{
    greeting="Good Night";
}
ReactDOM.render(
    <h1>Hello sir,{greeting}</h1>,
    document.getElementById("root")

);