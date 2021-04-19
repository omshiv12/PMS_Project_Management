import React from 'react';
import './Code.css';
import Navbar from "./Codebar/Codebar";
import {Layout} from 'antd';
import Assignee from './Assignee';
import Author from './Author';
import Label from './Label';
import Sort from './Sort';

import {BrowserRouter as Router,Route,Switch} from "react-router-dom";





const {Header,Footer,Content}=Layout;
function Code(){
	return(
		<div className="Code">
		<Layout>
			<Header style={{padding:10,height:150,color:'cyan'}}>			
			<h1>Want to Contibute</h1>
			<p>If you have a bug or an 
			idea,read the contribution guidelines
			before opening an issues</p>
			</Header>
			</Layout>
			<Layout>
			<Content style={{padding:10,height:250,backgroundColor:'black'}}>
			 
			 <div className="mt">
			 <button className="btn btn-primary" style={{width:"10%",justifyContent:"center",border:"3px solid blue",cursor:"pointer"}}>Label</button>
			 <button className="btn btn-secondary" style={{width:"10%",justifyContent:"center",right:"120px",margin:"10px",border:"3px solid blue",cursor:"pointer"}}>Milestone</button>
			 <button className="btn btn-secondary" style={{width:"10%",justifyContent:"center",right:"1050px",border:"3px solid green",float:"right",cursor:"pointer" }}>new</button>
			 </div>
			 <div>
			 <button className="dropdown-item-button"style={{width:"15%",justifyContent:"center",position:"center",margin:"45px 10px",border:"3px solid grey",borderRadius:"25px",cursor:"pointer"}} >
			 filter
			 </button>
			 <input type="text" placeholder="is issues is open" icon="search"className="search" 
			 style={{width:"45%",justifyContent:"center",position:"center",margin:"45px 10px",border:"3px solid grey",borderRadius:"25px"}}/>
			 <i className="search icon"></i>
			 </div>
			 <div>
			 <button className="btn btn-primary" style={{width:"10%",justifyContent:"center",border:"3px solid blue"}}>correct</button>
			 <button className="btn btn-secondary" style={{width:"10%",justifyContent:"center",right:"120px",margin:"5px",border:"3px solid blue"}}>Issued</button>
			 </div>
			</Content>
			</Layout>
			<Layout>
			<Footer>
			 <div className="container">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Author}/>
          <Route path="/Label" exact component={Label} />
          <Route path="/Assignee" exact component={Assignee} />
          <Route path="/Sort" exact component={Sort} />
          
        </Switch>
      </Router>
    </div>
			</Footer>
			</Layout>
		
		</div>
	);
}
export default Code;
