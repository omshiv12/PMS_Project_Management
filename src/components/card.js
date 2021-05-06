import React from 'react'
import SettingsIcon from '@material-ui/icons/Settings';
import SubCard from './subCard';
export default function Card() {
    return (
        <>
            <div>
                <div style={{width:900,margin:'auto',display:'flex'}}>
                <button style={{outline:'none',color:'white',margin:10,backgroundColor:'#d00000',borderRadius:10,borderWidth:0,padding:5,width:100}}>Add Project</button>
                <SettingsIcon style={{marginTop:15,marginLeft:'auto',marginRight:10,color:'#d00000'}}/>
                </div>
                <SubCard/>
            </div>
        </>
    )
}
