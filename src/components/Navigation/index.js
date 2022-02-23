import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React from "react";
import * as ROUTES from "../../constants/routes";
import logo from "../Files/logo.png";
import "./nav.css";
import {Link} from 'react-router-dom';
import UserButton from "./UserButton";



const Navigation = () => (
  <React.Fragment>
    <GlobalStyles
      styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
    />
    <CssBaseline />
    <AppBar
      style={{ background: "#032e54" }}
      position="sticky"
      elevation={0}
      sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
    >
      <Toolbar sx={{ flexWrap: "wrap" }}>
        <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
          <img noWrap sx={{ flexGrow: 1 }} src={logo} alt="logo"></img>
        </Typography>
        <nav >
          <Link
            style={{ color: "#FFFFFF"  }}
            
            to="/contact"
            sx={{ my: 1, mx: 1.5 }}
          >
           <Link to="/home"> Home </Link>
          </Link>
          <Link
            variant="button"
            style={{ color: "#FFFFFF" }}
            to={ROUTES.Overview}
            sx={{ my: 1, mx: 1.5 }}
          >
            Overview
          </Link>
          <Link
            variant="button"
            style={{ color: "#FFFFFF" }}
            to={ROUTES.About}
            sx={{ my: 1, mx: 1.5 }}
          >
            About
          </Link>
         
          <Link
            variant="button"
            style={{ color: "#FFFFFF" }}
            to={ROUTES.Blog}
            sx={{ my: 1, mx: 1.5 }}
          >
            Blog
          </Link>
        </nav>
        <Button 
          variant="outlined"
          style={{ background: "#08C5B6", color: "#FFFFFF" }}
          sx={{ my: 1, mx: 1.5 }}
        >
          
           <Link to={ROUTES.GetYourReport}> Get your report </Link>
        </Button>
        <UserButton></UserButton>
      </Toolbar>
    </AppBar>
  </React.Fragment>
);

export default Navigation;
