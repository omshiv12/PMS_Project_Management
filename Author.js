import React from 'react';
import {Layout} from 'antd';
const {Header,Footer,Content}=Layout;
function Author(){
	return(
		<div>
		<Layout>
		<Header style={{backgroundColor:"grey",height:"100px"}}>
		<h1>Research and Add animator animated HTML
		element component
		
		

			 </h1>
		</Header>
		</Layout>
		<Layout>
		<Content>
		<div className="mt">
			 <button className="btn btn-primary" style={{width:"20%",justifyContent:"center",border:"3px solid blue",backgroundColor:"white",margin:"5px",height:"25px",borderRadius:"25px"}}>complexity:high</button>
			 <button className="btn btn-secondary" style={{width:"20%",justifyContent:"center",margin:"10px",border:"3px solid blue",height:"25px",borderRadius:"25px"}}>package:animation</button>
			 <button className="btn btn-secondary" style={{width:"20%",justifyContent:"center",border:"3px solid green",height:"25px",borderRadius:"25px" }}>type:feature</button>
			 <button className="btn btn-primary" style={{width:"20%",justifyContent:"center",border:"3px solid blue",backgroundColor:"white",margin:"5px",height:"25px",borderRadius:"25px"}}>type:research</button>
			 </div>
			 <div>
			 <p>open 2 days ago</p>
			 </div>
		</Content>
		</Layout>
		
		</div>
	);
}
export default Author;
