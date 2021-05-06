import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
  Link
} from "react-router-dom";
import { Button, Typography } from "@material-ui/core";
import './App.css';
import logo from './images/meeting.png';


// Login SignUp
import Login from './Login/LoginPage';
import JoinUs from './Login/SignUpPage';

//Inital Setup
import ProjectPage from './OrgSetup/NewProject';
import InitialSetup from './OrgSetup/AddMembersOrg';

//Dashboard
import Dashboard from './AfterLogin/Dashboard';
import Card from "./AfterLogin/ProjectCard";

// Progress
import DailyProgress from './AfterLogin/DailyProgress';
import Progress from './AfterLogin/Progress';  


//Issues
import Bug from './AfterLogin/Bug/IssueMain';
import Issues from './AfterLogin/Bug/Issues';
import NewIssue from './AfterLogin/Bug/NewIssue';


//Navs 
import NavBar from "./AfterLogin/AfterLoginNav";
import SubNav from "./AfterLogin/AfterLoginSubNav";

export default function App() {

  const logout = () => {
    localStorage.removeItem('login');
    window.location.reload();
  }


  return (
    <Router>
      <div>
        {!localStorage.getItem('login') ? (

          // when the user is not logged in
        <div>
          <nav style={{height:"auto",backgroundColor:"rgb(3, 4, 94)"}}>
            <div style={{display:"flex",flexDirection:"row",width:"100%",marginRight:20}}>
              <div style={{width:"20%"}}>
                <img src={logo} style={{width:80,height:80,margin:0}}/>
              </div>
              <div style={{width:"80%"}}>
              <Typography variant="h4" style={{color:"white",fontFamily: 'Raleway, Arial'}}>P M S</Typography><Typography varaint="subtitle1" style={{marginTop:5}}>...an application to help you manage your projects</Typography>
              <ul style={{display:'flex',flexDirection:'row',listStyleType:'none',width:"90%",justifyContent:'flex-end',marginTop:-70}}>

                <li>
                  <Link to='/login' className="link"><Typography variant="h6" style={{color:"white"}}>Login</Typography></Link>
                </li>
                <li>
                  <Link to='/join' className="link"><Typography  variant="h6" style={{color:"white",marginLeft:40}}>Join Us</Typography></Link>
                </li>
              
              </ul> 
              </div>
              
            </div>
          </nav>
          <Switch>
          
            <Route exact path="/">
              <Redirect to="/login" />
            </Route>

            <Route path="/login">
              <Login />
            </Route>
            
            <Route path="/join">
              <JoinUs />
            </Route>

          </Switch>
        </div>)
        : (
          // after user logs in
        <div>
          {window.location.pathname=="/initialSetup" ? (
          <div style={{width:"100%",display:"flex",textAlign:"right"}}>
            <Button type="submit" style={{marginRight:0}} onClick={()=>logout()}>Log out</Button>
          </div>
          ) : (<><NavBar/>
          {window.location.pathname != '/projects' ? <SubNav/>: null }</>)}
          <Switch>
            {/* <Route path='/'>
              <Redirect exact to='/dashboard'/>
            </Route> */}

           {/* Dashboard */}
            <Route path="/dashboard">
              <Dashboard />
            </Route>

            {/* Projects */}
            <Route path='/projects'>
              <Card/>
            </Route>
            <Route path="/createProject">
              <ProjectPage />
            </Route>

            {/* InitialSetup */}
            <Route path="/initialSetup">
              <InitialSetup />
            </Route>

            {/* Progress */}
            <Route path="/dailyProgress">
              <DailyProgress />
            </Route>
            <Route path="/progress">
              <Progress />
            </Route>

            {/* Issues */}
            <Route path="/issues">
              <Bug />
            </Route>
            <Route path="/issue-details">
              <Issues />
            </Route>
            <Route path="/new-issue">
              <NewIssue />
            </Route>
          </Switch>
        </div>
          )
        }
      </div>
    </Router>
  );
}
