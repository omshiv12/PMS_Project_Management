import React from 'react'
import '../index.css'
export default function SubNav() {
    return (
        <div>
            <ul style={{display:'flex',flexDirection:'row',justifyContent:'center'}}>
                <li style={{listStyleType:'none'}}><a href='#' className='lnk'>Projects</a></li>
                <li style={{listStyleType:'none'}}><a href='#' className='lnk'>Progress</a></li>
                <li style={{listStyleType:'none'}}><a href='#' className='lnk'>Bugs</a></li>
                <li style={{listStyleType:'none'}}><a href='#' className='lnk'>Conversations</a></li>
            </ul>
        </div>
    )
}
