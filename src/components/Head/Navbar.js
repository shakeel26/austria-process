import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Link from "@material-ui/core/Link";
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles(theme => ({
  mainContainer: {
    backgroundColor: '#111a20'
  },
  menuItems: {
    alignItems: 'center'  }
}))


const Navbar = () => {
  const classes = useStyles();

  return (

    <AppBar position="static" className={classes.mainContainer}>
      <Toolbar className={classes.menuItems}>

      <MenuItem>
          <Link color="inherit" href="">Home</Link>
        </MenuItem>

        <MenuItem>
          <Link color="inherit" href="#study" >Study Visa</Link>
        </MenuItem>
        <MenuItem>
          <Link color="inherit" href="#spouse" >Shadi Visa</Link>
        </MenuItem>
        <MenuItem>
          <Link color="inherit" href="#job" >Job Scene</Link>
        </MenuItem>
        <MenuItem>
          <Link color="inherit" href="#contact" >Contact</Link>
        </MenuItem>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar;