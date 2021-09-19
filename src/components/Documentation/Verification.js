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
    const [modelBox, setmodelBox] = useState('');

    const makeBoxFunction = spouse => {
        setmodelBox(
            <>
                <Typography>
                    {spouse === 'spouse' ? Object.entries(verification.docs.spouse).map(([key, value]) => <li key={key} className={classes.list}> {value}</li>) : Object.entries(verification.docs.spouseWhoStudy).map(([key, value]) => <li key={key} className={classes.list}> {value}</li>)}
                </Typography>
            </>
        )
    }

    return (
        <>
            <h3> Step 1 - Verification </h3>

            <h4>Fee: {verification.fee} </h4>
            <h6>Timeline: 2 - 4 months - Wait for embassy email after submission of docs</h6>

            <AppointmentFormLink />
            <Divider />

            <Typography>{verification.desc} </Typography>

            <ul>
                <Typography><strong>1. For Students</strong> </Typography>
                {Object.entries(verification.docs.student).map(([key, value]) => <li key={key} className={classes.list}> {value}</li>)}
            </ul>
            <Divider />


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


            <Accordion>
                <AccordionSummary
                    onClick={() => makeBoxFunction('spouseWhoStudy')}
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography ><strong>3. Spouse Who will study or need recognition of docs</strong></Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        {modelBox}
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Divider />
            <h4>Positive Result</h4>
            <Typography>{verification.resultPositive}</Typography>

            <h4>Negative Result</h4>
            <Typography>{verification.resultNegative}</Typography>

        </>
    );
}
export default Verification;