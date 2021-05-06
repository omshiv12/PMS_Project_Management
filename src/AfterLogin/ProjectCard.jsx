import React,{useState} from 'react';
import Rist from './ProjectList';
import './ProjectCard.css';
import { Base64 } from 'js-base64';
import { Button, Typography } from '@material-ui/core';


const Card=()=>{

    const [projects,setProjects]= useState([]);
    const [edit,setEdit] = React.useState(false);
    const [emp,setEmp] = React.useState('');
    // const[]=useState('Title');
    // const[about,setAbout]=useState('kuch');
    const ip1 = "192.168.1.11:5000";
  const ip2 = "192.168.43.250:5000";

    React.useEffect(() => {
        const employeeId = JSON.parse(localStorage.getItem('loginCredentials'))[0]['Email'];
        setEmp(employeeId);
        const data = Base64.encode(JSON.parse(localStorage.getItem('loginCredentials'))[0]['Organisation']);
        const key = Base64.encode("Organisation")
        fetch('http://'+ip1+'/retrieve/projects/'+key+'/'+data)
        .then(result => result.json())
        .then(resultJson => {
            let arr = [];
            // console.log(resultJson);
            resultJson.forEach((ele) => {
                let leaders = ele.Leaders;
            console.log(leaders);
            let members = ele.Members;
            console.log(members);
            const l = leaders.indexOf(employeeId.toString()) > -1;
            const m = members.indexOf(employeeId.toString()) > -1;
            if(l != -1 || m!= -1){
                arr.push(ele);
                if(l != -1){
                    setEdit(true);
                }
            }
                
            })
            
            setProjects(arr);
            
        })
    },[]);

    

    return(

        <>
        <div className='Card'>
        <Typography variant="h5" style={{textAlign:"center",marginTop:40}}>Projects</Typography>
            
        {projects.map(project => (
            <div className='Card1' style={{marginTop:"3%"}}>
                <Rist email={emp} key={project['_id']} projId={project['_id']} name={project['Project_Name']} head={project['Created_By']} about={project['Project_Description']} edit={edit}/>
            </div>
        ))}
        </div>
        <div style={{position:"absolute",top:"20%",right:"5%"}}>
            <Button variant="contained" style={{backgroundColor:"rgb(0, 119, 182)",color:"white"}} onClick={()=>{window.location.href="/createProject"}}>Add New Project</Button>
        </div>
        
        </>
        
    );
};
export default Card;