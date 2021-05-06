import React,{useState} from 'react'
import DoneIcon from '@material-ui/icons/Done';
import { Button, Grid, Typography } from '@material-ui/core';
import { Base64 } from 'js-base64';
export default function DailyTask() {
    var dt=new Date();
    const [tasks,setTasks]=useState([]);
    const [updates,setUpdates] = React.useState([]);
    const [taskSet,setTaskSet] = useState(false);
    
    const d = JSON.parse(localStorage.getItem('loginCredentials'))[0];
    const empEmail = d['Email'];
    const activeProject = d['Active_Project'];

    React.useEffect(() => {
        getTasks();
    },[taskSet])

    const ip1 = "192.168.1.11:5000";
  const ip2 = "192.168.43.250:5000";

    const getTasks = () => {
        const email = Base64.encode(activeProject);
        const key = Base64.encode("Project_Id");

        fetch('http://'+ip1+'/retrieve/tasks/'+key+'/'+email)
        .then(result => result.json())
        .then(resultJson => {
            let arr = [];
            resultJson.forEach(ele => {
                // if(ele.Project_Id == activeProject){
                    arr.push(ele);
                // }
            })
            setTasks(arr);
            setTaskSet(true);
        })
        .catch(err => console.log(err))
    }

    const updateTask = (index,value) => {
        let t = [...tasks];
        let val = 0;
        if(parseInt(t[index]['Progress']) + parseInt(value) >= 100){
            val = 100;
        }
        else{
            val = parseInt(t[index]['Progress']) + parseInt(value);
        }
        t[index] = {...t[index],Progress:val};
        let arr = [...updates];
        let i = arr.findIndex(element => element.id == t[index]['_id'] );
        let obj = {id:t[index]['_id'],name:t[index]['Task_Name'],progress:val};
        if(i != -1){
            arr[i] = obj;
        }
        else{
            arr.push(obj);
        }
        setUpdates(arr);
        // setTasks(t);
        
    }


    const saveData = () => {
        updates.forEach(ele => {
            console.log("Show" + ele.progress);
            let set = {
                Progress:ele.progress
            };
            let where = {
                "_id":ele.id
            };
            set = Base64.encode(JSON.stringify(set));
            where = Base64.encode(JSON.stringify(where));
            fetch('http://'+ip1+'/update/tasks/'+set+'/'+where)
            .then(result => result.json())
            .then(resultJson => {
                if(resultJson.status == "Success"){
                    console.log("Tasks Updated");
                    window.location.reload();
                }
            })
            .catch(err => console.log(err));
            
            })
    }

    return (
        <div>
            <Grid style={{display:'flex',flexDirection:"column",marginRight:20,marginLeft:20,marginTop:"5%"}}>
                <Grid item xs={12} style={{textAlign:"center"}}>
                    <Typography variant="h4" style={{color:"rgb(3, 4, 94)"}}>Daily Progress</Typography>
                </Grid>
                <Grid item xs={12} style={{marginTop:10,flexDirection:"row"}}>
                    <Grid item xs={6} style={{flexDirection:"row"}}>
                        {/* <Typography paragraph style={{fontSize:20,color:'rgb(3, 4, 94)'}}>
                            Project: Project Name
                        </Typography> */}
                    </Grid>
                    <Grid item xs={6}>
                        <Typography paragraph style={{fontSize:20,color:'rgb(3, 4, 94)'}}>
                            Date:
                            {dt.getDate()}/ 
                            {dt.getMonth()+1}/
                            {dt.getFullYear()}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid xs ={12} style={{width:'100%',display:'flex',padding:"auto",flexDirection:'column',alignItems:'center'}}>
                <Typography variant="h5" style={{color:'rgb(3, 4, 94)'}}>Tasks</Typography>
                {tasks.map((items,i)=>{
                    let show=true;
                    if(items.Progress>='100')
                    {
                        show=false;
                    }
                    return(
                            <Grid item xs={10} style={{fontSize:20,
                                    width:'80%',
                                    margin:10,
                                    marginLeft:20,
                                    height:"auto",
                                    display:'flex',         
                                    padding:10,
                                    paddingBottom:5,                           
                                    borderRadius:10,
                                    justifyContent:"center",
                                    alignItems:'center',
                                    elevation:10,
                                    boxShadow:'5px 5px 5px 1px',
                                    backgroundColor:"rgb(146, 175, 215)",
                                }}
                            >
                            <Typography paragraph style={{width:'33%',marginLeft:80,fontWeight:"bold",marginTop:10}}>{items.Task_Name}</Typography>
                            {(show)?<Typography paragraph style={{width:'33%',alignItems:'center',justifyContent:'center',display:'flex',marginTop:10}}>Today's Progress: 
                            <input type='text' onChange={e=>{
                                updateTask(i,e.target.value);
                            }} 
                            style={{width:40,height:20,borderRadius:5,marginLeft:10,outline:'none'}}/>%</Typography>:
                            <Typography paragraph style={{width:'33%',alignItems:'center',justifyContent:'center',display:'flex'}}><DoneIcon style={{color:'rgb(3, 4, 94)',fontSize:30}}/></Typography>}
                            <div style={{width:'33%',alignItems:'center',justifyContent:'center',display:'flex'}}>
                                <div>
                                <div style={{height:15,width:200,marginTop:10,backgroundColor:'white',borderRadius:10,display:'flex'}}>
                                    <div style={{height:15,width:2*items.Progress,backgroundColor:'rgb(3, 4, 94)',borderRadius:50,display:'flex',alignItems:'center',justifyContent:'flex-end'}}>
                                    </div>
                                </div>
                                <div style={{width:90,display:'inline-block',height:10,margin:0}}></div>
                                <Typography paragraph style={{marginTop:0,paddingTop:0,textAlign:"center"}}>{items.Progress}%</Typography>
                                </div>
                            </div>
                        </Grid>
                    )
                })}
                <Button variant="outlined" onClick={saveData} style={{color:"white",width:"10%",alignSelf:"center",backgroundColor:'#3f51b5',marginTop:10,marginBottom:10}}>Save</Button>
            </Grid>
        </div>
    )
}