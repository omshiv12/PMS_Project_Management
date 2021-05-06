import React from 'react';
import Button from '@material-ui/core/Button';
import {BrowserRouter as Router,Route,Switch, useHistory} from "react-router-dom";

import Table from './IssueTable';



function Author(){
  const history = useHistory();
	return(
    <>
    <Button variant="contained" style={{backgroundColor:"rgb(0, 119, 182)",display:"flex",color:"white",justifyContent:"flex-end",position:"absolute",top:"22%",right:"5%"}} onClick={()=>{window.location.href='/new-issue'}}>New Issue</Button>
		<Table/>
    </>
	);
}
export default Author;
