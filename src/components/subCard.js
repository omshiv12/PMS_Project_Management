import React from 'react'
import AddIcon from '@material-ui/icons/Add';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import ClearSharpIcon from '@material-ui/icons/ClearSharp';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import DoneIcon from '@material-ui/icons/Done';
export default function SubCard() {
    return (
        <div style={{display:'flex',flexDirection:'column',width:900,backgroundColor:'#ffba08',margin:'auto',borderRadius:30}}>
            <div style={{display:'flex'}}>
            <h2 style={{margin:15,marginBottom:4,color:'#d00000'}}>FrontEnd Project</h2>
            <AddIcon style={{marginLeft:'auto',marginTop:15,marginRight:20 ,color:'#d00000'}}/>
            </div>
            <hr style={{margin:0,padding:0}}/>
            <div style={{margin:10,display:'flex',flexDirection:'row'}}>
                <BookmarkIcon style={{color:'#d00000'}}/>
               <h3 style={{margin:0,padding:0}}>Finalize Budget</h3>
               <span style={{marginLeft:'auto'}}>
               <DoneIcon style={{marginLeft:'auto',color:'#00ff00',marginRight:13}}/>
               <AccountCircleIcon style={{marginTop:0,marginLeft:'auto',color:'#00ff00'}} />
               </span>
            </div>
            <div style={{margin:10,display:'flex',flexDirection:'row'}}>
                <BookmarkIcon style={{color:'#d00000'}}/>
                <h3 style={{margin:0,padding:0}}>Create Attendee List</h3>
               <span style={{marginLeft:'auto'}}>
               <ClearSharpIcon style={{marginLeft:'auto',color:'#ff0000',marginRight:13}}/>
               <AccountCircleIcon style={{marginTop:0,marginLeft:'auto',color:'#d00000'}} />
               </span>
            </div>
            <div style={{margin:10,display:'flex',flexDirection:'row'}}>
                <BookmarkIcon style={{color:'#d00000'}}/>
                <h3 style={{margin:0,padding:0}}>Confirm Venue</h3>
               <span style={{marginLeft:'auto'}}>
               <DoneIcon style={{marginLeft:'auto',color:'#00ff00',marginRight:13}}/>
               <AccountCircleIcon style={{marginTop:0,marginLeft:'auto',color:'#00ff00'}} />
               </span>
            </div>
            <div style={{margin:10,display:'flex',flexDirection:'row'}}>
                <BookmarkIcon style={{color:'#d00000'}}/>
                <h3 style={{margin:0,padding:0}}>Build Registration Page</h3>
               <span style={{marginLeft:'auto'}}>
               <ClearSharpIcon style={{marginLeft:'auto',color:'#ff0000',marginRight:13}}/>
               <AccountCircleIcon style={{marginTop:0,marginLeft:'auto',color:'#d00000'}} />
               </span>
            </div>
        </div>
    )
}
