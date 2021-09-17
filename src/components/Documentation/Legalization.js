import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import AppointmentFormLink from '../Appointment';
import Typography from '@material-ui/core/Typography';
import { legalization } from "../../data";

const useStyles = makeStyles({
    easyLegalization: {
        variant: "body2",
        fontStyle: 'italic'
    },
    list: {
        marginLeft: '7%'
    },
});

const Legalization = () => {
    const classes = useStyles();
    return (
        <>
            <h3> Step 2 - Legalization </h3>
            <h4>Fee: {legalization.fee} </h4>
            <AppointmentFormLink />
            <Divider />
            <Typography>{legalization.desc} </Typography>
            <Typography className={classes.easyLegalization} >{legalization.easy}</Typography>

            <ul>
            <Typography><strong>1. For Students</strong> </Typography>
                {Object.entries(legalization.docs.student).map(([key, value]) => <li className={classes.list}> {value}</li>)}
            </ul>
            <ul>
            <Typography><strong>2. For Spouse</strong> </Typography>
                {Object.entries(legalization.docs.spouse).map(([key, value]) => <li className={classes.list}> {value}</li>)}
            </ul>

            <ul>
            <Typography><strong>3. Spouse Who will study or need recognition of docs</strong> </Typography>
                {Object.entries(legalization.docs.spouseWhoStudy).map(([key, value]) => <Typography> {value}</Typography>)}
            </ul>
        </>
    );
}

export default Legalization;
