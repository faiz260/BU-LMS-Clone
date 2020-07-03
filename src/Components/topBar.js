import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';    
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
  },
  title: {
  },
  bar: {
    backgroundColor: '#333'
  }
}));

const theme = createMuiTheme({
    palette: {
      primary: {
        // Purple and green play nicely together.
        main: "#34495e",
      },
      secondary: {
        // This is green.A700 as hex.
        main: '#11cb5f',
      },
    },
  });


export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root} >
      <ThemeProvider theme={theme}>     
        <AppBar position="static" className="bar" color="primary">
            <Toolbar>
            <Typography variant="h4" className={classes.title} >
                Bahria University
            </Typography>
            </Toolbar>
        </AppBar>
    </ThemeProvider>  
    </div>
  );
}
