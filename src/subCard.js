import React ,{useState}from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import DoneIcon from '@material-ui/icons/Done';
import { Base64 } from 'js-base64';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import { Grid, Typography } from '@material-ui/core';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

export default function SubCard() {

    const [employeeData,setEmp] = React.useState({});
    const [project,setProject] = React.useState({});

    // React.useEffect(()=>{
    //     getProject();
    // },[]);

    // const setProj = (e) => {
    //     let key = "_id";
    //     key = Base64.encode(key);

    //     let id = e;
    //     id = Base64.encode(id);

    //     fetch('http://192.168.1.11:5000/retrieve/projects/'+key+'/'+id)
    //     .then(result => result.json())
    //     .then(resultJson => {
    //         resultJson.forEach(ele => setProject(ele));
    //     })
    //     .catch(err => console.log(err));
    // }

    // const getProject = () => {
    //     let email = JSON.parse(localStorage.getItem('loginCredentials'))[0]['Email'];
    //     email = Base64.encode(email);
    //     let key = "Email";
    //     key = Base64.encode(key);      
        
    //     fetch('http://192.168.1.11:5000/retrieve/employees/'+key+'/'+email)
    //     .then(result => result.json())
    //     .then(resultJson => {
    //         resultJson.forEach(ele => {
    //             setEmp(ele);
    //             setProj(ele.Active_Project);
    //         });
    //     })
    //     .catch(err => console.log(err));
    // }
    const [show, setshow] = useState('none');
    const [name, setName] = useState('');
    const [deadline, setDeadline] = useState('');
    const [check,setCheck]=useState(true);
    const handleAdd=()=>{
        setshow('flex');
        setCheck(false)
    }
    const handleCut=()=>{
        setshow('none');
        setCheck(true);
        setName('');
        setDeadline('');
    }
    const [tasks,setTasks]=useState([{name:'Finalize Budget',deadline:'24/05/2019'},
                                     {name:'Finalize Budget',deadline:'24/05/2019'}]);
    const handleSave=()=>{
        setTasks([{name:name,deadline:deadline},...tasks])
        setName('');
        setDeadline('');
    }
    return (              
        <Grid xs={8} style={{display:'flex',flexDirection:'column',backgroundColor:'#92AFD7',margin:'auto',borderRadius:10,marginTop:"3%"}}>
            <div style={{display:'flex'}}>
            <Typography variant="h6" style={{margin:15,marginBottom:4,color:'white',fontWeight:"bold"}}>{project['Project_Name']}</Typography>
            {(check)?<PlaylistAddIcon style={{fontSize:30,marginTop:12,marginLeft:'auto',marginRight:20 ,color:'white'}} onClick={handleAdd}/>:<HighlightOffIcon onClick={handleCut} style={{fontSize:30,marginTop:12,marginLeft:'auto',marginRight:20 ,color:'white'}} />}
            </div>
            <hr style={{margin:0,padding:0}}/>
            <div style={{backgroundColor:'white',display:show,width:'100%',padding:10}}>
                <input type='text' placeholder='Task Name' value={name} onChange={e=>setName(e.target.value)} style={{borderRadius:20,fontSize:17,height:40,width:250,outline:'none',marginRight:20}}/>
                <p style={{fontSize:18,marginRight:10,marginTop:10}}>Deadline:</p>
                <input type='date' placeholder='Deadline' value={deadline} onChange={e=>setDeadline(e.target.value)}  style={{borderRadius:20,fontSize:17,height:40,width:250,outline:'none',marginRight:20}}/>
                <div style={{display:'flex',marginLeft:'auto'}}>
                    <button style={{padding:10,backgroundColor:'#92AFD7',borderWidth:1,paddingLeft:20,paddingRight:20,outline:'none',color:'white',borderRadius:20,marginRight:10}} onClick={handleSave}>Add</button>
                </div>
            </div>
            {tasks.map(items=>{
                return(
                    <Accordion>
                    <AccordionSummary
                    // expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <EventAvailableIcon />
                    <Typography style={{marginLeft:20}}>{items.name}</Typography>
                    <span style={{marginLeft:'auto'}}>
                        <DoneIcon onClick={()=>{alert("MarkascOmplete")}} style={{marginLeft:'auto',color:'#03045e',marginRight:13}}/>
                        <HighlightOffIcon onClick={()=>{alert("DeleteTask")}} style={{marginTop:0,marginLeft:'auto',color:'#03045e'}} />
                    </span>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        {items.deadline}
                    </Typography>
                    </AccordionDetails>
                </Accordion>
                )
            })}
            
            {/* <Grid item xs={10} style={{margin:10,display:'flex',flexDirection:'row',marginLeft:"5%"}}>
                <EventAvailableIcon />
                
               <Typography variant="h7" style={{color:"",margin:"auto",marginLeft:10}}>Finalize Budget</Typography>
               <span style={{marginLeft:'auto'}}>
               <DoneIcon onClick={()=>{alert("MarkascOmplete")}} style={{marginLeft:'auto',color:'#03045e',marginRight:13}}/>
               <HighlightOffIcon onClick={()=>{alert("DeleteTask")}} style={{marginTop:0,marginLeft:'auto',color:'#03045e'}} />
               </span>
            </Grid> */}
            
        </Grid>
    )
}