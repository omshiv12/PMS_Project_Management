import React from 'react';
import './Issues.css' 
import ReactDOM from "react-dom";
import { Button, Grid, TextField, Typography } from '@material-ui/core';
import { SettingsInputSvideoOutlined, TripOriginSharp } from '@material-ui/icons';
import { Base64 } from 'js-base64';
import first from './images/first.jpg';
import second from './images/second.jpg'
import third from './images/third.jpg';
import fourth from  './images/fourth.jpg';


class Issues extends React.Component {
  constructor() {
    super();
    this.getIssue = this.getIssue.bind(this);
    this.markClosed = this.markClosed.bind(this);
    this.markOpen = this.markOpen.bind(this);
    
    this.state = {
      issueId:'',
      issue: {},
      storage:{},
      showComments: true,
        ip1 :"192.168.1.11:5000",
    ip2 : "192.168.43.250:5000",
      c: '',
      comments: [
        // {id: 1, author: "landiggity", body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},
        // {id: 2, author: "scarlett-jo", body: "That's a mighty fine comment you've got there my good looking fellow..."},
        // {id: 3, author: "rosco", body: "What is the meaning of all of this 'React' mumbo-jumbo?"}
      ]
    };
    // this.getComments = this.getComments.bind(this);
  }

  componentDidMount(){
    const pathName = window.location.pathname;
    const arr = pathName.split('/');
    const id = arr[2];
    console.log(id);
    const storage = JSON.parse(localStorage.getItem('loginCredentials'))['0'];
    this.setState({issueId: id,storage},this.getIssue);
    
    
  }

  

  

  getIssue = () => {
    if(this.state.issueId){
    const data = Base64.encode(this.state.issueId);
    const key = Base64.encode("_id");
    fetch('http://'+this.state.ip1+'retrieve/issues/'+key+'/'+data)
    .then(result=>result.json())
    .then(resultJson => {
      resultJson.forEach(ele => {
        this.setState({issue: ele});
      })
      
    })
    .catch(err => console.log(err));
  }
  }

  markClosed = () => {
    let data = {
      Status:"CLOSED",
    }
    let where = {
      _id : this.state.issueId
    }
    where = Base64.encode(JSON.stringify(where));
    data = Base64.encode(JSON.stringify(data));
    fetch('http://'+this.state.ip1+'/update/issues/'+data+'/'+where)
    .then(result => result.json())
    .then(resultJson =>{
        if(resultJson.status == "Success"){
          window.location.reload();
        }
    })
  }

  markOpen = () => {
    let data = {
      Status:"OPEN",
    }
    let where = {
      _id : this.state.issueId
    }
    where = Base64.encode(JSON.stringify(where));
    data = Base64.encode(JSON.stringify(data));
    fetch('http://'+this.state.ip1+'update/issues/'+data+'/'+where)
    .then(result => result.json())
    .then(resultJson =>{
        if(resultJson.status == "Success"){
          window.location.reload();
        }
    })
  }
  
  render () {
    const comments = this._getComments();
    let commentNodes;
    let buttonText = 'Show Comments';
    
    if (this.state.showComments) {
      buttonText = 'Hide Comments';
      commentNodes = <div className="comment-list">{comments}</div>;
    }
    
    return(
      <Grid>
        <Grid item xs={12} style={{padding:20,backgroundColor:"white",borderWidth:1,borderColor:"rgb(146, 175, 215)",borderStyle:"solid",marginLeft:"2%",marginRight:"2%",borderRadius:10,marginTop:"7%"}}>
          <Button variant="contained" style={{backgroundColor:"rgb(0, 119, 182)",display:"flex",color:"white",justifyContent:"flex-end",position:"absolute",top:"22%",right:"5%"}} onClick={()=>{window.location.href='/new-issue'}}>New Issue</Button>
          <Grid xs={12} style={{display:"flex",flexDirection:"row"}}>
            <Grid item xs={10}>
              <Typography variant="h4" style={{color:"rgb(3, 4, 94)"}}>{this.state.issue.Issue_Title}</Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="h6" style={{color:"rgb(3, 4, 94)"}}>Date Issued: {this.state.issue.Date}</Typography>
            </Grid>
          </Grid>

          <Typography paragraph style={{marginTop:20}}>{this.state.issue.Issue_Desc}</Typography>
          <br/><br/>
          <img src={first} alt="Logo" width="250px" height="250px" style={{marginLeft:50,marginTop:5}}/>
          <img src={second} alt="Logo" width="250px" height="250px" style={{marginLeft:50,marginTop:5}} />
          <img src={third} alt="Logo" width="250px" height="250px" style={{marginLeft:50,marginTop:5}}/>
          <img src={fourth} alt="Logo" width="250px" height="250px" style={{marginLeft:50,marginTop:5}}/>
          <Grid style={{flexDirection:"columm"}}>
          <Grid style={{display:"flex",width:"100%",marginTop:"2%",flexDirection:"row"}}>
            <Grid xs={11}>
              <Typography variant="h6" style={{color:"rgb(3, 4, 94)"}}>Assigned To / Requested Help From:  <i style={{fontWeight:"bold"}}>{this.state.issue.Assigned_To}</i></Typography>
            </Grid>
            <Grid xs={1}>
            {this.state.issue.Status == "CLOSED" ? (
              <div style={{display:"flex",alignSelf:"flex-end",backgroundColor:"#3CB371",color:"white",padding:10,borderRadius:10,width:80,marginRight:10}}>CLOSED</div>)
             : (
              <div style={{display:"flex",alignSelf:"flex-end",backgroundColor:"#DC143C",color:"white",padding:10,borderRadius:10,width:60,marginRight:10}}>OPEN</div>)}
            </Grid>
            <br></br>
            
          </Grid>
          <Grid xs={12} style={{display:"flex",justifyContent:"flex-end",marginTop:20,marginRight:40}}>
            <div style={{disply:"flex",justifyContent:"flex-end"}}>
              {this.state.issue.Status == "OPEN" ? (
              <Button variant="contained" onClick={()=>{this.markClosed()}}>Mark as Closed</Button>) : (
              <Button variant="contained" onClick={()=>{this.markOpen()}}>Mark as Open</Button>
              )}
            </div>
          </Grid>
          </Grid>
          
        </Grid>
        <br/>
        <hr style={{width:"80%"}}/>
        <Comments issueId = {this.state.issueId} storage={this.state.storage}/>
      </Grid>
    );
  } // end render
  
