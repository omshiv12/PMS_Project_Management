import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteIcon from '@material-ui/icons/DeleteOutline';
import AddSharpIcon from '@material-ui/icons/AddSharp';
import { Button } from '@material-ui/core';
import { Base64 } from 'js-base64';
import { useHistory } from 'react-router';

export default function AddressForm() {

  const [emails, setEmails] = React.useState([]);
  const [leaders,setleaders] = React.useState([{}]);
  const [colorSave,changeColor] = React.useState("primary");
  const history = useHistory();

  const loginCredentials = JSON.parse(localStorage.getItem('loginCredentials'));
  console.log(loginCredentials[0].Organisation);
  
  
  const handleAddLeader=()=>{
    const values=[...leaders];
    values.push({value:''});
    setleaders(values);
  }

  const handleDeleteLeader=(id)=>{
    const values=[...leaders];
    emails.splice(id,1);   
    setEmails(emails);
    values.splice(id,1);
    console.log(values);
    setleaders(values);
  }

  const handleChange = (val,id) => {
    const v = [...leaders];
    v[id].value= val.target.value;
    setleaders(v);
  }

  const ip1 = "192.168.1.11:5000";
  const ip2 = "192.168.43.250:5000";

  const saveData = () => {
    let data = {
      'Setup' : "Done",
    }
    data = Base64.encode(JSON.stringify(data));
    let where = {
      "_id": loginCredentials['0']['_id'],
    }
    where = Base64.encode(JSON.stringify(where));

    fetch('http://'+ip1+'/update/userLogin/'+data+'/'+where)
    .then(result => result.json())
    .then(resultJson => {
      if(resultJson.status == "Success"){
        console.log("Setup Complete");
      }
    })
    .catch(err => console.log(err))
  }
  
  const saveEmails = () => {
    let mails = leaders;
    let array = [];
    
    console.log(loginCredentials["Organisation"]);
    mails.forEach((element) => {
      let obj = {
        Email: element.value,
        Organisation: loginCredentials[0].Organisation,
      }
      array.push(obj);
    });
    array = Base64.encode(JSON.stringify(array));
    fetch('http://'+ip1+'/insertMany/employees/'+array)
    .then(result => result.json())
    .then(resultJson => {
      if(resultJson.status == "Success"){
        alert("Members Added Successfully Successfully");
        saveData();
        // localStorage.setItem('setup',true);
        window.location.href ='/dashboard';
      }
      else{
        alert("There is some problem adding the members to the organisation. Please try again later.");
      }
    })
  }

  return (
    <React.Fragment style={{marginTop:10}}>
      <Typography component="h2" variant="h4" align="center" >
            Welcome
          </Typography>
      <Typography variant="h6" align="center" style={{fontWeight:"light"}}>
        Let's create a team to get started...
      </Typography>
      <Typography variant="subtitle1" align="center" style={{fontWeight:"light"}}>
        Please enter gmail/gsuite ids only.
      </Typography>
      
      <Grid container spacing={3} xs={12} style={{alignContent:"center",marginLeft:"7%",justifyContent:"center",marginBottom:"10%",marginTop:"6%",flexDirection:"column"}}>

        {/* <div style={{display:'flex',width:'50%',marginTop:'2%'}}>
            <TextField
                name="email"
                type="email"
                style={{width:"100%"}}
                required
                value = {field.value}
                id="email-0"
                label="Enter Email Id"
                autoFocus
                onChange = {
                  (a) => handleChange(a,0)
                }
            />
            <div style={{width:"30%",verticalAlign:"baseline",display:"flex",alignContent:"center"}}>
                <AddSharpIcon onClick={handleAddLeader} style={{color:'black',marginTop:'auto',marginBottom:'auto',marginLeft:10}}/>
            </div>
        </div> */}
        {leaders.map((field,idx)=>{
            return(
                <div style={{display:'flex',width:'70%',marginTop:5}}>

                    <TextField
                        name="email"
                        type="email"
                        style={{width:"100%"}}
                        value = {field.value}
                        // helperText="Please enter valid gmail id only."
                        // variant="outlined"
                        required
                        align="center"
                        id={"email-"+(idx)}
                        label="Enter Email Id"
                        autoFocus
                        onChange = {(a) => {
                          handleChange(a,idx);
                        }
                      }
                    />
                    
                    <div style={{width:"30%",padding:0,display:"flex",alignContent:"center"}}>
                        <AddSharpIcon onClick={handleAddLeader} style={{color:'black',marginTop:'auto',marginBottom:'auto',marginLeft:10}}/>
                        {/* <input type='email' 
                        className='inpt' 
                        style={{width:'100%',marginRight:10}}
                        placeholder='Enter Email ID' 
                        value={field.value} 
                        onChange={(e)=>handleChangeLeader(idx,e)}/> */}
                      {idx == 0 ? (<></>) : (
                        <DeleteIcon onClick={()=>handleDeleteLeader(idx)} style={{margin:'auto',marginLeft:5,cursor:'pointer'}}/>
                      )}  
                    </div>
                </div>
            );
        })}
        <center>
        <Button
          variant="contained"
          color={colorSave}
          style={{marginTop:"10%",width:"80%",marginRight:"20%"}}
          onClick={saveEmails}
          
          // className={classes.button}
        >
          Save
        </Button>
        </center>
        {/* <Grid item xs={8}>
          <TextField
            name="project"
            type="email"
            style={{width:"100%"}}
            required
            id={"email-0"}
            label="Enter Email Id"
            autoFocus
            onChange = {(a) => {addEmail(a.target.value)}}
          />
          <Grid xs = {2} >
            <AddSharpIcon onClick={handleAddLeader} style={{color:'black',marginTop:'auto',marginBottom:'auto',marginLeft:10}}/>
          </Grid> */}
        </Grid>
          
       
        {/* <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
          />
        </Grid> */}
      {/* </Grid> */}
    </React.Fragment>
  );
}
