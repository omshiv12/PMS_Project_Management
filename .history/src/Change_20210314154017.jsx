import React,{useState} from "react";

const Change=()=>{
    const purple='#8e44ad';
    const [bg,setBg]=useState(purple);
    const [name,setName]=useState('clickME');
    const bgChange=()=>{
        let newBg='#34495e';
        setBg(newBg);
        setName('Masala');
    
    };
    const bgBack=()=>{
        setBg(purple);
        setName("kuch bhi");
    };
    return(
        <>
        <div style={{backgroundColor:bg}}>
            <button onClick={bgChange} onDoubleClick={bgBack}>{name}</button>
        </div>
        </>
    );
};
export default Change;