import React from "react";
import Grid from "@material-ui/core/Grid";
import Divider from '@material-ui/core/Divider';
import VisaD from './VisaD';
import BookFlight from './BookFlight';
import ThankMe from './ThankMe';

const Documentation = () => {
    return (
        <Grid container spacing={0}>
            <Grid item xs={12} sm={12} md={6} lg={6}>
                <VisaD />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
                <BookFlight />
                <Divider />
                <ThankMe />
            </Grid>
        </Grid>
    );
}

export default Documentation;