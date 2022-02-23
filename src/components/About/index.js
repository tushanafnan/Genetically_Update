import React from "react";
import {
  Carousel,
  Button,
  ButtonGroup,
  Card,
  CardGroup,
  Form,
  Container,
  View,
  ImageBackground,
} from "react-bootstrap";
import logo from "../Files/landing.png";
import uploadLogo from "../Files/upload.png";
import report from "../Files/report.png";
import choosePlan from "../Files/choosePlan.png";
import line from "../Files/line.png";
import line1 from "../Files/line1.png";
import group from "../Files/group.png";
import previewData from "../Files/previewData.png";
import line3 from "../Files/line3.png";
import advanceReport from "../Files/advanceReport.png";
import blog from "../Files/blog.png";
import overview from "../Files/overview.png";
import overview2 from "../Files/overview2.png";
import overview3 from "../Files/overview3.png";
import about1 from "../Files/about1.png";
import about2 from "../Files/about2.png";
import about3 from "../Files/about3.jpg";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import MaterialCard from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import StarIcon from "@mui/icons-material/StarBorder";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import GlobalStyles from "@mui/material/GlobalStyles";
import MaterialContainer from "@mui/material/Container";
import MaterialButton from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import "./about.css";
import * as ROUTES from "../../constants/routes";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import footerLogo from "../Files/footer1.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import Footer from "../Footer/Footer";

const About = () => (
  <div>
    <div className="card mb-3" style={{ width: "100%" }}>
      <div className="row no-gutters">
        <div class="pic1">
          <img src={about1}></img>
          <div class="pic2">
            <img src={about2}></img>
          </div>
        </div>
        <div className="col-md-4 writing float-right ">
          <div className="card-body">
            <h3 className="card-title">About Genetically</h3>
            <p className="card-text">
              Cursus in hac habitasse platea dictumst quisque sagittis purus.
              Tortor consequat id porta nibh venenatis cras sed felis eget. Dis
              parturient montes nascetur ridiculus. Cursus in hac habitasse
              platea dictumst quisque sagittis purus. Tortor consequat id porta
              nibh venenatis cras sed felis eget. Dis parturient montes nascetur
              ridiculus. Cursus in hac habitasse platea dictumst quisque
              sagittis purus. Tortor consequat id porta nibh venenatis cras sed
              felis eget. Dis parturient montes nascetur ridiculus. Cursus in
              hac habitasse platea dictumst quisque sagittis purus. Tortor
              consequat id porta nibh venenatis cras sed felis eget. Dis
              parturient montes nascetur ridiculus.Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
        </div>
      </div>
    </div>
    {/**Blog*/}
    <MaterialCard sx={{ padding: 1 }}>
      <Box sx={{ position: "relative" }}>
        <CardMedia component="img" image={blog} />
        <Box
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "100%",
            padding: "50px",
            color: "#FFFFFF",
          }}
        >
          <Typography variant="h2">Keep posted with our blog!</Typography>
          <Typography variant="body2">
            Quam elementum pulvinar etiam non quam lacus suspendisse. Duis at
            tellus at urna condimentum mattis pellentesque. Pharetra et ultrices
            neque ornare aenean euismod.
          </Typography>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1.5, width: "35ch" },
            }}
            noValidate
            autoComplete="off"
            color="#FFFFFF"
          >
            <TextField
              id="email"
              label="Type your email"
              color="primary"
              focused
            />
            <MaterialButton
              id="subscribeButton"
              style={{ backgroundColor: "#036AC3", color: "#FFFFFF" }}
            >
              Subscribe
            </MaterialButton>
          </Box>
        </Box>
      </Box>
    </MaterialCard>

    <Footer />
  </div>
);

export default About;
