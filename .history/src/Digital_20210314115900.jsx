import React,{useState} from "react";
let time=new Date().toLocaleTimeString();

const[ctime,setTime]=useState(time);
const UpdateTime=()=>{
    time=new Date().toLocaleTimeString();
    setTime(time);
}
setInterval(UpdateTime,1000)
const Digital =()=>{
return(
<>
<h1>{ctime}</h1>
//<button onClick={UpdateTime}>get time</button>
</>
);
};
export default Digital;