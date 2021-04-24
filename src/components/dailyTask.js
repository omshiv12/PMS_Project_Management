import React,{useState} from 'react'
import DoneIcon from '@material-ui/icons/Done';
export default function DailyTask() {
    var dt=new Date();
    const [tasks,setTask]=useState([{name:'ullu banao', Progress:50},
               {name:'Pagal banao', Progress:40},
               {name:'Bawla banao', Progress:80},
               {name:'Chup Ho jao', Progress:100}  
              ]);
    function handleClick()
    {
        setTask([...tasks]);
    }
    return (
        <div>
            <div style={{display:'flex',justifyContent:'space-between',marginRight:20,marginLeft:20}}>
                <p style={{fontSize:20,color:'#995697'}}>
                    Project:Frontend Project
                </p>
                <p style={{fontSize:20,color:'#995697'}}>
                    Today's Date:
                    {dt.getDate()}/ 
                    {dt.getMonth()+1}/
                    {dt.getFullYear()}
                </p>
            </div>
            <div style={{width:'100%',display:'flex',flexDirection:'column',alignItems:'center'}}>
                <p style={{fontSize:40,color:'#995697'}}>Tasks</p>
                {tasks.map(items=>{
                    let show=true;
                    let k=0;
                    if(items.Progress=='100')
                    {
                        show=false;
                    }
                    return(
                        <div style={{fontSize:20,
                                    width:'80%',
                                    margin:10,
                                    marginLeft:20,
                                    height:100,
                                    display:'flex',                                    
                                    borderRadius:20,
                                    alignItems:'center',
                                    boxShadow:'5px 5px 50px'}}>
                            <p style={{width:'33%',marginLeft:80}}>{items.name}</p>
                            {(show)?<p style={{width:'33%',alignItems:'center',justifyContent:'center',display:'flex'}}>Today's Progress:<input type='text' onChange={event=>{
                                items.Progress=parseInt(items.Progress)+parseInt(event.target.value)-parseInt(k);
                                k=parseInt(event.target.value);
                            }} 
                            style={{width:40,height:20,borderRadius:10,outline:'none'}}/>%</p>:
                            <p style={{width:'33%',alignItems:'center',justifyContent:'center',display:'flex'}}><DoneIcon style={{color:'green',fontSize:40}}/></p>}
                            <div style={{width:'33%',alignItems:'center',justifyContent:'center',display:'flex'}}>
                                <div>
                                <div style={{height:15,width:200,backgroundColor:'#999999',borderRadius:50,display:'flex'}}>
                                    <div style={{height:15,width:2*items.Progress,backgroundColor:'green',borderRadius:500,display:'flex',alignItems:'center',justifyContent:'flex-end'}}>
                                    </div>
                                </div>
                                <div style={{width:90,display:'inline-block',height:10}}></div>
                                <p style={{margin:0,display:'inline'}}>{items.Progress}%</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
                <button onClick={handleClick} style={{backgroundColor:'#995697',padding:15,color:'white',borderRadius:20,outline:'none'}}>Click Me</button>
            </div>
        </div>
    )
}
