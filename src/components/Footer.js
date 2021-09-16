import React from 'react'
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";



const useStyles = makeStyles(theme => ({
    footer: {
        marginTop: '10px',
        backgroundColor: '#111a20'
    }
  }))

const Footer = () => {
    const classes = useStyles();
    return (
        <AppBar position="static" className={classes.footer}>
            <Container maxWidth="md">
                <Toolbar>
                    <Typography variant="body1" color="inherit">
                        Designed and developed by <a href='https://www.linkedin.com/in/shakeel26/'>Shakeel Ahmed</a>. Copyright © Shakeel {new Date().getFullYear()}</Typography>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Footer
