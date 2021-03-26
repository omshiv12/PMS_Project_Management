import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import Project  from './Project';
import Card from "./Card";
ReactDOM.render(
    
    <>    
    <Router>
    <Switch>
                <Route exact path='/Project' component={Project} />
                <Route exact path='/Card' />
                </Switch>
    
    </Router>
    </>,
    document.getElementById("root")
);