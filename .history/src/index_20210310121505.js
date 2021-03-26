import React from "react";
import ReactDOM from "react-dom";

let currDate=new Date(2021,3,10,12);
currDate=currDate.getHours();
let greeting='';
const cssStyle={
   // color:'green'
};
if(currDate>=1 && currDate<12){
    greeting='Good Morning';
    cssStyle.color='green';
}else if(currDate>=12 && currDate<19){
    greeting="Good AfterNoon";
    cssStyle.color='orange';
}else{
    greeting="Good Night";
    cssStyle.color='black';
}
ReactDOM.render(
    <>
    <div>
    <h1>Hello sir,<span style={cssStyle}>{greeting}</span></h1>,
    </div>
    </>
    document.getElementById("root")

);