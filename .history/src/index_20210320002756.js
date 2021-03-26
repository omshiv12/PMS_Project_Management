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
                </Switch>
    <Route exact path='/Card' component={Card}/>>
    </Router>
    </>,
    document.getElementById("root")
);