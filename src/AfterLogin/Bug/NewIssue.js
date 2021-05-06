import React ,{useState} from 'react'
import '../../OrgSetup/stylesheets/createProject.css';
import TextField from '@material-ui/core/TextField';
import { Button, Grid, Typography } from '@material-ui/core';
import { Base64 } from 'js-base64';
import { useHistory } from 'react-router';


export default function CreateProject() {

    const history = useHistory();
    const [employees,setEmployees] = React.useState([]);
    const [organisationName,setOrg] = React.useState('');
    const [call,setCall] = React.useState(false);

    const [leaders,setleaders]=useState([{value:""}]);
    const [image1,setImage1] = React.useState("");
    const [image2,setImage2] = React.useState("");
    const [image3,setImage3] = React.useState("");
    const [image4,setImage4] = React.useState("");
  

    const [issueTitle,setIssueTitle] = React.useState('');
    const [desc,setDesc] = React.useState('');


    React.useEffect(() => {
        getDetails();
        getEmployees();
    })

    const getDetails = () => {
        const data = JSON.parse(localStorage.getItem('loginCredentials'))[0].Organisation;
        setOrg(data);
        setCall(true);
    }

    const ip1 = "192.168.1.11:5000";
  const ip2 = "192.168.43.250:5000";

    const getEmployees = () => {
        if(organisationName){
            let data =  organisationName.toString();
            data = Base64.encode((data));
            let key = Base64.encode("Organisation");
            fetch('http://'+ip1+'/retrieve/employees/'+key+'/'+data)
            .then(result=>result.json())
            .then((resultJson) => {
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
        uploadImages();
        let projectId = JSON.parse(localStorage.getItem('loginCredentials'))[0]['Active_Project'];  
        let data = {
            Issued_By: JSON.parse(localStorage.getItem('loginCredentials'))[0]['_id'],
            Project_Id : projectId,
            Organisation:organisationName.toString(),
            Issue_Title:issueTitle,
            Issue_Desc:desc,
            Assigned_To:leaders['0'].value,
            Status:"OPEN",
            // Image1: img1,
            // Image2: img2,
            // Image3: img3,
            // Image4: img4,
            Date:date,
        }
        data = Base64.encode(JSON.stringify(data));
        fetch('http://'+ip1+'/insert/issues/'+data)
        .then(result=>result.json())
        .then((resultJson) =>{
            if(resultJson.status=="Success"){
                alert("Issue Created Successfully");
                history.push('issues');
            }
        })
    }

    const handleChangeLeader=(id,event)=>{
        const values = [...leaders];
        values[id].value=event.target.value;
        setleaders(values);
    }

    const options = [];

    employees.forEach(element => {
        options.push(<option value={element['_id']}>{element.Email}</option>)
    });

    const onImageChange = (index,event) => {
      if (event.target.files && event.target.files[0]) {
        let img = event.target.files[0];
        if(index == 0){
            setImage1(img);
        }
        else if(index==1){
            setImage2(img);
        }
        else if(index==2){
            setImage3(img);
        }
        else{
            setImage4(img);
        }
        
        console.log(img);
      }
    };

    const uploadImages = () => {
        var formData = new FormData();
        if(image1)
            formData.append("image1", image1);
        if(image2)
            formData.append("image2", image2);
        if(image3)
            formData.append("image3", image3);
        if(image4)
            formData.append("image4", image4);
        var request = new XMLHttpRequest();
        request.open("POST", true);
        request.send(formData);
        request.onload = function() {
            if (request.status === 200) {
                var response = JSON.parse(request.responseText);
                this.setState({
                    img: '/serve?blob-key=' +response.blobKey.toString()
                });
            }
        }.bind(this);
    }
    
    return (
        <div style = {{ marginTop:"5%", height: '100%', width: '100%' } } >
        
        <Grid xs={12}>
            <Typography variant="h5" style={{textAlign:"center",color:"rgb(3, 4, 94)"}}>Create New Issue</Typography>
        </Grid>
        <Grid xs={12} style={{marginLeft:"25%",marginTop:"5%"}}>
            <Grid>
                <TextField
                    name="project"
                    variant="outlined"
                    required
                    id="name"
                    style={{width:"70%"}}
                    value = {issueTitle}
                    label="Issue Title"
                    autoFocus
                    onChange = {(na) => {setIssueTitle(na.target.value)}}
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
                label="Issue Description"
                onChange = {(na) => {setDesc(na.target.value)}}
              />
            </Grid>

        <div style={{display:'flex',marginTop:30,flexDirection:"column"}}>
            <Typography variant={"h6"}>Assigned To / Request Help From</Typography>

            {/* // datalist for email list */}
            <datalist id="list">
                {options}
            </datalist>
            
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
                    
                    
                </div>
            );
        })}
        </div>
        {/* <div name="add-images">
          <div style={{display:'flex',marginTop:30,flexDirection:"column"}}>
            <Typography variant={"h6"}>Assigned To / Request Help From</Typography>
            <img height="200px" width="200px"/>
            <input type="file" style={{marginTop:10}} name="image-1" accept="image/x-png,image/gif,image/jpeg" onChange={(e)=>onImageChange(0,e)}/>
            <img height="200px" width="200px"/>
            <input type="file" style={{marginTop:10}} name="image-2" accept="image/x-png,image/gif,image/jpeg" onChange={(e)=>onImageChange(0,e)}  />
            <img height="200px" width="200px"/>
            <input type="file" style={{marginTop:10}} name="image-3" accept="image/x-png,image/gif,image/jpeg" onChange={(e)=>onImageChange(0,e)}  />
            <img height="200px" width="200px"/>
            <input type="file" style={{marginTop:10}} name="image-4" accept="image/x-png,image/gif,image/jpeg" onChange={(e)=>onImageChange(0,e)}  />
          </div>
        </div> */}

        {/* For Team Members */}
        
        <Button variant="contained"  style={{marginTop:"5%",marginBottom:"2%",backgroundColor:"rgb(0, 119, 182)",color:"white"}} onClick={addProject    }>Submit</Button>
        </Grid>
    </div>
    )
}