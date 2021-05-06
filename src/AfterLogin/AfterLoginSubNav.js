import { Button, Typography } from '@material-ui/core';
import { Base64 } from 'js-base64';
import React from 'react';
import { useHistory } from 'react-router';
import '../index.css';
export default function SubNav() {
    const history = useHistory();
    const lnk = {
        textDecoration: "none",
        color:"white",
        margin:10,
        marginRight:10,
        padding:10
    };

    const ip1 = "192.168.1.11:5000";
  const ip2 = "192.168.43.250:5000";
    console.log(JSON.parse(localStorage.getItem('loginCredentials'))['0']);

    const [project,setProject] = React.useState([]);

    const setProj = () => {
        let key = "_id";
        key = Base64.encode(key);
        let id = JSON.parse(localStorage.getItem('loginCredentials'))['0']['Active_Project'];
        if(id){
            id = Base64.encode(id);

            fetch('http://'+ip1+'/retrieve/projects/'+key+'/'+id)
            .then(result => result.json())
            .then(resultJson => {
                resultJson.forEach(ele => setProject(ele));
            })
            .catch(err => console.log(err));
        }
    }

    React.useState(()=>{
        setProj();
    },[project])

    

    return (
            
        <div style={{marginTop:49,backgroundColor:"#0077B6",height:55}}>
            
            <ul style={{display:'flex',flexDirection:'row',justifyContent:'center',}}>
            <Typography variant="h6" style={{justifyContent:"flex-start",position:"absolute",left:15,top:63,color:"white"}}><i>{project.Project_Name}</i></Typography>
                {/* <li style={{listStyleType:'none',margin:5,padding:10}}><a href='/projects' className={lnk}><Typography  paragraph style={{color:"white"}}>Projects</Typography></a></li> */}
                <li style={{listStyleType:'none',margin:5,padding:10}}><a href='/progress' className={lnk}><Typography  paragraph style={{color:"white"}}>Progress</Typography></a></li>
                <li style={{listStyleType:'none',margin:5,padding:10}}><a href='/issues' className={lnk}><Typography  paragraph style={{color:"white"}}>Issues</Typography></a></li>
                <li style={{listStyleType:'none',margin:5,padding:10}}><a href='/conversations' className={lnk}><Typography  paragraph style={{color:"white"}}>Conversations</Typography></a></li>
                <Button onClick={() => history.push("/dailyProgress")} style={{marginTop:10,position:"absolute",right:20,color:"black",backgroundColor:"white",height:40}}>Add Daily Progress</Button>
            </ul>
            
        </div>

    )
}

// html{
//     display:flex;
//     min-height:100%;
//     min-width:100%;
//   }
//   body{
//     margin:0;
//     display:flex;
//     min-height:100%;
//     min-width:100%;
//   }
//   #root
//   {
//     display: flex;
//     flex-direction: column;
//     min-height:100%;
//     min-width:100%;
//   }
//   .lnk{
    
//   }
  