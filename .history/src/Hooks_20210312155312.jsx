import React from 'react';

const Hooks=()=>{
    const state=useState();
console.log(state)
let count=1;
const IncNum=()=>{
    console.log('click'+count++);
};
return(
<>
    <h1>{count}</h1>
    <button onClick={IncNum}>Click me</button>
</>
);
};
export default Hooks;