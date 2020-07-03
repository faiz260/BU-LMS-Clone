import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import AccountCircle from "@material-ui/icons/AccountCircle";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import LockIcon from "@material-ui/icons/Lock";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: "Helvetica Neue,Helvetica,Arial,sans-serif;",
  },
  title: {
    marginBottom: 20,
    fontWeight: 400,
    fontSize: 28,
  },
  bar: {
    backgroundColor: "#7a8c74",
    height: 40,
  },
  heading: {
    color: "#333",
    height: 45,
    border: "1px solid lightGrey",
    marginTop: 0,
    paddingTop: 10,
    backgroundColor: "#fff",
    fontSize: 32,
    fontWeight: "bold",
  },
  paper: {
    marginTop: 60,
    width: 500,
    height: 400,
    margin: "0 auto",
  },
  textfield: {
    width: "88%",
    height: 10,
    margin: "0 auto",
    marginBottom: 40,
    // padding: 1
  },
  subHeadings: {
    fontSize: 15,
    fontWeight: 600,
    float: "left",
    margin: 10,
    marginLeft: 35,
    marginBottom: 7,
    // marginTop: 30
  },
  select: {
      width: 440,
      height: 45,
    },
    button: {
        color: "white",
        marginTop: 20,
        width: "88%",
        borderRadius: 4,
        backgroundColor: "#265a88",
        fontSize: 12,
        fontWeight: 400,
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

export default function StudentSignIn() {
  const classes = useStyles();

  const [age, setAge] = React.useState("");
  const [role, setRole] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const handleRole = (event) => {
    setRole(event.target.value);
  };

  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <AppBar position="static" className={classes.bar} color="primary">
          <Toolbar>
            <Typography variant="h5" className={classes.title}>
              Bahria University
            </Typography>
          </Toolbar>
        </AppBar>
        <div>
          <h1 className={classes.heading}>Student</h1>
        </div>
        <Paper elevation={3} className={classes.paper}>
          <form noValidate autoComplete="off">
            {/* <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
              className={classes.textfield}
            /> */}
            <Typography variant="h1" className={classes.subHeadings}>
              Enrollment:
            </Typography>

            <TextField
              className={classes.textfield}
              id="input-with-icon-textfield"
              variant="outlined"
              //   label="TextField"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
            />

            <Typography variant="h1" className={classes.subHeadings}>
              Password:
            </Typography>
            <TextField
              className={classes.textfield}
              id="input-with-icon-textfield"
              variant="outlined"
              //   label="TextField"
              type="password"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon />
                  </InputAdornment>
                ),
              }}
            />

            <Typography variant="h1" className={classes.subHeadings}>
              Institute:
            </Typography>
            <FormControl variant="outlined" className={classes.formControl}>
              {/* <InputLabel id="demo-simple-select-outlined-label">
                Select
              </InputLabel> */}
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={age}
                onChange={handleChange}
                className={classes.select}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="IPP (Karachi)" >IPP (Karachi)</MenuItem>
                <MenuItem value="Islamabad Campus" >Islamabad Campus</MenuItem>
                <MenuItem value="Karachi Campus" >Karachi Campus</MenuItem>
                <MenuItem value="Lahore Campus">Lahore Campus</MenuItem>
                <MenuItem value="Medical & Dental College Karachi">Medical & Dental College Karachi</MenuItem>
                <MenuItem value="NCMPR">NCMPR</MenuItem>
                <MenuItem value="PNSL">PNSL</MenuItem>
              </Select>
            </FormControl>

            <Typography variant="h1" className={classes.subHeadings}>
              Role:
            </Typography>
            <FormControl variant="outlined" className={classes.formControl}>
              {/* <InputLabel id="demo-simple-select-outlined-label">
                Select
              </InputLabel> */}
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={role}
                onChange={handleRole}
                className={classes.select}
                defaultValue="Student"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="Student" >Student</MenuItem>
                <MenuItem value="Parents" >Parents</MenuItem>
              </Select>
            </FormControl>
            <Button variant="contained" className={classes.button}>
            Sign In
          </Button>
          </form>
        </Paper>
      </ThemeProvider>
    </div>
  );
}
