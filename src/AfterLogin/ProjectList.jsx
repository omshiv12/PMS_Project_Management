import { Button,Typography } from '@material-ui/core';
import { Base64 } from 'js-base64';
import React from 'react';
import './ProjectList.css';


const Rist=(props)=>{

    const ip1 = "192.168.1.11:5000";
    const ip2 = "192.168.43.250:5000";

     const empData = JSON.parse(localStorage.getItem('loginCredentials'))['0'];

     const setData = () => {
         let url;
         console.log("data" + JSON.stringify(empData));
         if(empData.Type == "Admin"){
             url = "http://"+ip1+"/retrieve/userLogin/";
         }
         else{
            url = 'http://'+ip1+'/retrieve/employees/';
         }
         let data = props.email;
         data = Base64.encode(data);
         let key = "Email";
         key  = Base64.encode(key);
         console.log(url+key+'/'+data);
         fetch(url+key+'/'+data)
         .then(result =>result.json())
         .then((resultJson) => {
             console.log(resultJson);
            localStorage.removeItem('loginCredentials');
            localStorage.setItem('loginCredentials',JSON.stringify(resultJson));
            if(localStorage.getItem('loginCredentials')){
                window.location.href="/dashboard";
            }
            // 
         })
         .catch(err => console.log(err))
     }

     const selectProject = () => {
        // console.log("data" + JSON.stringify(empData));
         let set = {
            Active_Project : props.projId,
         };
         set = Base64.encode(JSON.stringify(set));
         let where = {
            Email: props.email,
         };
         where = Base64.encode(JSON.stringify(where));
         let url;
         if(empData.Type == "Admin"){
             url = "http://"+ip1+"/update/userLogin/";
         }
         else{
            url = 'http://'+ip1+'/update/employees/';
         }
         console.log(url+set+'/'+where)
         fetch(url+set+'/'+where)
         .then(result => result.json())
         .then(resultJson => {
             console.log(resultJson);
            if(resultJson.status == "Success"){
                setData();
            }
            else{
                alert("There was an error updating the project");
            }
         })
         .catch(err => console.log(err));
         
     }

    //  const editProject = () => {
    //      history.push('/editProject');
    //  }
    return(
        <>
        <div className='Rist'>
            <div className='upper-container' >
                <div style={{
                    justifyContent:"center",
                    textAlign:"center",
                    marginLeft:"5%",
                    marginTop:0
                    }}>
                    
                    <Typography variant="h5" style={{color:"white",paddingTop:5,marginBottom:0,marginLeft:0,fontWeight:"bold"}}>{props.name}</Typography>
                    {/* <Typography variant="h8" style={{color:"white",marginTop:0,padding:0}}>Manager: {props.head}</Typography> */}
                    
                    {/* <img /> */}
                </div>
            </div>
            <div className='lower-container'>
                <div style={{height:"90%"}}>
                    <Typography  variant="h7" style={{marginLeft:20}}>{props.about}</Typography>
                </div>
                <div style={{display:"flex",flexDirection:"row",heigth:"10%",position:"relative",marginTop:"2%",bottom:"2%",width:"100%"}}>
                    {/* {props.edit ? (<Button variant="contained" color="accent" onClick={editProject} style={{alignSelf:"left",marginLeft:10,backgroundColor:"rgb(146, 175, 215)",color:"white"}}>Edit</Button>) : null} */}
                    <Button variant="contained" color="accent" onClick={selectProject} style={{align:"right",marginLeft:"auto",marginRight:10,backgroundColor:"rgb(146, 175, 215)",color:"white"}}>Select Project</Button>
                </div>
            </div>
           
            


        </div>
        
        </>
    );
};
export default Rist;