import React from "react";
import ReactDOM from "react-dom";

let currDate=new Date();
currDate=currDate.getHours();
ReactDOM.render(
    <h1>Hello sir,{currDate}</h1>,
    document.getElementById("root")

);