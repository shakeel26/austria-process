import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppointmentFormLink from './Appointment';
import { residence } from "../data";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles({
    list: {
        marginLeft: '7%',
    },
    modalHead: {
        textAlign: 'center'
    },
    modalBox: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "white"
    },
});

const ResidencePermit = () => {
    const classes = useStyles();

    const [modelBox, setmodelBox] = useState('');

    const makeBoxFunction = spouse => {
        setmodelBox(
            <>
                <Typography>
                    {Object.entries(residence.docs.spouse).map(([key, value]) => <li key={key} className={classes.list}> {value}</li>)}
                    <li className={classes.list}> Your can acheive this multiple ways
                        <ol>
                            {Object.entries(residence.docs.spouseBankStatement).map(([key, value]) => <li key={key}> {value}</li>)}
                        </ol>
                    </li>
                </Typography>
            </>

        )
    }

    const visaFormLink = <a href={process.env.PUBLIC_URL + "/Student_visa_ApplicationForm.pdf"} target="_blank" rel="noreferrer">Download Visa Application</a>
    return (
        <>
            <h3> Step 5 - Residence Permit </h3>
            <h4>Fee: {residence.fee} </h4>
            <h6>Timeline: 2 - 4 months - Wait for embassy email.</h6>
            <AppointmentFormLink />
            <Divider />
            <Typography>{residence.desc} </Typography>

            <Accordion>
                <AccordionSummary
                    onClick={() => makeBoxFunction('spouse')}
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography ><strong>1. For Students</strong></Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                    {Object.entries(residence.docs.student).map(([key, value]) => <li className={classes.list} key={key}> {key === '3' ? <>{value} {visaFormLink}</> : value}</li>)}
                <li className={classes.list}> Bank Statement having 1 year of expense
                    <ul>
                        {Object.entries(residence.docs.studentBankStament).map(([key, value]) => <li key={key}> {value}</li>)}
                    </ul>
                </li>                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    onClick={() => makeBoxFunction('spouse')}
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography ><strong>2. For Spouse Visa</strong></Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        {modelBox}
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </>
    );
}

export default ResidencePermit;