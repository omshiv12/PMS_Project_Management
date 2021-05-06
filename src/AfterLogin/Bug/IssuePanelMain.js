import React from 'react';
import './Code.css';
import {Layout} from 'antd';
import Author from './IssueList';
import { Grid } from '@material-ui/core';





const {Header,Footer,Content}=Layout;
function Code(){
	return(
		<Grid className="Code">

			<Grid className="container" style={{marginTop:"2%",marginLeft:"2%",marginRight:"2%",marginBottom:"5%"}}>
			 	<Author/>
			</Grid>
		
		</Grid>
	);
}
export default Code;
