import React from "react";
import Grid from "@material-ui/core/Grid";
import Legalization from "./Legalization";
import Admission from '../AdmissionResidence/Admission';
import Divider from '@material-ui/core/Divider';
import Accommodation from '../Accommodation';
import ResidencePermit from '../AdmissionResidence/ResidencePermit';

const Documentation = () => {
    return (
        <Grid container spacing={0}>

            <Grid item xs={12} sm={12} md={6} lg={6}>
                <Legalization />
                <Divider />
            </Grid>

            <Grid item xs={12} sm={12} md={6} lg={6}>
                <Admission />
                <Divider />
                <Accommodation />
                <Divider />
                <ResidencePermit />
            </Grid>
        </Grid>
    );
}

export default Documentation;
