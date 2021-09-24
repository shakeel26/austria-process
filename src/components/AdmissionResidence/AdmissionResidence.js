import React from "react";
import Grid from "@material-ui/core/Grid";
import Divider from '@material-ui/core/Divider';
import ResidencePermit from "./ResidencePermit";
import VisaD from "../Arrival/VisaD";
import BookFlight from '../Arrival/BookFlight';
import Accommodation from './Accommodation';
import BonusInformation from '../Bonus';

const AdmissionResidence = () => {
    return (
        <Grid container spacing={0}>
            <Grid item xs={12} sm={12} md={6} lg={6}>
                <Accommodation />
                <Divider />
                <ResidencePermit />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
                <Divider />
                <VisaD />
                <Divider />
                <BonusInformation />
                <Divider />
            </Grid>

            <Grid item xs={12} sm={12} md={6} lg={6}>
                <BookFlight />
            </Grid>
        </Grid>
    );
}

export default AdmissionResidence;