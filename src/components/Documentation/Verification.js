import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import AppointmentFormLink from '../Appointment';
import { verification } from "../../data";
import Pageview from '@material-ui/icons/Pageview';


const useStyles = makeStyles({
    root: {
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
    const [open, setOpen] = useState(false);
    const handleOpen = spouse => {
        setOpen(true);
        makeBoxFunction(spouse);
    };

    const makeBoxFunction = spouse => {
        setmodelBox(
            <Box className={classes.root}>
                <Typography variant="h5" className={classes.modalHead} id="parent-modal-title">Begum k kagaz</Typography>
                <Divider />
                <Typography id="parent-modal-description">
                    {spouse === 'spouse' ? Object.entries(verification.docs.spouse).map(([key, value]) => <li className={classes.list}> {value}</li>) : Object.entries(verification.docs.spouseWhoStudy).map(([key, value]) => <li className={classes.list}> {value}</li>)}
                </Typography>
                <Button justify="space-between" className={classes.closeModal} variant="contained" onClick={handleClose}>Close</Button>
            </Box>
        )
    }
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <h3> Step 1 - Verification </h3>

            <h4>Fee: {verification.fee} </h4>
            <AppointmentFormLink />
            <Divider />

            <Typography>{verification.desc} </Typography>

            <h5>Note</h5>
            <Typography>{verification.note}</Typography>

            <ul>
                <Typography><strong>1. For Students</strong> </Typography>
                {Object.entries(verification.docs.student).map(([key, value]) => <li className={classes.list}> {value}</li>)}
            </ul>
            <Divider />

            <ul>
                <Typography>  <strong>2. For Spouse Visa</strong> <Button variant="contained" onClick={() => handleOpen('spouse')}>View List <Pageview /></Button></Typography>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="parent-modal-title"
                    aria-describedby="parent-modal-description"
                >
                    {modelBox}
                </Modal>
            </ul>

            <ul>
                <Typography>  <strong>3. Spouse Who will study or need recognition of docs</strong> <Button variant="contained" onClick={() => handleOpen('spouseWhoStudy')}>View List <Pageview /></Button></Typography>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="parent-modal-title"
                    aria-describedby="parent-modal-description"
                >

                    {modelBox}
                </Modal>

            </ul>

            <Divider />
            <h4>Positive Result</h4>
            <Typography>{verification.resultPositive}</Typography>

            <h4>Negative Result</h4>
            <Typography>{verification.resultNegative}</Typography>

        </>
    );
}
export default Verification;