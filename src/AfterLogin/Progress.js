import React from 'react';
import './progress.css';
import {Bar, Doughnut,defaults} from 'react-chartjs-2';
import { Base64 } from 'js-base64';
import { Grid, Typography } from '@material-ui/core';


export default function Dashboard() {

    const [tasks,setTasks] = React.useState([]);
    const [completed,setComp] = React.useState([]);
    const [incomplete,setInc] = React.useState([]);
    const [taskSet,setTaskSet] = React.useState(false);
    const [projects,setProjects] = React.useState([]);
    const [projectNames,setProjectNames] = React.useState([]);
    const [percentage,setPercentage] = React.useState([]);

    React.useEffect(() => {
        getTasks();
        getProjects();
    },[taskSet]);

    const ip1 = "192.168.1.11:5000";
  const ip2 = "192.168.43.250:5000";

    const data = JSON.parse(localStorage.getItem('loginCredentials'))['0'];

    const getTasks = () => {
        const email = Base64.encode(data['Active_Project']);
        const key = Base64.encode("Project_Id");
        
        fetch('http://'+ip1+'/retrieve/tasks/'+key+'/'+email)
        .then(result => result.json())
        .then(resultJson => {
            let arr = [];
            let comp = [];
            let inc= [];
            resultJson.forEach(ele => {
                if(ele.Project_Id == data['Active_Project'] && ele.Status!="Deleted"){
                    arr.push(ele);
                    if(ele.Status == "Completed" || ele.Progress == 100){
                        comp.push(ele);
                    }
                    else{
                        inc.push(ele);
                    }
                }
            })
            setComp(comp);
            setInc(inc);
            setTasks(arr);
            setTaskSet(true);
        })
        .catch(err => console.log(err))
    }

    const getProjectData = (id) => {
        let d = Base64.encode(id);
        let key = Base64.encode("Project_Id");
        fetch('http://'+ip1+'/retrieve/tasks/'+key+'/'+d)
        .then(result => result.json())
        .then(resultJson => {
            let value = 0;
            let total = resultJson.length;
            resultJson.forEach(e => {
                console.log(e)
                value += parseInt(e.Progress);
            });
            let final = (value/total);
            console.log(final);
            let f = percentage;
            f.push(final);
            setPercentage(f);
        })
    }

    const getProjects = () => {
        let id = Base64.encode('no');
        let key = Base64.encode('no');
        console.log('http://192.168.1.11:5000/retrieve/projects/'+key+'/'+id);
        fetch('http://'+ip1+'/retrieve/projects/'+key+'/'+id)
        .then(result => result.json())
        .then(resultJson => {
            console.log(resultJson);
            let lead = [];
            let mem = [];
            let names = [];
            resultJson.forEach(ele => {
                lead = ele.Leaders.indexOf(data['_id']);
                mem = ele.Members.indexOf(data['_id']);
                if(lead!=undefined || mem!=undefined){
                    names.push(ele.Project_Name);
                    getProjectData(ele['_id']);
                }
            });
            setProjects(resultJson);
            setProjectNames(names);
        })
        .catch(err => console.log(err));
    }

    return (
        <>
            <div style={{display:'flex',justifyContent:'space-around',fontSize:20,marginTop:"5%"}}>
                <div className='taskdiv' >
                    <p className='taskCount'>{completed.length}</p>
                    <p className='taskCount'>Completed Tasks</p>
                </div>
                <hr style={{margin:0}}/>
                <div className='taskdiv' style={{marginTop:5}}>
                    <p className='taskCount'>{incomplete.length}</p>
                    <p className='taskCount'>Incomplete Tasks</p>
                </div>
                <hr style={{margin:0}}/>
                <div className='taskdiv'>
                    <p className='taskCount'>{tasks.length}</p>
                    <p className='taskCount'>Total Tasks</p>
                </div>
            </div>
            <Grid xs = {12} style={{display:"flex",justifyContent:"center",flexDirection:"column"}}>
                <div style={{width:'50%',alignSelf:"center",marginTop:"5%"}}>
                <Typography variant="h5" style={{textAlign:"center"}}>Tasks Completion</Typography>
                    <Doughnut
                    data={{
                            labels: ['Completed','Incomplete'],
                            datasets: [{
                            label: 'Tasks Count',
                            data: [completed.length,incomplete.length],
                            backgroundColor: [
                            '#3CB371',
                            '#DC143C'
                            ],
                            hoverOffset: 10,
                            borderWidth:0,
                        }],
                    }}   
                    height={100}
                    style={{marginTop:10}}
                    />
                </div>
            <div style={{width:'50%',alignSelf:"center",marginTop:"5%"}}>
            <Typography variant="h5" style={{textAlign:"center"}}>Project Completion Percentage</Typography>
            <Typography variant="subtitle1" style={{textAlign:"center"}}>As per the user task completion</Typography>
            <br/>
            <div style={{width:"100%",height:500}}>
            <Bar
            data={{
                labels: [...projectNames],
                datasets: [{
                label: "Completion Percentage",
                data: [...percentage],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(255, 159, 64, 0.5)',
                    'rgba(255, 205, 86, 0.5)',
                    'rgba(75, 192, 192, 0.5)',
                    'rgba(54, 162, 235, 0.5)',
                    'rgba(153, 102, 255, 0.5)',
                    'rgba(201, 203, 207, 0.5)',
                    'rgba(54, 162, 235, 0.5)',
                    'rgba(153, 102, 255, 0.5)',
                    'rgba(201, 203, 207, 0.5)',
                ],
              }],
        }}   
        height={100}
        width={50}
        options={{maintainAspectRatio:false}}
        />
        </div>
        </div>
        </Grid>
        </>
    )
}