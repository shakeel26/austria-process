import * as React from 'react';
import { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import AppointmentFormLink from '../Appointment';
import { verification } from "../../data";


const useStyles = makeStyles({
    modalBox: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "white"
    },
    list: {
        marginLeft: '7%'
    },
    modalHead: {
        textAlign: 'center'
    },
    closeModal: {
    }
});


const Verification = () => {

    const classes = useStyles();

    return (
        <>
            <h3> Frequently Asked Questions </h3>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography ><strong>Question will come</strong></Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Answer will come.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </>
    );
}
export default Verification;