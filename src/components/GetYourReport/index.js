import React, { Component } from "react";
import { withFirebase } from "../Firebase";

import "bootstrap/dist/css/bootstrap.min.css";
import getyourreport1 from "../Files/getyourreport1.png";
import getyourreport2 from "../Files/getyourreport2.png";
import "./getyourreport.css";
import Table from "react-bootstrap/Table";
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
import MaterialButtonGroup from "@mui/material/ButtonGroup";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import Footer from "../Footer/Footer";

class GetYourReport extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fileName: "",
      fileContent: "",
      list: [],
      dict: [],
      genoTypes: [],
      commonGenoTypes: [],
      genotypeSnps: [],
      genotypeDescription: [],
      genotypeCitations: [],
      Alleles: [],
      visible: true,
    };
  }
  handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = () => {
      this.setState({ fileName: file.name, fileContent: reader.result });
      this.state.list = this.state.fileContent
        .toString()
        .replace(/\n/g, " ")
        .replace(/^.*#.*$/gm, "")
        .split(" ");
      this.state.list.map((rnaMap) =>
        this.state.dict.push({
          key: rnaMap.split(/\s+/).slice(0, 1),
          value:
            "(" +
            rnaMap.split(/\s+/).slice(3, 4) +
            ", " +
            rnaMap.split(/\s+/).slice(4, 5) +
            ")",
        })
      );
      this.findGenoTypeDescription();
      this.forceUpdate();
    };
    reader.onerror = () => {
      console.log("file error", reader.error);
    };
  };
  componentDidMount() {
    this.setState({ loading: true });
    this.props.firebase.snps().on("value", (snapshot) => {
      this.setState({
        genoTypes: snapshot.val(),
        loading: false,
      });
    });
  }
  findGenoTypeDescription() {
    this.state.dict.map((dictMap) =>
      this.state.genoTypes.map((genoTypeMap) => {
        if (
          String(dictMap.key[0]).toLowerCase() ==
            String(genoTypeMap.SNP).toLowerCase() &&
          dictMap.value == genoTypeMap.Alleles
        ) {
          this.state.genotypeDescription.push(genoTypeMap.GenotypeDescription);
          this.state.genotypeCitations.push(
            genoTypeMap.Citation1 +
              genoTypeMap.Citation2 +
              genoTypeMap.Citation3 +
              genoTypeMap.Citation4 +
              genoTypeMap.Citation5
          );
          this.state.genotypeSnps.push(dictMap.key);
          this.state.Alleles.push(genoTypeMap.Alleles);
        }
      })
    );
    this.state.visible = false;
  }
  render() {
    return (
      <>
        <div className="get-your-report-main-container">
          {this.state.visible && (
            <div className="card mb-3" sx={{ width: "100%" }}>
              <div className="row no-gutters" sx={{ width: "100%" }}>
                <div class="pic1getYourReport" sx={{ width: "100%" }}>
                  <img width="80%" src={getyourreport1} alt="reportImg1"></img>
                  <div class="pic2getYourReport" sx={{ width: "100%" }}>
                    <img
                      width="80%"
                      src={getyourreport2}
                      alt="reportImg1"
                    ></img>
                  </div>
                </div>
                <div>
                  <div className="card-body">
                    <h2 className="card-title getYourreportTextHeader">
                      Get your DNA report
                    </h2>
                    <h3 className="card-text getYourreportTextPara">
                      1. Drop or select your DNA data file from your device
                    </h3>
                    <h5 className="card-text getYourreportTextPara2">
                      Please make sure your file is compatible with our
                      conditions to read your data.
                    </h5>
                    <div className="getYourreportUpload">
                      <input
                        className="form-control"
                        type="file"
                        onChange={this.handleFileChange}
                      ></input>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/**Report*/
          /* <MaterialContainer maxWidth="md" component="main">
            <Box
              sx={{
                width: "100%",
                padding: "20px",
              }}
            >
              <Typography variant="h1" style={{ color: "#032E54" }}>
                Cognitive Report
              </Typography>
            </Box>
            <Grid container spacing={5} alignItems="flex-end">
              {this.state.genotypeDescription.map((item, index) => (
                // Enterprise card is full width at sm breakpoint
                <Grid item xs={12} sm={6} md={4}>
                  <MaterialCard
                    sx={{
                      minHeight: "500px",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <CardHeader
                      title={String(
                        this.state.genotypeSnps[index]
                      ).toUpperCase()}
                      titleTypographyProps={{ align: "left" }}
                      sx={{
                        backgroundColor: (theme) =>
                          theme.palette.mode === "light"
                            ? theme.palette.grey[200]
                            : theme.palette.grey[700],
                      }}
                      action={
                        <Stack direction="row" spacing={2}>
                          <Avatar style={{ backgroundColor: "#08C5B6" }}>
                            {this.state.Alleles[index]
                              .replace(/[^a-z]/gi, "")
                              .slice(0, 1)}
                          </Avatar>
                          <Avatar style={{ backgroundColor: "#545454" }}>
                            {this.state.Alleles[index]
                              .replace(/[^a-z]/gi, "")
                              .slice(1, 2)}
                          </Avatar>
                        </Stack>
                      }
                    />
                    <CardContent>
                      <ul>{item}</ul>
                      <Tooltip title={this.state.genotypeCitations[index]}>
                        <IconButton>
                          <FormatQuoteIcon />
                        </IconButton>
                      </Tooltip>
                    </CardContent>
                  </MaterialCard>
                </Grid>
              ))}
            </Grid>
                    </MaterialContainer> */}
        </div>
        <Footer />
      </>
    );
  }
}

export default withFirebase(GetYourReport);