import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppointmentFormLink from '../Appointment';
import { residence } from "../../data";
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import Pageview from '@material-ui/icons/Pageview';


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
    const [open, setOpen] = useState(false);
    const handleOpen = spouse => {
        setOpen(true);
        makeBoxFunction(spouse);
    };

    const makeBoxFunction = spouse => {
        setmodelBox(
            <Box className={classes.modalBox}>
                <Typography variant="h5" className={classes.modalHead} id="parent-modal-title">Applicant docs</Typography>
                <Divider />
                <Typography id="parent-modal-description">
                    {Object.entries(residence.docs.spouse).map(([key, value]) => <li key={key} className={classes.list}> {value}</li>)}
                    <li className={classes.list}> Your can acheive this multiple ways
                        <ol>
                            {Object.entries(residence.docs.spouseBankStatement).map(([key, value]) => <li key={key}> {value}</li>)}
                        </ol>
                    </li>
                </Typography>
                <Button justify="space-between" className={classes.closeModal} variant="contained" onClick={handleClose}>Close</Button>
            </Box>
        )
    }
    const handleClose = () => {
        setOpen(false);
    };


    const visaFormLink = <a href={process.env.PUBLIC_URL + "/Student_visa_ApplicationForm.pdf"} target="_blank" rel="noreferrer">Download Visa Application</a>
    return (
        <>
            <h3> Step 5 - Residence Permit </h3>
            <h4>Fee: {residence.fee} </h4>
            <AppointmentFormLink />
            <Divider />
            <Typography>{residence.desc} </Typography>

            <ul>
            <Typography><strong>1. For Students</strong> </Typography>

                {Object.entries(residence.docs.student).map(([key, value]) => <li className={classes.list} key={key}> {key === '3' ? <>{value} {visaFormLink}</> : value}</li>)}
                <li className={classes.list}> Bank Statement having 1 year of expense
                    <ul>
                        {Object.entries(residence.docs.studentBankStament).map(([key, value]) => <li key={key}> {value}</li>)}
                    </ul>
                </li>
            </ul>
            <Divider />



            <ul>
                <Typography>  <strong>2. Spouse Visa</strong> <Button variant="contained" onClick={() => handleOpen('spouse')}>View List <Pageview /></Button></Typography>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="parent-modal-title"
                    aria-describedby="parent-modal-description"
                >
                    {modelBox}

                
                </Modal>
            </ul>


        </>
    );
}

export default ResidencePermit;