  _addComment(author, body) {
    const comment = {
      id: this.state.comments.length + 1,
      author,
      body
    };
    this.setState({ comments: this.state.comments.concat([comment]) }); // *new array references help React stay fast, so concat works better than push here.
  }
  
  _handleClick() {
    this.setState({
      showComments: !this.state.showComments
    });
  }
  
  _getComments() {    
    return this.state.comments.map((comment) => { 
      return (
        <Comment 
          author={comment.author} 
          body={comment.body} 
          key={comment.id} />
      ); 
    });
  }
  
  _getCommentsTitle(commentCount) {
    if (commentCount === 0) {
      return 'No comments yet';
    } else if (commentCount === 1) {
      return "1 comment";
    } else {
      return `${commentCount} comments`;
    }
  }
} // end CommentBox component


class Comments extends React.Component{

  constructor(props){
    super();
    console.log(props);
    this.state = {
      issueId: props.issueId,
      storage:props.storage,
      c:'',
      comments: [{Comment:"Go"}],
       ip1 : "192.168.1.11:5000",
  ip2: "192.168.43.250:5000",
    }

    this.saveComments = this.saveComments.bind(this);
    this.getComments = this.getComments.bind(this);
  }

  componentDidMount(){
    this.getComments();
  }

  
  
  
  getComments = () => {
    const data = Base64.encode(this.state.issueId);
    const key = Base64.encode("Issue_Id");
    fetch('http://'+this.state.ip1+'/retrieve/comments/'+key+'/'+data)
    .then(result => result.json())
    .then(resultJson => {
        this.setState({comments:resultJson});
      
    })
    .catch(err => console.log(err));
  }




  saveComments = () => {
    const d = new Date()
    const da = d.getDate() + '/'+ d.getUTCMonth() + '/' + d.getUTCFullYear();
    if(this.state.issueId){
    let data = {
      "By" : this.state.storage['_id'],
      "By_Email": this.state.storage['Email'],
      "Comment" : this.state.c,
      "Issue_Id":this.state.issueId,
      "Date": da,
      "Status" : "Active"
    }
    data = Base64.encode(JSON.stringify(data));
    fetch('http://'+this.state.ip1+'/insert/comments/'+data)
    .then(result => result.json())
    .then(resultJson => {
      if(resultJson.status == "Success"){
        let arr = [...this.state.comments];
        arr.push(resultJson.data);
        this.setState({comments:arr});
      }
    })
  }
  }

  render() {
    return (
      <>
      <div>
      {this.state.comments.map((post) => (
        <Comment key={post['_id']} comm={post} />
      ))}
      </div>
      <form className="comment-form">
        <Grid >
          {/* <TextField variant="outlined" placeholder="Name" required value={name}  style={{width:"70%",marginBottom:5}}/><br /> */}
          <TextField variant="outlined" multiline rows={4} placeholder="Comment" value={this.state.c} onChange={(e) => this.setState({c:e.target.value})} rows="4" required style={{width:"70%"}}/>
        </Grid>
        <Grid style={{}}className="comment-form-actions">
          <Button variant="contained" type="submit" style={{backgroundColor:"rgb(0, 119, 182)",color:"white",marginTop:10}} onClick={()=>{this.saveComments()}}>Post Comment</Button>
        </Grid>
      </form>
      </>
    );
  }
  
}
// class CommentForm extends React.Component {

//   constructor(){
//     super();
//     this.state = {
//       comments: [],
//       comms:[],
//     }
//     this.getComments = this.getComments.bind(this);
    
//   }

 
  
  
//   render() {
//     return (
      
//       <form className="comment-form">
//         <Grid >
//           {/* <TextField variant="outlined" placeholder="Name" required value={name}  style={{width:"70%",marginBottom:5}}/><br /> */}
//           <TextField variant="outlined" multiline rows={4} placeholder="Comment" value={c} onChange={(e) => this.setState({c:e.target.value})} rows="4" required style={{width:"70%"}}/>
//         </Grid>
//         <Grid style={{}}className="comment-form-actions">
//           <Button variant="contained" type="submit" style={{backgroundColor:"rgb(0, 119, 182)",color:"white",marginTop:10}} onClick={()=>{this.saveComments()}}>Post Comment</Button>
//         </Grid>
//       </form>
//     );
//   } // end render
// }

class Comment extends React.Component {
  constructor(props){
    super(props);
  }
  render () {
    return(
      <Grid className="comment" style={{borderColor:"rgb(146, 175, 215)",display:"flex",flexDirection:"column",borderWidth:1,borderRadius:10,padding:20,borderStyle:"solid",marginTop:20}}>
        <Typography variant="h6" className="comment-header" style={{color:"rgb(3, 4, 94)"}}>{this.props.comm.By_Email}</Typography><br/>
        <Typography className="comment-body">{this.props.comm.Comment}</Typography>
        {/* <br/> */}
        
      </Grid>
    );
  }
}

export default Issues;
ReactDOM.render(
  <Issues />,
  document.getElementById('root')
);