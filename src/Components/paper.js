import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import ButtonAppBar from './topBar'

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: "Helvetica Neue,Helvetica,Arial,sans-serif",
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
  paper1: {
    color: "white",
    height: 150,
    width: 480,
    backgroundColor: "#005F9C",
    margin: "0 auto",
    marginTop: "5%",
  },
  paper2: {
    height: 150,
    width: 480,
    backgroundColor: "#7A8C74",
    margin: "0 auto",
    marginTop: "5%",
  },
  paper3: {
    height: 150,
    width: 480,
    backgroundColor: "#615C5C",
    margin: "0 auto",
    marginTop: "2%",
  },
  paper4: {
    height: 150,
    width: 480,
    backgroundColor: "#34495E",
    margin: "0 auto",
    marginTop: "2%",
  },
  button: {
    height: 35,
    width: 122,
    borderRadius: 4,
    backgroundColor: "#fff",
    fontSize: 12,
    fontWeight: 400,
  },
  heading: {
    color: "white",
    fontWeight: 400,
    fontSize: 36,
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: "#34495e",
    },
    secondary: {
      // This is green.A700 as hex.
      main: "#11cb5f",
    },
  },
});

export default function Body(props) {
  const classes = useStyles();

  return (
    <div>
      <ButtonAppBar/>
      <div className={classes.root}>
        <Paper elevation={3} className={classes.paper1}>
          <h1 className={classes.heading}>Addmission</h1>
          <Button variant="contained" className={classes.button}>
            Apply Online
          </Button>
        </Paper>
        <Paper elevation={3} className={classes.paper2}>
          <h1 className={classes.heading}>Student</h1>
          <Button variant="contained" className={classes.button} onClick={props.handler} >
            Sign In
          </Button>
        </Paper>
      </div>
      <div className={classes.root}>
        <Paper elevation={3} className={classes.paper3}>
          <h1 className={classes.heading}>Faculty Member</h1>
          <Button variant="contained" className={classes.button}>
            Sign In 
          </Button>
        </Paper>
        <Paper elevation={3} className={classes.paper4}>
          <h1 className={classes.heading}>Addministration Staff</h1>
          <Button variant="contained" className={classes.button}>
            Sign In
          </Button>
        </Paper>
      </div>
    </div>
  );
}
