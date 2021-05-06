import { Grid, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./IssueNav.css";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  

  const List = [
    {
      title: "Issues :",
      url: "/issues",
    },
    {
      title:"Open",
      url:'/'
    },
    {
      title:"Closed",
      url:'/'
    }
  ];

  const menuList = List.map(({ url, title }, index) => {
    return (
      <li key={index}>
        <NavLink exact to={url} activeClassName="active" style={{color:"black"}}>
          {title}
        </NavLink>
      </li>
    );
  });

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <Grid xs={10} style={{align:"center",margin:"auto",marginTop:"10%",justifyContent:"center"}}>
    <nav style={{marginTop:0,backgroundColor:"rgb(146, 175, 215)"}}>
      <div className="logo">
        <Typography variant='h5' style={{color:"white"}}>Issues</Typography>
      </div>
      <div className="menu-icon" onClick={handleClick}>
        <i className={clicked ? "fas fa-times" : "fas fa-bars"} style={{color:"white"}} ></i>
      </div>
      <ul className={clicked ? "menu-list" : "menu-list close"} >{menuList}</ul>
    </nav>
    </Grid>
  );
};

export default Navbar;