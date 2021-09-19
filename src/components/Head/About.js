import React from 'react';
import { about } from '../../data';
import { makeStyles } from "@material-ui/core/styles";
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonMailto from './ButtonMailto';

const useStyles = makeStyles((theme) => ({
  cover: {
    [theme.breakpoints.up('lg')]: {
      width: '70%'
    },
    [theme.breakpoints.up('xs')]: {
      width: '90%'
    },
    [theme.breakpoints.up('md')]: {
      width: '70%'
    },
  },
  content: {
    flex: '1 0 auto',
    marginTop: '5%',
    marginLeft: '8%',
    [theme.breakpoints.down('md')]: {
      width: '100%'
    },
  },
  buttons: {
    marginLeft: '10%'
  },
  button2: {
    marginLeft: '4%'
  },


}))

const About = () => {
  const classes = useStyles();

  return (
    <section id="about">
      <Grid container spacing={10} className={classes.root}>
        {about.map((about, index) =>
          <Grid item xs={12} md={4} lg={4} key={index}>
            <CardContent className={classes.content}>
              <Typography component="h5" variant="h5">
                {about.title}
              </Typography>
              <Typography>
                {about.desc}
              </Typography>
            </CardContent>

            <div className={classes.buttons}>
              <Button variant="contained">
                <ButtonMailto label="Contact" mailto="mailto:xhakil26@gmail.com" />
              </Button>
            </div>

          </Grid>
        )}


        <Grid item s={12} xs={12} md={8} lg={8}>
          <img
            align='right'
            className={classes.cover}
            src="/austria-process/austria-cover.png"
            alt="Austria Mao"
          />
        </Grid>
      </Grid>
    </section>
  )
}

export default About;