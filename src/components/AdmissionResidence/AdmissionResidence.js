import React from "react";
import Grid from "@material-ui/core/Grid";
import Divider from '@material-ui/core/Divider';
import ResidencePermit from "./ResidencePermit";
import VisaD from "../Arrival/VisaD";
import BookFlight from '../Arrival/BookFlight';

const AdmissionResidence = () => {
    return (
        <Grid container spacing={10}>
            <Grid item xs={12} sm={12} md={6} lg={6}>
            <ResidencePermit />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
                <VisaD />
                <Divider />
                <BookFlight />
            </Grid>
        </Grid>
    );
}

export default AdmissionResidence;



