import React ,{useState} from 'react'
import './stylesheets/createProject.css';
import TextField from '@material-ui/core/TextField';
import DeleteIcon from '@material-ui/icons/Delete';
import { Button, Grid, TextareaAutosize, Typography } from '@material-ui/core';
import AddSharpIcon from '@material-ui/icons/AddSharp';
import { Base64 } from 'js-base64';


export default function CreateProject() {

    const [employees,setEmployees] = React.useState([]);
    const [organisationName,setOrg] = React.useState('');
    const [call,setCall] = React.useState(false);

    const [leaders,setleaders]=useState([{value:""}]);
    const [members,setmembers] = useState([{value:""}]);
    const [deadline,setDeadline] = useState(new Date());

    const [projectName,setProjectName] = React.useState('');

    const [emails, setEmails] = React.useState([]);
    const [desc,setDesc] = React.useState('');

    React.useEffect(() => {
        getDetails();
        getEmployees();
    },[call])

    const ip1 = "192.168.1.11:5000";
  const ip2 = "192.168.43.250:5000";

    const getDetails = () => {
        const data = JSON.parse(localStorage.getItem('loginCredentials'))[0].Organisation;
        setOrg(data);
        setCall(true);
    }

    const getEmployees = () => {
        if(organisationName){
            let data =  organisationName.toString();
            data = Base64.encode((data));
            let key = Base64.encode("Organisation");
            fetch('http://'+ip1+'/retrieve/employees/'+key+'/'+data)
            .then(result=>result.json())
            .then((resultJson) => {
                console.log(resultJson);
                setEmployees(resultJson);
                setCall(true);
            })
            .catch(e => console.log(e));
        }
        else{
            const data = JSON.parse(localStorage.getItem('loginCredentials'))[0].Organisation;
            setOrg(data);
        }
    }

    const addProject = () => {
        var today = new Date();
        var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
        let heads = [];
        let mems = [];
        leaders.forEach((ele) => heads.push(ele.value));
        members.forEach((ele) => mems.push(ele.value));
        heads.push(JSON.parse(localStorage.getItem('loginCredentials'))[0]['_id']);  
        let data = {
            Created_By: JSON.parse(localStorage.getItem('loginCredentials'))[0]['_id'],
            Organisation:organisationName.toString(),
            Project_Name:projectName,
            Project_Description:desc,
            Deadline:deadline,
            Leaders: JSON.stringify(heads),
            Members:JSON.stringify(mems),
            Date:date,
        }
        data = Base64.encode(JSON.stringify(data));
        fetch('http://'+ip1+'/insert/projects/'+data)
        .then(result=>result.json())
        .then((resultJson) =>{
            if(resultJson.status=="Success"){
                alert("Project Created Successfully");
                window.location.href = '/projects';
            }
        })
    }


    const handleAddLeader=()=>{
        const values=[...leaders];
        
        values.push({value:''});
        setleaders(values);
    }

    const handleChangeLeader=(id,event)=>{
        const values = [...leaders];
        values[id].value=event.target.value;
        setleaders(values);
    }

    const handleDeleteLeader=(id)=>{
        const values=[...leaders];
        values.splice(id,1);
        setleaders(values);
    }

    const addEmail = (email) => {        
        let ids = [...emails];
        ids.push(email);
        setEmails(ids); 
    }

    const handleAddMembers=()=>{
        const values=[...members];
        values.push({value:''});
        setmembers(values);
    }
    const handleChangeMembers=(id,event)=>{
        const values=[...members];
        values[id].value=event.target.value;
        setmembers(values);
    }
    const handleDeleteMembers=(id)=>{
        const values=[...members];
        values.splice(id,1);
        setmembers(values);
    }
    const options = [];

    employees.forEach(element => {
        options.push(<option value={element['_id']}>{element.Email}</option>)
    });
    
    return (
        <div style = {{ marginTop:"10%",flexDirection:"row",display: 'flex',justifyContent:'center',alignItems:'center', height: '100%', width: '100%' } } >
        
        <Grid xs={4}>
            <Typography variant="h5" style={{textAlign:"center"}}>Create New Project</Typography>
        </Grid>
        <Grid xs={8}>
            <Grid>
                <TextField
                    name="project"
                    variant="outlined"
                    required
                    id="name"
                    style={{width:"70%"}}
                    value = {projectName}
                    label="Enter Project Name"
                    autoFocus
                    onChange = {(na) => {setProjectName(na.target.value)}}
                />
            </Grid>
            <Grid style={{marginTop:30}}>
              <TextField
                name="projectDesc"
                variant="outlined"
                required
                id="desc"
                style={{width:"70%"}}
                multiline
                rows={10}
                value = {desc}
                label="Enter Project Description"
                onChange = {(na) => {setDesc(na.target.value)}}
              />
            </Grid>
            <Grid style={{marginTop:30,flexDirection:"column"}}>
              <Typography variant="h7">Deadline</Typography>
              <br/>  
              <TextField
                name="dealline"
                variant="outlined"
                type="date"
                id="deadline"
                style={{width:"70%"}}
                value = {deadline}
                onChange = {(na) => {setDeadline(na.target.value)}}
              />
            </Grid>

        {/* <input type='text' className='inpt' placeholder='Enter Expected Completion Date'/> */}
        {/* <div style={{display:'flex',marginTop:30}}>
        <Typography variant={"h6"}>Add Team Leaders</Typography> */}
        {/* <AddSharpIcon onClick={handleAddLeader} style={{color:'black',marginTop:'auto',marginBottom:'auto',marginLeft:10}}/> */}
        {/* </div> */}
        {/* <div style={{display:'flex',marginVertical:5,marginTop:10}}>
            <input
                name="email"
                type="email"
                style={{width:"70%",borderWidth:0,borderBottomWidth:1,height:45,focus:{borderColor:"red"}}}
                required
                list = "list"
                id="email-0"
                label="Enter Email Id"
                autoFocus
                onChange = {(a) => {addEmail(a.target.value)}}
            /> */}

        <div style={{display:'flex',marginTop:30,flexDirection:"column"}}>
            <Typography variant={"h6"}>Add Team Leaders</Typography>

            {/* // datalist for email list */}
            <datalist id="list">
                {options}
            </datalist>
            
            {/* <div style={{width:"30%"}}>
                <AddSharpIcon onClick={handleAddLeader} style={{fontSize:25,marginTop:10,marginBottom:'auto',marginLeft:10}}/>
            </div> */}
        
        {leaders.map((field,idx)=>{
            return(
                <div style={{display:'flex',marginTop:5}}>

                    <input
                        name="email"
                        type="email"
                        style={{width:"100%"}}
                        value = {field.value}
                        list="list"
                        required
                        align="center"
                        id={"email-"+(idx)}
                        label="Enter Email Id"
                        autoFocus={idx==0 ? false : true}
                        style={{width:"70%",borderWidth:0,borderBottomWidth:1,height:45}}
                        onChange = {(a) => {
                          handleChangeLeader(idx,a);
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
        </div>

        {/* For Team Members */}

        <div style={{display:'flex',marginTop:30,flexDirection:"column"}}>
            <Typography variant={"h6"}>Add Team Members</Typography>

            {/* // datalist for email list */}
            <datalist id="list">
                {options}
            </datalist>
            
            {/* <div style={{width:"30%"}}>
                <AddSharpIcon onClick={handleAddLeader} style={{fontSize:25,marginTop:10,marginBottom:'auto',marginLeft:10}}/>
            </div> */}
        
        {members.map((field,idx)=>{
            return(
                <div style={{display:'flex',marginTop:5}}>

                    <input
                        name="email"
                        type="email"
                        style={{width:"100%"}}
                        value = {field.value}
                        list="list"
                        required
                        align="center"
                        id={"email-"+(idx)}
                        label="Enter Email Id"
                        autoFocus={idx==0 ? false : true}
                        style={{width:"70%",borderWidth:0,borderBottomWidth:1,height:45}}
                        onChange = {(a) => {
                          handleChangeMembers(idx,a);
                        }
                      }
                    />
                    
                    <div style={{width:"30%",padding:0,display:"flex",alignContent:"center"}}>
                        <AddSharpIcon onClick={handleAddMembers} style={{color:'black',marginTop:'auto',marginBottom:'auto',marginLeft:10}}/>
                        {/* <input type='email' 
                        className='inpt' 
                        style={{width:'100%',marginRight:10}}
                        placeholder='Enter Email ID' 
                        value={field.value} 
                        onChange={(e)=>handleChangeLeader(idx,e)}/> */}
                      {idx == 0 ? (<></>) : (
                        <DeleteIcon onClick={()=>handleDeleteMembers(idx)} style={{margin:'auto',marginLeft:5,cursor:'pointer'}}/>
                      )}  
                    </div>
                </div>
            );
        })}
        </div>
        {/* <button onClick={handleAddLeader} className='btn' >Add</button> */}
        {/* <div style={{display:'flex'}}>
        <h3 style = {{  fontSize: 20, color: 'black' }}>Add Team Members</h3>
        <AddSharpIcon onClick={handleAddMembers} style={{color:'black',marginTop:'auto',marginBottom:'auto',marginLeft:10}}/>
        </div>
        {members.map((field,idx)=>{
            return(
                <div style={{display:'flex',width:'40%'}}>
                    <input type='email' 
                    className='inpt' 
                    style={{width:'100%',marginRight:10}}
                    placeholder='Enter Email ID' 
                    value={field.value} 
                    onChange={(e)=>handleChangeMembers(idx,e)}/>
                    <DeleteIcon onClick={()=>handleDeleteMembers(idx)} style={{color:'red',margin:'auto',cursor:'pointer'}}/>
                </div>
            );
        })} */}
        {/* <button onClick={handleAddMembers} className='btn' >Add</button> */}
        
        <Button variant="contained" color={"primary"} style={{marginTop:"5%",marginBottom:"2%"}} onClick={addProject    }>Submit</Button>
        </Grid>
    </div>
    )
}