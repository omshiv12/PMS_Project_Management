import React ,{useState}from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import DoneIcon from '@material-ui/icons/Done';
import { Base64 } from 'js-base64';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import { Grid, Typography,TextField } from '@material-ui/core';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

export default function SubCard() {

    const [project,setProject] = React.useState({});

    const [tasks,setTasks] = useState([]);
    const [taskSet,setTaskSet] = useState(false);
    const [noProj,setNoProj] = useState(false);
    const [call,setCall] = useState(false);
    const [show, setshow] = useState('none');
    const [check,setCheck]=useState(true);
    const [leader,setLeader] = useState(false);

    const [employees,setEmployees] = useState([]);
    const [name, setName] = useState('');
    const [deadline, setDeadline] = useState('');
    const [assignedTo,setAssignedTo] = useState('');


    const ip1 = "192.168.1.11:5000";
    const ip2 = "192.168.43.250:5000";

    React.useEffect(()=>{
        getProject();
        getEmployees();
    },[]);

    const data = JSON.parse(localStorage.getItem('loginCredentials'))['0'];

    const getEmployees = () => {
            let d =  data.Organisation.toString();
            d = Base64.encode((d));
            let key = Base64.encode("Organisation");
            fetch('http://'+ip1+'/retrieve/employees/'+key+'/'+d)
            .then(result=>result.json())
            .then((resultJson) => {
                setEmployees(resultJson);
                setCall(true);
            })
            .catch(e => console.log(e));
    }

    const setProj = () => {
        let key = "_id";
        key = Base64.encode(key);

        let id = data['Active_Project'];
        id = Base64.encode(id);

        fetch('http://'+ip1+'/retrieve/projects/'+key+'/'+id)
        .then(result => result.json())
        .then(resultJson => {
            resultJson.forEach(ele => {
            setProject(ele);
            let lead = ele.Leaders.indexOf(data['_id']);
            if(lead!=undefined){
                setLeader(true);
            }
        });
            getTasks();
        })
        .catch(err => console.log(err));
    }

    const getTasks = () => {
        const email = Base64.encode(data['Active_Project']);
        const key = Base64.encode("Project_Id");
        
        fetch('http://'+ip1+'/retrieve/tasks/'+key+'/'+email)
        .then(result => result.json())
        .then(resultJson => {
            let arr = [];
            resultJson.forEach(ele => {
                if((ele.Employee_Email == data['Email'] || ele.Assigned_To == data['_id']) && ele.Status!="Deleted"){
                    arr.push(ele);
                }
            })
            setTasks(arr);
            setTaskSet(true);
        })
        .catch(err => console.log(err))
        
    }

    const getProject = () => {
        setProj();
    }



    

        

    const handleAdd = () => {
        setshow('flex');
        setCheck(false)
    }

    const handleCut = () => {
        setshow('none');
        setCheck(true);
        setName('');
        setDeadline('');
    }
    const handleSave = () => {
        let date = new Date();
        date = date.getDate()+'-'+date.getUTCMonth()+'-'+date.getUTCFullYear();
        let d = {
            Task_Name:name,
            Project_Id: project['_id'],
            Employee_Email : data['Email'],
            Assigned_To:assignedTo,
            Deadline:deadline,
            Progress:0,
            Date_Added : date
        }
        d = Base64.encode(JSON.stringify(d));
        fetch('http://'+ip1+'/insert/tasks/'+d)
        .then(result => result.json())
        .then(resultJson => {
            if(resultJson.status == 'Success'){
                console.log("Task Added Successfully");
                window.location.reload();
            }
        })
        .catch(err => console.log(err));
        setTasks([d,...tasks])
        setName('');
        setDeadline('');
    }

    const completeTask = (task) => {
        let d = {
            _id : task,
        }
        let update = {
            Progress:100,
            Status:"Completed",
        }
        d = Base64.encode(JSON.stringify(d));
        update = Base64.encode(JSON.stringify(update));
        fetch('http://'+ip1+'/update/tasks/'+update+'/'+d)
        .then(result => result.json())
        .then(resultJson => {
            if(resultJson.status == "Success"){
                alert("Task Marked as Complete");
                window.location.reload();
            }
        })
    }

    const deleteTask = (task) => {
        alert(task);
        let data = {
            _id : task,
        }
        let update = {
            Status:"Deleted"
        }
        data = Base64.encode(JSON.stringify(data));
        update = Base64.encode(JSON.stringify(update));
        fetch('http://'+ip1+'/update/tasks/'+update+'/'+data)
        .then(result => result.json())
        .then(resultJson => {
            if(resultJson.status == "Success"){
                alert("Task Deleted");
                window.location.reload();
            }
        })
        
    }

    const options = [];

    employees.forEach(element => {
        options.push(<option key={element['_id']} value={element['_id']}>{element.Email}</option>)
    });

    // console.log(options);

    return (
             

        <Grid xs={8} style={{display:'flex',flexDirection:'column',backgroundColor:'#92AFD7',margin:'auto',borderRadius:10,marginTop:"3%"}}>
            {noProj==true ? (<Typography variant="subtitle1" style={{textAlign:"center"}}>No Projects Found. Please select a project from projects menu.</Typography>) :(
            <>
            <div style={{display:'flex'}}>
            <Typography variant="h6" style={{margin:15,marginBottom:4,color:'white',fontWeight:"bold"}}>{project['Project_Name']}</Typography>
            {(check)?<PlaylistAddIcon style={{fontSize:30,marginTop:12,marginLeft:'auto',marginRight:20 ,color:'white'}} onClick={handleAdd}/>:<HighlightOffIcon onClick={handleCut} style={{fontSize:30,marginTop:12,marginLeft:'auto',marginRight:20 ,color:'white'}} />}
            </div>
            <hr style={{margin:0,padding:0}}/>
            <datalist id="list">
                {options}
            </datalist>
            <div style={{backgroundColor:'white',display:show,width:'100%',padding:10}}>
                {/* <div style={{flexDirection:"row"}}> */}
                <TextField type='text' placeholder='Task Name' value={name} onChange={e=>setName(e.target.value)} style={{borderRadius:5,fontSize:17,height:40,width:250,outline:'none',marginRight:20,padding:10}}/>
                <p style={{fontSize:18,marginRight:10,marginTop:10}}>Deadline:</p>
                <TextField type='date' placeholder='Deadline' value={deadline} onChange={e=>setDeadline(e.target.value)}  style={{borderRadius:20,fontSize:17,height:40,width:250,outline:'none',marginRight:20,padding:10}}/>
                {leader ?(<>
                <p style={{fontSize:18,marginRight:10,marginTop:10,color:"black"}}>Assign To:</p>
                <input list="list" type='text'  value={assignedTo} onChange={e=>setAssignedTo(e.target.value)}  style={{borderRadius:0,fontSize:17,height:40,width:250,marginRight:20,padding:10,borderWidth:0,borderBottomWidth:1,color:"black"}}/>
                <div style={{display:'flex',marginLeft:'auto'}}>
                    <button style={{padding:5,height:50,backgroundColor:'#92AFD7',borderWidth:1,paddingLeft:20,paddingRight:20,outline:'none',color:'white',borderRadius:10,marginRight:10}} onClick={handleSave}>Add</button>
                </div></>):null}
            </div>
            {tasks.slice(0).reverse().map(items=>{
                return(
                    
                    <Accordion  style={items.Progress == 100 ? {backgroundColor:"#3CB371"} : null}>
                    <AccordionSummary
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <EventAvailableIcon />
                    <Typography style={{marginLeft:20}}>{items.Task_Name}</Typography>
                    {items.Progress != 100 ?
                    (<span style={{marginLeft:'auto'}}>
                        <DoneIcon onClick={()=>{completeTask(items['_id'])}} style={{marginLeft:'auto',color:'#03045e',marginRight:13}}/>
                        <HighlightOffIcon onClick={() =>{ deleteTask(items['_id'])}} style={{marginTop:0,marginLeft:'auto',color:'#03045e'}} />
                    </span>) : null}    
                    </AccordionSummary>
                    <AccordionDetails style={{display:"flex",flexDirection:"column"}}>
                    <Typography>
                        Deadline: {items.Deadline}
                    </Typography>
                    <Typography>
                        Progress: {items.Progress}%
                    </Typography>
                    <Typography>
                        Date: {items.Date_Added} 
                    </Typography>
                    <Typography>
                        Assigned To: {items.Assigned_To} 
                    </Typography>
                    </AccordionDetails>
                </Accordion>
                )
            })}
            </>
            )}
            
            
        </Grid>
    )
}