import React from "react";
import Grid from "@material-ui/core/Grid";
import Divider from '@material-ui/core/Divider';
import Accommodation from './Accommodation';
import ResidencePermit from './ResidencePermit';
import BonusInformation from '../Bonus';


const AdmissionResidence = () => {
    return (
        <Grid container spacing={0}>
            <Grid item xs={12} sm={12} md={6} lg={6}>
                <Accommodation />
                <Divider />
                <BonusInformation />

            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
                <ResidencePermit />
                <Divider />
            </Grid>
        </Grid>
    );
}

export default AdmissionResidence;