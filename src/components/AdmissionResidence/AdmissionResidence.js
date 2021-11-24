import React from "react";
import Grid from "@material-ui/core/Grid";
import Divider from '@material-ui/core/Divider';
import VisaD from "../Arrival/VisaD";
import BookFlight from '../Arrival/BookFlight';
import BonusInformation from '../Bonus';
import ThankMe from '../ThankMe';

const AdmissionResidence = () => {
    return (
        <Grid container spacing={0}>
            <Grid item xs={12} sm={12} md={6} lg={6}>
                <VisaD />
                <Divider />                
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
                <BookFlight />
                <Divider />
                <BonusInformation />
                <Divider />
                <ThankMe />
            </Grid>

        </Grid>
    );
}

export default AdmissionResidence;