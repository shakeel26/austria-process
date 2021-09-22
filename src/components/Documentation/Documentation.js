import React from "react";
import Grid from "@material-ui/core/Grid";
import Verification from "./Verification";
import Legalization from "./Legalization";
import Admission from '../AdmissionResidence/Admission';
import Accommodation from "../AdmissionResidence/Accommodation";
import Divider from '@material-ui/core/Divider';
import BonusInformation from '../Bonus';

const Documentation = () => {
    return (
        <Grid container spacing={0}>
            <Grid item xs={12} sm={12} md={6} lg={6}>
                <Verification />
                <Divider />
                <BonusInformation />

            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
                
                <Legalization />
                <Divider />
                <Admission />
                <Divider />
                <Accommodation />
            </Grid>
        </Grid>
    );
}

export default Documentation;



