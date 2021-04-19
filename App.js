import React from 'react';
import Code from './Code';
import "./App.css";
import Navbar from "./Navbar/Navbar";
import Issues from './Issues';
import Request from './Request';
import Action from './Action';

import {BrowserRouter as Router,Route,Switch} from "react-router-dom";

function App(){
    return(

        <div className="container">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Code} />
          <Route path="/Issues" exact component={Issues} />
          <Route path="/Request" exact component={Request} />
          <Route path="/Action" exact component={Action} />
          
        </Switch>
      </Router>
    </div>
    )

}
export default App;