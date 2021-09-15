import React from "react";
import Grid from "@material-ui/core/Grid";
import VisaD from "./VisaD";
import BookFlight from "./BookFlight";

const Documentation = () => {
    return (
        <Grid container xs={12} spacing={10}>
            <Grid item xs={12} sm={12} md={6} lg={6}>
                <VisaD />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
                <BookFlight />
            </Grid>
        </Grid>
    );
}

export default Documentation;



