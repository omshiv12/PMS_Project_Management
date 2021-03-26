import React,{useState} from "react";
let time=new Date().toLocaleTimeString();

const[ctime,setTime]=useState(time);
const Digital =()=>{
return(
<>
<h1>{ctime}</h1>
</>
);
};
export default Digital;