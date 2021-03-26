import React from 'react';

function add(a,b){
    let sum=a+b;
    return sum;
}
function sub(a,b){
    let diff=a-b;
    return diff;
}
function mul(a,b){
    let pro=a*b;
    return pro;
}
function div(a,b){
    let quo=a/b;
    return quo;
}
export default {add,sub,mul,div};
