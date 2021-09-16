import React from "react";
import Divider from '@material-ui/core/Divider';
import Grid from "@material-ui/core/Grid";
import Admission from "./Admission";
import ResidencePermit from "./ResidencePermit";
import Accommodation from "./Accommodation";

const AdmissionResidence = () => {
    return (
        <Grid container xs={12} spacing={10}>
            <Grid item xs={12} sm={12} md={6} lg={6}>
                <Admission />
                <Divider />
                <Accommodation />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
                <ResidencePermit />
            </Grid>
        </Grid>
    );
}

export default AdmissionResidence;



