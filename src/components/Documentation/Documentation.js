import React from "react";
import Grid from "@material-ui/core/Grid";
import Legalization from "./Legalization";
import Verification from "./Verification";
import Admission from '../AdmissionResidence/Admission';
import Divider from '@material-ui/core/Divider';

const Documentation = () => {
    return (
        <Grid container spacing={0}>

            <Grid item xs={12} sm={12} md={6} lg={6}>
                <Verification />
                <Divider />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
                <Legalization />
                <Divider />
                <Admission />
                <Divider />
            </Grid>
        </Grid>
    );
}

export default Documentation;