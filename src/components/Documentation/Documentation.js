import React from "react";
import Grid from "@material-ui/core/Grid";
import Verification from "./Verification";
import Legalization from "./Legalization";

const Documentation = () => {
    return (
        <Grid container xs={12} spacing={10}>
            <Grid item xs={12} sm={12} md={6} lg={6}>
                <Verification />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
                <Legalization />
            </Grid>
        </Grid>
    );
}

export default Documentation;



