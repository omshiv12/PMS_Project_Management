import React from "react";
import ReactDOM from "react-dom";

let currDate=new Date();
currDate=currDate.getHours();
let greeting=''
if(currDate>=1 && currDate<12){

}
ReactDOM.render(
    <h1>Hello sir,{currDate}</h1>,
    document.getElementById("root")

);