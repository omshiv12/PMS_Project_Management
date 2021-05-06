import React from 'react';
import Code from './IssuePanelMain';
import Navbar from "./IssueNav";
import NewIssue from './NewIssue';

import {BrowserRouter as Router,Route,Switch} from "react-router-dom";

function App(){
    return(

        <div >
      <Router>
        <Navbar />
        <Switch>
          <Route path="/issues" exact component={Code} />
          <Route path="/new-issue"  component={NewIssue}/>
          
        </Switch>
      </Router>
    </div>
    )

}
export default App;
