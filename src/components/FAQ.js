import React from 'react';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { faq } from "../data";


const FAQ = () => {
    return (
        <>
            <h3> Frequently Asked Questions </h3>
             <Grid container spacing={0}>
                <Grid item xs={12} md={12} lg={12}>
                    {faq.map((question, index) => {
                        return <Accordion key= {index}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                key={index}
                            >
                                <Typography ><strong>{index + 1}. {question.question}</strong></Typography>
                            </AccordionSummary>
                            <Divider />
                            <AccordionDetails>
                                <Typography>
                                    {question.answer}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    })}
                </Grid>
            </Grid> 
        </>
    );
}
export default FAQ;