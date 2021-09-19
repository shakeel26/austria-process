import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppointmentFormLink from '../Appointment';
import { visaD } from "../../data";
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';


const useStyles = makeStyles({
    easyLegalization: {
        variant: "body2",
        fontStyle: 'italic'
    }
});

const VisaD = () => {
    const classes = useStyles();

    return (
        <>
            <h3> Step 6 - National Visa D </h3>
            <h4>Fee: {visaD.fee} </h4>

            <h6>Timeline: 1 - 2 weeks - Wait for embassy email.</h6>

            <AppointmentFormLink />
            <Divider />

            <Typography>{visaD.desc} </Typography>
            <Typography className={classes.easyLegalization} >{visaD.easy}</Typography>

            <h4> Required docs are: </h4>
            <ol>
                {Object.entries(visaD.docs).map(([key, value]) => <li key={key}> {value}</li>)}
            </ol>
        </>
    );
}

export default VisaD;
